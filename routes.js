import { Router } from "express"
import { loginUsuario } from './controllers/loginController.js'
import { usuarioCreate, usuarioIndex } from './controllers/clienteController.js'
import { carroCreate, carroDestroy, carroIndex, carroUpdate } from "./controllers/carroController.js"
import { propostaCreate, propostaDestroy, propostaIndex, propostaUpdate } from "./controllers/propostaController.js"

const router = Router()

// router.get('/carros', verificaLogin)
//       .post('/carros', )


// router.get('/anos', )
//       .post('/anos', )

// router.get('/anos', )
//       .post('/anos', )

router.get('/login', loginUsuario)
      .get('/listar', usuarioIndex)
      .get('/carros', carroIndex)
      .post('/carros', carroCreate)
      .put('/carros/:id', carroUpdate)
      .delete('/carros/:id', carroDestroy)
      .get('/propostas', propostaIndex)
      .post('/propostas', propostaCreate)
      .put('/propostas/:id', propostaUpdate)
      .delete('/propostas/:id', propostaDestroy)
      .post('/login', loginUsuario)
      .post('/usuario', usuarioCreate)


export default router