import { Request, Response } from "express";
import Revisiones from "../models/revision";
import estado_orden from "../models/estados_orden";

export const getRevisiones_orden = async (req: Request, res: Response) => {
  const { id }: any = req.params;

  const revisiones = await Revisiones.findAll({
    where: {
      orden_id: id,
    },
    include: [estado_orden],
  });
  res.json({ revisiones });
};

export const postRevision = async (req: Request, res: Response) => {
  const { body } = req;
  try {
    const revision = await Revisiones.create(body);
    res.json(revision);
  } catch (error) {
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};
