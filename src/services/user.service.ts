import User from "@/types/User"
import axios from "@/plugins/axios"

class UserService {
    constructor () {
        console.log('User service constructor..')
    }
    async fetchusers (): Promise<Array<User>> {
        const userList = await axios.get('/users')
            .then(response => response.data)
        return userList;
    }
}

const userService = new UserService();

export default userService
