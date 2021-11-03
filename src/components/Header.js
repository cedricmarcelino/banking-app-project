import { useEffect } from 'react'
import Media from 'react-media'

const Header = (props) => {
    const {value,justify,showHamburgerMenu,showUsersPage} = props

    useEffect(() => {
        return () => {showUsersPage()}
        // eslint-disable-next-line
    },[])

    return (
        <header className={`shadow-lg p-5 border-t-4 border-solid border-pink-600 flex ${justify}`}>
            <i className='fas fa-landmark text-4xl mx-2 text-pink-600'></i>
            <h1 className="text-4xl">{value}</h1>
            <Media query="(max-width: 768px)">
            {matches => {
            return matches && 
                <i className="fas fa-bars text-4xl mx-2 text-pink-600 cursor-pointer" onClick={showHamburgerMenu}></i>
            }}
            </Media>
            
        </header>
    )
}

export default Header