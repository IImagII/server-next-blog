import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
   title: { type: String, required: true },
   text: { type: String, required: true },
   imgUrl: { type: String, default:""},
})

export default mongoose.model('Post', PostSchema)
