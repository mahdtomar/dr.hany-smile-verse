import SidebarDash from "../SidebarDash"
import HeaderCosmetic from "../../../../services-page/components/cosmetic-teeth/HeaderCosmetic"
function ListAlign() {
    return (
        <div style={{ display: "flex", flex: 1 }}>
            <SidebarDash />
            <div className="bodydash flex-1 ">
                <h1 className="heading-dash">Cosmetic Teeth</h1>
                <HeaderCosmetic />
                <div className="btns">
                    <div className="btn">
                        <button className="edit">Edit</button>
                        <button className="del">Delete</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default ListAlign