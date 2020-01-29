import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, createStyles, Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const dialog = window.require !== undefined ? window.require('electron').remote.dialog : {
  showOpenDialog: (properties: any) => `Not supported outside of electron!${properties}`,
};

export enum InputType {
  FILE,
  FOLDER,
}

interface IFileInputProps {
  id: string;
  type: InputType;
  onChange: (location: string) => void;
}

const useStyles = makeStyles(() => createStyles({
  label: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
}));

const FileInput: React.FC<IFileInputProps> = ({
  id,
  type,
  onChange,
}) => {
  const { t } = useTranslation('common');
  const [fileName, setFileName] = useState<string>(t('file-input.no-selection'));
  const classes = useStyles();

  const handleOnClick = async () => {
    const selected = (await dialog.showOpenDialog({
      properties: [type === InputType.FILE ? 'openFile' : 'openDirectory'],
    })).filePaths[0];

    if (selected !== undefined) {
      setFileName(selected);
      onChange(selected);
    }
  };

  return <label htmlFor={id} className={classes.label}>
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Button
          fullWidth
          color="primary"
          variant="contained"
          onClick={handleOnClick}
        >
          {type === InputType.FILE ? t('file-input.select-file') : t('file-input.select-folder')}
        </Button>
      </Grid>
      <Grid item xs={8}>
        <TextField
          fullWidth
          value={fileName}
          disabled={fileName === t('file-input.no-selection')}
          onChange={(e) => setFileName(e.target.value)}
        />
      </Grid>
    </Grid>
  </label>;
};

export default FileInput;
