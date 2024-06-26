import { Request, Response } from "express";
import Garantia from "../models/garantia";

export const postGarantia = async (req: Request, res: Response) => {
  try {
    //Hay que eliminar esto
    console.log(req.body);
    const garantia = await Garantia.create(req.body);
    res.json(garantia);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};
