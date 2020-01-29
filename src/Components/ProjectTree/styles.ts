import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const newProjectModalStyles = makeStyles(() => createStyles({
  content: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
}));

export default makeStyles((theme: Theme) => createStyles({
  labelContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  divider: {
    marginBottom: theme.spacing(1),
  },
}));
