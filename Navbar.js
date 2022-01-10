import React from 'react';
import { Link } from "react-router-dom";
  
const Navbar = () => {
  return (
    <>
       <Link to='/about' activeClassName="active_class">About</Link><br />
    </>
  );
};
  
export default Navbar;