import { useState } from 'react'

function SendMoney(props) {
    const {users,setActive,usersIndex,userTransactions} = props
    let transferToList = []
    let transferToIndex

    users.forEach(function(user){
        if(user.accNumber!==users[usersIndex].accNumber){
            transferToList.push(user.accNumber)
        }
    })

    const [amount, setAmount] = useState("")

    function getAmount(val){
        let amount = val.target.value
        let regex = /^[0-9\b]+$/
        if(amount === '' || amount.match(regex)){
            setAmount(amount)
        }
    }

    const [selection, setSelection] = useState(null)
    function getSelection(selected){
        setSelection(selected.target.value)
    }

    function showUserInformation(){
        setActive("UserInformation")
    }

    function transferFunds(){
        if(amount!=="" && selection!==null){

            if(parseInt(amount) <= parseInt(users[usersIndex].balance)){
                users[usersIndex].balance = parseInt(users[usersIndex].balance) - parseInt(amount)

                for(let i = 0; i<users.length; i++){
                    if(selection===users[i].accNumber){
                        transferToIndex=i
                    }
                }
                let currentTransactionsOfReceiver = JSON.parse(localStorage.getItem(`transactions_${users[transferToIndex].accNumber}`))

                users[transferToIndex].balance = parseInt(users[transferToIndex].balance) + parseInt(amount)
                localStorage.setItem("users",JSON.stringify(users))

                const current = new Date()
                const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`

                userTransactions.push({"transactionType": `Sent Money to ${users[transferToIndex].givenName}`, "transactionAmount": `-₱ ${amount}`, "timeOfTransaction": date})
                localStorage.setItem(`transactions_${users[usersIndex].accNumber}`,JSON.stringify(userTransactions))

                currentTransactionsOfReceiver.push({"transactionType": `Received Money from ${users[usersIndex].givenName}`, "transactionAmount": `₱ ${amount}`, "timeOfTransaction": date})
                localStorage.setItem(`transactions_${users[transferToIndex].accNumber}`,JSON.stringify(currentTransactionsOfReceiver))

                setAmount("")
                setActive("TransferSuccess")
            } else {
                setActive("NotEnoughFunds")
            }
        }
    }

    

    return (
    
    <div className="w-full py-5 text-center fade-in">
            <fieldset className="my-3">
                <label>Amount to transfer: </label>
                <input autoComplete="off" type="text" id="amount" name="amount" className="mx-2" onChange={getAmount} value={amount} ></input>
            </fieldset>
            <fieldset className="my-3">
                <label>Transfer to: </label>
                <select className="mx-2" name="users" onChange={getSelection} defaultValue={'default'} >
                    <option value="default" disabled hidden>Select account number</option>
                    {
                        transferToList.map(accountNumber => 
                            <option key={accountNumber}>{accountNumber}</option>
                        )
                    }
                </select>
            </fieldset>
            <button className="my-3 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 border border-pink-700 rounded w-50 m-auto" onClick={transferFunds}>
                    Transfer Funds
            </button><br></br>
            <i className="fa fa-arrow-left cursor-pointer" onClick = {showUserInformation}> GO BACK</i>
        </div>
    )
}

export default SendMoney
