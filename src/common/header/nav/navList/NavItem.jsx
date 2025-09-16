import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavItem = ({ title, path }) => {
    const navigate = useNavigate();

    return (
        <li
            onClick={() => {
                navigate(path);
            }}
        >
            {title}
        </li>
    );
};

export default NavItem;
