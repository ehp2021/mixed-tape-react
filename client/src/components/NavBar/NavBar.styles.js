import styled from "styled-components";
import { BsGear } from "react-icons/bs";


export const Wrapper = styled.div `
display: flex;
max-width: 1280px;
margin: 0 ;
background: var(--darkGrey);
color: #fff;
`;

export const Content = styled.div `

`;


export const Button = styled.button `
background-color: var(--darkGrey);
border: 2px solid white;
border-radius: 10px;
width: 150px;
height: 30px;
font-size: 18px;
font-family: Helvetica;
color: white;
-webkit-transform: translate(0);
  transform: translate(0);
  // background-image: linear-gradient(45deg, #006400, #98fb98);
  // padding: 0.7em 2em;
  border-radius: 65px;
  // box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.438);
  // -webkit-transition: box-shadow 0.25s;
  // transition: box-shadow 0.25s;
  color: white;
  padding: 5px;



`;

export const Text = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  text-decoration: none;
  list-style-type: none;

`;

export const Dropdown = styled(BsGear)
`
  cursor: pointer;
`;