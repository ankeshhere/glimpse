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

export const uploadFile = file => {
    return axios
        .post("http://localhost:5000/upload", file, {
            headers: {
                'Content-Type': 'multipart/form-data'
              }
        })
        .then(response => {
            return response
        })
}

