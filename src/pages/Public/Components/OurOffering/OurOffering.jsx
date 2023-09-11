import "./OurOffering.css";
const OurOffering = () => {
  return (
    <section className="container">
      <div className="container-wrapper ourOffering">
        <div className="offering-wrapper flexCenter">
          {/* left */}
          <div className="offering-left">
            <h2>Our Offering</h2>
            <p>
              There’s no time like the present to prepare for your future and,
              as your trusted financial solutions partner, our financial
              solutions promise to:
            </p>

            <img
              className="img-left"
              src="https://media.istockphoto.com/id/1502289179/photo/two-black-friends-having-fun-sitting-at-home-and-looking-at-a-cell-phone.webp?b=1&s=170667a&w=0&k=20&c=p1U2YggrucAK3O5a8I1ld45qI0piIG4XLON0EYcbyoA="
              alt="riends-having-fun-sitting"
            />
            <ul>
              <li>
                No matter the dream, you can make it happen when you apply for a
                purpose-based Personal Loan for all Kenyan government employees
                and TSC members in all counties, as well as a number of private
                payroll institutions
              </li>
              <li>
                Need a loan, quickly? Get cash against your car and keep driving
                it during the repayment period
              </li>
            </ul>
          </div>

          {/* right */}

          <div className="offering-right">
            <div className="offering-card card offering-card-li">
              <ul>
                <li>
                  Make it simple to get financial assistance when you need it
                </li>
                <li>
                  Make it easy to pay back, with fixed interest and flexible
                  terms
                </li>
                <li>
                  Make it happen for you and your loved ones, no matter what you
                  need
                </li>
              </ul>
            </div>
            <div className="img">
              <img
                className="img-right"
                src="https://furtherafrica.com/content-files/uploads/2020/08/women_business-750x375.jpg"
                alt="women_business"
              />
            </div>
            <ul>
              <li>
                Keep moving up and growing your empire with a Business Loan{" "}
              </li>
              <li>
                Get funding for your business against your vehicle logbook and
                keep driving with a Logbook Loan
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OurOffering;
