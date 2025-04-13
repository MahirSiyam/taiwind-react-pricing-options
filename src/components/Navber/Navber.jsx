import React from "react";
import Link from "./Link";
import { Menu } from "lucide-react";


const navegationData = [
  {
    id: 1,
    name: "Home",
    path: "/home",
  },
  {
    id: 2,
    name: "Books",
    path: "/books",
  },
  {
    id: 3,
    name: "Authors",
    path: "/authors",
  },
  {
    id: 4,
    name: "Categories",
    path: "/categories",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];

const Navber = () => {
  return (
    <nav className="flex justify-between mx-10">
        <Menu></Menu>
      <h3>My Navber</h3>

      <ul className="flex">
        {navegationData.map((route) => (
          <Link route={route}></Link>
        ))}
      </ul>

      {/* <ul className='flex'>
                {
                    navegationData.map(route => 
                    <li className='mr-10'>
                        <a href={route.path}>
                            {route.name}
                        </a>
                    </li>
                )}
            </ul> */}

      {/* <ul className='flex'>
                <li className='mr-10'><a href="#">Home</a></li>
                <li className='mr-10'><a href="#">Blog</a></li>
                <li className='mr-10'><a href="#">About</a></li>
                <li className='mr-10'><a href="#">Link</a></li>
            </ul> */}

      <button>Sign In</button>
    </nav>
  );
};

export default Navber;
