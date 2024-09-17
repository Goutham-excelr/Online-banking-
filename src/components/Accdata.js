// import { Grid } from '@mui/material';
import React, { useState } from 'react';

export default function Accountdata(){
    const [customername,setCustomerName] = useState("")
const [customerid,setCustomerId] = useState("")
const [bankname,setBankName] = useState("")
const [Balance,setBalance] = useState("")
    return(
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '50px' }}>
            <div style={{ width: '400px' }}>
                <h1 style={{ textAlign: 'center' }}>Account Details</h1>

                <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
        <label style={{ fontWeight: 'bold' }}>CustomerName : </label>
        <input type="text" style={{ width: '100%', padding: '10px', fontSize: '16px' }} />
    </div>
   <div>
   <label style={{ fontWeight: 'bold' }}>CustomerID : </label>
   <input type="text" style={{ width: '100%', padding: '10px', fontSize: '16px' }} />
</div>
   <div>
   <label style={{ fontWeight: 'bold' }}>PhoneNumber:</label>
   <input type="text" style={{ width: '100%', padding: '10px', fontSize: '16px' }} />
</div>
   <div>
   <label style={{ fontWeight: 'bold' }}>Balance : </label>
   <input type="text" style={{ width: '100%', padding: '10px', fontSize: '16px' }} />
</div>
</form>
            </div>
        </div>
        
    )    
}