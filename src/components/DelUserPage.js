import {useState} from 'react'
import UserDeleted from './UserDeleted'

function DelUserPage(props) {

    const {users,setUsers} = props

    const [active, setActive] = useState("DelUserPage")

    const [selection, setSelection] = useState(null)
    
    function getSelection(selected){
        setSelection(selected.target.value)
    }

    function deleteUser(){
        if(selection !== null){
            for(let i = 0; i < users.length; i++){
                if(selection===users[i].accNumber){
                    users.splice(i,1)
                }
            }
            localStorage.setItem("users", JSON.stringify(users))
            setUsers(() => JSON.parse(localStorage.getItem("users")))
            localStorage.removeItem(`transactions_${selection}`)

            if(localStorage.getItem(`expenses_${selection}`)!==null){
                localStorage.removeItem(`expenses_${selection}`)
            }
            

            if(users.length===0){
                localStorage.removeItem("users")
                setUsers(null)
            }
            setActive("UserDeleted")
        }
    }

    if(users===null || users.length===0){
        return (
            <div className="w-full py-5 text-center fade-in">
                <span>NO USERS ON RECORD</span><br></br>
            </div>
        )}
    else {
        return ( 
            <>
                {active === "DelUserPage" && 
                    <div className="w-full py-5 text-center fade-in">
                        <fieldset className="my-3">
                            <label>List of active users: </label>
                            <select name="users" onChange={getSelection} defaultValue={'default'} >
                                <option value="default" disabled hidden>Select a user</option>
                                {
                                    users.map(key => 
                                        <option key={key.accNumber}>{key.accNumber}</option>
                                    )
                                }
                            </select>
                        </fieldset>
                        <button className="my-3 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 border border-pink-700 rounded w-40 m-auto" onClick={deleteUser}>
                            Delete User
                        </button>
                    </div>
                }

                {active === "UserDeleted" && <UserDeleted setActive={setActive}/>}
            </>                
        )
    }
}

export default DelUserPage
