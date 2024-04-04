import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import FeedbackForm from "../components/faq/FeedbackForm";
import Faqheader from "../components/faq/components/Faqheader";
import Faqquestions from "../components/faq/components/Faqquestions";

function Faq() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Faqheader />
        <Faqquestions />
        <FeedbackForm />
      </div>
      <Footer />
    </div>
  );
}
export default Faq;
