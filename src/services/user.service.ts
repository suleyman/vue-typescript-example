import User from "@/types/User"

class UserService {
    constructor () {
        console.log('User service constructor..')
    }
    async fetchusers (): Promise<Array<User>> {
        const userList = await fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
        return userList;
    }
}

const userService = new UserService();

export default userService
