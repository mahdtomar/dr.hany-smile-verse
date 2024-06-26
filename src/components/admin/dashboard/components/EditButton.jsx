function EditButton (props){
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


    return(
        <div className="btns">
        <div className="btn">
            <button className="edit" onClick={handleEdit}>Edit</button>
            <button className="save" onClick={handleSave}>Save</button>
            {/* <button className="del">Delete</button> */}
        </div>
    </div>

    )
}
export default EditButton