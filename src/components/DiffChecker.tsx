import React, { useState } from "react";
import ReactDiffViewer, { DiffMethod } from "react-diff-viewer";
import "./DiffChecker.css";
const oldJSON = require("./../Data/new.json");
const newJSON = require("./../Data/old.json");

export default function DiffChecker(props: any) {
  const newStyles = {
    variables: {
      light: {
        codeFoldGutterBackground: "#6F767E",
        codeFoldBackground: "#E2E4E5",
      },
    },
  };

  // console.log("11111: ", props);
  return (
    <div className="App">
      {/* <ReactDiffViewer
        // oldValue={JSON.stringify(oldJSON, undefined, 4)}
        oldValue={props.props.toString()}
        newValue={props.props.toString()}
        splitView={true}
        
      /> */}

      {/* <textarea className="box" value={props.props.toString()} readOnly />
       */}
      {/* <p>{props.props.toString()}</p> */}
    

      <div className="container">
        <div className="row">
          <div className="col">
          <textarea
        className="form-control  box"
        id="textAreaExample2"
        value={props.props.toString()}
        rows={8}
      ></textarea>
          </div>

          <div className="col">
          <textarea
        className="form-control  box"
        id="textAreaExample2"
        value={props.props1.toString()}
        rows={8}
      ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
// compareMethod={DiffMethod.WORDS_WITH_SPACE}
//         styles={newStyles}
//         leftTitle="Version A"
//         rightTitle="Version B"
