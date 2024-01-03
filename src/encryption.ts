import {
  generateKeyPairSync,
  publicDecrypt,
  publicEncrypt,
  randomBytes,
  scryptSync,
  timingSafeEqual,
} from "crypto"
export const generateKey = (phrase: string) => {
  const { privateKey, publicKey } = generateKeyPairSync("rsa", {
    modulusLength: 4096,
    publicKeyEncoding: {
      type: "spki",
      format: "pem",
    },
    privateKeyEncoding: {
      type: "pkcs8",
      format: "pem",
      cipher: "aes-256-cbc",
      passphrase: phrase,
    },
  })
  return { privateKey, publicKey }
}
export const createPass = (pass: string) => {
  const salt = randomBytes(16).toString("hex")
  const hashedPassword = scryptSync(pass, salt, 64).toString("hex")
  return `${hashedPassword}.${salt}`
}
export const ValidatePass = (pass: string, hashedPassword: string) => {
  const [hashed, salt] = hashedPassword.split(".")
  const hash = scryptSync(pass, salt, 64).toString("hex")
  return timingSafeEqual(Buffer.from(hash), Buffer.from(hashed))
}

export class DataEncryption {
  privateKey: string
  constructor(privateKey: string, password: string) {
    this.privateKey = privateKey
  }
  encrypt(data: string, publicKey: string) {
    const encryptedMessage = publicEncrypt(publicKey, Buffer.from(data))
    return encryptedMessage.toString("base64")
  }
  decrypt(data: string) {
    const decrypted = publicDecrypt(
      this.privateKey,
      Buffer.from(data, "base64")
    )
    return decrypted
  }
}
