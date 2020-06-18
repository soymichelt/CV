import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Categories } from './../../theme/components/categories';
import { DialogList } from './../../theme/components/dialog-list';
import { NotFound } from './../../theme/components/not-found';
import { Loading } from './../../theme/components/loading';
import { cardListStyles } from './card-list.styles';

export const CardList = ({
    categoriesData,
    categoryActive,
    onCategoryClick,
    sortData,
    isOpenSort,
    onSortClick,
    onDialogSortClose,
    onSortItemClick,
    dataState,
    data,
    renderCard,
}) => {
    const classes = cardListStyles();
    return (
        <>
            <Categories
                categories={categoriesData}
                onCategoryClick={onCategoryClick}
                onSortClick={onSortClick}
                activeCategoryId={categoryActive}
            />
            <DialogList
                title='Ordenar por...'
                list={sortData}
                open={isOpenSort}
                onClose={onDialogSortClose}
                onItemClick={onSortItemClick}
            />
            <section className={classes.containerList}>
                {dataState === 0 && <Loading />}
                {dataState === 2 && <NotFound title='Ha ocurrido un error :(' description='Lo sentimos actualmente estamos teniendo problemas al obtener los datos. Estamos trabajando en ello.' />}
                {dataState === 1 && (
                    <Grid container spacing={2} justify='center' classes={{'spacing-xs-2': classes.spacingXs2 }}>
                        {data && data.map(item =>
                            <Grid key={item.id} item>
                                {renderCard && renderCard(item)}
                            </Grid>
                        )}
                    </Grid>
                )}
            </section>
        </>
    );
};