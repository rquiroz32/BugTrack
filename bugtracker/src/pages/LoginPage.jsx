import './LoginPage.css'
import ScrumImg from '../components/ScrumImg/ScrumImg.jsx'

export default function LoginPage() {
    return (
        <>
            <div id="textContainer">
                <h1>Welcome to Bug Track</h1>
                <p>Bug Track is a Scrum based project management platform complete with User Stories, Epics, Tasks, Comments, and Agile Boards!</p>
            </div>
            <ScrumImg />
            <div className='LoginContainer'>
                <div className='formRow'>
                    <label>Username</label>
                    <input type="text" placeholder='User Name'></input>
                </div>

                <div className='formRow'>
                    <label>Password</label>
                    <input type="text" placeholder='Password'></input>
                </div>

                <button>Login</button>

                <button>Sign Up!</button>
            </div>
        </>
    )
}