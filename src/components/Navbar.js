import React, { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi';
import {GrClose} from 'react-icons/gr';
import {AiFillGithub, AiFillFacebook, AiFillInstagram} from 'react-icons/ai';

function Navbar() {
    const [isOpen, setActive] = useState(false);

    const handleToggle = () => {
        setActive(!isOpen);
        console.log("click")
    }

    return (
        <section className="navBar">
            <div className="openButton">
                <GiHamburgerMenu className="icon" onClick={handleToggle}/>
                {/* <input type="checkbox" /> */}
            </div>
            <div className={"navContainer " + (isOpen ? "open" : "closed")}>
                <div className="closeButton">
                    <GrClose className="icon" onClick={handleToggle}/>
                </div>
                <div className="links">
                    <ul>
                        <li><a href="#App">Page 1</a></li>
                        <li><a href="#App">Page 2</a></li>
                        <li><a href="#App">Page 3</a></li>
                        <li><a href="#App">Page 4</a></li>
                        <li><a href="#App">Page 5</a></li>
                    </ul>
                </div>
                <div className="footer">
                    <ul>
                        <li><a href="#App"><AiFillFacebook/></a></li>
                        <li><a href="#App"><AiFillInstagram/></a></li>
                        <li><a href="#App"><AiFillGithub/></a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Navbar
