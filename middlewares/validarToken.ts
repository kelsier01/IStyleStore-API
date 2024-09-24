import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import Users from "../models/usuario";

export const validarjwt = async (
  req: Request | any,
  res: Response,
  next: any
) => {
  const token = req.header("x-token");
  const privateKey: any = process.env.SECRETORPRIVATEKEY;

  if (!token) {
    return res.status(401).json({
      msg: "No existe Token en la peticion",
    });
  }

  try {
    const { id }: any = jwt.verify(token, privateKey);
    const user: any = await Users.findByPk(id);

    if (!user) {
      return res.status(401).json({
        msg: "Token No Valido - Usuario no existe",
      });
    }

    if (!user.estado) {
      return res.status(401).json({
        msg: "Token No Valido - Usuario desabilitado",
      });
    }

    req.user = <any>user;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      msg: "Token No Valido",
    });
  }
};
