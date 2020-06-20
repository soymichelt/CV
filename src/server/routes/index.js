import React from 'react';
import {renderToString} from 'react-dom/server';
import render from './../render';
import {StaticRouter} from 'react-router-dom';
import serverRoutes from './../../frontend/routes/server-routes';
import {renderRoutes} from 'react-router-config';
import {ServerStyleSheets} from '@material-ui/core/styles';

const mainRoutes = (req, res, next) => {
    try {
        const context = {};
        const sheets = new ServerStyleSheets();
        const html = renderToString(sheets.collect(
            <StaticRouter
                location={req.url}
                context={context}
            >
                {renderRoutes(serverRoutes)}
            </StaticRouter>
        ));
        const css = sheets.toString();

        res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
        res.send(render(html, css));
    }
    catch(e) {
        next(e);
    }
};

export default mainRoutes;