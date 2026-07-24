import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className="bg-blue-700 text-white px-6 py-4 flex justify-between items-center">

      <h2 className="text-2xl font-bold">
        {props.schoolName}
      </h2>

      <ul className="flex gap-6">
        <li>
          <Link className="hover:text-blue-200" to="/">
            Home
          </Link>
        </li>

        <li>
          <Link className="hover:text-blue-200" to="/about">
            About
          </Link>
        </li>

        <li>
          <Link className="hover:text-blue-200" to="/academics">
            Academics
          </Link>
        </li>

        <li>
          <Link className="hover:text-blue-200" to="/admissions">
            Admissions
          </Link>
        </li>

        <li>
          <Link className="hover:text-blue-200" to="/news">
            News
          </Link>
        </li>

        <li>
          <Link className="hover:text-blue-200" to="/gallery">
            Gallery
          </Link>
        </li>

        <li>
          <Link className="hover:text-blue-200" to="/contact">
            Contact
          </Link>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;