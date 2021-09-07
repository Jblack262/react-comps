import React from 'react'

function Accordion() {
    return (
        <ul className="accordionMenu">
            <li className="item" id="profile">
                <a href="#profile" className="btn">Profile</a>
                <div className="smenu">
                    <a href="#">a</a>
                    <a href="#">b</a>
                    <a href="#">c</a>
                </div>
            </li>
            <li className="item" id='messages'>
                <a href="#messages" className="btn">Messages</a>
                <div className="smenu">
                    <a href="#">a</a>
                    <a href="#">b</a>
                    <a href="#">c</a>
                </div>
            </li>
            <li className="item" id='settings'>
                <a href="#settings" className="btn">Settings</a>
                <div className="smenu">
                    <a href="#">a</a>
                    <a href="#">b</a>
                    <a href="#">c</a>
                </div>
            </li>
        </ul>
    )
}

export default Accordion
