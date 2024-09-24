import { Request, Response } from "express";
import Respuestas from "../models/respuesta";

export const getRespuestas = async (req: Request, res: Response) => {
  const respuestas = await Respuestas.findAll({
    limit: 10,
  });
  res.json({ respuestas });
};

export const getRespuestas_orden = async (req: Request, res: Response) => {
  const { id }: any = req.params;

  const respuestas = await Respuestas.findAll({
    where: {
      orden_id: id,
    },
  });
  res.json({ respuestas });
};

export const postRespuestas = async (req: Request, res: Response) => {
  const { body } = req;
  console.log(body);
  try {
    const resp = await Respuestas.bulkCreate(body);
    res.json(resp);
  } catch (error) {
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};
