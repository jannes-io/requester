import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  CssBaseline,
  Toolbar,
  AppBar,
  IconButton,
  Drawer,
  Container,
  Grid,
  Typography,
  Zoom,
} from '@material-ui/core';
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  Http as HttpIcon,
} from '@material-ui/icons';
import useStyles from './styles';

const Layout: React.FC = ({
  children,
}) => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation('common');
  const classes = useStyles(open)();

  return <div className={classes.root}>
    <CssBaseline />
    <AppBar
      position="absolute"
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open nav"
          onClick={() => {
            setOpen(true);
          }}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography component="h1" variant="h6" color="primary" className={classes.title}>
          {t('app-name')}
        </Typography>
        <div className={classes.grow} />
      </Toolbar>
    </AppBar>
    <Drawer
      variant="permanent"
      classes={{ paper: classes.drawerPaper }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <Zoom in={open}>
          <HttpIcon className={classes.logoIcon} />
        </Zoom>
        <IconButton onClick={() => {
          setOpen(false);
        }}
        >
          <ChevronLeftIcon className={classes.chevron} />
        </IconButton>
      </div>
    </Drawer>
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="xl" className={classes.container}>
        <Grid component="div" container spacing={3}>
          {children}
        </Grid>
      </Container>
    </main>
  </div>;
};

export default Layout;
