import React, { useState, useEffect } from 'react';

const About = () => {
    const [counts, setCounts] = useState([0, 0, 0, 0]);
    const targetCounts = [15, 40000, 46, 26];
    const duration = 3; // in seconds
    const easing = t => t; // linear easing function

    useEffect(() => {
        const startTimes = counts.map(() => performance.now());
        const endTimes = startTimes.map(startTime => startTime + duration * 1000);

        const updateCounts = () => {
            const newCounts = counts.map((currentCount, index) => {
                const startTime = startTimes[index];
                const endTime = endTimes[index];
                const now = performance.now();
                const timeElapsed = Math.min(1, (now - startTime) / (endTime - startTime));
                const easedProgress = easing(timeElapsed);
                const targetCount = targetCounts[index];
                return Math.floor(easedProgress * targetCount);
            });
            setCounts(newCounts);

            if (counts.some((currentCount, index) => {
                const endTime = endTimes[index];
                return performance.now() < endTime;
            })) {
                requestAnimationFrame(updateCounts);
            }
        };

        requestAnimationFrame(updateCounts);

        return () => {
            // Cleanup function
            cancelAnimationFrame(updateCounts);
        };
    }, []);



    return (
        <div id="about">

            <br />
            <br />
            <br />
            <span className="firstheading"><h1 >About </h1></span>
            <br />
            <br />
            <br />
            <p className='para'>Welcome to Restaurant, where culinary artistry meets a warm, inviting ambiance. Our chefs craft exquisite dishes using the finest locally sourced ingredients, ensuring every bite is a delightful experience. We pride ourselves on exceptional service, creating memorable dining moments for every guest. Whether you’re joining us for a casual lunch, a romantic dinner, or a special celebration, our diverse menu caters to all tastes and preferences. Our commitment to quality and freshness is evident in every dish we serve. Enjoy a carefully curated wine list, complementing our innovative cuisine perfectly. At Restaurant, we believe in the power of good food to bring people together. Our elegant interiors provide the perfect setting for any occasion. Join us and discover why Restaurant is a favorite dining destination for locals and visitors alike. We look forward to welcoming you and making your dining experience unforgettable.
            </p>

            <br />

            <div className="abouttext">
                <p id='MyNumber'>{counts[0]}</p>
                <p>Years of Experience</p>
            </div>

            <div className="abouttext">
                <p id="MyNumber2">{counts[1]}</p>
                <p>Happy customers</p>
            </div>

            <div className="abouttext">
                <p id="MyNumber3">{counts[2]}</p>
                <p>Menus</p>
            </div>

            <div className="abouttext">
                <p id="MyNumber4">{counts[3]}</p>
                <p>Staffs</p>
            </div>
            <br />
            <br />
        </div>
    );
}
export default About;