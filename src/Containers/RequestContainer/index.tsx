import React, { useState } from 'react';
import { AppBar, Tab, Tabs } from '@material-ui/core';
import {
  Add as AddIcon,
  Close as CloseIcon,
} from '@material-ui/icons';
import createEmptyRequest, { IRequest } from '../../Types/Request';
import TabPanel from '../../Components/TabPanel';
import RequestEditor from '../../Components/RequestEditor';
import useStyles from './styles';

const RequestContainer: React.FC = () => {
  const [requests, setRequests] = useState<IRequest[]>([]);
  const [tabIndex, setTabIndex] = useState(0);

  const classes = useStyles();

  const handleAddRequest = () => {
    setRequests([...requests, createEmptyRequest()]);
  };

  const handleUpdateRequest = (index: number) => (updatedRequest: IRequest) => {
    requests[index] = updatedRequest;
    setRequests([...requests]);
  };

  const handleRemoveRequest = (index: number) => {
    setRequests(requests.filter((_, i) => i !== index));
  };

  return <div className={classes.root}>
    <AppBar position="static" color="secondary">
      <Tabs
        value={tabIndex}
        indicatorColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        onChange={(_, newIndex) => setTabIndex(newIndex)}
      >
        {requests.map((request, i) => <Tab
          key={i}
          label={<span className={classes.tabLabel}>
            {request.name || 'Unnamed'}
            <CloseIcon
              fontSize="small"
              onClick={(e) => {
                e.stopPropagation();
                handleRemoveRequest(i);
              }} />
          </span>}
          className={classes.tab}
        />)}
        <Tab
          label={<AddIcon />}
          className={`${classes.tab} ${classes.addTab}`}
          onClick={handleAddRequest}
        />
      </Tabs>
    </AppBar>
    {requests.map((request, i) => <TabPanel key={i} index={i} value={tabIndex}>
      <RequestEditor request={request} onChange={handleUpdateRequest(i)} />
    </TabPanel>)}
  </div>;
};

export default RequestContainer;
