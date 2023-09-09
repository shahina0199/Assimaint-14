import { TokenCookie } from "@/app/utility/TokenCookie";
import { NextResponse } from "next/server";

export async function POST(req, res){
    const JsonBody = await req.Json()
    let email=JsonBody['password'];
    //Date Checking

    if(email==="email@email.com" && password==="123"){
        let Cookic= await TokenCookie(email);
        return NextResponse.Json(
            {status:true,message:"Request completed"},
            {status: 200, headers:Cookie}
        )
    }
    else{
        return NextResponse.json(
            {status:false,message:"Request Fail"}
        )
    }
}


export async function GET(req,res){
    cookies().delete('token')
    return NextResponse.json(
        {status:true, message:"Request Completed"}
    )
}