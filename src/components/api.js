import {GET} from "../net/net"

export const GetMalls = async (type) => {
    return await GET({
        url: '/mall/type/' + type
    })
}


export const GetMallDetail = async (type, id) => {
    return await GET({
        url: '/mall/' + type + '/' + id,
    })
}
