import rootCanalFirstStep from '../assets/root-canal-therapy-first-step.jpg'
import rootCanalSecondStep from '../assets/root-canal-therapy-second-step.jpg'
import rootCanalThirdStep from '../assets/root-canal-therapy-third-step.jpg'
import rootCanalFourthStep from '../assets/root-canal-therapy-first-step.jpg'

function ProcedureRoot(){
    return(
        <section className="how-we-do-it">
        <h2> What Happens During a Root Canal Procedure?</h2>
        <p>A root canal procedure may require a number of appointments to complete depending on the complexity of the tooth and extent of the damage. No matter how many appointments are required, a root canal treatment is typically broken into a handful of steps:</p>
        <ul>
          <li><span>X-ray</span>the tooth is x-rayed to see the extent of the damage and infection, the shape of the pulp chambers, and if there is any damage or infection to surrounding tissue or bone.
            <img src={rootCanalFirstStep} alt="" />
          </li>
          <li><span>Removal of infection/pulp</span>the area is anaesthetised and an opening is made in the tooth so the infected pulp and any other infected material, such as pus, may be removed.
            <img src={rootCanalSecondStep} alt="" />
          </li>
          <li><span>Filling the tooth</span>once the pulp chambers have been shaped and all traces of bacteria have been removed, the tooth is then filled with a long lasting material that acts as a barrier against future infection. During this part of the procedure supports may be placed in the root to give the tooth extra strength and stability.
            <img src={rootCanalThirdStep} alt="" />
          </li>
          <li><span>Restoring function to the tooth</span>once the pulp chamber has been filled and sealed, the final step is to make the tooth fully functional again. This is accomplished by repairing any cracks or damage in the tooth and capping it with a filling or crown. The exact measures that are needed to restore functionality depend on the condition of the tooth prior to the root canal.
            <img src={rootCanalFourthStep} alt="" />
          </li>

        </ul>
        <p>Once all these steps have been taken the tooth should be fully functional and should not require further treatment so long as standard dental hygiene rules are followed - brushing twice a day and flossing.</p>
      </section>
    )
}
export default ProcedureRoot