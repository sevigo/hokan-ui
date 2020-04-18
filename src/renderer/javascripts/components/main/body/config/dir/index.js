import Button from '@material-ui/core/Button';
import React from 'react';
import { useSelector } from 'react-redux';
import DirConfigCard from './card';

const handleClick = () => {
    window.postMessage({ type: 'select:dir' })
}


// import { makeStyles } from '@material-ui/core/styles';
// const useStyles = makeStyles(theme => ({
//     confroot: {},
// }));

const DirConfig = ({ info }) => {
    // const classes = useStyles();
    const selectedPath = useSelector(state => state.config)
    return (
        <div className="confroot">
            {selectedPath
                ? <DirConfigCard info={info} path={selectedPath} />
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

export default DirConfig
