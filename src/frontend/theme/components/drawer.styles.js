import { makeStyles, fade, } from '@material-ui/core/styles';

export const drawerWidth = 260;

export const drawerStyles = makeStyles(theme => ({

    drawerList: {
        width: drawerWidth,
      },
      toolbar: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          padding: '0 8px',
          minHeight: 72,
      },
    
}));