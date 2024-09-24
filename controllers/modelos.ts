import { Request, Response } from "express";
import Modelo from "../models/modelo";

export const getModelos = async (req: Request, res: Response) => {
  const modelo = await Modelo.findAll();
  res.json({ modelo });
};

export const postModelo = async (req: Request, res: Response) => {
  const { nombre } = req.body;
  try {
    const existeModelo = await Modelo.findOne({
      where: {
        nombre,
      },
    });
    if (existeModelo) {
      return res.status(400).json({
        msg: "Ya existe un cliente con el nombre " + nombre,
      });
    }
    const modelo = await Modelo.create(req.body);
    res.json(modelo);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};
export const putModelo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const modelo = await Modelo.findByPk(id);
    if (!modelo) {
      return res.status(404).json({
        msg: "No existe un modelo con el id " + id,
      });
    }

    await modelo.update(body);

    res.json(modelo);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

export const deleteModelo = async(req: Request, res:Response) =>{
  const {id} = req.params;
  const modelo = await Modelo.findByPk(id);
  if (!modelo) {
    return res.status(404).json({
      msg: "No existe un equipo con el id " + id,
    });
  }
  await modelo.destroy();
  res.json(modelo);
}
