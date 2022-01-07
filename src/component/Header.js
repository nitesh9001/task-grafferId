import React from 'react'
import SearchIcon from '@material-ui/icons/Menu'

function Header(props) {
    return (
        <>
        <div className="main-nav-wrapper">
            <div className= "nav-logo">
                <SearchIcon style={{color:"white",fontSize:"50px",margin:"16px 20px "}}/> <h1 style={{color:"whitesmoke"}}>Star Wars</h1>
            </div>
        </div>
       </>
    )
}

export default Header
