import React from 'react';


const Services = () => {
    const services = [
        { title: "24/7 Room Service", icon: "🛎️", desc: "Delicious meals delivered to your door anytime." },
        { title: "Airport Pickup", icon: "🚐", desc: "Stress-free transport from Port Harcourt International." },
        { title: "Free WiFi", icon: "📶", desc: "High-speed internet for all your business and streaming needs." },
        { title: "Laundry Service", icon: "🧺", desc: "Professional garment care and quick turnaround." }
    ];

    return (
        <section className="services-section">
            <div className="services-container">
                <div className="services-text">
                    <span className="subtitle">Our Services</span>
                    <h2>Luxury Amenities <span>Just For You</span></h2>
                    <p>We provide a seamless experience so you can focus on your stay.</p>
                </div>
                <div className="services-grid">
                    {services.map((s, i) => (
                        <div key={i} className="service-item">
                            <span className="service-icon">{s.icon}</span>
                            <div>
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;