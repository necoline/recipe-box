import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Toolbar, ToolbarIconButton } from "@devseed-ui/toolbar";
import { glsp, theme, truncated } from "@devseed-ui/theme-provider";
import { Accordion, AccordionFold } from "@devseed-ui/accordion";

import { Heading } from "@devseed-ui/typography";

import ToolbarAccordion from "./ToolbarAccordion";

const LayerConatainer = styled.article`
  position: relative;
  z-index: 1;
  overflow: hidden;
`;

const LayerHeader = styled.header`
  position: relative;
  z-index: 2;
  display: grid;
  grid-auto-columns: 1fr min-content;
  padding: ${glsp(0.25)} ${glsp()};
  grid-gap: ${glsp(0.5)};
  box-shadow: 0 ${theme.main.layout.border} 0 0 ${theme.main.color.shadow};
`;

const LayerHeadline = styled.div`
  grid-row: 1;
  min-width: 0px;
`;

const LayerTitle = styled(Heading).attrs({ size: "small" })`
  ${truncated()};
  padding: ${glsp(0.125)} 0;
`;

const LayerHeadToolbar = styled(Toolbar)`
  grid-row: 1;
  align-items: flex-start;
  padding-top: ${glsp(0.3)};
`;
const LayerBody = styled.div`
  position: relative;
  z-index: 1;
  background: #ffffff;
`;

const ACCORDION_OPTIONS = {
  SETTINGS: "SETTINGS",
  INFO: "INFO",
  DEFAULT: "DEFAULT"
};

export default function Layer({ name }) {
  const [isLayerVisible, toggleLayerVisibility] = useState(false);
  const [accordionFold, setAccordionFold] = useState(ACCORDION_OPTIONS.DEFAULT);

  const toggleAccordionFolds = contentType =>
    accordionFold === contentType
      ? setAccordionFold(ACCORDION_OPTIONS.DEFAULT)
      : setAccordionFold(ACCORDION_OPTIONS[contentType]);

  const AccordionFoldContent = {
    SETTINGS: <span>sample layer settings</span>,
    INFO: <span>sample layer info</span>
  };

  return (
    <LayerConatainer>
      <Accordion>
        {({ checkExpanded, setExpanded }) => (
          <>
            <AccordionFold
              renderHeader={({ isFoldExpanded, setFoldExpanded }) => (
                <LayerHeader>
                  <LayerHeadline>
                    <LayerTitle>{name}</LayerTitle>
                  </LayerHeadline>
                  <LayerHeadToolbar size="small">
                    <ToolbarIconButton
                      title="Remove layer"
                      useIcon="trash-bin"
                      onClick={() => {}}
                    >
                      Remove
                    </ToolbarIconButton>
                    <ToolbarIconButton
                      title="Learn about this layer"
                      useIcon="circle-information"
                      active={accordionFold === ACCORDION_OPTIONS.INFO}
                      onClick={() => {
                        setFoldExpanded(!isFoldExpanded);
                        toggleAccordionFolds(ACCORDION_OPTIONS.INFO);
                      }}
                    >
                      Info
                    </ToolbarIconButton>
                    <ToolbarIconButton
                      title="View layer settings"
                      useIcon="sliders-horizontal"
                      active={accordionFold === ACCORDION_OPTIONS.SETTINGS}
                      onClick={() => {
                        setFoldExpanded(!isFoldExpanded);
                        toggleAccordionFolds(ACCORDION_OPTIONS.SETTINGS);
                      }}
                    >
                      Settings
                    </ToolbarIconButton>
                    <ToolbarIconButton
                      title="Toggle layer on/off"
                      useIcon={isLayerVisible ? "eye" : "eye-disabled"}
                      onClick={() => toggleLayerVisibility(!isLayerVisible)}
                    >
                      Visibility On
                    </ToolbarIconButton>
                  </LayerHeadToolbar>
                </LayerHeader>
              )}
              content={AccordionFoldContent[accordionFold]}
              isFoldExpanded={checkExpanded(1)}
              setFoldExpanded={v => setExpanded(1, v)}
            />
          </>
        )}
      </Accordion>
    </LayerConatainer>
  );
}

Layer.propTypes = {
  name: PropTypes.string
};
