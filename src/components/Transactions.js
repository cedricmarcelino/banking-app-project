function Transactions(props) {
    const {userCurrentAccNumber} = props
    let usersTransactions = JSON.parse(localStorage.getItem(`transactions_${userCurrentAccNumber}`))
    return (
        <div className="m-6">
            <span className="text-xl">Transaction History</span>
                    <table className="table-fixed m-auto w-full flex flex-col">
                        <thead className="flex">
                            <tr className="flex w-full justify-between">
                                <th className="w-1/3">Date</th>
                                <th className="w-1/3">Transaction Details</th>
                                <th className="w-1/3">Amount</th>
                            </tr>
                        </thead>
                        <tbody className="flex flex-col h-96 overflow-y-scroll">
                            {
                                usersTransactions.reverse().map((transaction,index) => 
                                    
                                    <tr key={`transaction_${index}`} className="flex w-full justify-between">
                                        <td key="timeOfTransaction" className="text-center w-1/3">{transaction.timeOfTransaction}</td>
                                        <td key="transactionType" className="w-1/3">{transaction.transactionType}</td>
                                        <td key="transactionAmount" className="text-center w-1/3">{transaction.transactionAmount}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                        
                    </table>
        </div>
    )
}

export default Transactions
