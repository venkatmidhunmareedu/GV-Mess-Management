import React from 'react'
import Header from './Header'
import Footbar from './Footbar'
import LoadingBar from 'react-top-loading-bar'


const Layout = (props) => {
    return (
        <>
            <LoadingBar color="#1C64F2" shadow progress={100} onLoaderFinished={() => setProgress(0)} />
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