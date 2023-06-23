import React from "react";
import aboutimg from "../assets/images/aboutimg.svg"
import group1 from "../assets/images/group1.svg"

const About = () => {
    const section1 = {
        backgroundImage: `url(${aboutimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      };
  return (
    <div>
      <section className="section1" style={section1}>
        <h3 className="text-white">
          Uyo Fuel Inform tells you all you need to know on
        </h3>
        <ul className="text-white">
          <li>The Availability of Fuel in Filling Stations around you</li>
          <li>The Price of Fuel in each Filling Station</li>
          <li>The Distance of the Fuel Station from you</li>
          <li>Reviews from other Customers</li>
          <li>Fuel Insights</li>
          <li>and many more...</li>
        </ul>
      </section>
      <section>
        <h2>About us</h2>
        <p>
          The prevalent issue of fuel scarcity in Uyo results in long queues,
          wasted resources, and frustration among users. To address this, our
          project aims to assist fuel users by promptly notifying them about the
          availability of fuel in nearby filling stations. We provide crucial
          information such as pricing details, precise locations, and distances
          from the users' current position. By empowering individuals with this
          knowledge, we aim to streamline the fuel procurement process, reduce
          wastage, and enhance accessibility. Our mission is to alleviate the
          challenges faced by users and ensure a more efficient and informed
          fuel consumption experience.
        </p>
      </section>
      <section className="section2 flex flex-row">
        <div className="w-1/2">
        <h2>Our Method</h2>
        <p>
          After thorough consideration of the issue at hand, we have developed
          an effective solution. Our approach involves providing users with
          timely notifications about fuel availability and pricing at nearby
          filling stations. Additionally, our website offers valuable features
          such as user ratings and reviews, enabling informed decision-making
          when selecting a station. We also provide comprehensive information
          about additional services offered by the station, such as car wash
          facilities, mechanics, point of sale (POS) systems, and mini marts.
          Our goal is to ensure that all pertinent services provided by the
          station are thoroughly documented and easily accessible.
        </p>
        </div>
        <div className="w-1/2">
            <img src={group1} alt="group1"/>
        </div>

      </section>
      <section className="flex flex-row">
      <div className="w-1/2">
            <img src={group1} alt="group1"/>
        </div>
        <h2>Our Mission</h2>
        <p>
          Our platform's central mission is to aid individuals experiencing fuel
          scarcity and all fuel users in general. We are committed to providing
          timely notifications about fuel availability, pricing, and proximity
          to nearby filling stations. By delivering this essential information,
          we aim to alleviate the challenges faced by individuals in obtaining
          fuel, enabling them to make informed decisions and optimize their fuel
          consumption. Our ultimate goal is to enhance accessibility,
          convenience, and efficiency in the fuel procurement process, ensuring
          that individuals can navigate fuel scarcity more effectively and with
          greater ease.
        </p>
      </section>
    </div>
  );
};

export default About;
