import Header from './components/Header'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import { useState } from 'react'

function App() {
  
  const [active, setActive] = useState("Users")

  function showAddUsersPage (){
    setActive("AddUserPage")
  }

  function showDelUsersPage (){
    setActive("DelUserPage")
  }

  function showUsersPage (){
    setActive("Users")
  }

  return (
  <div className="text-gray-700">
      <Header />
      <div className="flex">
        <Sidebar activePage = {active} showAddUsersPage = {showAddUsersPage} showDelUsersPage={showDelUsersPage} showUsersPage={showUsersPage}/>
        <MainContent showPage = {active}/>
      </div>
      <Footer />
  </div>
  );
}

export default App;
