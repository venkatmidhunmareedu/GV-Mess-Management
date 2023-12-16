import React from 'react'
import Header from './Header'
import Footbar from './Footbar'
import LoadingBar from 'react-top-loading-bar'


const Layout = (props) => {
    return (
        <>
            <Header />
            <div>
                {
                    props.children
                }
            </div>
            <Footbar />
        </>
    )
}

export default Layout