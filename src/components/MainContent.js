import Data from './Data'
import AddUserPage from './AddUserPage'
import DelUserPage from './DelUserPage'
import Sidebar from './Sidebar'
import { useState } from 'react'

function MainContent(props) {
    const {showPage,width,showAddUsersPage,showDelUsersPage,showUsersPage,userInformationStyle,budgetStyle} = props
    const [users,setUsers] = useState(() => JSON.parse(localStorage.getItem("users")))

    return (
        <div className = {`maincontent shadow-inner ${width} bg-gray-200`}>
            {showPage==="Users" && <Data users={users} setUsers={setUsers} userInformationStyle={userInformationStyle} budgetStyle={budgetStyle}/>}
            {showPage==="AddUserPage" && <AddUserPage users={users} setUsers={setUsers}/>}
            {showPage==="DelUserPage" && <DelUserPage users={users} setUsers={setUsers}/>}
            {/* eslint-disable-next-line */}
            {showPage==="Sidebar" && <Sidebar activePage = {showPage} showAddUsersPage = {showAddUsersPage} showDelUsersPage={showDelUsersPage} showUsersPage={showUsersPage} style="flex flex-col justify-around h-96 bg-white shadow-inner fade-in" linkStyle="text-3xl text-pink-600"/>}
        </div>
    )
}

export default MainContent