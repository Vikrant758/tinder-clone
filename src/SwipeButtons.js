import React from 'react'
import './SwipeButtons.css';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';

export const SwipeButtons = () => {
    return (
        <div className='swipeButtons' >
            <IconButton className='swipeButtonRepeat' >
                <ReplayIcon fontSize='large' />
            </IconButton>
            <IconButton className='swipeButtonLeft' >
                <CloseIcon fontSize='large' />
            </IconButton>
            <IconButton className='swipeButtonStar' >
                <StarRateIcon fontSize='large' />
            </IconButton>
            <IconButton className='swipeButtonRight' >
                <FavoriteIcon fontSize='large' />
            </IconButton>
            <IconButton className='swipeButtonLightning' >
                <FlashOnIcon fontSize='large' />
            </IconButton>

        </div>
    )
}

export default SwipeButtons;
