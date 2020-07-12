import axios from 'axios'


    
export const addUser = user => {
    return axios
        .post("http://localhost:5000/user", {
            name: user.name,
            age: user.age,
            place: user.place
        })
        .then(response => {
            return response
        })
}

