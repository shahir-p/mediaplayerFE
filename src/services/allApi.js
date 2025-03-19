import { serverurl } from "./serverUrl";
import { commonApi } from "./commonApi";

//api call for upload video

 export const uploadVideo = async(reqBody)=>{
   return await commonApi('POST',`${serverurl}/videos`,reqBody)
}

//fetch videos

export const getAllVideos=async()=>{
    return await commonApi('GET',`${serverurl}/videos`,"")
}

//delete videos

export const deleteVideo=async(id)=>{
 return await commonApi('DELETE',`${serverurl}/videos/${id}`,"")
}
//delete history

export const deleteHistory=async(id)=>{
 return await commonApi('DELETE',`${serverurl}/history/${id}`,"")
}

//add to history

export const addHistory=async(data)=>{
  return await commonApi('POST',`${serverurl}/history`,data)
}


export const gethistory=async()=>{
  return await commonApi('GET',`${serverurl}/history`,"")
}

//add catagory 

export const addCatagory=async(data)=>{
  return await commonApi('POST',`${serverurl}/catagories`,data)
}

//get catagory
 
export const getallCatagories=async()=>{
  return await commonApi('GET',`${serverurl}/catagories`,"")
}


//delete catagory
export const deleteCatagory=async(id)=>{
  return await commonApi('DELETE',`${serverurl}/catagories/${id}`,"")
 }


 //get videoby ID
 export const getvideobyID=async(id)=>{
  return await commonApi('GET',`${serverurl}/videos/${id}`,"")
}

// update category
export const updateCategory = async (id, data) => {
  return await commonApi('PUT', `${serverurl}/catagories/${id}`, data)
}
