import React, { useState } from 'react';
import { TreeItem, TreeView } from '@material-ui/lab';
import {
  Add as AddIcon,
  ArrowDropDown as CollapseIcon,
  ArrowRight as ExpandIcon,
  Folder as BrowseIcon,
} from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import {
  Divider,
  IconButton,
  Tooltip,
  Typography,
} from '@material-ui/core';
import useStyles from './styles';
import NewProjectModal from './NewProjectModal';
import OpenProjectModal from './OpenProjectModal';

const ProjectTree: React.FC = () => {
  const { t } = useTranslation('common');
  const classes = useStyles();
  const [newProjectModalOpen, setNewProjectModalOpen] = useState(false);
  const [openProjectModalOpen, setOpenProjectModelOpen] = useState(false);

  return <>
    <span className={classes.labelContainer}>
      <Typography>
        {t('drawer.project-explorer.title')}
      </Typography>
      <span>
        <Tooltip title={t('drawer.project-explorer.new-project')} placement="top">
          <IconButton size="small" onClick={() => setNewProjectModalOpen(true)}>
            <AddIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title={t('drawer.project-explorer.open-project')} placement="top">
          <IconButton size="small" onClick={() => setOpenProjectModelOpen(true)}>
            <BrowseIcon />
          </IconButton>
        </Tooltip>
      </span>
    </span>
    <Divider className={classes.divider} />
    <TreeView defaultExpandIcon={<ExpandIcon />} defaultCollapseIcon={<CollapseIcon />}>
      <TreeItem nodeId="2" label="Test Project">
        <TreeItem nodeId="3" label="Test Request 1" />
        <TreeItem nodeId="4" label="Test Request 2" />
        <TreeItem nodeId="5" label="Test Request 3" />
      </TreeItem>
    </TreeView>
    <NewProjectModal
      open={newProjectModalOpen}
      onClose={() => setNewProjectModalOpen(false)}
    />
    <OpenProjectModal
      open={openProjectModalOpen}
      onClose={() => setOpenProjectModelOpen(false)}
    />
  </>;
};

export default ProjectTree;
