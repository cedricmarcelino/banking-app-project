import {useState,useEffect} from 'react'
import UserInformation from './UserInformation'
import DepositPage from "./DepositPage"
import WithdrawPage from "./WithdrawPage"
import SendMoney from "./SendMoney"
import Budget from "./Budget"
import DepositSuccesful from './DepositSuccesful'
import WithdrawSuccesful from './WithdrawSuccesful'
import NotEnoughFunds from './NotEnoughFunds'
import TransferSuccess from './TransferSuccess'
import AddExpense from './AddExpense'
import ExpenseDeleted from './ExpenseDeleted'
import ExpenseAdded from './ExpenseAdded'

function Data(props) {
    const [active, setActive] = useState("Users")
    const [userTransactions,setUserTransactions] = useState("")
    const [userCurrentAccNumber,setAccNumber] = useState("")
    const [usersIndex,setIndex] = useState("")
    const { users, setUsers }= props
    
    function showUserInformation(e){
        setAccNumber(e.target.innerHTML)
        if(userTransactions!=="" && usersIndex!=="" && userCurrentAccNumber!==""){
            setActive("UserInformation")
        }
    }


    useEffect(() => {
        if(users!=="" && users!==null){
            for(let i = 0; i<users.length; i++){
                if(userCurrentAccNumber===users[i].accNumber){
                    setIndex(i)
                }
            }
        }
    },[userCurrentAccNumber,users])

    useEffect(() => {
        if(usersIndex!=="" && userCurrentAccNumber!==""){
            setUserTransactions(JSON.parse(localStorage.getItem(`transactions_${users[usersIndex].accNumber}`)))
        }
    },[users,usersIndex,userCurrentAccNumber,setUserTransactions])
    
    useEffect(() => {
        if(userTransactions!=="" && usersIndex!=="" && userCurrentAccNumber!==""){
            setActive("UserInformation")
        }
    },[userTransactions,usersIndex,userCurrentAccNumber])
    console.log(users)
    if(users===null){
        return (
            <>
                <div className="w-full py-5 text-center fade-in">
                    <span>NO USERS ON RECORD</span><br></br>
                </div>
            </>
        )}
    else {
        return ( 
            <>
                {active === "Users" &&
                <div className="w-full py-5 text-center fade-in">
                    <table className="users-table table-auto border-solid border-2 m-auto bg-white">
                        <thead>
                            <tr className="users-table border-solid">
                                <th className="users-table border-solid">Account Number</th>
                                <th className="users-table border-solid">Given Name</th>
                                <th className="users-table border-solid">Last Name</th>
                                <th className="users-table border-solid">Balance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map(user => 
                                    
                                    <tr key={user.accNumber}>
                                        <td key="accNumber" className="cursor-pointer hover:underline font-bold hover:text-pink-600 users-table border-solid" onClick={showUserInformation}>{user.accNumber}</td>
                                        <td key="givenName" className="users-table border-solid">{user.givenName}</td>
                                        <td key="lastName" className="users-table border-solid">{user.lastName}</td>
                                        <td key="balance" className="users-table border-solid">{`₱ ${parseInt(user.balance)}`}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                        
                    </table>
                </div>
                }

                {active === "UserInformation" && <UserInformation users={users} setActive={setActive} userCurrentAccNumber={userCurrentAccNumber} usersIndex={usersIndex} setUsers={setUsers}/>}
                {active === "DepositPage" && <DepositPage users={users} setActive={setActive} usersIndex={usersIndex} userTransactions={userTransactions} setUsers={setUsers}/>}
                {active === "WithdrawPage" && <WithdrawPage users={users} setActive={setActive} usersIndex={usersIndex} userTransactions={userTransactions} setUsers={setUsers}/>}
                {active === "SendMoney" && <SendMoney users={users} setActive={setActive} usersIndex={usersIndex} userTransactions={userTransactions} setUsers={setUsers}/>}
                {active === "Budget" && <Budget users={users} setActive={setActive} userCurrentAccNumber={userCurrentAccNumber} usersIndex={usersIndex}/>}
                {active==="DepositSuccesful" && <DepositSuccesful setActive={setActive}/>}
                {active==="WithdrawSuccess" && <WithdrawSuccesful setActive={setActive}/>}
                {active==="NotEnoughFunds" && <NotEnoughFunds setActive={setActive}/>}
                {active==="TransferSuccess" && <TransferSuccess setActive={setActive}/>}
                {active==="ExpenseDeleted" && <ExpenseDeleted setActive={setActive}/>}
                {active==="AddExpense" && <AddExpense setActive={setActive} userCurrentAccNumber={userCurrentAccNumber}/>}
                {active==="ExpenseAdded" && <ExpenseAdded setActive={setActive}/>}
            </>                
        )
    }
}

export default Data
