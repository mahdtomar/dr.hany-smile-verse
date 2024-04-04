import SidebarDash from '../../../SidebarDash';
import CosmeticGallery from '../../../../../../services-page/components/cosmetic-teeth/CosmeticGallery';
import HeaderRoot from '../../../../../../services-page/components/root-canal/components/HeaderRoot';
import ProcedureRoot from '../../../../../../services-page/components/root-canal/components/ProcedureRoot';
import RequiredRoot from '../../../../../../services-page/components/root-canal/components/RequiredRoot';
import HeaderAlignment from '../../../../../../services-page/components/alignment-teeth/components/HeaderAlignment';
import DisplayAlignment from '../../../../../../services-page/components/alignment-teeth/components/DisplayAlignment';
import FurtherAlignment from '../../../../../../services-page/components/alignment-teeth/components/FurtherAlignment';
import WhyUsAlignment from '../../../../../../services-page/components/alignment-teeth/components/WhyUsAlignment';
import AppointmentBtn from '../../../../../../AppointmentBtn';

function ListAlign() {

    const handleEdit = () => {
        const headingOne = document.querySelectorAll("#one");
        const paragraphElement = document.querySelectorAll("#one");
        console.log(headingOne, paragraphElement)
        Array.from(headingOne).map((e) => { e.setAttribute('contenteditable', 'true'); return '' })
        Array.from(paragraphElement).map((e) => { e.setAttribute('contenteditable', 'true'); return '' })
    };

    const handleSave = () => {
        const headingOne = document.querySelectorAll("#one");
        const paragraphElement = document.querySelectorAll("#one");
        console.log(headingOne, paragraphElement)
        Array.from(headingOne).map((e) => { e.setAttribute('contenteditable', 'false'); return '' })
        Array.from(paragraphElement).map((e) => { e.setAttribute('contenteditable', 'false'); return '' })
        const headingData = []
        Array.from(headingOne).map(e => { headingData.push(e.innerText); return '' });
        const data = {
            heading: headingData,
            paragraph: paragraphElement.innerText
        };
        console.log('Saved:', data);
        // Here you can send the data to your backend or perform any other actions
    };

    return (
        <div style={{ display: 'flex', flex: 1 }} className='list-root '>
            <SidebarDash />
            <div className="bodydash flex-1">
                <h1 className="heading-dash">Alignment Teeth</h1>
                <div className="AlignmentTeeth-comp">
                    {/* <div className="container"> */}
                    <div className="container">
                        <main>

                            <section className="header">

                                <HeaderAlignment />
                            </section>
                            <div className="btns">
                                <div className="btn">
                                    <button className="edit" onClick={handleEdit}>Edit</button>
                                    <button className="save" onClick={handleSave}>Save</button>
                                    {/* <button className="del">Delete</button> */}
                                </div>
                            </div>
                            <section className="service-display">
                                <DisplayAlignment />
                            </section>
                            <div className="btns">
                                <div className="btn">
                                    <button className="edit" onClick={handleEdit}>Edit</button>
                                    <button className="save" onClick={handleSave}>Save</button>
                                    {/* <button className="del">Delete</button> */}
                                </div>
                            </div>
                            <section className="further-details">
                                <FurtherAlignment />
                            </section>
                            <div className="btns">
                                <div className="btn">
                                    <button className="edit" onClick={handleEdit}>Edit</button>
                                    <button className="save" onClick={handleSave}>Save</button>
                                    {/* <button className="del">Delete</button> */}
                                </div>
                            </div>
                            <section className="why-us">
                                <WhyUsAlignment />
                            </section>
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
        </div>
    );
}

export default ListAlign;
