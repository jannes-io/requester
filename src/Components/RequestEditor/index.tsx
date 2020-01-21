import React, { useEffect, useState } from 'react';
import {
  CircularProgress,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Fab,
  Grid,
  Typography,
} from '@material-ui/core';
import {
  ExpandMore as ExpandMoreIcon,
  Send as SendIcon,
} from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import useStyles from './styles';
import BodyEditor from './BodyEditor';
import UrlEditor from './UrlEditor';
import HeadersEditor from './HeadersEditor';
import { IRequest } from '../../Types/Request';
import InfoEditor from './InfoEditor';
import RequestHandler from '../../Services/RequestHandler';
import { IResponse } from '../../Types/Response';
import ResponseViewer from '../ResponseViewer';

export interface IEditorProps {
  request: IRequest;
  onChange: (newRequest: IRequest) => void;
}

const RequestEditor: React.FC<IEditorProps> = ({ request, onChange }) => {
  const [requestFields, setRequestFields] = useState<IRequest>(request);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<IResponse | null>(null);

  const classes = useStyles();
  const { t } = useTranslation('common');

  useEffect(() => setRequestFields(request), [request]);

  const handleRequestUpdate = (updatedRequest: IRequest) => {
    setRequestFields(updatedRequest);
    onChange(updatedRequest);
  };

  const handleSendRequest = () => {
    setResponse(null);
    setLoading(true);
    RequestHandler.sendRequest(requestFields)
      .then(setResponse)
      .then(() => setLoading(false));
  };

  return <Grid container spacing={3} className={classes.requestContainer}>
    <Grid item xs={12}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{t('request-editor.panel.info.summary')}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <InfoEditor request={requestFields} onChange={handleRequestUpdate} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
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
      <Fab
        variant="extended"
        color="primary"
        className={classes.fab}
        onClick={handleSendRequest}
        disabled={loading}
      >
        {loading
          ? <CircularProgress color="secondary" size={24} />
          : <>
            <SendIcon className={classes.sendIcon} />
            Send
          </>}
      </Fab>
    </Grid>
    {response !== null
      ? <Grid item xs={12}>
        <ResponseViewer response={response} />
      </Grid>
      : null}
  </Grid>;
};

export default RequestEditor;
