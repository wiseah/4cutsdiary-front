import axiosInstance from "../axiosinstance";

export default async function createDiary(albumId, title, content, location, image, diaryTime) {
    try {
        // FormData 객체 생성
        const formData = new FormData();

        // FormData에 데이터 추가
        formData.append("albumId", albumId);
        formData.append("title", title);
        formData.append("content", content);
        formData.append("location", location);
        formData.append("image", image); // 이미지 파일
        formData.append("diaryTime", diaryTime);

        // axios를 사용하여 POST 요청 보내기
        const response = await axiosInstance.post(
            `/diaries`,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        );

        return response.data;
    } catch (error) {
        console.log("에러발생", error);
        throw error; // 에러를 다시 던져 호출하는 곳에서 처리할 수 있게 함
    }
}
