import React from 'react';
import { FaRegCircle, FaPenAlt, FaTimes } from 'react-icons/fa'; 

const Icon = ({ name }) => {
    switch (name) {
        case "circle":
            return <FaRegCircle className="icons circleIcon" />;
            // break;
        case 'cross':
            return <FaTimes className="icons crossIcon" />;
            // break;
        default:
            return <FaPenAlt className="icons penIcon" />;
            // break;
    }
};

export default Icon;
