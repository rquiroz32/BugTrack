import "./MainPage.css"
import { SearchBar } from "../components/SearchBar/SearchBar"

import Nav from "../components/Nav/Nav"

/*

consider making the body of the page an iFrame so you can have scrolling just in that section

*/

export function MainPage(){
    return(
    <>
     <Nav/>
    <div id="mainPageContainer">
       
        <SearchBar/>
        {/* Body */ }
 
    </div>
    </>
    )
}