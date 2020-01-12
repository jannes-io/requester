import React from 'react';
import { FormControl, InputLabel, TextField, Select, MenuItem, Grid } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { IEditorProps } from './index';
import { Method } from '../../Types/Request';

interface IUrlEditorProps extends IEditorProps {
}

const UrlEditor: React.FC<IUrlEditorProps> = ({ request, onChange }) => {
  const { t } = useTranslation('common');

  return <Grid container spacing={2}>
    <Grid item md={2} sm={4} xs={12}>
      <FormControl fullWidth>
        <InputLabel>{t('request-editor.panel.url.fields.method')}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={request.method}
          onChange={(e) => onChange({ ...request, method: e.target.value as Method })}
        >
          <MenuItem value="GET">GET</MenuItem>
          <MenuItem value="HEAD">HEAD</MenuItem>
          <MenuItem value="POST">POST</MenuItem>
          <MenuItem value="PUT">PUT</MenuItem>
          <MenuItem value="PATCH">PATCH</MenuItem>
          <MenuItem value="DELETE">DELETE</MenuItem>
          <MenuItem value="OPTIONS">OPTIONS</MenuItem>
        </Select>
      </FormControl>
    </Grid>
    <Grid item md={10} sm={8} xs={12}>
      <TextField
        fullWidth
        label={t('request-editor.panel.url.fields.url')}
        value={request.url}
        onChange={(e) => onChange({ ...request, url: e.target.value })}
      />
    </Grid>
    {/*
    <Grid item sm={12}>
      Query params placeholder
    </Grid>
    */}
  </Grid>;
};

export default UrlEditor;
