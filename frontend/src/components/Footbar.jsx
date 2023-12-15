import React from 'react'
import { Footer } from 'flowbite-react';
import { Button } from 'flowbite-react';

const Footbar = () => {
    return (
        <>
            <Footer container className= 'bottom-0 rounded-none' >
                <Footer.Copyright  href="https://midhunmareedu.vercel.app/"  by="Midhun Mareedu™" year={2023} />
                {/* <Footer.LinkGroup>
                    <Footer.Link href="#">Home</Footer.Link>
                    <Footer.Link href="#">Notifications</Footer.Link>
                    <Footer.Link href="#">Mess Time table</Footer.Link>
                    <Footer.Link href="#">Admin login</Footer.Link>
                </Footer.LinkGroup> */}
            </Footer>
        </>
    )
}

export default Footbar