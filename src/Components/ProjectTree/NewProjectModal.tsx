import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField } from '@material-ui/core';
import FileInput, { InputType } from '../FileInput';
import { newProjectModalStyles as useStyles } from './styles';
import { IProject } from '../../Types/Project';

interface IModalProps {
  open?: boolean;
  onClose?: () => void;
}

const NewProjectModal: React.FC<IModalProps> = ({ open, onClose }) => {
  const [project, setProject] = useState<IProject>({
    name: '',
  });
  const classes = useStyles();
  const { t } = useTranslation('common');

  return <Dialog
    open={open || false}
    maxWidth="xl"
  >
    <DialogTitle>{t('new-project-modal.title')}</DialogTitle>
    <DialogContent className={classes.content}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label={t('new-project-modal.name')}
            value={project.name}
            onChange={(e) => setProject({ ...project, name: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <FileInput
            id="project-location"
            type={InputType.FOLDER}
            onChange={(location) => setProject({ ...project, location })}
          />
        </Grid>
      </Grid>
    </DialogContent>
    <DialogActions>
      <Button color="secondary" onClick={onClose}>
        {t('new-project-modal.cancel')}
      </Button>
      <Button color="primary" variant="contained">
        {t('new-project-modal.create')}
      </Button>
    </DialogActions>
  </Dialog>;
};

export default NewProjectModal;
