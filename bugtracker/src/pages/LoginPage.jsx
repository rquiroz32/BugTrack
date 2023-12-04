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
                    <label className='credential-form-labels'>Username</label>
                    <input className='credential-inputs'type="text" placeholder='User Name'></input>
                </div>

                <div className='formRow'>
                    <label className='credential-form-labels'>Password</label>
                    <input type="text"className='credential-inputs' placeholder='Password'></input>
                </div>

                <button className='login-page-btns'>Login</button>

                <button className='login-page-btns'>Sign Up!</button>
            </div>
        </>
    )
}