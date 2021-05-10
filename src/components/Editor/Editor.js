import React from "react";
import { TextEditor } from "text-editor-react";

import "./Editor.js";

const styles = {
    toolbarStyle: {
        display: "flex",
        alignItems: "center",
        justifycontent: "center",
    },
    toolItemStyle: {
        // color: "#56CFDA",
        // backgroundColor: "white",
    },
};

function Editor() {
    const id = "text-editor-demo-id";
    const targetDivId = "target-div-id";

    return (
        <div className="editor">
            <i className="fas fa-redo"></i>
            <TextEditor
                id={id}
                toolbarStyle={styles.toolbarStyle}
                toolItemStyle={styles.toolItemStyle}
            />
            <div className="display-content">
                <h2 className="target-heading">Target Div</h2>
                <div className="target-div" id={targetDivId}></div>
            </div>
        </div>
    );
}

export default Editor;