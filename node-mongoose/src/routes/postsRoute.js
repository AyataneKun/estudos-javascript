import UserModel from '../models/posts'

const postsRoute = (app) => {
    
    app.route('/posts/:id?')
        .get(async (req, res) => {
            const { id } = req.params
            const query = {};

            if (id) {
                query._id = id
            }

            try {

                const posts = await UserModel.find(query)
                res.send({ posts })
                
            } catch (error) {
                res.status(400).send({ error: 'Failed to find post' })
            }
        })
        .post(async (req, res) => {

            try {
                const posts = new UserModel(req.body)
                await posts.save()

                res.status(201).send('OK')
            } catch (error) {
                res.send(error)   
            }
        })
        .put(async (req, res) => {
            const { id } = req.params

            if (!id) {
                return res.status(400).send({ error: 'User ID is missing.' })
            }

            try {
                const updatedPosts = await UserModel.findOneAndUpdate({ _id: id }, req.body, {
                    new: true,
                });

                console.log(updatedPosts)

                if (updatedPosts) {
                    return res.status(200).send('OK')
                }


                res.status(400).send({ error: 'Could not update the user' })

                
            } catch (error) {
                res.send(error)
            }
        })
        .delete(async (req, res) => {

            const { id } = req.params

            if (!id) {
                return res.status(400).send({ error: 'User ID is missing.' })
            }

            try {
                const deletedPosts = await UserModel.deleteOne({ _id: id })

                if (deletedPosts.deletedCount) {
                    return res.send('OK')
                }

                res.status(400).send({ error: 'Could not delete the user' })

            } catch (error) {
                res.send(error)
            }
        })
}

module.exports = postsRoute