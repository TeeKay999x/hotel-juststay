import React from 'react';


const Rooms = () => {
  const roomData = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop",
      title: "Executive Suite",
      price: "₦75,000",
      features: ["King Bed", "Free WiFi", "City View"]
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop",
      title: "Luxury Double",
      price: "₦55,000",
      features: ["2 Queen Beds", "Pool Access", "Breakfast"]
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2070&auto=format&fit=crop",
      title: "Presidential Villa",
      price: "₦120,000",
      features: ["Private Pool", "Butler Service", "Sea View"]
    }
  ];

  return (
    <section className="rooms-section">
      <div className="rooms-header">
        <span className="subtitle">Our Accommodation</span>
        <h2>Explore Our <span>Rooms</span></h2>
      </div>

      <div className="rooms-grid">
        {roomData.map((room) => (
          <div key={room.id} className="room-card">
            <div className="room-image">
              <img src={room.image} alt={room.title} />
              <div className="price-tag">{room.price}<span>/Night</span></div>
            </div>
            <div className="room-info">
              <h3>{room.title}</h3>
              <div className="room-features">
                {room.features.map((f, i) => <span key={i}>{f}</span>)}
              </div>
              <button className="book-btn">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rooms;