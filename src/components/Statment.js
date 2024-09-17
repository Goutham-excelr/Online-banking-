import React,{useState} from "react"
export default function BankStatement(){

    return(
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '50px' }}>
            <div style={{ width: '400px' }}>
            <h1 style={{ textAlign: 'center' }}>Bank Account Statements</h1>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div>
                        <label style={{ fontWeight: 'bold' }}>From Date : </label>
                        <input type="date" style={{ width: '100%', padding: '10px', fontSize: '16px' }} />
</div>
<div>
                        <label style={{ fontWeight: 'bold' }}>To Date : </label>
                        <input type="date" style={{ width: '100%', padding: '10px', fontSize: '16px' }} />
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
                        Download
                    </button>
                    
                </form>
            </div>
        </div>
    )
}