import { Carro } from '../models/Carros.js';
import { Cliente } from '../models/Clientes.js';
import { Proposta } from '../models/Propostas.js';

export const propostaIndex = async (req, res) => {
  try {
    const proposta = await Proposta.findAll({
      include: [
        {
          model: Carro,
          attributes: ['id'],
        },
        {
          model: Cliente,
          attributes: ['id'],
        }
      ],
    });
    res.status(200).json(proposta)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const propostaCreate = async (req, res) => {
  const { lance, data, texto, carro_id, cliente_id } = req.body;

  try {
    if (!lance || !texto || !carro_id || !cliente_id) {
      res.status(400).json({
        err: 'Invalid input',
        msg: 'Prencha: lance, texto, carro_id, cliente_id',
      });
      return;
    }

    const proposta = await Proposta.create({
      lance,
      data,
      texto,
      carro_id,
      cliente_id
    });

    res.status(200).json({ msg: 'Proposta criado com sucesso', proposta });
  } catch (error) {
    console.error(`erro ao adicionar a proposta ${new Date()}: ${error}`);
    res.status(400).json({ error: error.message });
  }
};

export const propostaUpdate = async (req, res) => {
  const { id } = req.params;
  const procuraProposta = await Proposta.findByPk(id);
  const { lance, date, texto, carro_id, cliente_id } = req.body;

  try {
    if (!procuraProposta) {
      return res.status(404).json({ error: 'PropostaID não encontrada' });
    }

    const proposta = await Proposta.update(
      {
        lance,
        date,
        texto,
        carro_id,
        cliente_id
      },
      {
        where: {
          id,
        },
      },
    );

    res.status(200).json({ msg: 'Proposta atualizada com sucesso', proposta });
  } catch (error) {
    console.error(`Erro ao atualizar a proposta ${new Date()}: ${error}`);
    res.status(400).json({ error: error.message });
  }
};

export const propostaDestroy = async (req, res) => {
  const { id } = req.params;
  const existingProposta = await Proposta.findByPk(id);

  try {
    if (!existingProposta) {
      return res.status(404).json({ error: 'PropostaID não encontrada' });
    }

    const proposta = await Proposta.destroy({ where: { id } });

    res.status(200).json({ msg: 'Proposta deletada com sucesso', proposta });
  } catch (error) {
    console.error(`Erro ao deletar a proposta ${new Date()}: ${error}`);
    res.status(400).json({ error: error.message });
  }
};