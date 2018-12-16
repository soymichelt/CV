import React, { Component } from 'react';

import {
    Editor,
    EditorState,
    RichUtils,
    getDefaultKeyBinding,
    convertToRaw,
    convertFromRaw,
    SelectionState,
} from 'draft-js'

import {
    stateToHTML
} from 'draft-js-export-html'

import InlineStyleControls from './InlineStyleControls'
import BlockStyleControls from './BlockStyleControls'

import { withStyles } from '@material-ui/core/styles'
import './Test.css'

const styles = {

};

const styleMap = {
    CODE: {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
        fontSize: 16,
        padding: 2,
    },
};

class EditorTest extends Component {

    constructor(props) {
        super(props);
        this.state = { editorState: EditorState.createEmpty(), text: '', };
        this.focus = () => this.refs.editor.focus();
        this.onChange = (editorState) => {
            this.setState({
                editorState,
                text: stateToHTML(editorState.getCurrentContent()),
            })
        };
        this.handleKeyCommand = this._handleKeyCommand.bind(this);
        this.mapKeyToEditorCommand = this._mapKeyToEditorCommand.bind(this);
        this.toggleBlockType = this._toggleBlockType.bind(this);
        this.toggleInlineStyle = this._toggleInlineStyle.bind(this);
        this.getBlockStyle = this._getBlockStyle.bind(this);
    }

    render() {
        const { classes } = this.props;
        const { editorState } = this.state;
        // If the user changes block type before entering any text, hide the placeholder.
        let className = 'RichEditor-editor';
        var contentState = editorState.getCurrentContent();
        if (!contentState.hasText()) {
            if (contentState.getBlockMap().first().getType() !== 'unstyled') {
                className += ' RichEditor-hidePlaceholder';
            }
        }
        return (
            <div className={classes.container}>
                <h1>
                    Editor de Prueba
                </h1>

                <div className="container-fluid">
                    <div className="row">
                        <div className="RichEditor-root col-12 col-md-6">
                            {/* render our editor block style controls components */}
                            <BlockStyleControls
                                editorState={editorState}
                                onToggle={this.toggleBlockType}
                            />
                            {/* render our editor's inline style controls components */}
                            <InlineStyleControls
                                editorState={editorState}
                                onToggle={this.toggleInlineStyle}
                            />
                            <div className={className} onClick={this.focus}>
                                {/* render the Editor exposed by Draft.js */}
                                <Editor
                                    blockStyleFn={this.getBlockStyle}
                                    customStyleMap={styleMap}
                                    editorState={editorState}
                                    handleKeyCommand={this.handleKeyCommand}
                                    keyBindingFn={this.mapKeyToEditorCommand}
                                    onChange={this.onChange}
                                    ref="editor"
                                    spellCheck={true}
                                />
                            </div>
                        </div>
                        <hr />
                        <div className="col-12 col-md-6">
                            {/* render a preview for the text in the editor */}

                            <div dangerouslySetInnerHTML={{ __html: this.state.text }} />

                        </div>
                    </div>
                </div>



            </div>
        );
    }





    // handle blockquote
    _getBlockStyle(block) {
        switch (block.getType()) {
            case 'blockquote': return 'RichEditor-blockquote';
            case 'pre': return 'public-DraftStyleDefault-pre';
            default: return null;
        }
    }
    // handle key commands
    _handleKeyCommand(command, editorState) {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.onChange(newState);
            return true;
        }
        return false;
    }
    // map the TAB key to the editor
    _mapKeyToEditorCommand(e) {
        if (e.keyCode === 9 /* TAB */) {
            const newEditorState = RichUtils.onTab(
            e,
            this.state.editorState,
            4, /* maxDepth */
            );
            if (newEditorState !== this.state.editorState) {
            this.onChange(newEditorState);
            }
            return;
        }
        return getDefaultKeyBinding(e);
    }
    // toggle block styles
    _toggleBlockType(blockType) {
        this.onChange(
            RichUtils.toggleBlockType(
            this.state.editorState,
            blockType
            )
        );
    }
    // toggle inline styles
    _toggleInlineStyle(inlineStyle) {
        this.onChange(
            RichUtils.toggleInlineStyle(
            this.state.editorState,
            inlineStyle
            )
        );
    }





}

export default withStyles(styles)(EditorTest);