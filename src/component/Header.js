import React from 'react'
import SearchIcon from '@material-ui/icons/Menu'

function Header(props) {
    return (
        <>
        <div className="main-nav-wrapper">
            <div className= "nav-logo">
                <SearchIcon style={{color:"white",fontSize:"50px",margin:"10px 20px "}}/>
            </div>
        </div>
       </>
    )
}

export default Header
