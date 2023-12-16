import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Navbar } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

import { Dropdown } from 'flowbite-react';
import LoadingBar from 'react-top-loading-bar'

const Header = () => {
    const navigate = useNavigate()
    const [progress , setProgress] = useState(100)
    const [current, setCurrent] = useState("Home")

    const [opened , setOpened] = useState(false)
    const handleClick = (link) => {
        navigate(link)
    }

    const links = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "Notifications",
            link: "/notifications",
        },
        {
            name: "Mess Time table",
            link: "/timetable",
        },
        {
            name: "Login",
            link: "/login"
        }
    ]
    return (
        <>
            <LoadingBar color="#1C64F2" shadow progress={progress} onLoaderFinished={() => setProgress(0)} />
            <Navbar className='p-5' rounded menuOpen={opened} >

                <Navbar.Brand href="/">
                    {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">GVMM</span>
                </Navbar.Brand>
                <Navbar.Toggle   />
                <Navbar.Collapse className='mx-5'>
                    {
                        links.map((link) => {
                            return <Navbar.Link active={current == link.name && "true"} onClick={(e) => {
                                e.preventDefault()
                                setCurrent(link.name)
                                handleClick(link.link)
                                setProgress(100)
                                setOpened(false)
                            }} className='rounded-sm cursor-pointer'>
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