import { SearchBar } from "../components/SearchBar/SearchBar"
import "./MainPage.css"

/*

consider making the body of the page an iFrame so you can have scrolling just in that section

*/

export function MainPage(){
    return(
    
    <div id="mainPageContainer">
        {/* Nav */ }
        <SearchBar/>
        {/* Body */ }
 
    </div>
    
    )
}