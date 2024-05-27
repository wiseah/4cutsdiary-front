import axiosinstance from "../axiosinstance";

export default async function join(userId, password, nickname){
    try {
        const response = await axiosinstance.post(
            `/auth/join`,
            {
                userId: userId,
                password: password,
                nickname: nickname
            }
        )
        return response.data;
    } catch {
        console.log("에러발생");
    }
}