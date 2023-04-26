import React from "react";
import "./Ide.css";

const IDE = () => {
  return (
    <div className="ide-main">
      <div className="left">
        <div className="code-editor">
          <div className="header-component">
            <div className="file-name">main.py</div>
          </div>
          <div className="over-container">
            <textarea
              className="form-code-editor"
              rows="14"
              name="code_area"
              //   style={{
              //     border: "1px solid grey",
              //     letterSpacing: "1px",
              //     fontFamily: "poppins",
              //     fontSize: "20px",
              //   }}
              // onkeydown="if(event.keyCode===9){var v=this.value,s=this.selectionStart,e=this.selectionEnd;this.value=v.substring(0, s)+'\t'+v.substring(e);this.selectionStart=this.selectionEnd=s+1;return false;}"
            >
              {/* {{ code }} */}
            </textarea>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="right-over-container">
          <div className="input-container">
            {" "}
            <div className="header-component">
              <div className="file-name">Input</div>
            </div>
            <textarea
              className="form-input-container"
              rows="7"
              name="input_area"
            ></textarea>
          </div>
          <div className="output-container">
            {" "}
            <div className="header-component">
              <div className="file-name">Output</div>
            </div>
            <textarea
              className="form-output-container"
              rows="7"
              name="input_area"
              disabled
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IDE;
