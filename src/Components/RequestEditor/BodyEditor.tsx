import React from 'react';
import { TextField } from '@material-ui/core';
import { IEditorProps } from './index';

interface IBodyEditorProps extends IEditorProps {
}

const BodyEditor: React.FC<IBodyEditorProps> = ({ request, onChange }) => {
  const handleChange = (newBody: string) => {
    onChange({ ...request, body: newBody });
  };

  return <TextField
    fullWidth
    multiline
    variant="outlined"
    value={request.body}
    onChange={(e) => handleChange(e.target.value)}
  />;
};

export default BodyEditor;
