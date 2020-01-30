import React from 'react';

import { AppBar, Toolbar, makeStyles,
        Typography, Box, IconButton, Tooltip} from '@material-ui/core';

import styles from './styles/MenuStyles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faReact } from '@fortawesome/free-brands-svg-icons';

import {angularAppUrl} from '../config/urls';

const loadStyles = makeStyles(styles);

const Menu = props => {
    const classes = loadStyles();

    const goToAngularApp = () => {
        window.location.href = angularAppUrl;
    }

    return (
        <AppBar position="static" className={classes.menu}>
            <Toolbar>
                <Box display="flex" width="100%" justifyContent="space-between" alignItems="center"> 
                    <Box display="flex" alignItems="center">
                        <Box mr={1}>
                            <FontAwesomeIcon icon={faReact} size="2x"/>
                        </Box>
                        <Typography variant="h6">
                            React APP
                        </Typography>
                    </Box>
                    <Box>
                        <Tooltip title={(<Typography>Ir para o angular APP</Typography>)}>
                            <IconButton color="inherit" onClick={goToAngularApp}>
                                <FontAwesomeIcon icon={faAngular}/>
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    )
}


export default Menu;