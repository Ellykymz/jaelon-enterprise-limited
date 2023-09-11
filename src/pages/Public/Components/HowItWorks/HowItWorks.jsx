import "./HowItWorks.css";

function HowItWorks() {
  return (
    <section className="container">
      <div className="container-wrapper how">
        <div className="how-wrapper">
          <div className="title">
            <h2>How it Works</h2>
            <h3>Transparent and fair costs, with no hidden fees</h3>
          </div>

          <div className="cards">
            <p>
              We're excited to have you on board. To get started, please follow
              the steps below:
            </p>
            <div className="h-card">
              <ol>
                <li>Register for an account if you haven't done so already.</li>
                <li>Complete the loan application form with your details.</li>
                <li>
                  Prepare the required documents for the loan application.
                </li>
                <li>
                  Submit the physical documents at our office or designated
                  drop-off location.
                </li>
                <li>
                  Once your documents are verified, you will receive an email
                  notification regarding your loan application status.
                </li>
                <li>
                  Access your dashboard to view loan details, make payments, and
                  communicate with our team.
                </li>
              </ol>
              <div className="welcome-section">
                <p>
                  If you have any questions or need assistance, please don't
                  hesitate to contact our support team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HowItWorks;
