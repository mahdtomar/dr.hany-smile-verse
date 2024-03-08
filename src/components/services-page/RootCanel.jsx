import Footer from "../Footer";
import Navbar from "../Navbar";
import ServiceHeader from "./ServiceHeader";
import './sass/Rootcanal.css'
import rootCanalTherapy from '../../images/root-canal-therapy.jpg'
import rootCanalSonar from '../../images/rootcanalsonar.webp'
import rootCanalFirstStep from '../../images/root-canal-therapy-first-step.jpg'
import rootCanalSecondStep from '../../images/root-canal-therapy-second-step.jpg'
import rootCanalThirdStep from '../../images/root-canal-therapy-third-step.jpg'
import rootCanalFourthStep from '../../images/root-canal-therapy-fourth-step.jpg'
function RootCanel() {
  return (
    <div>
      <Navbar />
      <div style={{ margin: "50px auto" }} className="container root-canal-component">
        <ServiceHeader servicename={"Root Canal"} />
        <main>
          <header>
            <figure className="flex-2">
              <figcaption>
                <h1>What is a Root Canal?</h1>
                <p>Inside each tooth is a mass of soft, spongy tissue known as dental pulp. The pulp is a vital part of the tooth as it is responsible for providing the tooth with both nutrients, blood and nerves. If the tooth becomes damaged in some way, whether it is through decay, disease or trauma, the pulp may become infected.</p>
                <p>If infected pulp is not treated the infection may spread to surrounding tissues, leading to complications such as an endodontic abscess, jaw bone loss and/or losing the infected tooth. An endodontic abscess is a pocket of pus that develops when infection spreads from the tooth into the surrounding bone of the jaw. This infection may also lead to the degradation and loss of bone in that area.</p>
                <p>Luckily pulp is primarily responsible for delivering nutrients to a tooth while it is growing. Once a tooth has fully grown and hardened, nutrition for the tooth is delivered by the tissues surrounding the root, so the pulp can be removed from the tooth to save from further infection or damage. An adult tooth can function perfectly well without pulp so long as it is taken care of.</p>
                <p>A root canal is the removal of the dental pulp and filling the empty pulp chambers with a permanent barrier material. The procedure may be performed by a dentist or a specialist endodontist, a dental practitioner specialising in treatment of issues of the tooth pulp.</p>
              </figcaption>
              <img src={rootCanalTherapy} alt="root canal therapy" />
            </figure>
          </header>
          <section className="when-is-required">
            <figure className="flex-2">
              <figcaption>
                <h2>When is a Root Canal Required?</h2>
                <p>A root canal treatment may be required when the pulp of a tooth is damaged or infected. An appointment with a dentist is required for diagnosis, as a number of tests, including manual inspection and x-ray, need to be conducted to see if the tooth requires root canal therapy or may be treatable in some other fashion.</p>
                <p>The pulp may become infected or damaged via a number of means, including decay, injury, repeated dental work on the same tooth, cracked or lost fillings, gum disease, habitual tooth grinding or trauma to the tooth caused by other means.</p>
              </figcaption>
              <img src={rootCanalSonar} alt="" />
            </figure>
          </section>
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
        </main>
      </div>
      <Footer />
    </div>
  );
}
export default RootCanel;
