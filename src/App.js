import "bulma/css/bulma.css";
import Profilecard from "./profilecard"; 
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App(){
    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">Personal Digital Assistants</p>
                </div>
            </section>
            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <Profilecard title="Alexa" handle="@alexa99" imageSrc={AlexaImage} description="Iam amazon"/>
                        </div>
                        <div className="column is-4">
                            <Profilecard title="Cortana" handle="@cortana99" imageSrc={CortanaImage} description="Iam microsoft"/>
                        </div>
                        <div className="column is-4">
                            <Profilecard title="siri" handle="@siri99" imageSrc={SiriImage} description="Iam apple"/>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;