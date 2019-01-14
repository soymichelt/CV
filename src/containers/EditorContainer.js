import React, { Component } from 'react'
import {
    EditorState,
    RichUtils,
    getDefaultKeyBinding,
} from 'draft-js'
import {
    stateToHTML
} from 'draft-js-export-html'

import Editor from './../components/editor/Editor'

class EditorContainer extends Component {

    /*
        Lifecycle functions
    */

    constructor(props) {
        super(props)
        this.state = {
            editorState: EditorState.createEmpty(),
            text: '',
        }
        this.editorFocus = () => this.refs.editor.focus()
        this.onChange = (editorState) => {
            this.setState({
                editorState,
                text: stateToHTML(editorState.getCurrentContent()),
            })
        }
        this.handleKeyCommand = this._handleKeyCommand.bind(this)
        this.mapKeyToEditorCommand = this._mapKeyToEditorCommand.bind(this)
        this.toggleBlockType = this._toggleBlockType.bind(this)
        this.toggleInlineStyle = this._toggleInlineStyle.bind(this)
        this.getBlockStyle = this._getBlockStyle.bind(this)
    }


    render () {
        const { editorState, text } = this.state
        return (
            <Editor
                editorState             =   { editorState }
                toggleBlockType         =   { this.toggleBlockType }
                toggleInlineStyle       =   { this.toggleInlineStyle }
                editorFocus             =   { this.editorFocus}
                getBlockStyle           =   { this.getBlockStyle}
                handleKeyCommand        =   { this.handleKeyCommand}
                mapKeyToEditorCommand   =   { this.mapKeyToEditorCommand}
                onEditorChange          =   { this.onChange}
                text                    =   { text }
                ref                     =   { this.refs.editor }
            />
        )
    }

    /*
        Others functions
    */

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

export default EditorContainer