import React from 'react';
import { Box, Typography } from '@material-ui/core';

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
  <Box p={3}>{children}</Box>
</Typography>;

export default TabPanel;
