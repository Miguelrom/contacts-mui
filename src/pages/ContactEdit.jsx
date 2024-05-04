import { useRouteLoaderData } from "react-router-dom";
import ContactForm from "../components/ContactForm";

export default function ContactEdit() {

  const contact = useRouteLoaderData('contact-detail');

  return (
    <ContactForm title="Edit contact" method="PUT" contact={contact} />
  );
}