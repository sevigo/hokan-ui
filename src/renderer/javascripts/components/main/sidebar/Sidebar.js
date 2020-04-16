import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Version from './version';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  nested: {
    paddingLeft: theme.spacing(8),
  },
  toolbar: theme.mixins.toolbar,
}));

const getTargets = (dispatch) => {
  fetch('http://localhost:8081/api/targets')
    .then(res => res.json())
    .then((data) => {
      dispatch({ type: 'GET_TARGET_LIST', data });
    })
    .catch(err => {
      console.log('getTargets(): failure');
      console.log(err);
    });
}

const getDirectories = (dispatch) => {
  console.log('getDirectories():');
  fetch(`http://localhost:8081/api/directories`)
    .then(res => res.json())
    .then((data) => {
      if (data.meta.total_items > 0) {
        dispatch({ type: 'GET_DIR_LIST', data });
      } else {
        dispatch({ type: 'FLOW_SETUP_DIR' });
      }
    })
    .catch(err => {
      console.log('getTargetFiles(): failure');
      console.log(err);
    });
}
export default () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const targets = useSelector(state => state.targets)
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const getTargetFiles = (target) => {
    console.log('getTargetFiles(): target=', target);
    fetch(`http://localhost:8081/api/targets/${target}/files`)
      .then(res => res.json())
      .then((data) => {
        dispatch({ type: 'GET_TARGET_FILE_LIST', data });
      })
      .catch(err => {
        console.log('getTargetFiles(): failure');
        console.log(err);
      });
  }

  // code to run on component mount
  useEffect(() => {
    getTargets(dispatch)
    getDirectories(dispatch)
  }, [])

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Targets" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
      </List>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {targets
            ? Object.keys(targets).map((key, index) => (
              <ListItem button
                key={key}
                className={classes.nested}
                onClick={() => getTargetFiles(key)}
              >
                <ListItemText primary={key} />
              </ListItem>
            )) : ''}
        </List>
      </Collapse>

      <Version />
    </Drawer>
  )
}
