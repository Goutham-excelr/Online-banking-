import React from 'react';

export default function ToAnotherBankAccount() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '50px' }}>
            <div style={{ width: '400px' }}>
                <h1 style={{ textAlign: 'center' }}>Enter Bank Details</h1>

                <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <div className="Bank-type">
                        <label htmlFor="BankType" style={{ fontWeight: 'bold' }}>Bank Name:</label>
                        <select id="BankType" style={{ width: '100%', padding: '10px', fontSize: '16px' }}>
                            <option value="">Select Bank</option>
                            <option value="Indian Bank">Indian Bank</option>
                            <option value="SBI Bank">SBI Bank</option>
                            <option value="HDFC Bank">HDFC Bank</option>
                            <option value="ICIC Bank">ICIC Bank</option>
                        </select>
                    </div>

                    <div>
                        <label style={{ fontWeight: 'bold' }}>Account Number:</label>
                        <input type="number" style={{ width: '100%', padding: '10px', fontSize: '16px' }} />
                    </div>

                    <div>
                        <label style={{ fontWeight: 'bold' }}>Holder Name:</label>
                        <input type="text" style={{ width: '100%', padding: '10px', fontSize: '16px' }} />
                    </div>

                    <div>
                        <label style={{ fontWeight: 'bold' }}>Amount:</label>
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
    );
}
