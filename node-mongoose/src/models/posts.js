import Mongoose from 'mongoose'

const schema = new Mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is obligatory!'],
    },
    content: String,
    author: {
        type: String,
        required: [true, 'Author name is obligatory!'],
    },
    // publishDate: {
    //     type: Date,
    //     required: [true, 'Publish date is Obligatory!']
    // },
}, {
    timestamps: { createdAt: 'publishDate', updatedAt: true },
    toJSON: { 
        virtuals: true,
        transform(doc, ret) {
            ret.id = ret._id
            delete ret._id
          }
    },
    versionKey: false,
})

const PostsModel = Mongoose.model('Posts', schema)

export default PostsModel