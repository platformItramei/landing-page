export default class cryptos {


  static async encrypt(
    data: unknown,
    backendPublicKey: CryptoKey
  ): Promise<{
    isEncrypted: true;
    encryptedKey: string;
    iv: string;
    tag: string;
    data: string;
  }> {
    const aesKey = await window.crypto.subtle.generateKey(
      {
        name: "AES-GCM",
        length: 256,
      },
      true,
      ["encrypt"]
    );

    const iv = window.crypto.getRandomValues(new Uint8Array(12));

    const encodedData = new TextEncoder().encode(JSON.stringify(data));

    const encryptedData = await window.crypto.subtle.encrypt(
      {
        name: "AES-GCM",
        iv,
      },
      aesKey,
      encodedData
    );

    const tag = encryptedData.slice(-16);
    const payload = encryptedData.slice(0, -16);

    const exportedAesKey = await window.crypto.subtle.exportKey("raw", aesKey);
    const encryptedAesKey = await window.crypto.subtle.encrypt(
      {
        name: "RSA-OAEP",
      },
      backendPublicKey,
      exportedAesKey
    );

    return {
      isEncrypted: true,
      encryptedKey: this.arrayBufferToBase64(encryptedAesKey),
      iv: this.arrayBufferToBase64(iv),
      tag: this.arrayBufferToBase64(tag),
      data: this.arrayBufferToBase64(payload),
    };
  }

  static async exportPublicKey(key: CryptoKey): Promise<string> {
    const exported = await window.crypto.subtle.exportKey("spki", key);
    return this.arrayBufferToBase64(exported);
  }

  static async exportPrivateKeyPkcs8(privateKey: CryptoKey): Promise<string> {
    try {
      const exported = await window.crypto.subtle.exportKey("pkcs8", privateKey);
      return this.arrayBufferToBase64(exported);
    } catch (error) {
      console.error("Private key export failed:", error);
      throw error;
    }
  }

  static async importBackendPublicKey(base64Key: string): Promise<CryptoKey> {
    const binaryKey = this.base64ToArrayBuffer(base64Key);
    return await window.crypto.subtle.importKey(
      "spki",
      binaryKey,
      {
        name: "RSA-OAEP",
        hash: "SHA-256",
      },
      true,
      ["encrypt"]
    );
  }

  static async importPublicKeyFromPem(pem: string): Promise<CryptoKey> {
    const pemHeader = "-----BEGIN PUBLIC KEY-----";
    const pemFooter = "-----END PUBLIC KEY-----";
    const pemContents = pem
      .replace(pemHeader, "")
      .replace(pemFooter, "")
      .replace(/\s+/g, "");

    const binaryDer = this.base64ToArrayBuffer(pemContents);

    return await window.crypto.subtle.importKey(
      "spki",
      binaryDer,
      {
        name: "RSA-OAEP",
        hash: "SHA-256",
      },
      true,
      ["encrypt"]
    );
  }

  static arrayBufferToBase64(buffer: ArrayBuffer): string {
    return btoa(String.fromCharCode(...new Uint8Array(buffer)));
  }

  static base64ToArrayBuffer(base64: string): ArrayBuffer {
    const binaryString = atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
  }
}