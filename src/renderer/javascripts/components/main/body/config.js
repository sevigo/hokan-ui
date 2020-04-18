import React from 'react';
import { useSelector } from 'react-redux';
import DirConfig from './config/dir';

const Config = ({ info }) => {
    const flow = useSelector(state => state.flow)

    switch (flow.name) {
        case 'setup:dir':
            return (
                <div className="aside">
                    <DirConfig info={info} />
                </div>
            )
        default:
            return null
    }
}

export default Config
