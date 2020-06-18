import React, { useState, useEffect, } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { CardList } from '../../theme/components/card-list';
import { Card } from '../../theme/components/card';
import { getCategoriesData, getProjectsDataAsync, getSortData, } from '../../../lib/data/projects.data';

export const ProjectsContainer = () => {
    const categoriesData = getCategoriesData();
    const [category, setCategory] = useState(categoriesData[0].id);

    const sortData = getSortData();
    const [isOpenSort, setIsOpenSort] = useState(false);
    const handleSortClick = () => setIsOpenSort(true);
    const handleDialogSortClose = () => setIsOpenSort(false);
    const [sort, setSort] = useState(sortData[0].id);

    const [projectsData, setProjectsData] = useState([]);
    const [stateData, setStateData] = useState(0);

    useEffect(() => {
        const fetchingData = async () => {
            setStateData(0);
            try {
                const data = await getProjectsDataAsync(category, sort);
                setProjectsData(data);
                setStateData(1);
            }
            catch(e) {
                setStateData(2);
            }
        };
        fetchingData();
        return () => {};
    }, [category, sort]);
    return (
        <CardList
            categoriesData={categoriesData}
            categoryActive={category}
            onCategoryClick={setCategory}
            sortData={sortData}
            dataState={stateData}
            data={projectsData}
            isOpenSort={isOpenSort}
            onSortClick={handleSortClick}
            onSortItemClick={setSort}
            onDialogSortClose={handleDialogSortClose}
            renderCard={(item) => <Card
                avatar={<Avatar src={item.avatar} />}
                photo={item.photo}
                title={item.title}
                subtitle={item.data.projectCompany}
                favs={item.favs}
                onClickFav={() => {}}
                shares={item.shares}
                onClickShares={() => {}}
                onClickCard={() => {}}
            />}
        />
    );
};