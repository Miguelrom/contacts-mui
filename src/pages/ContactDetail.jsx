import { useLoaderData, defer } from "react-router-dom";
import ContactItem from "../components/ContactItem";

export default function ContactDetail() {

  const contact = useLoaderData();

  return (
    <ContactItem contact={contact} />
  );
}

ContactDetail.loader = async ({ params }) => {

  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/contacts/${params.contactId}`);

  if (res.ok) {
    const contact = await res.json()
    return defer(contact);
  }
  
  throw new Error('Could not fetch contact');

}