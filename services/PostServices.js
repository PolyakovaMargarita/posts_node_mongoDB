import Post from "../Post.js";
import fileServices from "../fileServices.js";

class PostServices {
    async create (post, picture) {
        const fileName = fileServices.saveFile(picture)
        const createPost = await Post.create({...post, picture: fileName})
        return createPost;
    }
    async getAll () {
        const posts = await Post.find()
        return posts;
    }
    async getOne (id) {
        if(!id) {
            throw new Error("Id не указан")
        }
        const post = await Post.findById(id)
        return post;
    }
    async update (post) {
        if(!post._id) {
            throw new Error("Id не указан")
        }
        const updatePost = await Post.findByIdAndUpdate(post._id, post, {new: true})
        return updatePost;
    }
    async delete (id) {
        if(!id) {
            throw new Error("Id не указан")
        }
        const post = await Post.findOneAndDelete(id)
        return post;
    }
}

export default new PostServices();