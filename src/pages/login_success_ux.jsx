import React from "react";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

export default function login_success_ux() {
    const classes = useStyles();
    return (
        <Container>
            <h1>
            Welcome (userName)!
            </h1>

            <h3>
            Hours Meditated:
                <br/>
            Weekly Goal:
                <br/>
            Current Streak:
                <br/>
            </h3>



            <div className={classes.userDataGraph}>
                Graph/Use data goes here
            </div>
            <div className={classes.meditateButton}>
                <Link to="/meditation">
                    <Button
                    type="submit"
                    fullWidth
                    variant="outlined"
                    color="primary"
                    className= "navButton"
                    >
                        Begin Meditating
                    </Button>
                </Link>
            </div>
            
        </Container>
    );
}

const useStyles = makeStyles((theme) => ({
    meditateButton: {
        marginTop: theme.spacing(),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end'
    },

    userDataGraph: {
        marginTop: theme.spacing(25),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
    }
}));
