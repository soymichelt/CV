import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { dialogListStyles } from './dialog-list.styles';

export const DialogList = ({title, list, open, onClose, onItemClick,}) => {
    const classes = dialogListStyles();
    return (
        <Dialog onClose={onClose} open={open}>
            <DialogTitle className={classes.dialogTitle}>
                {title}
            </DialogTitle>
            <div>
                <List>
                    {list.map(item => <ListItem
                            button
                            key={item.id}
                            onClick={() => {
                                onItemClick(item.id);
                                onClose();
                            }}
                        >
                            {item.icon &&
                                <ListItemAvatar>
                                    <Avatar className={classes.avatar}>
                                        {item.icon}
                                    </Avatar>
                                </ListItemAvatar>
                            }
                            <ListItemText primary={item.label} />
                        </ListItem>
                    )}
                </List>
            </div>
        </Dialog>
    );
};