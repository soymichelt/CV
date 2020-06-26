const render = (html, css) => {
    return (`
        <!DOCTYPE html>
        <html lang="es">
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
                <meta name="description" content="Portafolio Profesional Ing. Michel Roberto Traña Tablada" />
                <meta name="author" content="Ing. Michel Roberto Traña Tablada" />
                <meta name="subjetc" content="Portafolio Michel Traña" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Soymichel - Portfolio Ing. Michel Roberto Traña Tablada</title>
                <style id="jss-server-side">${css}</style>
                <link rel="stylesheet" href="assets/app.css" type="text/css" />
                <meta name="theme-color" content="#6d1b7b" />
                <link rel="manifest" href="manifest.json" />
                <link rel="shortcut icon" href="/fav.ico">
            </head>
            <body style="margin: 0;padding: 0; font-family: 'Roboto', sans-serif;max-width: 100vw;">
                <div id="root">${html}</div>
                <script src="/assets/app.js" type="text/javascript"></script>
                <script src="/assets/vendor.js" type="text/javascript"></script>
                <!-- Google Fonts [ASYNC] -->
                <script type="text/javascript">
                    WebFontConfig = {
                        google: { families: [ 'Roboto:300,400,500' ] }
                    };
                    (function() {
                        var wf = document.createElement('script');
                        wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
                        wf.type = 'text/javascript';
                        wf.async = 'true';
                        var s = document.getElementsByTagName('script')[0];
                        s.parentNode.insertBefore(wf, s);
                    })();

                    //Service Workbox
                    if(navigator) {
                        if('serviceWorker' in navigator) {
                            window.addEventListener('load', () => {
                                navigator.serviceWorker.register('/sw.js')
                                .then(registration => {
                                    console.log('Service Worker registered', registration);
                                })
                                .catch(error => {
                                    console.log('Service Worker failed', error);
                                })
                            });
                        }
                    }
                </script>
            </body>
        </html>
    `);
};

export default render;