import React, { useState } from 'react';
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary, Fab,
  Grid,
  Typography,
} from '@material-ui/core';
import {
  ExpandMore as ExpandMoreIcon,
  Send as SendIcon,
  Save as SaveIcon,
} from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import useStyles from './styles';
import BodyEditor from './BodyEditor';
import UrlEditor from './UrlEditor';
import HeadersEditor from './HeadersEditor';
import { IRequest } from '../../Types/Request';

export interface IEditorProps {
  request: IRequest;
  onChange: (newRequest: IRequest) => void;
}

const RequestEditor: React.FC<{ request?: IRequest }> = ({ request }) => {
  const [requestFields, setRequestFields] = useState<IRequest>(request || {
    name: 'unnamed',
    description: '',
    method: 'GET',
    url: '',
    headers: [{
      id: 0,
      key: 'User-Agent',
      value: 'Requester',
      enabled: true,
    }],
  });

  const handleRequestUpdate = (updatedRequest: IRequest) => {
    setRequestFields(updatedRequest);
  };

  const classes = useStyles();
  const { t } = useTranslation('common');

  return <Grid container spacing={3} className={classes.requestContainer}>
    <Grid item xs={12}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{t('request-editor.panel.url.summary')}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <UrlEditor request={requestFields} onChange={handleRequestUpdate} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{t('request-editor.panel.headers.summary')}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <HeadersEditor request={requestFields} onChange={handleRequestUpdate} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{t('request-editor.panel.body.summary')}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <BodyEditor request={requestFields} onChange={handleRequestUpdate} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Grid>
    <Grid item xs={12} className={classes.actionContainer}>
      <Fab variant="extended" color="primary" className={classes.fab}>
        <SendIcon className={classes.sendIcon} />
        Send
      </Fab>
      <Fab color="secondary" className={classes.fab}>
        <SaveIcon />
      </Fab>
    </Grid>
  </Grid>;
};

export default RequestEditor;
