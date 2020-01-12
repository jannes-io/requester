import React from 'react';
import { Checkbox, IconButton, Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@material-ui/core';
import {
  DeleteForever as DeleteIcon,
  Save as SaveIcon,
} from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import { IEditorProps } from './index';
import { IRequestHeader } from '../../Types/Request';

interface IHeaderFieldsProps {
  header: IRequestHeader;
  onChange: (fieldName: keyof IRequestHeader, newValue: any) => void;
}

const HeaderFields: React.FC<IHeaderFieldsProps> = ({ header, onChange, children }) => (<TableRow>
  <TableCell padding="checkbox">
    <Checkbox
      checked={header.enabled}
      onChange={(e) => onChange('enabled', e.target.checked)}
    />
  </TableCell>
  <TableCell>
    <TextField
      fullWidth
      value={header.key}
      onChange={(e) => onChange('key', e.target.value)}
    />
  </TableCell>
  <TableCell>
    <TextField
      fullWidth
      value={header.value}
      onChange={(e) => onChange('value', e.target.value)}
    />
  </TableCell>
  <TableCell padding="checkbox">
    {children}
  </TableCell>
</TableRow>);

interface IHeaderRowProps {
  header: IRequestHeader;
  onChange: (headerId: number, header: IRequestHeader) => void;
  onDelete: (headerId: number) => void;
}

const HeaderRow: React.FC<IHeaderRowProps> = ({ header, onChange, onDelete }) => {
  const handleChange = (fieldName: keyof IRequestHeader, newValue: any) => {
    onChange(header.id, { ...header, [fieldName]: newValue });
  };

  return <HeaderFields header={header} onChange={handleChange}>
    <IconButton onClick={() => onDelete(header.id)}>
      <DeleteIcon />
    </IconButton>
  </HeaderFields>;
};

const NewHeaderRow: React.FC<{
  onSave: (newHeader: IRequestHeader) => void
}> = ({ onSave }) => {
  const headerTemplate: IRequestHeader = {
    id: -1,
    key: '',
    value: '',
    enabled: true,
  };
  const [header, setHeader] = React.useState<IRequestHeader>(headerTemplate);
  const handleChange = (fieldName: keyof IRequestHeader, newValue: any) => {
    setHeader({ ...header, [fieldName]: newValue });
  };

  return <HeaderFields header={header} onChange={handleChange}>
    <IconButton onClick={() => {
      onSave(header);
      setHeader(headerTemplate);
    }}>
      <SaveIcon />
    </IconButton>
  </HeaderFields>;
};

interface IHeadersEditorProps extends IEditorProps {
}

const HeadersEditor: React.FC<IHeadersEditorProps> = ({ request, onChange }) => {
  const { t } = useTranslation('common');

  const handleHeaderCreate = (newHeader: IRequestHeader) => {
    const highestId = request.headers.reduce((max, { id }) => (max < id ? id : max), 0);
    request.headers.push({ ...newHeader, id: highestId + 1 });
    onChange({ ...request });
  };

  const handleHeaderUpdate = (headerId: number, updatedHeader: IRequestHeader) => {
    const index = request.headers.findIndex(({ id }) => id === headerId);
    request.headers[index] = updatedHeader;
    onChange({ ...request });
  };

  const handleHeaderDelete = (headerId: number) => {
    request.headers = request.headers.filter(({ id }) => id !== headerId);
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
