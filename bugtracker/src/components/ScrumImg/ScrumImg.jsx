// import bugFlatSvg from "../assets/bug-flat.svg"
import scrumBoard from "../../assets/scrum-board-monochromatic.svg"
import "./ScrumImg.css"
export default function BugImg() {
    return (
        <div id="scrumImgContainer">
            <img id="scrumImg" src={scrumBoard} alt="My Happy SVG" />
        </div>
    )
}