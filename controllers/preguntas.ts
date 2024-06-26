import { Request, Response } from "express";
import pregunta from "../models/pregunta";


export const getPreguntas = async (req: Request, res: Response) => {
    const preguntas = await pregunta.findAll();
    res.json({ preguntas });
  };