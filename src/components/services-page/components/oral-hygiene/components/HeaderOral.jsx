import headerimage from "../assets/Oral-Hygiene.jpg"

function HeaderOral(){
    return(
        <header className="flex-2">
        <article>
          <h1>oral hygiene</h1>
          <p>
            Proper oral hygiene is essential for healthy teeth and gums.
            This includes daily brushing and flossing. In addition, you
            should see your dentist regularly for dental exams and
            cleanings. Preventative dentistry gives you the best chance for
            a beautiful smile and long-lasting oral health.
          </p>
        </article>
        <img src={headerimage} alt="" />
      </header>
    )
}
export default HeaderOral