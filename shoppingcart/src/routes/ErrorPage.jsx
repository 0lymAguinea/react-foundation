import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <h1>This page doesn&apos;t exist.</h1>
      <Link to="/">Click here to go back to home page</Link>
    </>
  );
}
export default ErrorPage;
