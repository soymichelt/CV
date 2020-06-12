import React from 'react';
import classNames from 'classnames';

import ProfileImage from './../../../assets/res/fav.png';
import Fb from './../../../assets/res/fb.png';
import Fb2x from './../../../assets/res/fb-64x64.png';
import Tw from './../../../assets/res/tw.png';
import Tw2x from './../../../assets/res/tw-64x64.png';
import Gb from './../../../assets/res/gb.png';
import Gb2x from './../../../assets/res/gb-64x64.png';

import { contentStyles } from './content.styles';

export const Content = () => {

    const classes = contentStyles();

    return(
        <section
            className={classes.content}
        >
            <img
                className={classes.profile}
                src={ProfileImage}
                alt={'Michel Roberto Traña Tablada'}
            />
            <h1
                className={classNames(classes.primaryText, classes.fontProfile)}
            >
                Michel R. Traña Tablada
            </h1>
            <h2
                className={classNames(classes.secondaryText, classes.fontProfile)}
            >
                Ingeniero en Sistemas de Información
            </h2>
            <h3
                className={classNames(classes.otherText, classes.fontProfile)}
            >
                (+505) 8367 - 1719
            </h3>
            <section className={classes.social}>
                <a href='https://www.facebook.com/soymichelt' target='_blank' rel='noopener noreferrer'>
                    <img src={Fb} srcSet={`${Fb2x} 2x`} alt={'Facebook: Soymichelt'} />
                </a>
                <a href='https://twitter.com/soymichelt' target='_blank' rel='noopener noreferrer'>
                    <img src={Tw} srcSet={`${Tw2x} 2x`} alt={'Twitter: Soymichelt'} />
                </a>
                <a href='https://github.com/soymichelt' target='_blank' rel='noopener noreferrer'>
                    <img src={Gb} srcSet={`${Gb2x} 2x`} alt={'GitHub: Soymichelt'} />
                </a>
            </section>
        </section>
    );

};