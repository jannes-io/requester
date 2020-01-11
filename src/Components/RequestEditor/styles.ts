import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) => createStyles({
  paper: {
    width: '100%',
    padding: theme.spacing(2),
  },
  requestContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  actionContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  fab: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  sendIcon: {
    marginRight: theme.spacing(1),
  },
}));
