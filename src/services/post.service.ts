import Post from "@/types/Post"
import axios from '@/plugins/axios'

class PostService {
    constructor () {
        console.log('Post service initialized')
    }
    async fetchPosts (): Promise<Array<Post>> {
        const posts = await axios.get('/posts')
            .then(response => response.data)
        return posts
    }
}

const postService = new PostService();

export default postService