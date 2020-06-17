import React, { useEffect } from 'react';
import ClientRoutes from './routes/client-routes';

export const App = () => {

    useEffect(() => {
        const jss = document.querySelector('#jss-server-side');
        if(jss) jss.parentElement.removeChild(jss);
    }, []);

    return (
        <ClientRoutes />
    );

};