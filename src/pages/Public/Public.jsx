import HowItWorks from "./Components/HowItWorks/HowItWorks";
import Main from "./Components/Main";
import Services from "./Components/Services/Services";

const HomePage = () => {
  return (
    <div>
      <main>
        <Main />
        <Services />
        <HowItWorks />
        <div className="welcome-section">
          <p>
            If you have any questions or need assistance, please don't hesitate
            to contact our support team.
          </p>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
