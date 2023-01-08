import Restaurent from "./Restaurant/Restaurent";
import MenuJson from "./Restaurant/MenuJson";
import { useState } from "react";
const Navbar = () => {
    const [completeMenu, setCompleteMenu] = useState(MenuJson);

    //get all the category from the json
    const allCat = MenuJson.map((currEle) => {
        return currEle.category;
    });
    //list out only unique category
    const uniqueCategory = [...new Set(allCat),'all-item'];
    console.log('This is the unique category', uniqueCategory)
    //filter according to the selected menu item
    const ChangeNavBar = (category) => {
        if (category !== 'all-item') {
            const filterItem = MenuJson.filter((currEle) => {
                return currEle.category === category;

            });
            setCompleteMenu(filterItem);
        } else {
            setCompleteMenu(MenuJson);
        }

    }
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                {
                    uniqueCategory.map((nav, index) => {
                        return(
                            <>
                            <div key={`${nav}${index}`}>
                            <button className="btn btn-outline-success" type="button" onClick={()=> ChangeNavBar(nav)}>{ nav }</button>
                            </div>
                            </>
                        )
                    })
                }
            </nav>
            <Restaurent menu={completeMenu}/>
        </div>
    )
}
export default Navbar;