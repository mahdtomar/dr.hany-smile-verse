import rootCanalSonar from '../assets/rootcanalsonar.webp'

function RequiredRoot (){
return(
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
  
)
}
export default RequiredRoot