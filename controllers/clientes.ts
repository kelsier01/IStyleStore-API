import Clientes from "../models/cliente";
import { Request, Response } from "express";

//Traer todos los clientes en json
export const getClientes = async (req: Request, res: Response) => {
  const clientes = await Clientes.findAll();
  res.json({ clientes });
};
//Traer cliente por id
export const getCliente = async (req: Request, res: Response) => {
  const { id }: any = req.params;
  const cliente = await Clientes.findByPk(id);

  if (cliente) {
    res.json(cliente);
  } else {
    res.status(404).json({
      msg: `No existe el usuario con la id ${id}`,
    });
  }
};
//Traer cliente por RUN
export const getCliente_rut = async (req: Request, res: Response) => {
  const { run }: any = req.params;
  console.log(run);

  const cliente = await Clientes.findOne({
    where: {
      run,
    },
  });
// Si el cliente exito, devolver respuesta en json
  if (cliente) {
    res.json(cliente);
  } else {
    //Si no existe, mensaje run no registrado
    res.status(404).json({
      msg: `El cliente con el run ${run} no registra datos en nuestra base de datos.`,
    });
  }
};

//Crear nuevo cliente
export const postCliente = async (req: Request, res: Response) => {
  const { run } = req.body;
  try {
    const existeRut = await Clientes.findOne({
      where: {
        run,
      },
    });
    if (existeRut) {
      return res.status(400).json({
        msg: "Ya existe un cliente con el rut " + run,
      });
    }
    //Crear nuevo cliente con datos del request body
    const cliente = await Clientes.create(req.body);
    res.json(cliente);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

export const putCliente = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const cliente = await Clientes.findByPk(id);
    if (!cliente) {
      return res.status(404).json({
        msg: "No existe un usuario con el id " + id,
      });
    }

    await cliente.update(body);

    res.json(cliente);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

export const deleteUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    const usuario = await Clientes.findByPk(id);
    if (!usuario) {
      return res.status(404).json({
        msg: "No existe un usuario con el id " + id,
      });
    }
    await usuario.destroy();
    res.json(usuario);
};
