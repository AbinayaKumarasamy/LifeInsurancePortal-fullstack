import React, { useState } from 'react';
import './TermLifeInsurance.css';
import { FaCheck, FaPhoneAlt } from 'react-icons/fa';

const TermLifeInsurance = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <div className="container">
      <header className="header">
        <button className="back-button" onClick={() => window.history.back()}>&larr; Back</button>
        <h1 className="title">Term Life Insurance</h1>
        <p className="subtitle">Affordable and flexible life insurance plans to protect your loved ones financially.</p>
      </header>

      <main className="main">
        <section className="section">
          <h2 className="section-title">Overview</h2>
          <p className="section-content">
            Term life insurance provides coverage at a fixed rate of payments for a limited period of time. After that period, coverage at the previous rate of premiums is no longer guaranteed, and the client must either forego coverage or potentially obtain further coverage with different payments or conditions.
          </p>
        </section>

        <section className="section">
          <h2 className="section-title">Coverage Details</h2>
          <ul className="list">
            <li><FaCheck className="icon" /> Coverage Amount: $50,000 to $1,000,000</li>
            <li><FaCheck className="icon" /> Policy Term: 10, 20, or 30 years</li>
            <li><FaCheck className="icon" /> Premiums: Fixed for the term of the policy</li>
            <li><FaCheck className="icon" /> Renewable and Convertible Options</li>
          </ul>
        </section>

        <section className="section">
          <h2 className="section-title">Advantages</h2>
          <ul className="list">
            <li><FaCheck className="icon" /> Financial security for your loved ones</li>
            <li><FaCheck className="icon" /> Affordable premiums</li>
            <li><FaCheck className="icon" /> Flexibility to choose the term</li>
            <li><FaCheck className="icon" /> Peace of mind</li>
          </ul>
        </section>

        <section className="section">
          <h2 className="section-title">Eligibility Criteria</h2>
          <ul className="list">
            <li><FaCheck className="icon" /> Age: 18-65 years</li>
            <li><FaCheck className="icon" /> Health: Must undergo a medical examination</li>
            <li><FaCheck className="icon" /> Non-smoker status preferred</li>
          </ul>
        </section>

        <section className="section">
          <h2 className="section-title">Interest Rates</h2>
          <p className="section-content">
            The interest rates for term life insurance policies vary based on the term length, coverage amount, and the policyholder's health and age. It's important to consult with an insurance advisor to get the most accurate rates for your specific situation.
          </p>
        </section>

        <section className="section">
          <h2 className="section-title">FAQs</h2>
          <div className="faq">
            <div className="faq-item">
              <h3 className="faq-question">What is term life insurance?</h3>
              <p className="faq-answer">Term life insurance is a type of life insurance that provides coverage for a specific period of time or "term". If the insured person passes away during the term, the beneficiary receives a death benefit.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">How does term life insurance work?</h3>
              <p className="faq-answer">You pay regular premiums for the duration of the term. If you pass away during the term, the insurance company pays a death benefit to your beneficiaries. If you outlive the term, the policy expires without any payout.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Can I renew my term life insurance policy?</h3>
              <p className="faq-answer">Yes, many term life insurance policies offer the option to renew the policy at the end of the term. However, the premiums may increase based on your age and health at the time of renewal.</p>
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
              <h2>Apply for Term Life Insurance</h2>
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

export default TermLifeInsurance;
