import React from 'react'
import {
    Grid,
    Typography,
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import Theme from './../../components/theme/Theme'
import Portroit from './../../components/timeline/TimelinePortroit'
import TimelineCard from './timeline-card'
import TimelineIcon from '@material-ui/icons/Timeline'
import Pagination from './../../components/theme/pagination'

const styles = {
    container: {
        marginTop: '16px',
        marginBottom: '16px',
    },
    groupCaption:{
        marginBottom: '8px',
        fontWeight: 'bold',
        color: 'rgba(0,0,0,.54)',
        textTransform: 'uppercase',
    },
}

const Timeline = (props) => {

    const { classes } = props

    return (
        <Theme
            headerBackground={'linear-gradient(to right, rgb(106, 27, 154), rgb(142, 36, 170))'}
            shadowScrollDisabled={true}
            appBarElevation={2}
        >
            <Portroit />
            <section
                className={classes.container}
            >
                <Grid
                    container
                    justify='center'
                >
                    <Grid
                        item
                        xs={11}
                        sm={10}
                        md={6}
                    >
                        <Grid
                            container
                        >
                            <Grid
                                item
                                xs={12}
                            >
                                <Typography
                                    className={classes.groupCaption}
                                    autoCapitalize={'true'}
                                >
                                    <TimelineIcon style={{fontSize: '16px', verticalAlign: 'middle'}} /> Timeline
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            spacing={16}
                        >
                            <Grid
                                item
                                xs={12}
                            >
                                <TimelineCard />
                            </Grid>
                            <Grid
                                item
                                xs={12}
                            >
                                <TimelineCard />
                            </Grid>
                            <Grid
                                item
                                xs={12}
                            >
                                <TimelineCard />
                            </Grid>
                            <Grid
                                item
                                xs={12}
                            >
                                <Pagination
                                    totalRecords={100}
                                    pageLimit={12}
                                    pageNeighbours={1}
                                    onPageChanged={(data) => { }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </section>
        </Theme>
    )

}

export default withStyles(styles)(Timeline)