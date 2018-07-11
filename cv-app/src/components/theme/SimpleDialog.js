/*
    Simple Dialog
*/
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import blue from '@material-ui/core/colors/blue'

const styles = {
    dialogTitle: {
        backgroundColor: 'rgba(0,0,0,0.03)',
    },
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },
};

const SimpleDialog = ({classes, title, list, open, onClose, onListItemClick}) => {

    return(
        <Dialog
            onClose={onClose}
            open={open}
            aria-labelledby="simple-dialog-title"
        >
            <DialogTitle
                id="simple-dialog-title"
                className={classes.dialogTitle}
            >
                {title}
            </DialogTitle>
            <div>
                <List>
                    {list.map(item => (
                    <ListItem
                        button
                        key={item.uid}
                        onClick={() => {
                            onListItemClick(item.uid);
                            onClose();
                        }}
                    >

                        {item.icon &&
                            <ListItemAvatar>
                                <Avatar
                                    className={classes.avatar}
                                >
                                    {item.icon}
                                </Avatar>
                            </ListItemAvatar>
                        }

                        <ListItemText
                            primary={item.label}
                        />

                    </ListItem>
                    ))}
                </List>
            </div>
        </Dialog>
    );

};

SimpleDialog.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onListItemClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(SimpleDialog);