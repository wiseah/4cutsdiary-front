import axiosInstance from "../axiosinstance";

export default async function createAlbum(albumId, albumName){
    try {
        const response = await axiosInstance.post(
            `/albums`,
            {
                id: albumId,
                name: albumName
            }
        )
        return response.data;
    } catch {
        console.log("에러발생")
    }
}