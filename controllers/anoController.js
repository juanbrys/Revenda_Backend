import { Ano } from '../models/Anos.js';

export const anoIndex = async (req, res) => {

  try {
    const ano = await Ano.findAll();
    res.status(200).json(ano)
  } catch (error) {
    res.status(400).send(error)
  }
}