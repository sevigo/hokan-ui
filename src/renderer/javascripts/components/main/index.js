import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import Body from './body/Body'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Sidebar />
      <Body />
    </div>
  )
}
