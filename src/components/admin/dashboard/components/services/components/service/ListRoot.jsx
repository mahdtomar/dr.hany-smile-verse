import SidebarDash from '../../../SidebarDash';
import CosmeticGallery from '../../../../../../services-page/components/cosmetic-teeth/CosmeticGallery';
import HeaderRoot from '../../../../../../services-page/components/root-canal/components/HeaderRoot';
import ProcedureRoot from '../../../../../../services-page/components/root-canal/components/ProcedureRoot';
import RequiredRoot from '../../../../../../services-page/components/root-canal/components/RequiredRoot';

function ListRoot() {

   
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
        <div style={{ display: 'flex', flex: 1 }}  className='list-root root-canal-component'>
            <SidebarDash />
            <div className="bodydash flex-1">
                <h1 className="heading-dash">Root Canal</h1>
                <main>
                <HeaderRoot />
                <div className="btns">
                    <div className="btn">
                        <button className="edit" onClick={handleEdit}>Edit</button>
                        <button className="save" onClick={handleSave}>Save</button>
                        {/* <button className="del">Delete</button> */}
                    </div>
                </div>
                <RequiredRoot/>
                <div className="btns">
                    <div className="btn">
                        <button className="edit" onClick={handleEdit}>Edit</button>
                        <button className="save" onClick={handleSave}>Save</button>
                        {/* <button className="del">Delete</button> */}
                    </div>
                </div>
                <ProcedureRoot/>
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
    );
}

export default ListRoot;
