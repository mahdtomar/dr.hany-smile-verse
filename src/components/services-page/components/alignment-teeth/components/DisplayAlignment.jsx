import ServicesDisplay from "../../../ServicesDisplay";
import { AlignmentTeethControllerData } from '../../../../../Data'

const sections = AlignmentTeethControllerData.sections
const section2 = sections.filter((section) => { return section.id === 2 })[0]

function DisplayAlignment(){
    return(
        <div className="container flex-2">
        <div className="img">
          <img src={section2.img} alt="" />
        </div>
        <div className="services">
          {section2.features.map(({ icon, title, description }) => {
            return <ServicesDisplay
              img={icon}
              title={title}
              description={description}
            />
          })}
        </div>
      </div>
    )
}
export default DisplayAlignment