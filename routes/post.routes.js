import { Router } from 'express'
import {
   createPost,
   getByIdPost,
   getPost,
   removePost,
} from '../controllers/post.js'

const router = new Router()

//создание поста
//http://localhost:3002/api/post/add
router.post('/add', createPost)

//получение поста
//http://localhost:3002/api/post
router.get('/', getPost)

//получение поста по id
//http://localhost:3002/api/post/:id
router.get('/:id', getByIdPost)

//удаление поста по id
//http://localhost:3002/api/post/:id
router.post('/remove', removePost)

export default router
