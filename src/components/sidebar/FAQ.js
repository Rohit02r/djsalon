import React, { useState } from 'react';
import './FAQ.css';
import Footer from '../Footer';


const faqs = [
  { question: "What services do you offer at DJ Saloon?", answer: "We offer a range of services including haircuts, massages, hair coloring, and skincare treatments." },
  { question: "How can I book an appointment?", answer: "You can book an appointment through our website's booking form or by calling our salon directly." },
  { question: "What are your salon's operating hours?", answer: "Our salon is open from Monday to Saturday, 9 AM to 8 PM, and closed on Sundays." },
  { question: "Where is DJ Saloon located?", answer: "DJ Saloon is located at 123 Main Street, Your City, Your Country." },
  { question: "Can I reschedule or cancel my appointment?", answer: "Yes, you can reschedule or cancel your appointment by contacting us at least 24 hours in advance." },
  { question: "Do you offer gift cards?", answer: "Yes, we offer gift cards that can be purchased at our salon or online." },
  { question: "Are your beauticians certified?", answer: "Yes, all our beauticians are certified professionals with extensive training." },
  { question: "What safety measures are in place?", answer: "We follow strict hygiene protocols, including regular sanitization and the use of personal protective equipment." },
  { question: "Do you have any current promotions or offers?", answer: "Yes, we have various promotions and offers that are updated regularly on our website." },
  { question: "How do I pay for services at DJ Saloon?", answer: "We accept payments via cash, credit/debit cards, and digital payment methods." },
  { question: "Are walk-ins accepted?", answer: "Yes, we accept walk-ins based on availability, but we recommend booking an appointment in advance." },
  { question: "Can I choose my stylist or technician?", answer: "Yes, you can request a specific stylist or technician when booking your appointment." },
  { question: "What products do you use for hair and skincare?", answer: "We use high-quality, professional products tailored to your specific needs." },
  { question: "Do you have a loyalty program?", answer: "Yes, we offer a loyalty program with rewards for frequent visits." },
  { question: "How do I provide feedback or a complaint?", answer: "You can provide feedback or file a complaint by contacting us through our website or in person at the salon." },
  { question: "What should I do if I have allergies to certain products?", answer: "Please inform us of any allergies before your appointment so we can take appropriate precautions." },
  { question: "Are there any restrictions or policies I should be aware of?", answer: "We have policies on cancellations, late arrivals, and conduct, which are available on our website." },
  { question: "Can I get a refund if I am not satisfied with the service?", answer: "We strive for customer satisfaction; if you are not happy with our service, please contact us for resolution." },
  { question: "How do I update my account information?", answer: "You can update your account information by logging into your account on our website or contacting us." },
  { question: "Do you offer services for special occasions?", answer: "Yes, we offer special services for events such as weddings and parties." },
  { question: "Are there any age restrictions for certain services?", answer: "Some services may have age restrictions; please check with us for specific details." },
  { question: "What is your policy on late arrivals?", answer: "If you arrive late, we will do our best to accommodate you, but please note that your appointment time may be shortened." },
  { question: "How can I contact DJ Saloon for further inquiries?", answer: "You can contact us via phone, email, or through the contact form on our website." },
  { question: "Do you offer group bookings or packages?", answer: "Yes, we offer group bookings and packages for events and large parties." },
  { question: "Can I see examples of your work or customer reviews?", answer: "Yes, you can view our portfolio and read customer reviews on our website." }
];

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFAQs, setFilteredFAQs] = useState(faqs);

  const handleSearchChange = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setFilteredFAQs(
      faqs.filter(faq => faq.question.toLowerCase().includes(term))
    );
  };

  return (
    <div>
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className='search'>
      <input className='inp'
        type="text"
        placeholder="Search FAQs..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      </div>
      <ul className="faq-list">
        {filteredFAQs.map((faq, index) => (
          <li key={index}>
            <strong>{faq.question}</strong>
            <p>{faq.answer}</p>
          </li>
        ))}
      </ul>
    </div>
    
    <Footer/>
   
    </div>
  );
};

export default FAQ;
