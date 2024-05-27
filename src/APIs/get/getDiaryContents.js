import axiosInstance from "../axiosinstance";

export default async function getDiaryContents(diaryId){
    try {
        const response = await axiosInstance.get(
            `/diaries/${diaryId}`
        )
        return response.data;
    } catch{
        console.log('오류발생')
    }
}