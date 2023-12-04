import './Nav.css'

export default function Nav(){

    return(
    <ul className='nav-container'>
        <li className='nav-item' id='nav-backlog'>Backlog</li>
        <li className='nav-item' id='nav-agile-board'>Agile Board</li>
        <li className='nav-item' id='nav-projects'>Projects</li>
        <li className='nav-item' id='nav-settings'>Settings</li>
    </ul>)
}