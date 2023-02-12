import Post from '../models/Post.js'

//Create Post
export const createPost = async (req, res) => {
   try {
      const { title, text, imgUrl } = req.body // получаем из нашего клиента

      //формируем наш новыцй пост
      const newPost = new Post({
         title,
         text,
         imgUrl,
      })
      await newPost.save() // записываем непосредственно в базу
      res.json(newPost) // отдаем наклиента наш новый пост
   } catch (err) {
      console.log(err)
      res.json({ message: 'Что-то пошло не так' })
   }
}

//получение постов
export const getPost = async (req, res) => {
   try {
      const posts = await Post.find() // находимпосты
      res.json(posts) // отдаем все посты
   } catch (err) {
      console.log(err)
      res.json({ message: 'Что-то пошло не так' })
   }
}

//получение поста по id
export const getByIdPost = async (req, res) => {
   try {
      const post = await Post.findById(req.params.id) // само получение поста по id
      //проверка если поста нет
      if (!post) {
         return res.json({ message: 'Поста нет' })
      }
      res.json(post) // отправляем на фронт
   } catch (err) {
      console.log(err)
      res.json({ message: 'Что-то пошло не так' })
   }
}

//удаление поста
export const removePost = async (req, res) => {
   try {
      // сначало находим id
      const { id } = req.body
      //удаляем его используя id
      const post = await Post.findByIdAndDelete(id)
      res.json({ message: 'пост удален' })
   } catch (err) {
      res.json({ message: 'Что-то пошло не так с данным постом' })
   }
}
