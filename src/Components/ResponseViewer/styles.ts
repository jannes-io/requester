import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) => createStyles({
  appBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: theme.spacing(2),
  },
  grow: {
    flexGrow: 1,
  },
}));
