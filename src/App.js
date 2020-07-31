import React from "react";
import styled from "styled-components";

import { DevseedUiThemeProvider } from "@devseed-ui/theme-provider";
import Layers from "./Layers";
import ExampleMap from "./ExampleMap";

import "./styles.css";

const Page = styled.div`
  display: flex;
`;

export default function App() {
  return (
    <div className="App">
      <DevseedUiThemeProvider>
        <h1>Layer Recipe</h1>
        <Page>
          <Layers />
          <ExampleMap />
        </Page>
      </DevseedUiThemeProvider>
    </div>
  );
}
