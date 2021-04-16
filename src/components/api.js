import {GET} from "../net/net"

export const GetMalls = async (type) => {
    return await GET({
        url: '/mall/type/' + type
    })
}
