import React from "react";
import styled from "styled-components";
import { theme } from "@devseed-ui/theme-provider";

import Layer from "./Layer";

import "./styles.css";

const LayerBar = styled.section`
  background-color: ${theme.main.color.mist};
  position: relative;
  z-index: 10;
  display: flex;
  flex-flow: column nowrap;
  width: 20rem;
  height: 100vh;
  overflow: hidden;
`;

export default function Layers() {
  return (
    <LayerBar>
      <Layer name="layer 1" />
      <Layer name="layer 2" />
    </LayerBar>
  );
}
