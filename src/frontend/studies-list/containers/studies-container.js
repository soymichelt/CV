import React from 'react';
import { Studies } from './../components/studies';

export const StudiesContainer = () => {
    const categoriesData = [
        { id: '0', name: 'Todos', },
        { id: '1', name: 'Grado', },
        { id: '2', name: 'Certificación', },
        { id: '3', name: 'Cursos', },
    ];
    return (
        <Studies categoriesData={categoriesData} />
    );
};