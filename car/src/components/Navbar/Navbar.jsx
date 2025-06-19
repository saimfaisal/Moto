import React from 'react';
import { BiSolidSun , BiSolidMoon } from "react-icons/bi";
const Navlink =[
    {
        id : "1",
        name: "HOME",
        link:"/#"
    },
     {
        id : "2",
        name: "ABOUT",
        link:"/#about"
    },
     {
        id : "3",
        name: "CARS",
        link:"/#cars"
    },
     {
        id : "1",
        name: "BOOKING  ",
        link:"/#booking"
    },
]
function Navbar({theme,setTheme}) {
  return (
    <nav className='shadow-md bg-white 
    dark:bg-black dark:text-white duration-500'>
        <div className='container'>
            <div className="flex justify-between items-center">
                <div>
                    <h1 className='text-3xl font-serif font-bold '>MotoBath</h1>
                </div>
                <div className='hidden md:block'>
                    <ul className='flex items-center gap-6'>
                        {
                            Navlink.map((data)=> ( <li className='py-4' key={data.id}><a className='inline-block py-2 hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-500 text-lg font-medium' href={data.link}>{data.name}</a></li>))
                        }
                       
                         
                    </ul>
                </div>
                <div>
                    {
                        theme === "dark"?(<BiSolidSun
                            onClick={()=> setTheme("light")}
                            className='text-2xl'/>):
                            (<BiSolidMoon
                            onClick={()=> setTheme("dark")}
                                 className='text-2xl'/>)
                    }
                   
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar