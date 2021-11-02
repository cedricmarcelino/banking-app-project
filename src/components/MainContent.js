import Data from './Data'
import AddUserPage from './AddUserPage'
import DelUserPage from './DelUserPage'
import { useState } from 'react'

function MainContent(props) {
    const {showPage} = props
    const [users,setUsers] = useState(() => JSON.parse(localStorage.getItem("users")))

    return (
        <div className = "maincontent w-4/5 bg-gray-200">
            {showPage==="Users" && <Data users={users} setUsers={setUsers}/>}
            {showPage==="AddUserPage" && <AddUserPage users={users} setUsers={setUsers}/>}
            {showPage==="DelUserPage" && <DelUserPage users={users} setUsers={setUsers}/>}
        </div>
    )
}

export default MainContent
