import styled from "styled-components";

export const Header = styled.header`
  display: block;
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  font-weight: bolder;
  text-transform: uppercase;
  background-color: darkblue;
  color: white;
  box-sizing: border-box;
  box-shadow: 0 0.2rem 0.2rem 0.1rem gray;
`;

export const Navbar = styled.ul`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  height: max-content;
  min-height: 3rem;
  bottom: 0;
  background-color: ${props => props.backgroundColor || "cornflowerblue"};
  box-sizing: border-box;
  padding: 0 1rem;
  margin: 0;
  color: ${props => props.color || "white"};
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  box-shadow: 0 -0.2rem 0.2rem 0.1rem gray;
`;

export const NavbarItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.7rem;
  height: 4rem;
  padding: 0.15rem 0.25rem;
`;
