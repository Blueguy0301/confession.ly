"use client"
import { useEffect, useState } from "react"
import { generateKey, DataEncryption } from "../encryption"
export default function Home() {
  const [salt, setSalt] = useState("")
  const [entry, setEntry] = useState("")
  const [hash, setHash] = useState("")
  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")
  const [submit, setSubmit] = useState("")
  useEffect(() => {
    return () => {}
  }, [])

  return (
    <div className="flex  flex-col gap-3">
      <div className="flex gap-3 items-center">
        <h3>Register</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault()
          }}
          className="flex gap-3 flex-wrap"
        >
          <input type="text" placeholder="username" />
          <input type="text" placeholder="password" />
          <input type="text" placeholder="email" />
          <input
            type="submit"
            value="submit"
            className="bg-green-500 px-3 py-2 rounded-md  "
          />
        </form>
        <p>salt: {salt}</p>
      </div>
      <div className="flex gap-3">
        <h3>Login</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault()
          }}
          className="flex gap-3 flex-wrap"
        >
          <input type="text" placeholder="username" />
          <input type="text" placeholder="password" />
          <input type="text" placeholder="email" />
          <input
            type="submit"
            value="submit"
            className="bg-green-500 px-3 py-2 rounded-md  "
          />
        </form>
      </div>
      <div className="flex gap-3 flex-col px-5">
        <p>Test enter entry</p>
        <form
          action=""
          method="post"
          className="flex gap-3 flex-wrap"
          id="entry"
        >
          <textarea
            name="formEntry"
            form="entry"
            placeholder="Enter here"
            id="entry"
            className="border-2 border-black h-40 w-full"
            onChange={(e) => {
              setEntry(e.target.value)
            }}
          />
          <input
            type="submit"
            value="submit"
            className="bg-green-500 px-3 py-2 rounded-md  "
          />
        </form>
      </div>
    </div>
  )
}
