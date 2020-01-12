import React from 'react';
import { Typography } from '@material-ui/core';
import { IResponse } from '../../Types/Response';

const ResponseViewer: React.FC<{ response: IResponse }> = ({ response }) => {
  return <Typography>{response.statusText}</Typography>;
};

export default ResponseViewer;
