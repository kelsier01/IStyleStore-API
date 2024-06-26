import { Request, Response } from "express";
//Se importa los modelo de equipo_has_preguntas
import equipoPeguntas from "../models/equipos_has_preguntas";
//Se importa el modelo de la tabla pregunta
import pregunta from "../models/pregunta";
import Equipo from "../models/equipo";
import { Op } from "sequelize";

export const getEquipos_preguntas = async (req: Request, res: Response) => {
  const preguntas = await equipoPeguntas.findAll({
    include: [
      {
        model: pregunta,
        where: {
          estado: {
            [Op.ne]: null,
          },
        },
      },
      {
        model: Equipo,
        where: {
          estado: {
            [Op.ne]: null,
          },
        },
      },
    ],
    where: {
      estado: {
        [Op.ne]: null,
      },
    },
  });
  res.json({ preguntas });
};

export const postEquipo_preguntas = async (req: Request, res: Response) =>{
  const equipo_has_pregunta = await equipoPeguntas.create(req.body);
  res.json(equipo_has_pregunta);
}

export const putEquipo_preguntas = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const equipo_has_pregunta = await equipoPeguntas.findByPk(id);
    if (!equipo_has_pregunta) {
      return res.status(404).json({
        msg: "No existe un equipo_pregunta con el id " + id,
      });
    }

    await equipo_has_pregunta.update(body);

    res.json(equipo_has_pregunta);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};
