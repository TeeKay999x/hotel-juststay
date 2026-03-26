import React from 'react'

const StatsBar = () => {
    const statData = [
        { number: "8+", label: "Years of Service" },
        { number: "50+", label: "Luxury Rooms" },
        { number: "100%", label: "Guest Satisfaction" },
        { number: "24/7", label: "Front Desk" }
    ]

    return (
        <section className='stats-bar'>
            <div className="stats-container">
                {statData.map((stat, index) => (
                    <div key={index} className='stat-item'>
                        <h2 className='stat-number'>{stat.number}</h2>
                        <p className='stat-label'>{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default StatsBar