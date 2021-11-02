function UserExists(props) {
    const {setActive} = props

    function showAddUserPage(){
        setActive("AddUserPage")
    }


    return (
    <div className="w-full py-5 text-center fade-in">
            <span>Account number is already active!</span><br></br>
            <i className="fa fa-arrow-left cursor-pointer" onClick = {showAddUserPage}> GO BACK</i>
    </div>
    )
}

export default UserExists
