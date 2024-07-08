import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Users() {
    const { id } = useParams()
    const [users, setUsers] = useState ({})

    async function showUserInfo() {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        console.log(data)
        setUsers(data)  
    }

    useEffect(() => {
        showUserInfo();
    }, []);

    
    return (
        <div>
            <p>{users.id}</p>
            <p>{users.name}</p>
            <p>{users.email}</p>
            <p>{users.username}</p>
        </div>
    )
}

export default Users