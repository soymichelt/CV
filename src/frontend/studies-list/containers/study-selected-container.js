import React, {useEffect, useState} from 'react';
import { selectStudyDataAsync } from './../../../lib/data/studies.data';
import { StudySelected } from './../components/study-selected';

export const StudySelectedContainer = ({studyId, open, onClose}) => {
    const [dataState, setDataState] = useState(0);
    const [dataStudy, setDataStudy] = useState(null);
    useEffect(() => {
        const fetchingData = async () => {
            try {
                const data = await selectStudyDataAsync(studyId);
                setDataStudy(data);
                setDataState(1);
            }
            catch(e) {
                console.log(e);
                setDataState(2);
            }
        };
        fetchingData();
    }, []);

    return (
        <StudySelected
            dataStudy={dataStudy}
            dataState={dataState}
            open={open}
            onClose={onClose}
        />
    );
};