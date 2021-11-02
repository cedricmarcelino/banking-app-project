import {useState} from 'react'
import UserAdded from './UserAdded'
import UserExists from './UserExists'

function AddUserPage(props) {
    const [active, setActive] = useState("AddUserPage")
    const {users,setUsers} = props

    let accountExists = false

    const [givenName, setgivenName] = useState("")
    function getGivenName(val){
        let givenName = val.target.value
        let regex = /^[A-Za-z ]+$/
        if(givenName === '' || givenName.match(regex)){
            setgivenName(givenName)
        }
    }

    const [lastName, setLastName] = useState("")
    function getLastName(val){
        let lastName = val.target.value
        let regex = /^[A-Za-z ]+$/
        if(lastName === '' || lastName.match(regex)){
            setLastName(lastName)
        }
    }

    const [accNumber, setAccNumber] = useState("")
    function getAccNumber(val){
        let accNumber = val.target.value
        let regex = /^[0-9\b]+$/
        if(accNumber === '' || accNumber.match(regex)){
            setAccNumber(accNumber)
        }
    }

    const [balance, setBalance] = useState("")
    function getBalance(val){
        let balance = val.target.value
        let regex = /^[0-9\b]+$/
        if(balance === '' || balance.match(regex)){
            setBalance(balance)
        }
    }

    function addUser(){
        if(users!==null){
            if(givenName !== "" && lastName !== "" && accNumber !== "" && balance !== ""){

                users.forEach(function(user){
                    if(accNumber===user.accNumber){
                        accountExists = true
                    }
                })

                if(accountExists === false){
                    users.push({"givenName":givenName,"lastName":lastName,"accNumber":accNumber,"balance":parseInt(balance)})
                    localStorage.setItem("users", JSON.stringify(users))
                    setUsers(() => JSON.parse(localStorage.getItem("users")))
                    const current = new Date()
                    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`
                    localStorage.setItem(`transactions_${accNumber}`, JSON.stringify([{"transactionType": "Opened Account", "transactionAmount": `₱ ${parseInt(balance)}`, "timeOfTransaction": date}]))
                    setgivenName("")
                    setLastName("")
                    setAccNumber("")
                    setBalance("")
                    setActive("UserAdded")
                } else{
                    accountExists = false
                    setActive("UserExists")
                }
                
            }

        } else {
            if(givenName !== "" && lastName !== "" && accNumber !== "" && balance !== ""){
                localStorage.setItem("users", JSON.stringify([{"givenName":givenName,"lastName":lastName,"accNumber":accNumber,"balance":parseInt(balance)}]))
                setUsers(() => JSON.parse(localStorage.getItem("users")))
                const current = new Date()
                const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`
                localStorage.setItem(`transactions_${accNumber}`, JSON.stringify([{"transactionType": "Opened Account", "transactionAmount": `₱ ${parseInt(balance)}`, "timeOfTransaction": date}]))
                setgivenName("")
                setLastName("")
                setAccNumber("")
                setBalance("")
                setActive("UserAdded")
            }
        }
    }


    return (
        <>
            {active === "AddUserPage" &&
            <div className="m-auto py-5 flex flex-col text-center justify-center fade-in">
                <fieldset className="my-3">
                    <label className="my-3">Name:</label>
                    <input autoComplete="off" type="text" id="givenName" name="givenName" className="mx-2" onChange={getGivenName} value={givenName} ></input>
                </fieldset>
                <fieldset className="my-3">
                    <label>Last Name:</label>
                    <input autoComplete="off" type="text" id="lastName" name="lastName" className="mx-2" onChange={getLastName} value={lastName} ></input>
                </fieldset>
                <fieldset className="my-3">
                    <label>Account Number:</label>
                    <input autoComplete="off" type="text" id="accNumber" name="accNumber" className="mx-2" onChange={getAccNumber} value={accNumber} ></input>
                </fieldset>
                <fieldset className="my-3">
                    <label>Starting Balance:</label>
                    <input autoComplete="off" type="text" id="balance" name="balance" className="mx-2" onChange={getBalance} value={balance} ></input>
                </fieldset>
                <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 border border-pink-700 rounded w-40 m-auto disabled:opacity-50" onClick={addUser} disabled={givenName === "" || lastName === "" || accNumber === "" || balance === ""}>
                    Add New User
                </button>
            </div>
            }
            {active === "UserAdded" && <UserAdded setActive={setActive}/>}
            {active === "UserExists" && <UserExists setActive={setActive}/>}
        </>
    )
}

export default AddUserPage
