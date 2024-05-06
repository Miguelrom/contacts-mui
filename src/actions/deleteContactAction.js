import { redirect } from "react-router-dom";

export default async function deleteContactAction({ params }) {
  
  const url = `${import.meta.env.VITE_BACKEND_URL}/contacts/${params.contactId}`;

  const res = await fetch (url, {
    method: 'DELETE',
  });

  if (!res.ok) {
    throw new Error({ message: 'Could not delete contact.' }, { status: 500 });
  }

  return redirect('/contacts');

}