import { GET } from "../net/net"
import HeaderData from "./const";

export const GetMalls = async (type) => {
    return await GET({
        url: '/mall/type/' + type,
        params: { userId: HeaderData.userId }
    })
}


export const GetMallDetail = async (type, id) => {
    return await GET({
        url: '/mall/' + type + '/' + id,
        params: { userId: HeaderData.userId }
    })
}


export const Login = async (data) => {
    data["userId"] = HeaderData.userId;
    return await GET({
        url: '/user/login',
        params: data
    })
}


export const Test = async () => {
    return await GET({
        url: '/mall/test'
    })
}

export const GetRecommendMalls = async (data) => {
    return await GET({
        url: '/mall/recommend/user',
        params: data
    })
}