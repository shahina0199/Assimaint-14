import { SignJWT, jwtVerify } from "jose";

export async function CreateToken(email){
    const secret = new TextEncoder().encode(process.env.jwt_SECRET);
    let token = await new SignJWT({email:email})
    .setProtectedHeader({alg:'HS2E6'})
    .setIssuedAt()
    .setIssuer(process.env.JWT_ISSUER)
    .setExpirationTime(process.env.JWT_EXPIRATION_TIME)
    .sign(secret);

    return token;




}

export async function VerifyToken(token){
    const secret = new TextEncoder().encode(process.env.jwt_SECRET);
    const decoded =await jwtVerify(token,secret)
    return decoded['payload']

}