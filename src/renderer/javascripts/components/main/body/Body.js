import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useSelector } from 'react-redux';
import Config from './config';
import Files from './files';

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default () => {
  const classes = useStyles();
  const files = useSelector(state => state.files)

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      {files ? <Files list={files} /> : ''}
      <Config />
    </main >
  )
}

// Breadcrumbs