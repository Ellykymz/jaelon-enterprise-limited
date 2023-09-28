import "./TheDos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCity,
  faPooStorm,
  faBinoculars,
} from "@fortawesome/free-solid-svg-icons";

const TheDos = () => {
  const city = <FontAwesomeIcon icon={faCity} />;
  const poorStorm = <FontAwesomeIcon icon={faPooStorm} />;
  const binoculars = <FontAwesomeIcon icon={faBinoculars} />;

  return (
    <section className="container">
      <div className="container-wrapper theDos">
        <div className="theDos-container flexCenter">
          <div className="theDos-flex">
            <h2>{city}</h2>
            <h2>Personal Loans</h2>
            <p>
              We’ve made applying for a personal loan simple, no matter what you
              need it for
            </p>
          </div>
          <div className="theDos-flex">
            <h2>{poorStorm}</h2>
            <h2>How to Apply</h2>
            <p>
              Everything you need to know about how to apply for a loan, and
              what you will need
            </p>
          </div>
          <div className="theDos-flex">
            <h2>{binoculars}</h2>
            <h2>Locate Us</h2>
            <p>
              Find an Izwe branch nearest to you. We look forward to helping
              you!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TheDos;
