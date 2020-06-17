import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { Categories } from './../../theme/components/categories';
import { DialogList } from './../../theme/components/dialog-list';
import { Card } from './../../theme/components/card';
import { NotFound } from './../../theme/components/not-found';
import { Loading } from './../../theme/components/loading';
import { studiesStyles } from './studies.styles';

export const Studies = ({
    categoriesData,
    onCategoryClick,
    sortData,
    isOpenSort,
    onSortClick,
    onDialogSortClose,
    onSortItemClick,
    studiesDataState,
    studiesData,
}) => {
    const classes = studiesStyles();
    return (
        <>
            <Categories
                categories={categoriesData}
                onCategoryClick={onCategoryClick}
                onSortClick={onSortClick}
            />
            <DialogList
                title='Ordenar por...'
                list={sortData}
                open={isOpenSort}
                onClose={onDialogSortClose}
                onItemClick={onSortItemClick}
            />
            <section className={classes.containerList}>
                {studiesDataState === 0 && <Loading />}
                {studiesDataState === 2 && <NotFound title='Ha ocurrido un error :(' description='Lo sentimos actualmente estamos teniendo problemas al obtener los datos. Estamos trabajando en ello.' />}
                {studiesDataState === 1 && (
                    <Grid container spacing={2} justify='center'>
                        {studiesData && studiesData.map(item => <>
                            <Grid key={item.id} item>
                                <Card
                                    avatar={<Avatar src={item.avatar} />}
                                    photo={item.photo}
                                    title={item.title}
                                    subtitle={item.data.school}
                                    favs={item.favs}
                                    onClickFav={() => {}}
                                    shares={item.shares}
                                    onClickShares={() => {}}
                                    onClickCard={() => {}}
                                />
                            </Grid>
                        </>)}
                    </Grid>
                )}
            </section>
        </>
    );

};