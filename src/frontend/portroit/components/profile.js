import React from 'react';
import classNames from 'classnames';
import { profileStyles } from './profile.styles';
import PrimaryImageDefault from './../../../assets/res/app_back2@2x.png';
import SecondaryImageDefault from './../../../assets/res/app_mid@2x.png';

const ProfileComponent = ({ background, primaryImage, secondaryImage, children }) => {

    const classes = profileStyles();

    return (
        <section
            className={classes.portroit}
            style={
                background ? { background } : { background: 'linear-gradient(to right, rgb(106, 27, 154), rgb(142, 36, 170))', }
            }
        >
            <section className={classes.images}>
                <img
                    className={
                        classNames(
                            classes.backgroundImage,
                            classes.background1
                        )
                    }
                    src={ primaryImage ? primaryImage : PrimaryImageDefault }
                    alt={'Primary image soymichel.com'}
                />
                <img
                    className={
                        classNames(
                            classes.backgroundImage,
                            classes.background2,
                        )
                    }
                    src={ secondaryImage ? secondaryImage : SecondaryImageDefault }
                    alt={'Secondary image soymichel.com'}
                />
                {children}
            </section>
        </section>
    );

};

export const Profile = React.memo(ProfileComponent);