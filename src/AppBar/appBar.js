import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { Stack} from '@mui/material';
import { Route,Link } from 'react-router-dom';

function MainBar() {
    return (
        <AppBar position="static" sx={{ bgcolor: 'lightgray' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AccountBalanceIcon sx={{ color: "red", display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'black',
                            textDecoration: 'none',
                        }}
                    >
                        Online Banking
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <Link
                          
                            underline="none"
                            sx={{
                                color: 'red',
                                transition: 'color 0.3s, transform 0.3s',
                                '&:hover': {
                                    color: 'blue',
                                    transform: 'scale(1.1)',
                                    zIndex: 1
                                }
                            }}
                        >
                            About Us

                        </Link>
                        <Link
                            href="#"
                            underline="none"
                            sx={{
                                color: 'red',
                                transition: 'color 0.3s, transform 0.3s',
                                '&:hover': {
                                    color: 'blue',
                                    transform: 'scale(1.1)',
                                    zIndex: 1
                                }
                            }}
                        >

                            Contact Us
                        </Link>

                    </Stack>

                    <Box sx={{ flexGrow: 1 }} />
                    <Stack direction="row" spacing={4}>
                        <Link
                           to="/signup"
                            underline="none"
                            sx={{
                                color: 'red',
                                transition: 'color 0.3s, transform 0.3s',
                                '&:hover': {
                                    color: 'blue',
                                    transform: 'scale(1.1)',
                                    zIndex: 1
                                }
                            }}
                        >
                            SignIn/SignUp
                        </Link>

                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default MainBar;
