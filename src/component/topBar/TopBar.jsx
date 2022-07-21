import React from 'react';
import './topbar.css';
import { Link } from 'react-router-dom';

export default function topBar() {
    const user = false;
    return (

        <
        div className = "top" >
        <
        div className = "topLeft" >
        <
        i className = "topicon fa-brands fa-facebook-square" > < /i> <
        i className = "topicon  fa-brands fa-twitter-square" > < /i> <
        i className = "topicon fa-brands fa-instagram-square" > < /i> <
        i className = "topicon fa-brands fa-snapchat-square" > < /i>			 <
        /div> <
        div className = "topCenter" >
        <
        ul className = "topList" >

        <
        li className = 'topListItem' >
        <
        Link className = 'link'
        to = "/" > HOME < /Link> <
        /li> <
        li className = 'topListItem' >
        <
        Link className = 'link'
        to = "/" > ABOUT < /Link></li >
        <
        li className = 'topListItem' >
        <
        Link className = 'link'
        to = "/" > CONTACT < /Link></li >
        <
        li className = 'topListItem' >
        <
        Link className = 'link'
        to = "/" > WRITE < /Link> <
        /li> <
        li className = 'topListItem' > { user && "LOGOUT" } <
        /li>


        <
        /ul> <
        /div> <
        div className = "topRight" > {
            user ? ( <
                img className = "topimg"
                src = "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 "
                alt = " " > < /img>

            ) : ( <
                ul className = 'topList' >
                <
                li className = 'topListItem' >
                <
                Link className = 'link'
                to = "/login" > LOGIN < /Link> <
                /li> <
                li className = 'topListItem' >
                <
                Link className = 'link'
                to = "/register" > REGISTER < /Link> <
                /li> <
                /ul>
            )
        }

        <
        i className = "topsearchicon fa-solid fa-magnifying-glass" > < /i>


        <
        /div>     <
        /div>  

    )
}