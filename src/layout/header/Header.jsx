import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    li {
      margin-right: 15px;
      a {
        text-decoration: none;
        &.active {
          color: red;
          text-decoration: underline;
        }
      }
    }
  }
`

const Header = () => {
  return (
    <Nav>
      <ul>
        <li>
          <NavLink activeClassName="active" to="/home/posts">Home</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/about">About</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/contact">Contact</NavLink>
        </li>
      </ul>
    </Nav>
  )
}

export default Header
