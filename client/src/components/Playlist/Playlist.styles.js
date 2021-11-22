import styled from "styled-components";

export const Wrapper = styled.div `
  max-width: 120vw;
  border-radius: 5px;
  
`;


export const Content = styled.div `
  color: var(--white);
  display: flex;
  flex - direction: column;
  justify-content: flex-start;
  padding: 10px;
  width: 30%vw;

  .album_img {
    width: 90px;
    margin: 5 px;

}

.left_box {
    display: flex;
    padding: 0 5px;
    overflow: hidden;
    white - space: nowrap;
    width: 150 px;
}

.track_name {
    margin: 0
    flex: 1;
}

.artist_name {
    display: flex;
    gap: 8 px;
    line - height: 1.8;
    color: var (--lightGrey);

}

.album_name {
    flex: 3;
    padding - left: 20 px;

}

`;