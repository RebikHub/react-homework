import React, { useState } from "react";
import Collapse from "./components/Collapse";

export default function App() {
  const [state, setState] = useState(true)
  function handleExpandedChange(isExpanded) {
    setState({ isExpanded });
  }

  return (
    <Collapse
      collapsedLabel='Развернуть'
      expandedLabel='Свернуть'
      isExpanded={ state.isExpanded }
      onExpandedChange={ handleExpandedChange }
    />
  );
}

Collapse.defaultProps = {
  collapsedLabel: 'Развернуть',
  expandedLabel: 'Свернуть'
}