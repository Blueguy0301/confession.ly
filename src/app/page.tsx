"use client"
import { useEffect, useState } from "react"
import { generateKey,  createPass } from "../encryption"
export default function Home() {
  const [keys, setKeys] = useState<string[]>([])
  const [submit, setSubmit] = useState(false)
  const [userData, setUserData] = useState<any>({})
  const [encryptedData, setEncryptedData] = useState<any>({})

  useEffect(() => {
    console.table(userData)
  }, [userData])
  return (
    <div className="flex  flex-col gap-3">
      <div className="flex gap-3">
        <h3>test register</h3>
        <form
          className="flex gap-3 flex-wrap"
          action={async()=>{
            const {publicKey, privateKey} = await generateKey(userData.username)
            setKeys([publicKey, privateKey])
            createPass(userData.password).then((res)=>{
              setEncryptedData(res)
            })           
          }}

        >
          <input
            type="text"
            placeholder="username"
            onChange={(e) => {
              setUserData((prev: any) => ({
                ...prev,
                username: e.target.value,
              }))
            }}
          />
          <input
            type="text"
            placeholder="password"
            onChange={(e) => {
              setUserData((prev: any) => ({
                ...prev,
                password: e.target.value,
              }))
            }}
          />
          <input
            type="text"
            placeholder="email"
            onChange={(e) => {
              setUserData((prev: any) => ({
                ...prev,
                email: e.target.value,
              }))
            }}
          />
          <input
            type="submit"
            value="submit"
            className="bg-green-500 px-3 py-2 rounded-md  "
          />
        </form>
      </div>
      <div className="flex gap-3 flex-col px-5">
        <p>data : {JSON.stringify(encryptedData)}</p>
      </div>
    </div>
  )
}
