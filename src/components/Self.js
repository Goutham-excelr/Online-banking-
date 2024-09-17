import React, { useState } from 'react';


export default function SelfTransfer(){
    return(
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '50px' }}>
            <div style={{ width: '400px' }}>
            <h1 style={{ textAlign: 'center' }}>Enter Account Type Details</h1>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div className="Account-Type">
                        <label htmlFor="AccountType" style={{ fontWeight: 'bold' }}>From Account Type : </label>
                        <select id="AccountType" style={{ width: '100%', padding: '10px', fontSize: '16px' }}>
                            <option value="">Select Account Type</option>
                            <option value="savings">Savings</option>
        <option value="current">Current</option>
        <option value="fixedDeposit">Fixed Deposit</option>
        <option value="recurring">Recurring Account</option>
                        </select>
                    </div>
                    <div className="Account-Type">
                        <label htmlFor="AccountType" style={{ fontWeight: 'bold' }}>To Account Type : </label>
                        <select id="AccountType" style={{ width: '100%', padding: '10px', fontSize: '16px' }}>
                            <option value="">Select Account Type</option>
                            <option value="savings">Savings</option>
        <option value="current">Current</option>
        <option value="fixedDeposit">Fixed Deposit</option>
        <option value="recurring">Recurring Account</option>
                        </select>
                    </div>
            
     
      
                    <div>
                        <label style={{ fontWeight: 'bold' }}>Enter Amount:</label>
                        <input type="number" style={{ width: '100%', padding: '10px', fontSize: '16px' }} />
                    </div>
                    <button type="button" style={{
                        backgroundColor: '#1976d2',
                        color: 'white',
                        padding: '10px',
                        fontSize: '16px',
                        borderRadius: '25px',
                        cursor: 'pointer',
                        border: 'none'
                    }}>
                        Transfer
                    </button>
                    </form>
            </div>
        </div>
          
    )
}

