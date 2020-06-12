import React from 'react';
import { Layout } from './../theme/containers/layout';
import { Profile } from './../portroit/components/profile';
import { Content } from './../portroit/components/content';
import { PortfolioTabs } from './../portfolio/components/portfolio-tabs';

export default () => {

    return (
        <Layout title='Inicio'>
            <Profile>
                <Content />
            </Profile>
            <PortfolioTabs />
        </Layout>
    );

};