import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import postRoutes from './routes/post.routes.js'

const app = express() //создается такаим образом приложение
dotenv.config() // это делаем для переменных

//Переменные из .env
const PORT = process.env.PORT || 5000
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME

app.use(cors()) // для того чтобы наш BAKEND разрешал запросы с других IP-адресов
//тестовый запрос для проверки
app.use(express.json()) // для того чтобы воспринимать формат json
app.use(morgan('dev'))

mongoose.set('strictQuery', false) // делаем чтобы не выскакивало предупреждение

//регистрируем наши роуты
app.use('/api/post', postRoutes) // роут обращения для создания постаa

//Тестовый запрос для проверки
app.get('/', (req, res) => {
   res.send('Hello World')
})

mongoose
   .connect(
      `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.hnznksk.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
      {
         useNewUrlParser: true,
         useUnifiedTopology: true,
      }
   )
   .then(() => {
      app.listen(PORT, () =>
         console.log(`MongoDb connect and server run on ${PORT}`)
      )
   })
   .catch(error => console.log(error))
