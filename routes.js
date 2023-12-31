import { Router } from "express"
import { loginUsuario } from './controllers/loginController.js'
import { usuarioCreate, usuarioIndex } from './controllers/clienteController.js'
import { carroCreate, carroDestroy, carroFindByDestaque, carroFindById, carroFindByMarca, carroIndex, carroOrderByPreco, carroUpdate, carroUpdateDestaque } from "./controllers/carroController.js"
import { propostaCreate, propostaDestroy, propostaFindByCarroId, propostaIndex, propostaUpdate } from "./controllers/propostaController.js"
import { anoIndex } from "./controllers/anoController.js"

const router = Router()

// router.get('/carros', verificaLogin)
//       .post('/carros', )


// router.get('/anos', )
//       .post('/anos', )

// router.get('/anos', )
//       .post('/anos', )

router.get('/login', loginUsuario)
      .get('/listar', usuarioIndex)
      .get('/anos', anoIndex)
      .get('/carros', carroIndex)
      .get('/carro/:id', carroFindById)
      .get('/carros/destaques', carroFindByDestaque)
      .get('/carros/marcas/:marca', carroFindByMarca)
      .get('/carros/ordemPreco', carroOrderByPreco)
      .post('/carros', carroCreate)
      .put('/carros/:id', carroUpdate)
      .put('/carros/destaque/:id', carroUpdateDestaque)
      .delete('/carros/:id', carroDestroy)
      .get('/propostas', propostaIndex)
      .get('/proposta/:id', propostaFindByCarroId)
      .post('/propostas', propostaCreate)
      .put('/propostas/:id', propostaUpdate)
      .delete('/propostas/:id', propostaDestroy)
      .post('/login', loginUsuario)
      .post('/usuario', usuarioCreate)


export default router