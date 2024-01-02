import image from "./icons/10368224.png";
export const appointments = [
  {
    id: 321,
    Doctor_id: 243,
    user_id: 1,
    Date: "Mon Jan 10 2024 15:00:00 GMT+0200 (Eastern European Standard Time)",
    Service: "Teeth Alignment",
    Status: "Queued", // status is either [Done,  Queued, Canceled]
    location_id: 1,
  },
];

export const users = [
  {
    id: 1,
    FirstName: "Omar",
    LastName: "Mahdy",
    Image: image,
    Age: 20,
    PhoneNumber: "+00201029949333",
    Email: "omarmahdy@gmail.com",
    Address: "Tanta, El-Gharbia, Egypt",
    City: "Tanta",
    State_Country: "Egypt",
    Postcode: 12345,
    DateOfBirth: "12Th Nov 2003",
    Insurance: {
      // add more details later
      CompanyName: "Insuance Company Name",
      Notes: "this is notes on the insurance company i use.",
    },
    Appointments: {
      Done: [],
      Queued: [appointments],
    },
  },
];

export const Doctors = [
  {
    id: 243,
    FirstName: "Ahmed",
    LastName: "Mohammed",
    Image: "/src/icons/Default_pfp.png",
    Age: 35,
    PhoneNumber: "+00201012345678",
    Email: "AhmedMohammed@gmail.com",
    Address: "Tanta, El-Gharbia, Egypt",
    City: "Tanta",
    State_Country: "Egypt",
    Postcode: 12345,
    DateOfBirth: "12Th Nov 1987",
    Appointments: {
      Done: [],
      Queued: [appointments],
    },
  },
];
export const Locations = [
  {
    id: 1,
    Name: "first location",
    Address: "Tanta, El-Gharbia, Egypt",
  },
];
