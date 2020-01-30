import React from 'react';
import { Button, Dialog, DialogActions, DialogContent,
        TextField, DialogTitle, Box, makeStyles } from '@material-ui/core';

import styles from './styles/DialogStyles';

const loadStyles = makeStyles(styles);

const UserDialog = props => {
    const classes = loadStyles();

    return (
            <Dialog
                open={true}
                onClose={props.closeDialog}
                maxWidth="xs"
            >
                <DialogTitle>
                    Dados do usuário
                </DialogTitle>
                <DialogContent>
                    <Box mb={2}>
                        <TextField
                            label="Nome" 
                            value={props.user.name}
                            disabled
                            fullWidth={true}
                            className={classes.textField}
                        />
                        <TextField
                            label="Profissão" 
                            value={props.user.role}
                            disabled
                            fullWidth={true}
                            className={classes.textField}
                        />
                        <TextField
                            label="Nacionalidade" 
                            value={props.user.country}
                            disabled
                            fullWidth={true}
                            className={classes.textField}
                        />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.closeDialog} color="primary">
                        Fechar
                    </Button>
                </DialogActions>
            </Dialog>
    );
}

export default UserDialog;