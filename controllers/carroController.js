import { Carro } from '../models/Carros.js';
import { Ano } from '../models/Anos.js';
import { Op } from 'sequelize';

export const carroIndex = async (req, res) => {
  try {
    const carro = await Carro.findAll({
      include: [
        {
          model: Ano,
          attributes: ['id', 'ano'],
        },
      ],
    });

    res.status(200).json(carro);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const carroCreate = async (req, res) => {
  const { marca, imagem, quilometragem, preco, destaque, sobre, ano_id } = req.body;

  try {
    if (!marca || !quilometragem || !preco || !ano_id) {
      res.status(400).json({
        err: 'Invalid input',
        msg: 'Prencha: marca, quilometragem, preco, ano_id',
      });
      return;
    }

    const carro = await Carro.create({
      marca,
      imagem,
      quilometragem,
      preco,
      destaque,
      sobre,
      ano_id
    });

    res.status(201).json({ msg: 'Carro criado com sucesso', carro });
  } catch (error) {
    console.error(`erro ao adicionar o carro ${new Date()}: ${error}`);
    res.status(400).json({ error: error.message });
  }
};

export const carroFindById = async (req, res) => {
  const { id } = req.params;

  try {
    const carro = await Carro.findByPk(id, {
      include: [
        {
          model: Ano,
          attributes: ['id', 'ano'],
        },
      ],
    });

    if (!carro) {
      return res.status(404).json({ error: 'CarroID not found' });
    }

    res.status(200).json(carro);
  } catch (error) {
    console.error(`Erro ao buscar o carro ${new Date()}: ${error}`);
    res.status(400).json({ error: error.message });
  }
}

export const carroOrderByPreco = async (req, res) => {
  try {
    const carros = await Carro.findAll({
      order: [['preco', 'DESC']],
      include: [
        {
          model: Ano,
          attributes: ['id', 'ano'],
        },
      ],
    });

    if (!carros || carros.length === 0) {
      return res.status(404).json({ error: 'Carros not found' });
    }

    res.status(200).json(carros);
  } catch (error) {
    console.error(`Erro ao buscar os carros ${new Date()}: ${error}`);
    res.status(500).json({ error: error.message });
  }
};


export const carroFindByDestaque = async (req, res) => {
  try {
    const carro = await Carro.findAll({
      where: {
        destaque: true
      },
      include: [
        {
          model: Ano,
          attributes: ['id', 'ano'],
        },
      ],
    });

    if (!carro) {
      return res.status(404).json({ error: 'Destaque not found' });
    }

    res.status(200).json(carro);
  } catch (error) {
    console.error(`Erro ao buscar o destaque ${new Date()}: ${error}`);
    res.status(400).json({ error: error.message });
  }
};

export const carroFindByMarca = async (req, res) => {
  const { marca } = req.params;

  try {
    const carro = await Carro.findAll({
      where: {
        marca: {
          [Op.like]: `%${marca}%`
        }
      },
      include: [
        {
          model: Ano,
          attributes: ['id', 'ano'],
        },
      ],
    });

    if (!carro) {
      return res.status(404).json({ error: 'Marca not found' });
    }

    res.status(200).json(carro);
  } catch (error) {
    console.error(`Erro ao buscar a marca ${new Date()}: ${error}`);
    res.status(400).json({ error: error.message });
  }
}

export const carroUpdate = async (req, res) => {
  const { id } = req.params;
  const procuraCarro = await Carro.findByPk(id);
  const { marca, imagem, quilometragem, preco, destaque, sobre, ano_id } = req.body;

  try {
    if (!procuraCarro) {
      return res.status(404).json({ error: 'CarroID not found' });
    }

    const carro = await Carro.update(
      {
        marca,
        imagem,
        quilometragem,
        preco,
        destaque,
        sobre,
        ano_id
      },
      {
        where: {
          id,
        },
      },
    );

    res.status(200).json({ msg: 'Carro atualizado com sucesso', carro });
  } catch (error) {
    console.error(`Erro ao atualizar o carro ${new Date()}: ${error}`);
    res.status(400).json({ error: error.message });
  }
};

export const carroUpdateDestaque = async (req, res) => {
  const { id } = req.params;
  const procuraCarro = await Carro.findByPk(id);
  const { destaque } = req.body;

  try {
    if (!procuraCarro) {
      return res.status(404).json({ error: 'CarroID not found' });
    }

    const carro = await Carro.update(
      {
        destaque,
      },
      {
        where: {
          id,
        },
      },
    );

    res.status(200).json({ msg: 'Carro atualizado com sucesso', carro });
  } catch (error) {
    console.error(`Erro ao atualizar o carro ${new Date()}: ${error}`);
    res.status(400).json({ error: error.message });
  }
};

export const carroDestroy = async (req, res) => {
  const { id } = req.params;
  const existingCarro = await Carro.findByPk(id);

  try {
    if (!existingCarro) {
      return res.status(404).json({ error: 'CarroID não encontrado' });
    }

    const carro = await Carro.destroy({ where: { id } });

    res.status(200).json({ msg: 'Carro deletado com sucesso', carro });
  } catch (error) {
    console.error(`Erro ao deletar o carro ${new Date()}: ${error}`);
    res.status(400).json({ error: error.message });
  }
};
