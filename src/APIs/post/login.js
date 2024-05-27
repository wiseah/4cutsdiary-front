import axiosinstance from "../axiosinstance";

export default async function login(userId, password){
    try {
        const response = await axiosinstance.post(
            `/auth/login`,
            {
                userId: userId,
                password: password
            }
        )
        return response.data;
    } catch {
        throw Error()
    }
}