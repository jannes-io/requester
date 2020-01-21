import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  tab: {
    overflow: 'hidden',
  },
  addTab: {
    minWidth: theme.spacing(8),
    width: theme.spacing(8),
  },
  tabLabel: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    textTransform: 'none',
  },
}));
