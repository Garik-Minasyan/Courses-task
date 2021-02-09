import React from 'react';
import { FaElementor, FaFileAlt, FaUsers } from 'react-icons/fa'

const NavPanel = () => {
    return (
        <div className="navPanel">
            <FaElementor className="icons a" />
            <FaFileAlt className="icons b" />
            <FaUsers className="icons c" />
        </div>
    )
}

export default NavPanel;