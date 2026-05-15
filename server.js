import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({})

const app = express()
app.use(express.json())

const users = []

app.post('/usuarios', async (req, res) => {
  const user = await prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age,
    },
  })

  users.push(req.body)

  res.status(201).json(user)
})

app.get('/usuarios', (req, res) => {
  res.status(200).json(users)
})

app.listen(3000)

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