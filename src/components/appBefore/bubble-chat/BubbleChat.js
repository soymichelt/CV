/* Node & ReactJS Modules */
import React from 'react';

/* CSS */
import './BubbleChat.css';

/* Components */
import { getAttribute, joinAttribute } from '../../helpers/Attribute';

export function BubbleChat(props) {

    return(

        <section className="bubble-chat-section card-panel z-depth-2">

            <HeaderChat />

            <section className="body-chat">
                <p className="message-initial blue-grey-text text-darken-2">
                    Si deseas cerrar el chat solo debes dar click en el encabezado.
                </p>
                <section className="chat-list">
                    <Chat
                        key="1"
                        photoUrl={ process.env.PUBLIC_URL + '/Resources/Images/Profile64x64.png' }
                        messageStyleClassName="grey lighten-3 blue-grey-text text-darken-4"
                        message="Hola, ¿como estás?"
                    />
                    <Chat
                        key="2"
                        className="without-photo"
                        messageStyleClassName="grey lighten-3 blue-grey-text text-darken-4"
                        message="Sobre que te gustaría charlar."
                    />
                    <Chat
                        key="3"
                        photoUrl={ process.env.PUBLIC_URL + '/Resources/Images/Profile64x64.png' }
                        className="answer"
                        messageStyleClassName="red darken-1 white-text"
                        message="Hola, ¿bien y tú?"
                    />
                    <Chat
                        key="4"
                        className="answer without-photo"
                        messageStyleClassName="red darken-1 white-text"
                        message="Me gustaría saber ¿si puedes programar en el lenguaje Ruby on Rails?"
                    />
                    <Chat
                        key="5"
                        className="answer without-photo"
                        messageStyleClassName="red darken-1 white-text"
                        message="Estamos interesados en un programador con esas características."
                    />
                </section>
            </section>

            <ActionChat />

        </section>

    );

}

function HeaderChat(props) {

    return(

        <header className="header-chat">
            <h1 className="name-chat truncate red darken-4 white-text">
                <img className="photo-chat left" src={ process.env.PUBLIC_URL + '/Resources/Images/Profile64x64.png'} />
                Michel Roberto Traña Tablada
                <br />
                <span className="secondary-name-chat white-text">
                    <i className="active-chat material-icons left green-text">brightness_1</i>
                    en línea
                </span>
            </h1>
        </header>
        
    );

}

function Chat(props) {

    var img;

    var photoUrl = getAttribute(props.photoUrl);

    if(photoUrl != '') {
        img = (
            <img className="photo" src={ photoUrl } />
        );
    }

    return(
        
        <section className={ joinAttribute('chat', props.className) }>
            <p className="chat-message">
                { img }
                <span className={ joinAttribute("msg", props.messageStyleClassName) }>
                    { props.message }
                </span>
            </p>
        </section>

    );

}

function ActionChat(props) {

    return (

        <section className="action-chat white">
            <input className="message-text" name="messageText" type="text" placeholder="Escribir chat..." />
            <button className="btn-send btn btn-floating btn-flat blue-grey lighten-5">
                <i className="material-icons blue-grey-text text-darken-3">photo_camera</i>
            </button>
        </section>
    );

}

export default { BubbleChat };