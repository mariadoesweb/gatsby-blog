import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';


const StyledMenuDiv = styled.div`
  background: #f4f4f4;
  padding-top: 10px;
`

const StyledMenuUl = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
`


const Menu = () => (
    <StyledMenuDiv>
      <StyledMenuUl>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
      </StyledMenuUl>
    </StyledMenuDiv>
)


export default Menu;
