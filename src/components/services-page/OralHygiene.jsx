import Footer from "../Footer";
import Navbar from "../Navbar";
import ServiceHeader from "./ServiceHeader";
import ServicesSideBar from "./ServicesSideBar";
import './sass/oralhygiene.css'
import headerimage from '../../images/Oral-Hygiene.jpg'


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

        </main>
      </div>
      <Footer />
    </>
  );
}
export default OralHygiene;
