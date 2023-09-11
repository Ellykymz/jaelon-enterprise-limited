import Choice from "./Components/Choice/Choice";
import HowItWorks from "./Components/HowItWorks/HowItWorks";
import Main from "./Components/Main";
import OurOffering from "./Components/OurOffering/OurOffering";
import Services from "./Components/Services/Services";
import TheDos from "./Components/TheDos/TheDos";

const HomePage = () => {
  return (
    <div>
      <main>
        <Main />
        <OurOffering />
        <Services />
        <Choice />
        <HowItWorks />
        <TheDos />
      </main>
    </div>
  );
};

export default HomePage;
