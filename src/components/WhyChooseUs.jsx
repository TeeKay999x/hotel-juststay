import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: "🏨", 
      title: "Luxury Rooms",
      desc: "Experience the ultimate comfort in our masterfully designed suites."
    },
    {
      id: 2,
      icon: "🍽️",
      title: "5-Star Dining",
      desc: "Savor world-class cuisines prepared by our award-winning chefs."
    },
    {
      id: 3,
      icon: "🛡️",
      title: "High Security",
      desc: "Your safety is our priority with 24/7 surveillance and smart locks."
    }
  ];

  return (
    <section className="why-section">
      <div className="why-header">
        <span className="subtitle">Core Values</span>
        <h2>Why Choose <span>JustStay</span></h2>
        <p>We provide the best hospitality services in Rivers State.</p>
      </div>

      <div className="why-grid">
        {features.map((item) => (
          <div key={item.id} className="why-card">
            <div className="icon-box">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;