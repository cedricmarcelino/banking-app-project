import SidebarLink from './SidebarLink'

function Sidebar(props) {

    return (
        <div className = {props.style}>
            <SidebarLink linkStyle={props.linkStyle} activePage = {props.activePage} showPage={props.showUsersPage} name="Users" value="Users"/>
            <SidebarLink linkStyle={props.linkStyle} activePage = {props.activePage} showPage={props.showAddUsersPage} name="Add a user" value="AddUserPage"/>
            <SidebarLink linkStyle={props.linkStyle} activePage = {props.activePage} showPage={props.showDelUsersPage} name="Delete a user" value="DelUserPage"/>
        </div>
    )
}

export default Sidebar
