import Card from "../../../../Card";

function ServicesOral(){
    return(
        <section className="Our-Oral-Hygiene">
        <h2>Our Oral Hygiene Services</h2>
        <div className="oral-cards">
          <div className="container flex-2">
            <Card
              header={"Routine Dental Cleanings"}
              features={[
                "Prevents cavities and gum disease",
                "Freshens breath",
                "Provides a clean and polished feeling",
              ]}
            />
            <Card
              header={"Preventive Care"}
              features={[
                "Dental examinations",
                "Digital X-rays for early detection",
                "Oral cancer screenings",
                "Customized treatment plans for preventive care",
              ]}
            />
            <Card
              header={"Fluoride Treatments"}
              features={[
                "Strengthens Enamel",
                "Reduces Sensitivity",
                "Prevents and Reverses Early Tooth Decay",
                "Enhances Cavity Resistance in High-Risk Individuals",
              ]}
            />
          </div>
        </div>
      </section>
    )
}
export default ServicesOral