import { atom } from "recoil";
export const end = atom({
  key: "end",
  default: [
    {
      id: 1,
      title: "COVID-19 Safety Measures",
      question:
        "We continue to follow strict sanitization protocols to ensure a clean and safe environment for all patients and staff. Please wear a mask upon entering the clinic and maintain social distancing whenever possible",
    },
    {
      id: 2,
      title: " Appointment Scheduling",
      question:
        " To minimize wait times and maintain social distancing, please arrive on time for your appointment. If you're unable to keep your appointment, kindly notify us at least 24 hours in advance to reschedule.",
    },
    {
      id: 3,
      title: "Patient Forms",
      question:
        " For your convenience, please fill out any necessary forms prior to your appointment. This helps streamline the check-in process and allows us to focus on your dental care.",
    },
    {
      id: 4,
      title: "Payment Options",
      question:
        " We accept various payment methods, including cash, credit/debit cards, and insurance. Please inquire about our payment options if you have any questions.",
    },
    {
      id: 5,
      title: "Dental Insurance",
      question:
        " If you have dental insurance, please bring your insurance card and any relevant information to your appointment. Our staff will be happy to assist you with billing and claims processing.",
    },
    {
      id: 6,
      title: "Emergency Care",
      question:
        "In the event of a dental emergency, please contact our clinic immediately. We offer prompt emergency care to address your urgent dental needs.",
    },
    {
      id: 7,
      title: "Follow-Up Appointments",
      question:
        " Depending on your treatment plan, you may need to schedule follow-up appointments for additional care or maintenance. Our team will work with you to coordinate these appointments based on your schedule and needs.",
    },
  ],
});
