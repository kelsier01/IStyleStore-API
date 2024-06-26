import { Request, Response } from "express";
import estado_equipos from "../models/estados_equipos";

//Traer todos los estados
export const getEstado_equipo = async (req: Request, res: Response) => {
  const estados = await estado_equipos.findAll();
  res.json({ estados });
};
