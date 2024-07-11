import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.png'
import { useState } from 'react';
import { MdClose, MdMenu } from 'react-icons/md';

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const menuOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className='flex p-2 md:py-4 md:px-8 justify-between items-center mx-auto max-h-[80px] md:max-h-[107px]'>
            <div>
                <img className='w-[70%] md:w-full object-cover' src={logo} alt="" />
            </div>

            <div className='gap-4 font-bold text-white hidden md:flex'>
                <NavLink>HOME</NavLink>
                <NavLink>OUR MENU</NavLink>
                <NavLink>CONTACT US</NavLink>
                <NavLink>CONTACT US</NavLink>
            </div>

            <div className='font-bold text-white hidden md:block'>
                <NavLink>LOG IN</NavLink>
            </div>
{/* trogol btn */}
            <div className='md:hidden'>
            <button onClick={menuOpen}>
                            {
                                isOpen ? <MdClose className='text-white text-2xl' /> : <MdMenu className='text-white text-2xl' />
                            }
                        </button>
                        <div className={`z-10 absolute flex flex-col items-center top-16 bg-[#1a103d] bg-opacity-80 h-screen px-8 py-4 w-[70%] transition-all duration-300 ease-in-out text-white font-semibold space-y-4 ${isOpen ? 'right-0' : '-right-56 hidden'}`}>
                <NavLink>HOME</NavLink>
                <NavLink>OUR MENU</NavLink>
                <NavLink>CONTACT US</NavLink>
                <NavLink>CONTACT US</NavLink>
                <button>LOGIN</button>
            </div>
            </div>
        </nav>
    );
};

export default NavBar;