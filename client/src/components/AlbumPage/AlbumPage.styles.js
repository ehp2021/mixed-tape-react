import styled from "styled-components";

export const Wrapper = styled.div `
display: flex;
height: 100vh;
width: 100vw;
flex: 4;
color: white;
`

export const New_Wrapper = styled.div `
  margin: 0;
  margin-bottom:2px;
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
  
  .track-info {
    margin: 0;
    flex: 1;
  }
`;

export const Content = styled.ul `
list-style: none;
background-color: var(--medGrey);
margin: 0;
height: 100%;
overflow-y: hidden;
flex: 4;

.list_item {
    position: relative;
    display: flex;
    background-color: var(--darkGrey);
    margin-bottom: 5px;
    padding:10px;


  :hover {
    background-color: var(--medGrey);
  }
}
`;

export const Card = styled.div `
 display: inline-block;
 background-color: var(--darkGrey);
 border-radius: 8px;
 padding: 16px;

 .playlist_name {
  text-decoration: none;
  color: var(--white);
}

 :hover {
  opacity: 0.8;
}
`;

export const Image = styled.img `
  // justify-content:center;  
  // width: 30%;
  // height: 30%;
  // transition: all 0.3s;
  // object-fit: cover;
  // margin-bottom: 10px;


`;

export const h2 = styled.img `
  color: white;
`