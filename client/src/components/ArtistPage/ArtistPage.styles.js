import styled from "styled-components";

export const Wrapper = styled.div `
display: flex;
height: 100vh;
width: 100vw;
flex: 4;
`

export const New_Wrapper = styled.div `
  margin: 0;
  color: white;
  padding: 20px;
  flex: 4;
  display: flex;
  flex-direction: column;
  background-color: var(--medGrey);
  height: 100%;


    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
`;

export const Content = styled.div `
display: grid;
grid-template-columns: repeat(3, 1fr);
 grid-gap: 10px;
list-style: none;
margin: 0;
padding: 20px 0;
width: 100%;
overflow-y: scroll;


::-webkit-scrollbar {
  background-color: var(--darkGrey);
  border-radius: 90px;
  width: 10px;
  
}

::-webkit-scrollbar-track{
  margin-left: 15px;
}

::-webkit-scrollbar-thumb {
  background-color: green;
  border-radius: 90px;
  width: 12px;
  // box-shadow: 10px 5px 5px black;
}

`;

export const Card = styled.div `
 display: inline-block;
 background-color: var(--darkGrey);
 border-radius: 8px;
 padding: 16px;
 margin-right: 10px;

 .playlist_name {
  text-decoration: none;
  color: var(--white);
}

 :hover {
  opacity: 0.8;
}
`;

export const Image = styled.img `
  width: 100%;
  height: 100%;
  transition: all 0.3s;
  object-fit: cover;

`;
export const h2 = styled.img `
  color: white;
`