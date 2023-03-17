import PostServices from "../services/PostServices.js";

class PostController {
    async create (req, res) {
    try {
        const post = await PostServices.create(req.body, req.files.picture)
        return res.json(post)
    } catch (e) {
        res.status(500).json(e)
        }
    }
    async getAll (req, res) {
        try {
            const posts = await PostServices.getAll()
            return res.json(posts)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getOne (req, res) {
        try {
            const post = await PostServices.getOne(req.params.id)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async update (req, res) {
        try {
            const updatePost = await PostServices.update(req.body)
            return res.json(updatePost)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async delete (req, res) {
        try {
            const post = await PostServices.delete(req.params.id)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new PostController();
