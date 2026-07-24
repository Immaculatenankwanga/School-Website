function Navbar(props) {
  return (
    <nav className="bg-blue-700 text-white px-6 py-4 flex justify-between items-center">

      <h2 className="text-2xl font-bold">
        {props.schoolName}
      </h2>

      <ul className="flex gap-6">
        <li className="hover:text-blue-200 cursor-pointer">Home</li>
        <li className="hover:text-blue-200 cursor-pointer">About</li>
        <li className="hover:text-blue-200 cursor-pointer">Academics</li>
        <li className="hover:text-blue-200 cursor-pointer">Admissions</li>
        <li className="hover:text-blue-200 cursor-pointer">News</li>
        <li className="hover:text-blue-200 cursor-pointer">Gallery</li>
        <li className="hover:text-blue-200 cursor-pointer">Contact</li>
      </ul>

    </nav>
  );
}

export default Navbar;