import { useRouteError } from "react-router-dom";

export default function Error() {

  const error = useRouteError();

  console.log('Error:', error)

  return <p>Some error occurred</p>;
}