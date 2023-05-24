import React from "react";
import ReactDiffViewer, { DiffMethod } from "react-diff-viewer";
const oldJSON = require("./../Data/opt1.json");
const newJSON = require("./../Data/output.json");

export default function DiffChecker() {
  const newStyles = {
    variables: {
      light: {
        codeFoldGutterBackground: "#6F767E",
        codeFoldBackground: "#E2E4E5"
      }
    }
  };
  return (
    <div className="App">
      <ReactDiffViewer
        oldValue={JSON.stringify(oldJSON, undefined, 4)}
        newValue={JSON.stringify(newJSON, undefined, 4)}
        splitView={true}
        compareMethod={DiffMethod.WORDS_WITH_SPACE}
        styles={newStyles}
        leftTitle="Version A"
        rightTitle="Version B"
      />
    </div>
  );
}
