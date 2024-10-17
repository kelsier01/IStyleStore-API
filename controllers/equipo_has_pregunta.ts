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

export const postEquipo_preguntas = async (req: Request, res: Response) => {
  try {
    const { id_pregunta, id_equipo, estado } = req.body;
    
    // Verificar si ya existe un registro con el mismo id, id_pregunta e id_equipo
    const existingRecord:any = await equipoPeguntas.findOne({
      where: {
        id_pregunta,
        id_equipo,
        estado
      }
    });

    if (existingRecord) {

      if (existingRecord.habilitado === 1) {
        return res.status(400).json({
          msg: "Ya existe un registro habilitado con esta combinación de id, pregunta y equipo"
        });
      } else if (existingRecord.habilitado === 0) {
        // Actualizar el registro existente
        await existingRecord.update({ habilitado: 1 });
        return res.status(200).json({
          msg: "El registro ha sido habilitado",
          equipo_has_pregunta: existingRecord
        });
      }

    }
    // Crear el nuevo registro
    const equipo_has_pregunta = await equipoPeguntas.create({
      id_pregunta,
      id_equipo,
      estado,
    });
    res.status(201).json(equipo_has_pregunta);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Error al crear o actualizar el registro. Hable con el administrador."
    });
  }
};

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



export const deshabilitarPregunta = async (req: Request, res: Response) => {
  const { id, estado} = req.params;
  
  try {
    const resultado = await equipoPeguntas.update(
      { habilitado: 0 },
      {
        where: {
          id_pregunta: id,
          estado: estado
        }
      }
    );

    res.json({
      msg: `Se dehabilitaron ${resultado[0]} registros con id_pregunta ${id}`,
      actualizados: resultado[0]
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Error al actualizar los registros. Hable con el administrador."
    });
  }
};


