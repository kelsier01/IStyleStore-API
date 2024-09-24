import { Request, Response } from "express";
import Servicios from "../models/servicios";

export const getServicios = async (req: Request, res: Response) => {
  const servicios = await Servicios.findAll();
  res.json({ servicios });
};

export const postServicio = async (req: Request, res: Response) => {
  const { body } = req;
  try {
    const servicio = await Servicios.create(body);
    res.json(servicio);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};
export const putServicio = async (req: Request, res: Response) => {
  const {id} = req.params;
  const {body} = req;

  try {
    const servicio = await Servicios.findByPk(id);
    if(!servicio){
      return res.status(404).json({
        msg:"No existe el servicio"
      });
    }
    await servicio.update(body);
    res.json(servicio);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mesg:"Contactar con el adminsitrador"
    })
  }
}
export const deleteServicio = async(req: Request, res:Response) =>{
  const {id} = req.params;
  const servicio = await Servicios.findByPk(id);
  if (!servicio) {
    return res.status(404).json({
      msg: "No existe un servicio con el id " + id,
    });
  }
  await servicio.destroy();
  res.json(servicio);
}

