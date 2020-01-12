import React, { useState } from 'react';
import { AppBar, Box, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { IResponse } from '../../Types/Response';
import useStyles from './styles';

interface ITabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

const TabPanel: React.FC<ITabPanelProps> = ({ children, value, index, ...other }) => <Typography
  component="div"
  role="tabpanel"
  hidden={value !== index}
  {...other}
>
  {value === index && <Box p={3}>{children}</Box>}
</Typography>;

const ResponseViewer: React.FC<{ response: IResponse }> = ({ response }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const { t } = useTranslation('common');
  const classes = useStyles();

  return <Paper>
    <AppBar position="static" className={classes.appBar}>
      <Tabs value={tabIndex} onChange={(_, newTab) => setTabIndex(newTab)}>
        <Tab label={t('response-viewer.tabs.body')} />
        <Tab label={t('response-viewer.tabs.headers')} />
      </Tabs>
      <div className={classes.grow} />
      <Typography>{response.statusText}</Typography>
    </AppBar>
    <TabPanel value={tabIndex} index={0}>
      <Typography>
        {response.body}
      </Typography>
    </TabPanel>
    <TabPanel value={tabIndex} index={1}>
      Test2
    </TabPanel>
  </Paper>;
};

export default ResponseViewer;
