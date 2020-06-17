import React from 'react';
import { Studies } from './../components/studies';

export const StudiesContainer = () => {
    const categoriesData = [
        { id: '0', name: 'Todos', },
        { id: '1', name: 'Grado', },
        { id: '2', name: 'Certificación', },
        { id: '3', name: 'Cursos', },
    ];
    const sortData = [
        { id: '0', label: 'Sin ordenar', },
        { id: '1', label: 'Nombre de Estudio', },
        { id: '2', label: 'Favoritos', },
    ];
    const studiesData=[];
    return (
        <Studies
            categoriesData={categoriesData}
            sortData={sortData}
            studiesDataState={2}
            studiesData={studiesData}
            isOpenSort={false}
        />
    );
};