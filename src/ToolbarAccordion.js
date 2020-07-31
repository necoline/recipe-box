import React from "react";
import PropTypes from "prop-types";

import { Accordion, AccordionFold } from "@devseed-ui/accordion";

export default function ToolbarAccordion({ isOpen, children }) {
  return (
    <Accordion>
      {() => (
        <AccordionFold
          renderHeader={() => {}}
          renderBody={() => {
            return <>{children}</>;
          }}
          isFoldExpanded={isOpen}
        />
      )}
    </Accordion>
  );
}

ToolbarAccordion.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.node
};
