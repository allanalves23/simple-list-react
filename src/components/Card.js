import React from 'react';

import { Card, CardContent, Typography, CardActions, Button,
        makeStyles, Box, Divider} from '@material-ui/core';

import styles from './styles/CardStyles';

import Img1 from '../assets/img/1.jpg';
import Img2 from '../assets/img/2.jpg';
import Img3 from '../assets/img/3.jpg';
import Img4 from '../assets/img/4.jpg';
import Img5 from '../assets/img/5.jpg';
import Img6 from '../assets/img/6.jpg';

const loadStyles = makeStyles(styles);

const CustomCard = props => {
    const classes = loadStyles();

    let image = '';

    const user = props.user;

    switch(user.photo){
        case '1.jpg': {
            image = Img1;
            break;
        }
        case '2.jpg': {
            image = Img2;
            break;
        }
        case '3.jpg': {
            image = Img3;
            break;
        }
        case '4.jpg': {
            image = Img4;
            break;
        }
        case '5.jpg': {
            image = Img5;
            break;
        }
        default: {
            image = Img6;
        }
    }

    return (
        <Card className={classes.card} variant="outlined">
            <CardContent>
                <Box width="100%" display="flex" flexDirection="column" alignItems="center">
                    <img src={image} alt={user.name} className={classes.avatar} />
                    <Box mt={1} mb={3} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                        <Typography variant="h6" component="h2">
                            {user.name}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {user.role}
                        </Typography>
                    </Box>
                </Box>
                <Divider />
            </CardContent>
            <CardActions>
                <Box ml={2} mr={2} width="100%" display="flex" justifyContent="flex-end" alignItems="center">
                    <Button size="small" color="primary" onClick={ () => props.dispatchDialog(user)}>Visualizar</Button>
                </Box>
            </CardActions>
        </Card>
    )
}

export default CustomCard;