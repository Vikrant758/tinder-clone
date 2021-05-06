import React from 'react';
import "./Header.css";
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link, useHistory } from "react-router-dom";
function Header({ backButton }) {
    const history = useHistory();
    return (
        <div className='header'>
            {backButton ?
                (<IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIosIcon fontSize='large' className='headerIcon' />
                </IconButton>)
                : (<IconButton>
                    <PersonIcon fontSize='large' className='headerIcon' />
                </IconButton>)
            }
            <Link to='/'>
                <img className="headerLogo" src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem-700x394.png" alt="tinder" />
            </Link>

            <Link to='/chat'>
                <IconButton>
                    <ForumIcon fontSize='large' className='headerIcon' />
                </IconButton>
            </Link>

        </div>
    )
}

export default Header
