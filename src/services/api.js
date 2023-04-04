import axios from "axios"

const Api_Url = 'https://file-sharing-a5ut.onrender.com'
// const Api_Url = 'http://localhost:5000'
export const UploadfileApi = async(data)=>{
    try{
        const resp = await axios.post(`${Api_Url}/upload` , data )
        console.log(resp.data)
        return resp.data
    }catch(error){
        console.log(error)
    }
}
