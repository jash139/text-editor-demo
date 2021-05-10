import React from "react";
import { TextEditor, getInnerHtml, addContentTo } from "text-editor-react";

import "./Editor.css";

const styles = {
    toolbarStyle: {
        display: "flex",
        alignItems: "center",
        justifycontent: "center",
    },
    toolItemStyle: {
        color: "#2CA1BC",
    },
    editorStyle: {
        border: "2px solid #727789",
        borderRadius: "10px",
        color: "#727789",
        height: "25vh",
        margin: "1rem",
        padding: "1rem",
    },
};

function Editor() {
    const id = "text-editor-demo-id";
    const targetDivId = "target-div-id";

    const handleClick = () => {
        const content = getInnerHtml(id);
        addContentTo(content, targetDivId);
    };

    return (
        <div className="editor">
            <TextEditor
                id={id}
                toolbarStyle={styles.toolbarStyle}
                toolItemStyle={styles.toolItemStyle}
                editorStyle={styles.editorStyle}
            />
            <div className="target-header">
                <h2 className="target-heading">Target Div</h2>
                <button className="button" onClick={handleClick}>Add Content</button>
            </div>
            <div className="target-div" id={targetDivId}></div>
        </div>
    );
}

export default Editor;