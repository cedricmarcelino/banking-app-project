import SidebarLink from './SidebarLink'

function Sidebar(props) {

    return (
        <div className = "w-1/5 p-8 ">
            <SidebarLink activePage = {props.activePage} showPage={props.showUsersPage} name="Users" value="Users"/>
            <SidebarLink activePage = {props.activePage} showPage={props.showAddUsersPage} name="Add a user" value="AddUserPage"/>
            <SidebarLink activePage = {props.activePage} showPage={props.showDelUsersPage} name="Delete a user" value="DelUserPage"/>
        </div>
    )
}

export default Sidebar
