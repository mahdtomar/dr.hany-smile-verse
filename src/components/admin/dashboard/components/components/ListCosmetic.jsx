import React, { useState, useEffect } from 'react';
import SidebarDash from '../SidebarDash';
import HeaderCosmetic from '../../../../services-page/components/cosmetic-teeth/HeaderCosmetic';

function ListCosmetic() {
    const [heading, setHeading] = useState('');
    const [paragraph, setParagraph] = useState('');

    useEffect(() => {
        // Access DOM elements inside useEffect to ensure they exist after component is rendered
        const headingOne = document.querySelector('.list-cosmetic .heading-one');
        const paragraphElement = document.querySelector('.list-cosmetic p');
    }, []); // Empty dependency array ensures this effect runs only once after initial render

    const handleEdit = () => {
        const headingOne = document.querySelector('.list-cosmetic .heading-one');
        const paragraphElement = document.querySelector('.list-cosmetic p');
        headingOne.setAttribute('contenteditable', 'true');
        paragraphElement.setAttribute('contenteditable', 'true');
    };

    const handleSave = () => {
        const headingOne = document.querySelector('.list-cosmetic .heading-one');
        const paragraphElement = document.querySelector('.list-cosmetic p');
        setHeading(headingOne.innerHTML);
        setParagraph(paragraphElement.innerHTML);
        const data = {
            heading: heading,
            paragraph: paragraph
        };
        console.log('Saved:', data);
        // Here you can send the data to your backend or perform any other actions
    };

    return (
        <div style={{ display: 'flex', flex: 1 }}>
            <SidebarDash />
            <div className="bodydash flex-1 list-cosmetic">
                <h1 className="heading-dash">Cosmetic Teeth</h1>
                <HeaderCosmetic />
                <div className="btns">
                    <div className="btn">
                        <button className="edit" onClick={handleEdit}>Edit</button>
                        <button className="save" onClick={handleSave}>Save</button>
                        <button className="del">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListCosmetic;
