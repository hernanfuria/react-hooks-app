import { useState } from "react"
import { UserContext } from "./UserContext"


// const user = {
//     id: 132,
//     name: 'asd lkjjk',
//     mail: 'asd@dfg.com',
// }

export const UserProvider = ({children}) => {

    const [user, setUser] = useState()

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
