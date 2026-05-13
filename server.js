import express from 'express'

const app = express()
app.use(express.json())

const users = []

app.post('/usuarios' , (req, res) => {

    users.push(req.body)

    res.status(201).json(req.body)
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