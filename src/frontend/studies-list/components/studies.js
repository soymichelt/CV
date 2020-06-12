import React from 'react';
import { Categories } from './../../theme/components/categories';

export const Studies = ({ categoriesData, onCategoryClick, onSortClick, studiesData, }) => {

    return (
        <>
            <Categories
                categories={categoriesData}
                onCategoryClick={onCategoryClick}
                onSortClick={onSortClick}
            />
        </>
    );

};