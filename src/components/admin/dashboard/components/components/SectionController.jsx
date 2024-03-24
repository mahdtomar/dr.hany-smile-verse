import React, { useState } from 'react'

const SectionController = (props) => {
    const [title, setTitle] = useState(props.title)
    const [img, setImg] = useState(props.img)
    const [description, setDescription] = useState(props.description)
    const [subTitle, setSubTitle] = useState(props.subTitle)
    return (
        <div>
            <input type="text" value={subTitle} onChange={(e) => { setSubTitle(e.target.value) }} />
            <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} />
            <input type="text" value={description} onChange={(e) => { setDescription(e.target.value) }} />
            <div className='imgContainer'><img src={img} alt="" /><input type="file" onChange={(e) => { setImg(e.target.files[0])}} /></div>
        </div>
    )
}

export default SectionController