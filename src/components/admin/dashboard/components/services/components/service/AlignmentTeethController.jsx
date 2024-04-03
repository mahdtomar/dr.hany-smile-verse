import React from 'react'
import { AlignmentTeethControllerData } from '../../../../../Data'
const data = AlignmentTeethControllerData.sections
console.log(data)
const Controles = ({ ref }) => {
  return <>
    <button >Edit</button></>
}
const AlignmentTeethController = () => {
  return (
    <div>
      {data.map((section) => {
        return <section>
          <div className="flex-2">
            <div className="text">

              {section.subTitle ? <>
                <span>{section.subTitle}</span>
                <input type="text" disabled />
                <Controles ref={""} />
              </> : ""}

              {section.title ? <h1>{section.title}</h1> : ""}
              {section.description ? section.description.map((e) => { return <p>{e}</p> }) : ""}
            </div>
            {section.img ? <img src={section.img} alt='' /> : ""}
          </div>
        </section>
      })}
    </div>
  )
}

export default AlignmentTeethController


