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
export const putGarantia = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const garantia = await Garantia.findByPk(id);
    if (!garantia) {
      return res.status(404).json({
        msg: "No existe una garantia con el id " + id,
      });
    }

    await garantia.update(body);

    res.json(garantia);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};