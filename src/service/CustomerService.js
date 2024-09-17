export const CustomerService=()=>{
    return(
        axios.get(`${'http://localhost:8088/api/customer/nameEnquiry'}`)
    )
}