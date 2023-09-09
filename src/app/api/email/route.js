import { NextResponse } from "next/server";
import {nodemailer} from "nodemailer"



export async function GET(req, res){
 
const {searchParams} =new URL(req.url);
let ToEmail = searchParams.get('email')

//Transporter

let Transporter= nodemailer.createTransport ({

    host:"mail.teamrabbil.com",
    port:25,
    secure:false,
    auth:{
    user:'info@teamrabbi',
    pass:'~R4[bhaC[Qs'
    },
    tls:{rejectUhauthorized: false}
})

//Prepare email

let myEmail ={
    from :"Test email from next js application",
    to :ToEmail,
    subject :"Test email from next js application",
    text:"Test email from next js application"
}

try{
    await Transporter.sendMail( myEmail);
    return NextResponse.json({msg:"Email Sending Success"});
}
catch(e){
    return NextResponse.json({msg:"Email Sending Fail"});
}



}