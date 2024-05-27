import axiosinstance from "../axiosinstance";

export default async function getInnerAlbum(albumId){
    try {
        const response = await axiosinstance.get(
            `/albums/${albumId}`,
        )
        return response.data;
    } catch{
        console.log('오류 발생')
    }
}