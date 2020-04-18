import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import React from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        '& .MuiTextField-root': {
            margin: theme.spacing(2),
            width: '50ch',
        },
        display: 'flex',
        maxWidth: 450,
        list: {
            width: 200,
            height: 230,
            backgroundColor: theme.palette.background.paper,
            overflow: 'auto',
        },
    },
}));

const DirConfigCard = ({ path, machine }) => {
    const classes = useStyles();
    const targets = ["Google Drive", "AWS", "MinIO", "Local"]

    return (
        <Card className={classes.root}>
            <form className="formroot" noValidate autoComplete="off">
                <CardHeader
                    title="Automatically backup this directory"
                    subheader="Settings:"
                />
                <CardContent>
                    <FormControl component="fieldset" className="formControl">
                        <FormControlLabel className="formControl"
                            control={<Checkbox checked={true} name="recursive" color="primary" />}
                            label="Backup all subfolders"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={true} name="active" color="primary" />}
                            label="Activate backup"
                        />
                        <TextField
                            id="directory"
                            label="Directory"
                            defaultValue={`"${path}"`}
                            variant="outlined"
                        />
                        <TextField
                            id="machine-name"
                            label="Machine"
                            defaultValue={`"${info.machine}"`}
                            variant="outlined"
                        />
                    </FormControl>
                    <Divider />
                    <List className="list" dense component="div" role="list">
                        {targets.map((value) => {
                            return (
                                <ListItem key={value} role="listitem" button >
                                    <ListItemIcon>
                                        <Checkbox checked={false} />
                                    </ListItemIcon>
                                    <ListItemText id="" primary={`${value}`} />
                                </ListItem>
                            );
                        })}
                    </List>

                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="save">
                        <SaveIcon />
                    </IconButton>
                </CardActions>
            </form>
        </Card>
    );
}

export default DirConfigCard