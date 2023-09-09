import { CheckCookieAuth } from "./app/utility/MiddlewareUtility"

export async function middleware(req){

    if(req.nextUrl.pathname.startsWith('/src/app/dashboard')){

        console.log('Hello')
        return await CheckCookieAuth(req)
    }
}