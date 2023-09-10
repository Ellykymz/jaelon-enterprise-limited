import HowItWorks from "./Components/HowItWorks/HowItWorks";
import Main from "./Components/Main";
import OurOffering from "./Components/OurOffering/OurOffering";
import Services from "./Components/Services/Services";

const HomePage = () => {
  return (
    <div>
      <main>
        <Main />
        <OurOffering />
        <Services />
        <HowItWorks />
      </main>
    </div>
  );
};

export default HomePage;
