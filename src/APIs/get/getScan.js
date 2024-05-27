import axiosinstance from "../axiosinstance";

export default async function getScan(imageUrl){
    try {
        const response = await axiosinstance.get(
            `/4cutimage?url=${imageUrl}`
        )
        return response;
    } catch{
        console.log('오류 발생')
    }
}