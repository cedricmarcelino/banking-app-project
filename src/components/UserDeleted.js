function UserDeleted(props) {
    const {setActive} = props

    function showDelUserPage(){
        setActive("DelUserPage")
    }


    return (
        <div className="w-full py-5 text-center fade-in">
                <span>User Deleted Sucessfully!</span><br></br>
                <i className="fa fa-arrow-left cursor-pointer" onClick = {showDelUserPage}> GO BACK</i>
        </div>
    )
}

export default UserDeleted
