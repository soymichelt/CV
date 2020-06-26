import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';
import mainRoutes from './routes';
import helmet from 'helmet';

dotenv.config();
const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 3000;

const server = () => {
    const app = express();
    app.use(express.static(`${__dirname}/public`));
    if(ENV === 'development') {
        development(app);
    }
    else {
        production(app);
    }
    app.get('*', mainRoutes);
    return app;
};

const development = (app) => {
    console.log('Loading dev config');
    const webpackConfig = require('./../../webpack.config');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const compiler = webpack(webpackConfig);

    const serverConfig = {
        contentBase: `http://localhost:${PORT}`,
        port: PORT,
        publicPath: webpackConfig.output.publicPath,
        hot: true,
        historyApiFallback: true,
        stats: { color: true, },
    };
    app.use(webpackDevMiddleware(compiler, serverConfig));
    app.use(webpackHotMiddleware(compiler));
};

const production = (app) => {
    console.log('Loading production config');
    app.use(helmet());
    app.use(helmet.permittedCrossDomainPolicies());
    app.disable('x-powered-by');
};

export const start = () => {
    server().listen(PORT, error => {
        if(error) console.log(error);
        console.log(`Server Running on ${PORT}`);
    });
};

export const app = () => {
    return server();
};