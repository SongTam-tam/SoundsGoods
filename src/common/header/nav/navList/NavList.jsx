import React from 'react';
import NavItem from './NavItem';
import './nalist.scss';
const NavList = ({ data, setShow }) => {
    return (
        <ul className="gnb" onMouseEnter={() => setShow(true)}>
            {data.map((item) => (
                <NavItem key={item.id} {...item} />
            ))}
        </ul>
    );
};

export default NavList;
