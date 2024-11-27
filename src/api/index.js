const { default: axios } = require("axios");

const key='';
const playlistsItems=async(playlistsId,nextPageToken='',result=[])=>{
    const Url='';
    const {data}=await axios.get(Url)
    result=[...result,data.items]
    if(data.nextPageToken){
        result=[playlistsId,data.nextPageToken,result]
    }
    return result
}
export default playlistsItems