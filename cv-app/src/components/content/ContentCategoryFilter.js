/*
    Filtros de Estudios
*/

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Chip from '@material-ui/core/Chip'
import IconButton from '@material-ui/core/IconButton'
import SortIcon from '@material-ui/icons/Sort'
import classnames from 'classnames'

import './ContentCategoryFilter.css'

const styles = (theme) => ({
    container: {
        backgroundColor: '#FFF',
        padding: '16px 10px 16px 10px',
        position: 'relative',
        zIndex: 1,
    },
    tag: {
        margin: theme.spacing.unit / 4,
        backgroundColor: 'rgba(0,0,0,0.03)',
    },
    categorySection: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    sortSection: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    iconButton: {
        backgroundColor: 'rgba(0,0,0,0.03)',
    },
});

const ContentCategoryFilter = ({ classes, categories, active, handleCategoryClick, handleSortClick }) => {

    return (
        <section
            className={classes.container}
        >
            <Grid
                container
            >
                <Grid
                    className={classes.categorySection}
                    item
                    xs={10}
                >
                    {
                        categories.map(
                            (item) => {
                                var isTagActive = '';
                                if(item.uid === active)
                                {
                                    isTagActive = 'tag-active';
                                }
                                return (
                                    <Chip
                                        key={item.uid}
                                        label={item.name}
                                        onClick={() => { handleCategoryClick(item.uid) }}
                                        className={
                                            classnames(
                                                classes.tag,
                                                'content-academic-list-filter-tag',
                                                isTagActive
                                            )
                                        }
                                    />
                                )
                            }
                        )
                    }
                </Grid>
                <Grid className={classes.sortSection} item xs={2}>
                    <IconButton
                        className={classes.iconButton}
                        onClick={handleSortClick}
                        aria-label={'Ordenar por'}
                    >
                        <SortIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </section>
    );

}

ContentCategoryFilter.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContentCategoryFilter);