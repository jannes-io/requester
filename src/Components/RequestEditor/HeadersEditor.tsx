import React from 'react';
import { Checkbox, IconButton, Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@material-ui/core';
import {
  DeleteForever as DeleteIcon,
  Save as SaveIcon,
} from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import { IEditorProps } from './index';
import { IHeader } from '../../Types/Request';

interface IHeaderRowProps {
  header: IHeader;
  onChange: (headerKey: string, header: IHeader) => void;
  onDelete: (headerKey: string) => void;
}

const HeaderRow: React.FC<IHeaderRowProps> = ({ header, onChange, onDelete }) => {
  const handleChange = (fieldName: keyof IHeader, newValue: any) => {
    onChange(header.key, { ...header, [fieldName]: newValue });
  };

  return <TableRow>
    <TableCell padding="checkbox">
      <Checkbox
        checked={header.enabled}
        onChange={(e) => handleChange('enabled', e.target.checked)}
      />
    </TableCell>
    <TableCell>
      <TextField
        fullWidth
        value={header.key}
        onChange={(e) => handleChange('key', e.target.value)}
      />
    </TableCell>
    <TableCell>
      <TextField
        fullWidth
        value={header.value}
        onChange={(e) => handleChange('value', e.target.value)}
      />
    </TableCell>
    <TableCell padding="checkbox">
      <IconButton onClick={() => onDelete(header.key)}>
        <DeleteIcon />
      </IconButton>
    </TableCell>
  </TableRow>;
};

const NewHeaderRow: React.FC<{ onSave: (newHeader: IHeader) => void }> = ({ onSave }) => {
  const headerTemplate: IHeader = {
    id: -1,
    key: '',
    value: '',
    enabled: true,
  };
  const [header, setHeader] = React.useState<IHeader>(headerTemplate);
  const handleChange = (fieldName: keyof IHeader, newValue: any) => {
    setHeader({ ...header, [fieldName]: newValue });
  };

  return <TableRow>
    <TableCell colSpan={2}>
      <TextField
        fullWidth
        value={header.key}
        onChange={(e) => handleChange('key', e.target.value)}
      />
    </TableCell>
    <TableCell>
      <TextField
        fullWidth
        value={header.value}
        onChange={(e) => handleChange('value', e.target.value)}
      />
    </TableCell>
    <TableCell padding="checkbox">
      <IconButton onClick={() => {
        onSave(header);
        setHeader(headerTemplate);
      }}>
        <SaveIcon />
      </IconButton>
    </TableCell>
  </TableRow>;
};

interface IHeadersEditorProps extends IEditorProps {
}

const HeadersEditor: React.FC<IHeadersEditorProps> = ({ request, onChange }) => {
  const { t } = useTranslation('common');

  const handleHeaderCreate = (newHeader: IHeader) => {
    request.headers.push(newHeader);
    onChange({ ...request });
  };

  const handleHeaderUpdate = (headerKey: string, updatedHeader: IHeader) => {
    const index = request.headers.findIndex(({ key }) => key === headerKey);
    request.headers[index] = updatedHeader;
    onChange({ ...request });
  };

  const handleHeaderDelete = (headerKey: string) => {
    request.headers = request.headers.filter(({ key }) => key !== headerKey);
    onChange({ ...request });
  };

  return <Table size="small">
    <TableHead>
      <TableRow>
        <TableCell padding="none" />
        <TableCell>{t('request-editor.panel.headers.fields.key')}</TableCell>
        <TableCell>{t('request-editor.panel.headers.fields.value')}</TableCell>
        <TableCell padding="none" />
      </TableRow>
    </TableHead>
    <TableBody>
      {request.headers.map((header) => <HeaderRow
        key={header.id}
        header={header}
        onChange={handleHeaderUpdate}
        onDelete={handleHeaderDelete}
      />)}
      <NewHeaderRow onSave={handleHeaderCreate} />
    </TableBody>
  </Table>;
};

export default HeadersEditor;
