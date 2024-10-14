import { Request, Response } from "express";
import pregunta from "../models/pregunta";


export const getPreguntas = async (req: Request, res: Response) => {
    const preguntas = await pregunta.findAll();
    res.json({ preguntas });
  };

export const postPreguntas = async (req: Request, res: Response) => {
    const { body } = req;
    const nuevaPregunta = await pregunta.create(body);
    res.json({ nuevaPregunta });
  };

  
export const putPregunta = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const editPregunta = await pregunta.findByPk(id);
    if (!editPregunta) {
      return res.status(404).json({
        msg: "No existe una pregunta con el id " + id,
      });
    }
    await editPregunta.update(body);
    res.json(pregunta);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

