import React from "react";

import { Wrapper, Content } from "./Text.styles";

const Text = ({ text }: { text: string }) => {
  return (
    <Wrapper>
      <Content>
        <p style={{fontFamily:'courier New'}}>{text}</p>
      </Content>
    </Wrapper>
  );
};

export default Text;