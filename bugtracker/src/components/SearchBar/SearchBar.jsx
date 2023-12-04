import "./searchBar.css"


export function SearchBar(){

    return(
        <>
        <div id="searchContainer">
            <div className="burger-btn-container">
            <hr></hr>
            <hr></hr>
            <hr></hr>

            </div>
            <input id = "searchBar" placeholder="Search"></input>
            <button id="create-issue-btn">Create Issue +</button>
            
            
        </div>
        <div className="options-container">
        <button className="table-view-filter-btns">Assigned to me</button>
        <button className="table-view-filter-btns">Modified</button>
        <button className="table-view-filter-btns">High Priority Items</button>
        
        </div>
        </>
    )
}