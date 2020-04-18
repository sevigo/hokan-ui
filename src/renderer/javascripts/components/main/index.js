import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Body from './body/Body'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
}));

const getInfo = (dispatch) => {
  fetch(`http://localhost:8081/info`)
    .then(res => res.json())
    .then((data) => {
      dispatch({ type: 'SET_INFO', data });
    })
    .catch((err) => {
      console.log(err)
    });
}

export default () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const info = useSelector(state => state.info)

  // code to run on component mount
  useEffect(() => {
    getInfo(dispatch)
  }, [])

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Sidebar info={info} />
      <Body info={info} />
    </div>
  )
}
