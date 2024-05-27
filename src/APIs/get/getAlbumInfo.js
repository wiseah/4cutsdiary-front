import axiosinstance from "../axiosinstance";

export default async function getAlbumInfo(){
    try {
        const response = await axiosinstance.get(
            `/albums`,
        )
        return response.data;
    } catch{
        console.log('오류 발생')
    }
}