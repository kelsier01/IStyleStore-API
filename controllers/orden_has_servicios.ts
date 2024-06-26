import { Request, Response } from "express";
import { Op } from "sequelize";
import serviciosOrden from "../models/orden_has_servicios";
import Servicios from "../models/servicios";

export const getOrden_servicios = async (req: Request, res: Response) => {
  const { id }: any = req.params;
  const servicioOrden = await serviciosOrden.findAll({
    where: {
      orden_id: id,
    },
    include: [Servicios],
  });
  res.json({ servicioOrden });
};

export const postOrden_servicios = async (req: Request, res: Response) => {
  const { body } = req;
  try {
    const ord = await serviciosOrden.bulkCreate(body);
    res.json(ord);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};
