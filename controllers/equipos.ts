import Equipo from "../models/equipo";
import e, { Request, Response} from "express";

//Recibir equipos disponibles
export const getEquipos = async (req: Request, res: Response) => {
  const equipos = await Equipo.findAll();
  res.json({ equipos });
};

//Crear equipos
export const postEquipo = async (req: Request, res: Response) => {
  //Crear variable nombre que almacenara el valor del atributo del mismo nombre desde el cuerpo del request
  const { nombre } = req.body;
  try {
    //Antes de crear un nuevo equipo tenemos que verificar que el equipo exita o no en la base de datos
    const existeEquipo = await Equipo.findOne({
      //Con Sequelize realizo querys usamos findOne para buscar un equipo donde el nombre se el nombre ingresado
      where: {
        nombre,
      },
    });
    //Hacemos la verificacion de si existe el equipo o no
    //Si existe
    if (existeEquipo) {
      return res.status(400).json({
        msg: "Ya existe un equipo con el nombre " + nombre,
      });
    }
    //Si no existe el equipo
    const marca = await Equipo.create(req.body);
    res.json(marca);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};
export const putEquipo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const equipo = await Equipo.findByPk(id);
    if (!equipo) {
      return res.status(404).json({
        msg: "No existe un equipo con el id " + id,
      });
    }

    await equipo.update(body);

    res.json(equipo);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};
export const deleteEquipo = async(req: Request, res:Response) =>{
  const {id} = req.params;
  const equipo = await Equipo.findByPk(id);
  if (!equipo) {
    return res.status(404).json({
      msg: "No existe un equipo con el id " + id,
    });
  }
  await equipo.destroy();
  res.json(equipo);
}

