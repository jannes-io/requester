import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Paper,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Tabs,
  Typography,
} from '@material-ui/core';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierHeathDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
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
      <SyntaxHighlighter style={atelierHeathDark} showLineNumbers>
        {JSON.stringify(JSON.parse(response.body || '{}'), null, 2)}
      </SyntaxHighlighter>
    </TabPanel>
    <TabPanel value={tabIndex} index={1}>
      <Table size="small">
        <TableBody>
          {response.headers.map(({ key, value }) => <TableRow key={key}>
            <TableCell><Typography>{key}</Typography></TableCell>
            <TableCell><Typography>{value}</Typography></TableCell>
          </TableRow>)}
        </TableBody>
      </Table>
    </TabPanel>
  </Paper>;
};

export default ResponseViewer;
