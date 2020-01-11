import React from 'react';
import { Grid, TextField } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { IEditorProps } from './index';
import { IRequest } from '../../Types/Request';

interface IInfoEditorProps extends IEditorProps {
}

const InfoEditor: React.FC<IInfoEditorProps> = ({ request, onChange }) => {
  const { t } = useTranslation('common');
  const handleChange = (key: keyof IRequest, newValue: any) => {
    onChange({ ...request, [key]: newValue });
  };

  return <Grid container spacing={2}>
    <Grid item md={4} xs={12}>
      <TextField
        fullWidth
        label={t('request-editor.panel.info.fields.name')}
        value={request.name}
        onChange={(e) => handleChange('name', e.target.value)}
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
        fullWidth
        multiline
        label={t('request-editor.panel.info.fields.description')}
        value={request.description}
        onChange={(e) => handleChange('description', e.target.value)}
      />
    </Grid>
  </Grid>;
};

export default InfoEditor;
