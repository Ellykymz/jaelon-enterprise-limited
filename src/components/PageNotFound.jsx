import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <p>Please check the URL or navigate back to the homepage.</p>
      {/* Add a link to the homepage */}
      <NavLink to="/">Go to Homepage</NavLink>
    </div>
  );
};

export default PageNotFound;
