import rootCanalTherapy from '../assets/root-canal-therapy.jpg'

function HeaderRoot (){
return(
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
)
}
export default HeaderRoot