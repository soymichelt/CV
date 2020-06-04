import React from 'react';
import { renderToString } from 'react-dom/server';
import render from './../render';
import {StaticRouter} from 'react-router-dom';
import serverRoutes from './../../frontend/routes/server-routes';
import { renderRoutes } from 'react-router-config';
import { ChunkExtractor } from '@loadable/server';
import path from 'path';
import { ServerStyleSheets } from '@material-ui/core/styles';

const ChunkExtractorServerSide = (myApp) => {
    const isProduction = process.env.NODE_ENV === 'production';
    const  statsFile = path.resolve(
        isProduction
            ? path.join(process.cwd(), './src/server/public/loadable-stats.json')
            : 'loadable-stats.json'
    );
    const extractor = new ChunkExtractor({ statsFile });
    return extractor.collectChunks(myApp);
};

const mainRoutes = (req, res, next) => {
    try {
        const context = {};
        const myApp = (
            <StaticRouter
                location={req.url}
                context={context}
            >
                {renderRoutes(serverRoutes)}
            </StaticRouter>
        );

        const sheets = new ServerStyleSheets();
        const jsx = ChunkExtractorServerSide(myApp);

        const html = renderToString(sheets.collect(jsx));
        const css = sheets.toString();

        res.send(render(html, css));
    }
    catch(e) {
        next(e);
    }
};

export default mainRoutes;