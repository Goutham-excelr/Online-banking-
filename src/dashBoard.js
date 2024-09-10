import { Grid, Button, Box, Stack } from "@mui/material";
import img from "./images/bank.jpeg";
import img1 from "./images/bank1.jpeg";

export default function Dashboard() {
    return (
        <Grid container spacing={2} pt={3} sx={{ maxWidth: '100%', overflowY: 'auto' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Box sx={{ backgroundColor: "#fff0f6", padding: 2, height: '100%', boxSizing: 'border-box' }}>
                        <h2>Welcome to Online Banking System</h2>
                        <p>
                            Welcome to our cutting-edge Online Banking System, where financial empowerment meets technological innovation. Seamlessly navigate through your financial journey with ease, as you initiate secure transactions, conveniently deposit funds into your accounts, and effortlessly withdraw when needed.
                            Our user-friendly interface ensures a smooth and intuitive experience, giving you full control over your finances from the comfort of your own device. With advanced security measures in place, you can trust that your sensitive information is safeguarded throughout every interaction. Join us on this digital financial expedition and unlock a new era of banking convenience and confidence.
                        </p>
                        <Box display="flex" justifyContent="start" pt={2}>
                            <Button variant="contained" size="small" color="error">
                                Get Started
                            </Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            position: 'relative',
                            width: '100%',
                            height: '300px', // Adjust this value as needed
                            overflow: 'hidden',
                        }}
                    >
                        <Box
                            component="img"
                            src={img}
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: 1,
                            }}
                        />
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={2} pt={3}>
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            position: 'relative',
                            width: '100%',
                            height: '300px', // Adjust this value as needed
                            overflow: 'hidden',
                        }}
                    >
                        <Box
                            component="img"
                            src={img1}
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: 1,
                            }}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{ backgroundColor: "#fff0f6", padding: 2, height: '100%', boxSizing: 'border-box', }}>
                        <h2>Experience Effortless Financial</h2>
                        <p>
                            Discover a new level of financial control through our intuitive Online Banking System. Seamlessly manage transactions, deposits, and withdrawals with a user-friendly interface designed to simplify your banking experience. Whether you're transferring funds, depositing savings, or making withdrawals, our platform ensures security and convenience at every step.
                            Empower yourself with effortless financial management and enjoy the freedom to take charge of your accounts from the comfort of your own device. Join us in revolutionizing the way you interact with your finances, as we pave the way for a more streamlined and secure banking future.
                        </p>
                        <Box display="flex" justifyContent="start" pt={2}>
                            <Button variant="contained" size="small" color="error">
                                Get Started
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    );
}
