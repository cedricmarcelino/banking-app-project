import Transactions from "./Transactions"

function UserInformation(props) {
    const {users,setActive,userCurrentAccNumber,usersIndex} = props

    function showUsers(){
        setActive("Users")
    }

    function showDepositPage(){
        setActive("DepositPage")
    }

    function showWithdrawPage(){
        setActive("WithdrawPage")
    }

    function showSendMoneyPage(){
        setActive("SendMoney")
    }

    function showBudgetApp(){
        setActive("Budget")
    }

    return (
            <>
                <div className="py-5 m-6 text-center flex flex-wrap fade-in bg-white border-l-4 border-solid border-pink-600">
                    <div className="w-full flex">
                        <div className="w-2/4 text-left p-4 m-2 mx-7">
                            <span>Account Holder: {users[usersIndex].givenName} {users[usersIndex].lastName}</span><br></br>
                            <span>Account Number: {users[usersIndex].accNumber}</span><br></br>
                            <span>Running Balance: ₱ {parseInt(users[usersIndex].balance)}</span>
                        </div>
                        <div className="w-2/4 flex flex-wrap justify-evenly">
                            <div className="w-60 m-2 p-4">
                                <i className='fas fa-piggy-bank text-7xl cursor-pointer hover:text-pink-600' onClick = {showDepositPage}></i><br></br>
                                <span>Deposit</span>
                            </div>
                            <div className="w-60 m-2 p-4">
                                <i className='fas fa-wallet text-7xl cursor-pointer hover:text-pink-600' onClick = {showWithdrawPage}></i><br></br>
                                <span>Widthdraw</span>
                            </div>
                            <div className="w-60 m-2 p-4">
                                <i className='fas fa-hand-holding-usd text-7xl cursor-pointer hover:text-pink-600' onClick = {showSendMoneyPage}></i><br></br>
                                <span>Send Money</span>
                            </div>
                            <div className="w-60 m-2 p-4">
                                <i className='fas fa-cash-register text-7xl cursor-pointer hover:text-pink-600' onClick = {showBudgetApp}></i><br></br>
                                <span>Budget</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Transactions userCurrentAccNumber={userCurrentAccNumber}/>
                <div className="w-full text-center py-4">
                <i className="fa fa-arrow-left cursor-pointer" onClick = {showUsers}> GO BACK</i>
                </div>
            </>
    )
}

export default UserInformation