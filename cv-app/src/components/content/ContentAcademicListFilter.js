/*
    Filtros de Estudios
*/

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Chip from '@material-ui/core/Chip'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import SortIcon from '@material-ui/icons/Sort'
import classnames from 'classnames'

const styles = (theme) => ({
    container: {
        backgroundColor: '#FFF',
        padding: '16px 10px',
        position: 'relative',
        zIndex: 1,
    },
    tag: {
        margin: theme.spacing.unit,
    },
    tagActive: {
        color: '#FFF',
        backgroundColor: '#C62828',
    },
    sortSection: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
});

const ContentAcademicListFilter = ({ classes, categories, active, handleSortClick }) => {

    return (
        <section
            className={classes.container}
        >
            <Grid
                container
            >
                <Grid
                    className={'categorySection'}
                    item
                    xs={10}
                >
                    {
                        categories.map(
                            (item) => {
                                console.log(item.uid);
                                var tagActive = '';
                                if(item.uid == active)
                                {
                                    tagActive = classes.tagActive;
                                }
                                return (
                                    <Chip
                                        key={item.uid}
                                        label={item.name}
                                        className={classnames(classes.tag, tagActive)}
                                    />
                                )
                            }
                        )
                    }
                </Grid>
                <Grid className={classes.sortSection} item xs={2}>
                    <IconButton>
                        <SortIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </section>
    );

}

export default withStyles(styles)(ContentAcademicListFilter);