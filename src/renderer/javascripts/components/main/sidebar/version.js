import { green, red } from '@material-ui/core/colors';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import ErrorRoundedIcon from '@material-ui/icons/ErrorRounded';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    footer: {
        [theme.breakpoints.up('sm')]: {
            position: "absolute",
            width: "100%",
            bottom: "0px",

        }
    },
}));

const getVersion = (dispatch) => {
    fetch('http://localhost:8081/version')
        .then(res => res.json())
        .then((data) => {
            dispatch({ type: 'SET_VERSION', data });
        })
        .catch(err => {
            console.log('getVersion(): failure');
            console.log(err);
        });
}

const getStatus = (dispatch) => {
    fetch('http://localhost:8081/healthz')
        .then(() => {
            dispatch({ type: 'SET_STATUS_OK' });
        })
        .catch(err => {
            console.log('getStatus(): failure');
            console.log(err);
            dispatch({ type: 'SET_STATUS_ERROR' });
        });
}

const Version = () => {
    const dispatch = useDispatch()
    const ver = useSelector(state => state.version)
    const status = useSelector(state => state.status)
    const classes = useStyles();

    // code to run on component mount
    useEffect(() => {
        getVersion(dispatch)
        getStatus(dispatch)
        setInterval(() => {
            getStatus(dispatch)
        }, 5000)
    }, [])

    return (
        <span className={classes.footer} >
            <Divider />
            <List>
                <ListItem>
                    {status == 'ok'
                        ? <CheckCircleRoundedIcon style={{ color: green[500], paddingRight: "10px" }} />
                        : <ErrorRoundedIcon style={{ color: red[500], paddingRight: "10px" }} />
                    }
                    <ListItemText primary={`Hokan ${ver}`} />
                </ListItem>
            </List>
        </span>
    )
}

export default Version
