import { useState } from 'react'

function WithdrawPage(props) {
    
    const {users,setActive,usersIndex,userTransactions} = props

    function showUserInformation(){
        setActive("UserInformation")
    }

    const [amount, setAmount] = useState("")

    function getAmount(val){
        let amount = val.target.value
        let regex = /^[0-9\b]+$/
        if(amount === '' || amount.match(regex)){
            setAmount(amount)
        }
    }

    function withdrawFunds(){
        if(parseInt(amount) <= parseInt(users[usersIndex].balance)){
            users[usersIndex].balance = parseInt(users[usersIndex].balance) - parseInt(amount)
            localStorage.setItem("users",JSON.stringify(users))
            const current = new Date()
            const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`
            userTransactions.push({"transactionType": "Withdrawn Funds", "transactionAmount": `-₱ ${amount}`, "timeOfTransaction": date})
            localStorage.setItem(`transactions_${users[usersIndex].accNumber}`,JSON.stringify(userTransactions))
            setAmount("")
            setActive("WithdrawSuccess")
        } else {
            setActive("NotEnoughFunds")
        }
    }

    return (
        <div className="w-full py-5 text-center fade-in">
                <fieldset className="my-3">
                    <label>Amount to withdraw: </label>
                    <input autoComplete="off" type="text" id="amount" name="amount" className="mx-2" onChange={getAmount} value={amount} ></input>
                </fieldset>
                <button className="my-3 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 border border-pink-700 rounded w-50 m-auto" onClick={withdrawFunds}>
                    Withdraw Funds
                </button><br></br>
                <i className="fa fa-arrow-left cursor-pointer" onClick = {showUserInformation}> GO BACK</i>
            </div>
    )
}

export default WithdrawPage
