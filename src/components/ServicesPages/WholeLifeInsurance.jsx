import React, { useState } from 'react';
import './TermLifeInsurance.css';
import { FaCheck, FaPhoneAlt } from 'react-icons/fa';

const WholeLifeInsurance = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <div className="container">
      <header className="header">
        <button className="back-button" onClick={() => window.history.back()}>&larr; Back</button>
        <h1 className="title">Whole Life Insurance</h1>
        <p className="subtitle">Secure your financial future with lifelong protection and cash value accumulation.</p>
      </header>

      <main className="main">
        <section className="section">
          <h2 className="section-title">Overview</h2>
          <p className="section-content">
            Whole life insurance provides coverage for the insured's entire lifetime, as long as premiums are paid. It also accumulates cash value over time, which can be borrowed against or used to pay premiums.
          </p>
        </section>

        <section className="section">
          <h2 className="section-title">Coverage Details</h2>
          <ul className="list">
            <li><FaCheck className="icon" /> Coverage Amount: $100,000 to $2,000,000</li>
            <li><FaCheck className="icon" /> Lifetime coverage</li>
            <li><FaCheck className="icon" /> Premiums: Fixed for the life of the policy</li>
            <li><FaCheck className="icon" /> Cash value accumulation</li>
          </ul>
        </section>

        <section className="section">
          <h2 className="section-title">Advantages</h2>
          <ul className="list">
            <li><FaCheck className="icon" /> Guaranteed lifelong coverage</li>
            <li><FaCheck className="icon" /> Cash value accumulation</li>
            <li><FaCheck className="icon" /> Fixed premiums</li>
            <li><FaCheck className="icon" /> Financial security for your loved ones</li>
          </ul>
        </section>

        <section className="section">
          <h2 className="section-title">Eligibility Criteria</h2>
          <ul className="list">
            <li><FaCheck className="icon" /> Age: 18-70 years</li>
            <li><FaCheck className="icon" /> Health: Must undergo a medical examination</li>
            <li><FaCheck className="icon" /> Non-smoker status preferred</li>
          </ul>
        </section>

        <section className="section">
          <h2 className="section-title">Interest Rates</h2>
          <p className="section-content">
            The interest rates for whole life insurance policies depend on the policy terms, coverage amount, and the policyholder's health and age. Consult with an insurance advisor to get the most accurate rates for your specific situation.
          </p>
        </section>

        <section className="section">
          <h2 className="section-title">FAQs</h2>
          <div className="faq">
            <div className="faq-item">
              <h3 className="faq-question">What is whole life insurance?</h3>
              <p className="faq-answer">Whole life insurance is a type of permanent life insurance that provides coverage for the insured's entire lifetime, as long as premiums are paid. It also includes a savings component that accumulates cash value over time.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">How does whole life insurance work?</h3>
              <p className="faq-answer">You pay regular premiums for the duration of the policy. As long as you pay the premiums, the policy remains in force, providing a death benefit to your beneficiaries and accumulating cash value.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Can I borrow against my whole life insurance policy?</h3>
              <p className="faq-answer">Yes, you can borrow against the cash value of your whole life insurance policy. The loan does not require credit checks and can be used for any purpose. However, the loan amount plus interest will reduce the death benefit if not repaid.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Contact Us</h2>
          <form className="contact-form">
            <div className="form-group">
              <label className="form-label" htmlFor="name">Name</label>
              <input type="text" id="name" className="form-input" />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email</label>
              <input type="email" id="email" className="form-input" />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea id="message" className="form-textarea"></textarea>
            </div>
            <button type="submit" className="form-button">Submit</button>
          </form>
        </section>

        <button className="apply-button" onClick={openForm}>Apply for Policy</button>

        {isFormOpen && (
          <div className="modal">
            <div className="modal-content">
              <h2>Apply for Whole Life Insurance</h2>
              <form>
                <div className="form-group">
                  <label className="form-label" htmlFor="applicant-name">Name</label>
                  <input type="text" id="applicant-name" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="applicant-email">Email</label>
                  <input type="email" id="applicant-email" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="applicant-phone">Phone Number</label>
                  <input type="tel" id="applicant-phone" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="applicant-age">Age</label>
                  <input type="number" id="applicant-age" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="applicant-health">Health Conditions</label>
                  <textarea id="applicant-health" className="form-textarea"></textarea>
                </div>
                <button type="submit" className="form-button">Submit</button>
                <button type="button" onClick={closeForm} className="form-button cancel-button">Cancel</button>
              </form>
            </div>
          </div>
        )}
      </main>

      <footer className="footer">
        <p>Need help? <FaPhoneAlt className="icon" /> Call us at 1-800-123-4567</p>
      </footer>
    </div>
  );
};

export default WholeLifeInsurance;
