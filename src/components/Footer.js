import React from 'react';
import styled from 'styled-components';
const FooterDiv = styled.div`
  background: #2e3138;
  width: 100%;
  color: #fff;
  text-align: center;
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 7px;
`;

function Footer() {
  return <FooterDiv>© 2023 Copyright Ankit</FooterDiv>;
}

export default Footer;
