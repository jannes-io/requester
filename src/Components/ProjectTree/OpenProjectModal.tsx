import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import FileInput, { InputType } from '../FileInput';
import { modalStyles as useStyles } from './styles';
import { IProject } from '../../Types/Project';
import { openProject } from '../../Services/RequestRepository';

interface IModalProps {
  open?: boolean;
  onClose: (project?: IProject) => void;
}

const OpenProjectModal: React.FC<IModalProps> = ({ open, onClose }) => {
  const [location, setLocation] = useState<string>();
  const classes = useStyles();
  const { t } = useTranslation('common');
  const { enqueueSnackbar } = useSnackbar();

  const handleOpen = () => {
    if (location === undefined) {
      enqueueSnackbar(t('open-project-modal.no-location'));
      return;
    }
    openProject(location)
      .then((project: IProject) => {
        enqueueSnackbar(t('open-project-modal.open-success', { projectName: project.name }), { variant: 'success' });
        onClose(project);
      })
      .catch(() => enqueueSnackbar(t('open-project-modal.open-failed'), { variant: 'error' }));
  };

  return <Dialog
    open={open || false}
    maxWidth="xl"
  >
    <DialogTitle>{t('open-project-modal.title')}</DialogTitle>
    <DialogContent className={classes.content}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FileInput
            id="open-project-location"
            type={InputType.FOLDER}
            onChange={setLocation}
          />
        </Grid>
      </Grid>
    </DialogContent>
    <DialogActions>
      <Button color="secondary" onClick={() => onClose()}>
        {t('open-project-modal.cancel')}
      </Button>
      <Button color="primary" variant="contained" onClick={handleOpen}>
        {t('open-project-modal.open')}
      </Button>
    </DialogActions>
  </Dialog>;
};

export default OpenProjectModal;
