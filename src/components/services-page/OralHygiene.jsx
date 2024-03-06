import Footer from "../Footer";
import Navbar from "../Navbar";
import ServiceHeader from "./ServiceHeader";
import ServicesSideBar from "./ServicesSideBar";
import './sass/oralhygiene.css'
import headerimage from '../../images/Oral-Hygiene.jpg'
import Card from "../Card";
import FeatureBox from "./FeatureBox";
import teethCavity from './../../icons/Cavity teeth.svg'
import badBreath from './../../icons/WhatsApp Image 2024-03-06 at 3.20.18 PM (1).jpeg'
import teethSensitivity from './../../icons/teeth sensetivity.svg'
import gumDisease from './../../icons/teethgum.jpg'

// topics 
// what makes up special 
// daily oral care routine 
// common dental issues 
// children's oral health
// dental products review

function OralHygiene() {
  return (
    <>
      <Navbar />
      <div className="container oralhygiene ">
        <ServicesSideBar />
        <main>
          <ServiceHeader servicename={"Oral Hygiene"} />
          <header className="flex-2" >
            <article>
              <h1>oral hygiene</h1>
              <p>Proper oral hygiene is essential for healthy teeth and gums. This includes daily brushing and flossing. In addition, you should see your dentist regularly for dental exams and cleanings. Preventative dentistry gives you the best chance for a beautiful smile and long-lasting oral health.
              </p>
            </article>
            <img src={headerimage} alt="" />
          </header>
          <section className="Our-Oral-Hygiene">
            <h2>Our Oral Hygiene Services</h2>
            <div className="oral-cards">
              <div className="container flex-2">
                <Card header={'Routine Dental Cleanings'} features={[
                  "Prevents cavities and gum disease",
                  "Freshens breath",
                  "Provides a clean and polished feeling",]} />
                <Card header={"Preventive Care"} features={["Dental examinations", "Digital X-rays for early detection", "Oral cancer screenings", "Customized treatment plans for preventive care"]} />
                < Card header={"Fluoride Treatments"} features={["Strengthens Enamel", "Reduces Sensitivity", "Prevents and Reverses Early Tooth Decay", "Enhances Cavity Resistance in High-Risk Individuals"]} />
              </div>
            </div>
          </section>
          <section className="bad-hygiene-results">
            <h2>common dental issues</h2>
            <div className="flex-2">
              <FeatureBox image={teethCavity} title={"Cavities (Dental Caries)"} description={"Cavities are areas of decay on the tooth's surface caused by bacteria producing acid. They can lead to pain, sensitivity, and, if left untreated, more severe dental problems."} />
              <FeatureBox image={gumDisease} title={'Gum Disease (Gingivitis and Periodontitis)'} description={"Gum disease involves inflammation and infection of the gums. Gingivitis is the early stage, causing redness and swelling, while periodontitis is more severe, affecting the supporting structures of the teeth."} />
              <FeatureBox image={badBreath} title={'Bad Breath (Halitosis)'} description={"Persistent bad breath can result from poor oral hygiene, gum disease, cavities, or underlying health issues. Addressing the root cause is crucial for effective treatment."} />
              <FeatureBox image={teethSensitivity} title={'Tooth Sensitivity'} description={"Tooth sensitivity occurs when the tooth's protective enamel is worn down, exposing the dentin. This can lead to discomfort or pain, especially with hot, cold, or sweet foods and drinks."} />
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
export default OralHygiene;
