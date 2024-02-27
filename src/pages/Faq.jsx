import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import FeedbackForm from "../components/faq/FeedbackForm";
import Faqheader from "../components/faq/components/Faqheader";
import Faqquestions from "../components/faq/components/Faqquestions";

function Faq() {
  return (
    <div>
      <Navbar />
      <Faqheader />
      <Faqquestions />
      <FeedbackForm />
      <Footer />
    </div>
  );
}
export default Faq;
