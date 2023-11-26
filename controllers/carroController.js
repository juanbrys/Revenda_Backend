
import { Carro } from '../models/Carros.js';

export const carroIndex = async (req, res) => {

  try {
    const carro = await Carro.findAll();
    res.status(200).json(carro)
  } catch (error) {
    res.status(400).send(error)
  }
}