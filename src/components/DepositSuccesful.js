function DepositSuccesful(props) {

    const {setActive} = props

    function showUserInformation(){
        setActive("UserInformation")
    }

    return (
        <div className="w-full py-5 text-center fade-in">
                <span>Your money was deposited sucessfully!</span><br></br>
                <i className="fa fa-arrow-left cursor-pointer" onClick = {showUserInformation}> GO BACK</i>
        </div>
    )
}

export default DepositSuccesful
