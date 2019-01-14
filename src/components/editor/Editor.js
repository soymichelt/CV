import React from 'react'
import {
    Editor,
} from 'draft-js'
import InlineStyleControls from './InlineStyleControls'
import BlockStyleControls from './BlockStyleControls'
import './Editor.css'

const styleMap = {
    CODE: {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
        fontSize: 16,
        padding: 2,
    },
}

const EditorPost = (props) => {

    const {
        editorState,
        toggleBlockType,
        toggleInlineStyle,
        editorFocus,
        getBlockStyle,
        handleKeyCommand,
        mapKeyToEditorCommand,
        onEditorChange,
        text,
        ref,
    } = props

    // If the user changes block type before entering any text, hide the placeholder.
    let className = 'RichEditor-editor';
    var contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
        if (contentState.getBlockMap().first().getType() !== 'unstyled') {
            className += ' RichEditor-hidePlaceholder';
        }
    }

    return (
        <div>
            <h1>
                Editor de Prueba
            </h1>

            <div className="container-fluid">
                <div className="row">
                    <div className="RichEditor-root col-12 col-md-6">
                        {/* render our editor block style controls components */}
                        <BlockStyleControls
                            editorState={editorState}
                            onToggle={toggleBlockType}
                        />
                        {/* render our editor's inline style controls components */}
                        <InlineStyleControls
                            editorState={editorState}
                            onToggle={toggleInlineStyle}
                        />
                        <div className={className} onClick={editorFocus}>
                            {/* render the Editor exposed by Draft.js */}
                            <Editor
                                blockStyleFn={getBlockStyle}
                                customStyleMap={styleMap}
                                editorState={editorState}
                                handleKeyCommand={handleKeyCommand}
                                keyBindingFn={mapKeyToEditorCommand}
                                onChange={onEditorChange}
                                ref={ref}
                                spellCheck={true}
                            />
                        </div>
                    </div>
                    <hr />
                    <div className="col-12 col-md-6">
                        {/* render a preview for the text in the editor */}

                        <div dangerouslySetInnerHTML={{ __html: text }} />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditorPost