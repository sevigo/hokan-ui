import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import clsx from 'clsx';
import React from 'react';
import { useSelector } from 'react-redux';


const useStyles = makeStyles(theme => ({
    confroot: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    cardroot: {
        maxWidth: 450,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
}));

const handleClick = () => {
    window.postMessage({ type: 'select:dir' })
}

const Dirs = ({ dirs }) => {
    const classes = useStyles();
    const config = useSelector(state => state.config)

    return (
        <div className={classes.confroot}>
            {config
                ? RecipeReviewCard(config)
                :
                <label htmlFor="add-dirs">
                    <Button variant="contained" color="primary" component="span" onClick={handleClick}>
                        Add directory
                    </Button>
                </label>
            }
        </div>
    );
}

export default Dirs

const RecipeReviewCard = (path) => {
    return (
        <Card className={classes.cardroot}>
            <CardHeader
                title="{path}"
                subheader="Settings:"
            />
            <CardContent>
                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={state.checkedB}
                                onChange={handleChange}
                                name="Recursive"
                                color="primary"
                            />
                        }
                        label="Recursive"
                    />

                </FormGroup>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}
