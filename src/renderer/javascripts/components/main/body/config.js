import React from 'react';
import { useSelector } from 'react-redux';
import Dirs from './directories';

const Config = () => {
    const flow = useSelector(state => state.flow)
    switch (flow.name) {
        case 'setup:dir':
            return (
                <div className="aside">
                    <Dirs />
                </div>
            )
        default:
            return null
    }
}

export default Config
