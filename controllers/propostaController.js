import { Proposta } from '../models/Propostas.js';

export const propostaIndex = async (req, res) => {

  try {
    const proposta = await Proposta.findAll();
    res.status(200).json(proposta)
  } catch (error) {
    res.status(400).send(error)
  }
}