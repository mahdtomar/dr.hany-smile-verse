import CommonIssuesOral from '../../../../../../services-page/components/oral-hygiene/components/CommonIssuesOral';
import HeaderOral from '../../../../../../services-page/components/oral-hygiene/components/HeaderOral';
import ServicesOral from '../../../../../../services-page/components/oral-hygiene/components/ServicesOral';
import SidebarDash from '../../../SidebarDash';

function ListOral(){

   
        const handleEdit = () => {
            const headingOne = document.getElementById("headingCosmetic");
            const paragraphElement = document.getElementById("paragraphCosmetic");
            headingOne.setAttribute('contenteditable', 'true');
            paragraphElement.setAttribute('contenteditable', 'true');
              
    
        };
    
        const handleSave = () => {
            const headingOne = document.getElementById("headingCosmetic");
            const paragraphElement = document.getElementById("paragraphCosmetic");
            headingOne.setAttribute('contenteditable', 'false');
            paragraphElement.setAttribute('contenteditable', 'false');
    
            const data = {
                heading: headingOne.innerText,
                paragraph: paragraphElement.innerText
            };
            console.log('Saved:', data);
            // Here you can send the data to your backend or perform any other actions
        };
    
        return (
            <div style={{ display: 'flex', flex: 1 }}>
                <SidebarDash />
                <div className="bodydash flex-1 list-cosmetic">
                    <h1 className="heading-dash">Oral Hygiene</h1>
                    <div className="container oralhygiene " style={{ display: "block" }}>
        <main>

        <HeaderOral/>
        <div className="btns">
                    <div className="btn">
                        <button className="edit" onClick={handleEdit}>Edit</button>
                        <button className="save" onClick={handleSave}>Save</button>
                        {/* <button className="del">Delete</button> */}
                    </div>
                </div>
<ServicesOral/>
<div className="btns">
                    <div className="btn">
                        <button className="edit" onClick={handleEdit}>Edit</button>
                        <button className="save" onClick={handleSave}>Save</button>
                        {/* <button className="del">Delete</button> */}
                    </div>
                </div>
     <CommonIssuesOral/>
     <div className="btns">
                    <div className="btn">
                        <button className="edit" onClick={handleEdit}>Edit</button>
                        <button className="save" onClick={handleSave}>Save</button>
                        {/* <button className="del">Delete</button> */}
                    </div>
                </div>
        </main>
      </div>
                </div>
            </div>
        );
    
}
export default ListOral