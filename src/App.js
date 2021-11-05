import Header from './components/Header'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Media from 'react-media'
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

  function showHamburgerMenu (){
    setActive("Sidebar")
  }


  return (
  <div className="text-gray-700">
      <Media query="(max-width: 768px)">
        {matches => {
          return matches && 
          <>
            <Header value="PBF" justify="justify-between" setActive={setActive} showUsersPage={showUsersPage} showHamburgerMenu={showHamburgerMenu}/>
            <MainContent active = {active} width="w-full text-center" showAddUsersPage = {showAddUsersPage} showDelUsersPage={showDelUsersPage} showUsersPage={showUsersPage} userInformationStyle="py-5 shadow-inner text-center flex flex-wrap fade-in bg-white border-l-4 border-solid border-pink-600" budgetStyle="shadow-inner py-5 fade-in bg-white border-l-4 border-solid border-pink-600 text-center"/>
            <Footer />
          </>
        }}
      </Media>
      <Media query="(min-width: 769px)">
        {matches => {
          return matches && 
            <>
              <Header value="Piggy Bank Financial" justify="" showUsersPage={showUsersPage}/>
              <div className="flex">
                {/* eslint-disable-next-line */}
                <Sidebar activePage = {active} showAddUsersPage = {showAddUsersPage} showDelUsersPage={showDelUsersPage} showUsersPage={showUsersPage} style="w-1/5 p-8" linkStyle="m-8 text-xl"/>
                <MainContent showPage = {active} width="w-4/5" userInformationStyle="py-5 m-6 text-center flex flex-wrap fade-in bg-white border-l-4 border-solid border-pink-600" budgetStyle="py-5 m-6 fade-in bg-white border-l-4 border-solid border-pink-600 text-center"/>
              </div>
              <Footer />
            </>
        }}
      </Media>
  </div>
  );
}

export default App;
