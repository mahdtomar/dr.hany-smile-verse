import { AlignmentTeethControllerData } from '../../../../../Data'

const sections = AlignmentTeethControllerData.sections
const section1 = sections.filter((section) => { return section.id === 1 })[0]

function HeaderAlignment(){
    return(
        <div className="container flex-2">
                <article>
                  <span>{section1.subTitle}</span>
                  <h1>{section1.title}</h1>
                  <p>
                    {section1.description[0]}
                  </p>
                  <p>
                    {section1.description[1]}
                  </p>
                </article>
                
                <img src={section1.img} alt="" />
              </div>
    )
}
export default HeaderAlignment