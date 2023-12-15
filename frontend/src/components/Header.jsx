import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Navbar } from 'flowbite-react';

import { Dropdown } from 'flowbite-react';
import LoadingBar from 'react-top-loading-bar'

const Header = () => {
    const [current, setCurrent] = useState("Home")

    const links = [
        {
            name: "Home",
            link: " ",
        },
        {
            name: "Notifications",
            link: " ",
        },
        {
            name: "Mess Time table",
            link: " ",
        },
        {
            name: "Login",
            link: " "
        }
    ]
    return (
        <>
            <Navbar className='p-5' rounded  >
                
                <Navbar.Brand href="https://flowbite-react.com">
                    {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">GVMM</span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className='mx-5'>
                    {
                        links.map((link) => {
                            return <Navbar.Link active={current == link.name && "true"} onClick={(e) => setCurrent(link.name)} className='rounded-sm cursor-pointer'>
                                {link.name}
                            </Navbar.Link>
                        })
                    }
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Header