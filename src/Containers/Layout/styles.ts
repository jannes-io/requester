import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default (isOpen: boolean) => makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(3),
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: isOpen
      ? theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      })
      : theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    marginLeft: isOpen ? theme.spacing(30) : 'initial',
    width: isOpen ? `calc(100% - ${theme.spacing(30)}px)` : '100%',
  },
  menuButton: {
    marginRight: theme.spacing(3),
    display: isOpen ? 'none' : 'initial',
  },
  title: {
    color: theme.palette.primary.contrastText,
    flexGrow: 1,
    fontWeight: 'bold',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: isOpen ? theme.spacing(30) : 0,
    transition: isOpen
      ? theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      })
      : theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    overflowX: isOpen ? 'initial' : 'hidden',
  },
  drawerContent: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 8px',
  },
  appBarSpacer: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(7),
    },
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(8),
    },
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  logoIcon: {
    height: 42,
    marginLeft: theme.spacing(1),
    filter: 'brightness(0) invert(1)',
  },
  grow: {
    flexGrow: 1,
  },
  chevron: {
    color: 'white',
    display: isOpen ? 'initial' : 'none',
  },
}));
