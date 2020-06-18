import React from 'react';
import { Grid, Chip, IconButton, } from '@material-ui/core';
import { Sort as SortIcon } from '@material-ui/icons';
import classNames from 'classnames';
import { categoriesStyles } from './categories.styles';

export const Categories = ({categories, onCategoryClick, activeCategoryId = '0', onSortClick,}) => {

    const classes = categoriesStyles();

    return (
        <section className={classes.container}>
            <Grid container>
                <Grid className={classes.categorySection} item xs={10}>
                    {categories && categories.map(category => {
                        let tagActive = '';
                        if(category.id === activeCategoryId) tagActive = classes.tagActive;
                        return (
                            <Chip
                                key={category.id}
                                label={category.name}
                                onClick={() => { onCategoryClick(category.id) }}
                                className={ classNames(classes.tag, tagActive) }
                            />
                        )
                    })}
                </Grid>
                <Grid className={classes.sortSection} item xs={2}>
                    <IconButton className={classes.iconButton} onClick={onSortClick} aria-label={'Ordenar por'}>
                        <SortIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </section>
    );

};