import { generateKey } from "../../../encryption"
import { NextResponse } from "next/server"
export async function POST(req: Request) {
  console.log(req)
  const { pass, data } = await req.body.json()
  const { privateKey, publicKey } = generateKey(pass)
  console.log(privateKey, publicKey)

  return NextResponse.json({
    privateKey,
    publicKey,
  })
}
