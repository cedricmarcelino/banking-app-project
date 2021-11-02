function NotEnoughFunds(props) {
    const {setActive} = props

    function showUserInformation(){
        setActive("UserInformation")
    }

    return (
        <div className="w-full py-5 text-center fade-in">
                    <span>You have insufficient balace for this transaction!</span><br></br>
                    <i className="fa fa-arrow-left cursor-pointer" onClick = {showUserInformation}> GO BACK</i>
            </div>
            
    )
}

export default NotEnoughFunds
