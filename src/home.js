import React from 'react';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { Grid, Card, CardHeader, CardContent, Typography, CardMedia, Stack, Button } from '@mui/material';
import './home.css';
import SlideImages from './components/imageSlider';
import { FaRegIdCard } from "react-icons/fa"; 
import { FaExchangeAlt,FaSyncAlt,FaUniversity,FaWallet } from 'react-icons/fa';
import { FaRegFileAlt } from "react-icons/fa";
import { IoReceiptSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import CallIcon from '@mui/icons-material/Call';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import PersonAddAlt1RoundedIcon from '@mui/icons-material/PersonAddAlt1Rounded';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import HistoryIcon from '@mui/icons-material/History';
import { useNavigate } from 'react-router-dom';


const icons = [
//   <AccountBalanceWalletIcon sx={{ fontSize: 70 }} />,
//   <AccountBalanceIcon sx={{ fontSize: 70 }} />,

];

export default function Home() {
    const navigate=useNavigate()
  const cardData = [
    {
      content: "Account Data", 
      icon: <FaRegIdCard style={{ fontSize: 70 }} />,
      link:"/accountdata"
    },
    {
      content: "Self Transfer",
      icon: <FaSyncAlt style={{ fontSize: 70 }}/>,
       link:"/SelfTransfer"
    },
    {
      content:"To Another Bank Account", 
      icon: <FaExchangeAlt style={{ fontSize: 70 }}/>,
      link:"/ToAnotherBankAccount"
    },
    {
        content: "Bank Statement",
        icon: <FaRegFileAlt style={{ fontSize: 70 }}/>,
        link:"/BankStatement"
      },
      {
        content: "Bills Payment", 
        icon: <IoReceiptSharp style={{ fontSize: 70 }}/>, 
         link:"/BillsPayment"
      },
      {
        content: "Check Balance",
        icon: <FaWallet style={{ fontSize: 70 }}/>, 
         link:"/CheckBalance"
      }
  ];

  return (
    <>
   <Grid
  container
  spacing={2}
  justifyContent="center"
  sx={{
    backgroundImage: 'url("https://media.gettyimages.com/id/1071711902/vector/blue-light-beam-on-black-background.jpg?s=612x612&w=0&k=20&c=fJnIKyhCLHoKXgfcTOaRHQ66nkwlHVdM5KnHvI_CmyY=")', 
    backgroundSize: 'cover', 
    backgroundPosition: 'center',
    height: 'calc(100vh - 64px)', // Adjust based on AppBar height (default AppBar height is usually 64px)
    overflowY: 'auto' // Allows the Grid to scroll when content overflows
  }}
>
  <Grid item xs={12}>
    <Stack sx={{ maxWidth:"70%", maxHeight: "60vh", margin: 'auto' }} pt={6}>
      <SlideImages />
    </Stack>
  </Grid>
  <Grid item xs={12} padding={3}>
    <Grid container spacing={2} justifyContent="center" pt={6}>
      {cardData.map((data, index) => (
        <Grid item xs={12} sm={6} md={4} key={index} padding={1}> 
          <Card sx={{ maxWidth: 200, maxHeight: "40vh", margin: 'auto' }} onClick={()=>{navigate(data.link)}}> 
            <CardHeader
              title={<Typography>{data.title}</Typography>}
            />
            <CardMedia
              sx={{ display: 'flex', justifyContent: 'center', padding: '8px' }}  
            >
              {data.icon}
            </CardMedia>
            <CardContent 
              sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                height: '100%'
              }}>
              <Typography sx={{ fontWeight: 'bold', textAlign: 'center' }}>{data.content}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Grid>
  <Grid 
          item 
          xs={12} 
          md={12} 
          display="flex" 
          justifyContent="center" 
          alignItems="center" 
          pt={6}
          pb={4} 
        >
     <Card sx={{ minWidth: '60%', maxHeight: '10vh', textAlign: 'center', borderRadius: '100px' }}>
  <Stack
    direction="row"
    alignItems="center"
    justifyContent="space-between"
    sx={{ padding: 1, height: '100%' }} // Ensure Stack takes full height
  >
    <Button 
      size="small" 
      endIcon={<CallIcon style={{ fontSize: 20 }} />} 
      sx={{ minHeight: '5vh', padding: '4px 8px' }} // Adjust button size and padding
    >
      Contact Us
    </Button>
    <Button 
      size="small" 
      endIcon={<PersonAddAlt1RoundedIcon style={{ fontSize: 20 }} />} 
      sx={{ minHeight: '5vh', padding: '4px 8px' }}
    >
      <b> Create Account</b>
    </Button>
    <Button 
      size="small" 
      endIcon={<PrivacyTipIcon style={{ fontSize: 20 }} />} 
      sx={{ minHeight: '5vh', padding: '4px 8px' }}
    >
      Security Tips
    </Button>
    <Button 
      size="small" 
      endIcon={<HistoryIcon style={{ fontSize: 20 }} />} 
      sx={{ minHeight: '5vh', padding: '4px 8px' }}
    >
    <b>  Transaction History</b>
    </Button>
  </Stack>
</Card>

        </Grid>
</Grid>

    </>
  );
}
