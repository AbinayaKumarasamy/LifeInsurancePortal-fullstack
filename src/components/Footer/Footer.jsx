import React, { useState } from 'react';
import './Footer.css';
function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="faq-container">
        <div className="faq-content" onClick={toggleAnswer}>
          <span>Disclaimer</span>
          <span className="faq-arrow">{isOpen ? '▼' : '▶'}</span>
        </div>
        {isOpen && (
          <div className="faq-answer">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia saepe officia illum accusamus tempora odit commodi dolores vero quae repudiandae. Inventore tempore fugiat assumenda corporis deleniti vitae ad, incidunt, itaque dolor animi maiores! Sint neque praesentium quis deleniti quisquam, soluta magnam ducimus, enim aspernatur consectetur suscipit saepe tempora repellendus officiis similique alias recusandae quasi fugit asperiores minima temporibus id. Cupiditate, quasi possimus? Aliquam accusantium pariatur rerum rem, dolorum consequatur odit debitis quasi voluptas odio quos est officiis ducimus ipsum laborum nobis dicta porro necessitatibus enim obcaecati tenetur? Sint expedita rerum, dolore sit laborum aut voluptatibus vel quibusdam ad, dicta reprehenderit cum. Dicta eveniet error tempora amet quidem. Quidem exercitationem accusamus quaerat suscipit dolorum tempora mollitia. Aut eos veniam repellat, exercitationem quas facilis temporibus, assumenda molestiae aliquid provident magnam atque cum numquam expedita quidem at aspernatur necessitatibus asperiores! Itaque atque fuga sapiente a magnam natus? Voluptas ipsam voluptatum dolorem sunt asperiores facilis expedita. Voluptatum, architecto dolorum error eveniet animi repellendus ullam nobis soluta voluptates est perspiciatis aut mollitia explicabo rem sequi distinctio accusamus voluptate! Dolor eos molestiae itaque quod soluta deleniti quia. Aliquam, quaerat ratione. Nam, ad eos, animi dolores modi soluta sed, suscipit quam laboriosam eligendi explicabo assumenda vero quaerat.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, quas doloremque? Dolor, eligendi! Soluta fugit provident possimus laudantium earum? Laborum voluptatum accusamus ea. Quisquam labore ipsum quasi beatae quaerat, similique, exercitationem tempora voluptatum, voluptate quia debitis ut eos id ipsam quae. Aspernatur ullam possimus quas assumenda natus, reprehenderit repellat tempore.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates accusamus sequi, iure obcaecati est blanditiis eos maiores mollitia optio placeat labore suscipit natus quia nobis facilis voluptatibus sed repudiandae repellendus perferendis doloribus culpa quas veritatis facere dolore. Facilis recusandae possimus deserunt facere magni, aliquam porro obcaecati nobis similique atque. Voluptate officiis aut provident consequuntur similique sed quas dicta eos distinctio! Saepe asperiores alias minus necessitatibus repellendus magni et a voluptates, unde vero excepturi quos recusandae dicta neque odit rerum. Mollitia culpa vitae doloribus ipsa possimus, voluptatem aliquam totam, et recusandae amet molestias. Explicabo placeat asperiores pariatur ipsum officiis tenetur voluptatibus.</p>
          </div>
        )}
      </div>
      <footer className="footer">
      <div className="footer-bottom">
        <p>&copy; 2024 Life Insurance Portal. All rights reserved.</p>
        <div className="footer-links">
          <a href="/terms">Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </div>
      </div>
    </footer>
    </div>
  );
}
export default Footer;
