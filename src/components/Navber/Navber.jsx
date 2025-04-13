import React, { useState } from "react";
import Link from "./Link";
import { Menu, X } from "lucide-react";


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

  const links = navegationData.map((route) => (
    <Link route={route}></Link>
  ));
  
  const [open , setOpen] = useState(false);
  
  return (
    <nav className="flex justify-between items-center mx-10 mt-5">
        <span onClick={() => setOpen (!open)} className="flex">

          {
            open ? <X className="md:hidden"></X> : <Menu className="md:hidden"></Menu>
          }

          <ul className={`md:hidden absolute bg-amber-200 text-black duration-1000
            ${open ? 'top-8' : '-top-46'}`}>
            {
              links
            }
          </ul>
  
        <h3 className="ml-4 text-xl">My Navber</h3>
        </span>

      <ul className="md:flex hidden">
        {
          links
        }
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
