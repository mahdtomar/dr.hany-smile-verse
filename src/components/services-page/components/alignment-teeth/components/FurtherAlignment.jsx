import { AlignmentTeethControllerData } from '../../../../../Data'

const sections = AlignmentTeethControllerData.sections

const section3 = sections.filter((section) => { return section.id === 3 })[0]

function FurtherAlignment(){
    return(
        <div className="container">
        <div className="forms">
          <span>{section3.title}</span>
          <div className="files">
            {section3.files.map((file) => {
              return <div className="file">
                <a href={file.file} download={"file.pdf"}>
                  <span>{file.title}</span>
                  <img src={file.icon} alt="" />
                </a>
              </div>
            })}
          </div>
        </div>
        <div className="insurance-details">
          <span>{section3.insurance.title}</span>
          <p>
            {section3.insurance.description}
          </p>
        </div>
        <div className="payment-method">
          <span>{section3.paymentOptions.title}</span>
          <p>
            {section3.paymentOptions.description}
          </p>
        </div>
      </div>
    )
}
export default FurtherAlignment