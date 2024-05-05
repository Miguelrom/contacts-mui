import { redirect } from "react-router-dom";

export default async function contactFormAction({ request, params }) {

  const method = request.method;
  const data = await request.formData();

  const contactData = {
    name: data.get('name'),
    lastName: data.get('lastName'),
    email: data.get('email'),
    phoneNumber: data.get('phoneNumber'),
    company: data.get('company'),
  }

  const url = `${import.meta.env.VITE_BACKEND_URL}/contacts${
    method === "PUT" ? `/${params.contactId}` : ""
  }`;

  const response = await fetch(url, {
    method: request.method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contactData),
  });

  if (!response.ok) {
    throw new Error({ message: 'Could not save contact.' }, { status: 500 });
  }

  return redirect('/contacts');

}