import { Request, Response } from "express";
import Orden from "../models/orden";
import estado_orden from "../models/estados_orden";
import { Op } from "sequelize";
import Clientes from "../models/cliente";
import equipo from "../models/equipo";
import Modelo from "../models/modelo";
import Respuestas from "../models/respuesta";
import pregunta from "../models/pregunta";
import Revisiones from "../models/revision";
import serviciosOrden from "../models/orden_has_servicios";
import Servicios from "../models/servicios";

export const getOrdenes = async (req: Request, res: Response) => {
  //const { limite = 10, desde = 0 } = req.query;
  const ordenes = await Orden.findAll({
    where: {
      estado: 5,
    },
    include: [estado_orden, Clientes, equipo, Modelo],
    //limit: Number(limite),
    //offset: Number(desde),
  });
  const total = await Orden.count({
    where: {
      estado: 5,
    },
  });

  res.json({ total, ordenes });
};

export const getOrdenes_pendientes = async (req: Request, res: Response) => {
  const ordenes = await Orden.findAll({
    where: {
      estado: {
        [Op.lt]: 5,
      },
    },
    include: [estado_orden, Clientes, equipo, Modelo],
  });
  const total = await Orden.count();
  const totalIniciadas = await Orden.count({
    where: { estado: 1 },
  });
  const totalRevision = await Orden.count({
    where: { estado: 2 },
  });
  const totalRetiro = await Orden.count({
    where: { estado: 3 },
  });
  res.json({ total, totalIniciadas, totalRevision, totalRetiro, ordenes });
};

export const getOrden = async (req: Request, res: Response) => {
  const { id } = req.params;

  const orden = await Orden.findOne({
    where: { id },
    include: [
      estado_orden,
      Clientes,
      equipo,
      Modelo,
      {
        model: Respuestas,
        include: [pregunta],
      },
    ],
  });

  res.json({ orden });
};

export const postOrden_search = async (req: Request, res: Response) => {
  const { id, run, nombre } = req.body;

  if (id) {
    const orden = await Orden.findOne({
      where: { id },
      include: [
        estado_orden,
        Clientes,
        equipo,
        Modelo,
        { model: Revisiones, include: [estado_orden] },
        { model: serviciosOrden, include: [Servicios] },
      ],
    });
    res.json({ orden, rows: 1 });
  } else if (run) {
    const orden = await Orden.findAll({
      include: [
        estado_orden,
        {
          model: Clientes,
          where: {
            run,
          },
        },
        equipo,
        Modelo,
        { model: Revisiones, include: [estado_orden] },
        { model: serviciosOrden, include: [Servicios] },
      ],
    });

    res.json({ orden, rows: 2 });
  } else if (nombre) {
    const orden = await Orden.findAll({
      include: [
        estado_orden,
        {
          model: Clientes,
          where: {
            nombre: {
              [Op.like]: "%" + nombre + "%",
            },
          },
        },
        equipo,
        Modelo,
        { model: Revisiones, include: [estado_orden] },
        { model: serviciosOrden, include: [Servicios] },
      ],
    });
    res.json({ orden, rows: 2 });
  } else {
    res.json({ msg: "Error" });
  }
};

export const postOrden = async (req: Request, res: Response) => {
  const { body } = req;
  try {
    const ord = await Orden.create(body);
    res.json(ord);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

export const putOrden = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const orden = await Orden.findByPk(id);
    if (!orden) {
      return res.status(404).json({
        msg: "No existe una orden con el id " + id,
      });
    }

    await orden.update(body);

    res.json(orden);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};
