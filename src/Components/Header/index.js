import React, { useState, useEffect, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import "./navbar.css";

function Header() {
  const [openDrawer, toggleDrawer] = useState(false);
  const drawerRef = useRef(null);

  useEffect(() => {
    const closeDrawer = (event) => {
      if (drawerRef.current && drawerRef.current.contains(event.target)) {
        return;
      }

      toggleDrawer(false);
    };

    document.addEventListener("mousedown", closeDrawer);
    return () => document.removeEventListener("mousedown", closeDrawer);
  }, []);

  return (
    <Styles.Wrapper>
      <CSSReset />
      <Navbar.Wrapper>
        <Link to="/">
          <Navbar.Logo>ZODAILY</Navbar.Logo>
        </Link>

        <HamburgerButton.Wrapper onClick={() => toggleDrawer(true)}>
          <HamburgerButton.Lines />
        </HamburgerButton.Wrapper>

        <Navbar.Items ref={drawerRef} openDrawer={openDrawer}>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <Navbar.Item>ABOUT</Navbar.Item>
          </Link>
          <hr></hr>
          <Link to="/team" style={{ textDecoration: "none" }}>
            <Navbar.Item>MEET THE TEAM</Navbar.Item>
          </Link>
        </Navbar.Items>
      </Navbar.Wrapper>
    </Styles.Wrapper>
  );
}

const Styles = {
  Wrapper: styled.main`
    display: flex;
    background-color: #eeeeee;
<<<<<<< HEAD

    height: 6vh;`
=======
    height: 6vh;
  `,
>>>>>>> development
};

const Navbar = {
  Wrapper: styled.nav`
    flex: 1;

    align-self: flex-start;

    padding: 1rem 3rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #f0f5f9;

    // 40em == 640px
    @media only screen and (max-width: 1024px) {
      position: fixed;
      width: 100vw;
    }
  `,
  Logo: styled.a`
    margin: auto;
    position: relative;
    padding: 0.5rem 1rem;
    background-color: #456990;
    font-family: "Sigmar One", cursive;
    background-image: linear-gradient(45deg, #a677a6, #e2cad1);
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    text-decoration: none;
    font-size: 4rem;
    font-weight: bold;
  `,

  Items: styled.ul`
    display: flex;
    list-style: none;
    padding-top: 1rem;
    text-align: center;

    @media only screen and (max-width: 1024px) {
      position: fixed;
      right: 0;
      top: 8vh;
      width: 100%;
      height: 15%;
      background-color: #456990;
      background-image: linear-gradient(45deg, #a677a6, #e2cad1);

      flex-direction: column;

      background-color: white;
      padding: 1rem 2rem;

      transition: 0.2s ease-out;

      transform: ${({ openDrawer }) =>
        openDrawer ? `translateX(0)` : `translateX(100%)`};
    }
  `,
  Item: styled.li`
    padding: 0 3rem;
    cursor: pointer;
    font-size: 2.5rem;
    color: #3d3d3d;
    font-family: "Sigmar One", cursive;
    font-weight: bold;

    @media only screen and (max-width: 1024px) {
      padding: 2rem 0;
      font-size: 2rem;
    }

    @media only screen and (max-width: 40em) {
      padding: 1.5rem 0;
      font-size: 1.75rem;
    }
  `,
};

const HamburgerButton = {
  Wrapper: styled.button`
    height: 3rem;
    width: 3rem;
    position: relative;
    font-size: 12px;

    display: none;

    @media only screen and (max-width: 1024px) {
      display: block;
    }

    border: none;
    background: transparent;
    outline: none;

    cursor: pointer;

    &:after {
      content: "";
      display: block;
      position: absolute;
      height: 150%;
      width: 150%;
      top: -25%;
      left: -25%;
    }
  `,
  Lines: styled.div`
    top: 50%;
    margin-top: -0.125em;

    &,
    &:after,
    &:before {
      /* Create lines */
      height: 5px;
      pointer-events: none;
      display: block;
      content: "";
      width: 100%;
      background-color: #456990;
      position: absolute;
    }

    &:after {
      /* Move bottom line below center line */
      top: -0.8rem;
    }

    &:before {
      /* Move top line on top of center line */
      top: 0.8rem;
    }
  `,
};

const CSSReset = createGlobalStyle`
  *,
  *::before, 
  *::after {
    margin: 0; 
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%; /*1rem = 10px*/
    box-sizing: border-box;      
  }  

  body {
    font-size: 1.4rem;
    font-family: sans-serif;
  }
`;

export default Header;
