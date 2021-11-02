function SidebarLink(props) {
    let activeLink = ""

    if(props.value===props.activePage){
        activeLink = "text-pink-600"
    }
    
    
    return (
        <div className="m-8 text-xl">
            <span className = {`cursor-pointer ${activeLink} hover:text-pink-600`} onClick={props.showPage}>{props.name}</span>
        </div>
    )

}

export default SidebarLink
