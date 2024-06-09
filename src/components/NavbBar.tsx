interface listItem {
  title: string;
  to: string;
}

const ListItem = ({ title, to }: listItem) => {
  //   const [hover, setHover] = useState<boolean>(false);
  return (
    <>
      <div className="flex flex-col items-center group">
        <li className="font-bold hover:bg-white pt-3 pb-0.5 hover:text-blue-500 transition-all relative ">
          <a href={to}>{title}</a>
          <span className="absolute left-0 right-0  bottom-0 h-1 w-1 mx-auto bg-blue-500 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
        </li>
      </div>
    </>
  );
};

function NavbBar() {
  return (
    <div>
      <div className="navbar bg-base-100 px-2 md:px-10 lg:px-40 py-4  shadow-md fixed top-0 right-0 left-0 z-20">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100  w-52"
            >
              <li >
                <a>Home</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>News</a>
              </li>
              <li>
                <a>attendance</a>
              </li>
            </ul>
          </div>
          <a className="text-3xl text-blue-600 font-bold">
            <span className="text-red-800 -mr-1">I</span> LEAD
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex flex-row gap-8 px-1 ">
            <ListItem title="Home" to="" />
            <ListItem title="About" to="" />
            <ListItem title="News" to="" />
            <ListItem title="Attendance" to="" />
            <ListItem title="Contact" to="" />
          </ul>
        </div>
        <div className="navbar-end">
          <a className=" bg-blue-600 hover:bg-gray-50 text-white transition-all px-8 py-1.5  rounded-3xl hover:text-blue-400 hover:border border-blue-500 hover:cursor-pointer ring-offset-1 ring-gray-100 ">
            Join us
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavbBar;
