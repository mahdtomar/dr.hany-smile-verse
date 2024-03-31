import FeatureBox from "../../../FeatureBox";
import teethCavity from "../assets/icons/Cavity teeth.svg";
import badBreath from "../assets/icons/WhatsApp Image 2024-03-06 at 3.20.18 PM (1).jpeg";
import teethSensitivity from "../assets/icons/teeth sensetivity.svg";
import gumDisease from "../assets/icons/teethgum.jpg";

function CommonIssuesOral(){
    return(
        <section className="bad-hygiene-results">
        <h2>common dental issues</h2>
        <div className="flex-2">
          <FeatureBox
            image={teethCavity}
            title={"Cavities (Dental Caries)"}
            description={
              "Cavities are areas of decay on the tooth's surface caused by bacteria producing acid. They can lead to pain, sensitivity, and, if left untreated, more severe dental problems."
            }
          />
          <FeatureBox
            image={gumDisease}
            title={"Gum Disease (Gingivitis and Periodontitis)"}
            description={
              "Gum disease involves inflammation and infection of the gums. Gingivitis is the early stage, causing redness and swelling, while periodontitis is more severe, affecting the supporting structures of the teeth."
            }
          />
          <FeatureBox
            image={badBreath}
            title={"Bad Breath (Halitosis)"}
            description={
              "Persistent bad breath can result from poor oral hygiene, gum disease, cavities, or underlying health issues. Addressing the root cause is crucial for effective treatment."
            }
          />
          <FeatureBox
            image={teethSensitivity}
            title={"Tooth Sensitivity"}
            description={
              "Tooth sensitivity occurs when the tooth's protective enamel is worn down, exposing the dentin. This can lead to discomfort or pain, especially with hot, cold, or sweet foods and drinks."
            }
          />
        </div>
      </section>
    )
}
export default CommonIssuesOral