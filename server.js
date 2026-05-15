import 'dotenv/config'
import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())

const users = []

app.post('/usuarios', async (req, res) => {
  try {
    const user = await prisma.user.create({
      data: {
        email: req.body.email,
        name: req.body.name,
        age: req.body.age,
      },
    })

    users.push(user)
    res.status(201).json(user)
  } catch (error) {
    console.error('Erro ao criar usuário:', error)
    res.status(500).json({
      message: 'Erro ao criar usuário',
      details: error instanceof Error ? error.message : String(error),
    })
  }
})

app.get('/usuarios', (req, res) => {
  res.status(200).json(users)
})

async function main() {
  try {
    await prisma.$connect()
    app.listen(3000, () => {
      console.log('Servidor iniciado em http://localhost:3000')
    })
  } catch (error) {
    console.error('Erro ao conectar no banco de dados:', error)
    process.exit(1)
  }
}

main()

/*
 Criar nossa API de usuarios

 - Criar um usuário
 - Listar todos os usuários
 - Editar um usuário
 - Deletar um usuário

 Mongo DB
 db_user
 eCzTR160Z7K3VicZ
*/