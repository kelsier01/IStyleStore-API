import jwt from "jsonwebtoken";

export const generarjwt = (uid: any) => {
  const privateKey: any = process.env.SECRETORPRIVATEKEY;
  return new Promise((resolve, reject) => {
    jwt.sign(uid, privateKey, { expiresIn: "365d" }, (error, token) => {
      if (error) {
        console.log(error);
        reject("No se pudo generar el token");
      } else {
        resolve(token);
      }
    });
  });
};
