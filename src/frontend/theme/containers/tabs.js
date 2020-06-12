import React, { useState, } from 'react';
import AppBar from '@material-ui/core/AppBar';
import TabsMaterial from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Hidden from '@material-ui/core/Hidden';

import { tabSectionStyles, tabsStyles, } from './tabs.styles';

const TabSection = ({ children }) => {
    const classes = tabSectionStyles();
    return (
        <div className={classes.tabSection}>{children}</div>
    );
};

export const Tabs = ({ tabs, tabsContent }) => {

    const classes = tabsStyles();

    const [currentTab, setCurrentTab] = useState(0);

    const handleChangeTab = (event, tab) => setCurrentTab(tab);

    return (
        <>
            <section>
                <AppBar className={classes.tabsAppBar} elevation={1} color={'default'}>
                    <Hidden only={'xs'}>
                        <TabsMaterial
                            value={currentTab}
                            onChange={handleChangeTab}
                            indicatorColor='secondary'
                            textColor='secondary'
                            centered
                        >
                            {tabs && tabs.map((tab, index) => <Tab
                                key={index}
                                classes={{ wrapper: classes.tabWrapper }}
                                label={
                                    <>
                                        {tab.icon}
                                        {tab.label}
                                    </>
                                }
                            />)}
                        </TabsMaterial>
                    </Hidden>
                    <Hidden
                        only={['sm', 'md', 'lg', 'xl']}
                    >
                        <TabsMaterial
                            value={currentTab}
                            onChange={handleChangeTab}
                            indicatorColor='secondary'
                            textColor='secondary'
                            fullWidth
                        >
                            {tabs && tabs.map((tab, index) => <Tab
                                key={index}
                                icon={tab.icon}
                            />)}
                        </TabsMaterial>
                    </Hidden>
                </AppBar>
            </section>
            <TabSection>
                {tabsContent && tabsContent[currentTab]}
            </TabSection>
        </>
    );
};