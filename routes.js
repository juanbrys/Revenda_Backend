import { Router } from "express"
import { loginUsuario } from './controllers/loginController.js'
import { usuarioCreate, usuarioIndex } from './controllers/clienteController.js'

const router = Router()

// router.get('/carros', verificaLogin)
//       .post('/carros', )


// router.get('/anos', )
//       .post('/anos', )

// router.get('/anos', )
//       .post('/anos', )

router.get('/login', loginUsuario)
      .post('/login', loginUsuario)
      .post('/usuario', usuarioCreate)
      .get('/listar', usuarioIndex)


export default router