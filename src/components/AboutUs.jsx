import React from "react";

const organizationData = {
  mission: "Empowering individuals through education and innovation.",
  values: [
    "Excellence",
    "Innovation",
    "Inclusivity",
    "Excellence in Education",
    "Innovation in Learning",
    "Inclusivity in Knowledge",
    "Community Engagement",
  ],
  history: `Founded in 2023 by 5th-year Software Engineering students at Haramaya University, Geyon Technology was established with a mission to revolutionize education. Motivated by the need for a dynamic and forward-thinking approach to learning, our journey began with a commitment to bridge the gap between theory and practice. As students, we felt a collective responsibility to contribute to education, empower future technologists, and create a transformative learning experience. Geyon Technology is not just a response to challenges but a proactive initiative to redefine education, fostering an environment where creativity, critical thinking, and collaboration thrive. From the outset, we've been driven by a passion for excellence and leveraging technology to enhance the learning process. Our aim is not just to impart knowledge but to inspire a love for learning, creating a transformative experience for every student. Today, we take pride in our impact and remain committed to innovation, inclusivity, and community engagement as we shape the future of education.`,
  team: [
    {
      name: "Daniel Mesfin",
      role: "Founder of Geyon",
      description:
        "A visionary leader with a passion for education and technology. Daniel founded Geyon with the goal of making learning a transformative experience for all.",
      imageUrl: "./src/assets/images/avatar.png",
    },
    {
      name: "Fufa Wakgari",
      role: "Lead Instructor",
      description:
        "An experienced educator dedicated to fostering a love for learning. Fufa brings innovative teaching methods to ensure students thrive in their educational journey.",
      imageUrl: "./src/assets/images/avatar.png",
    },
    {
      name: "Bekalu Ato",
      role: "Lead Instructor",
      description:
        "A technology enthusiast committed to bridging the gap between theory and practice. Bekalu inspires students to explore the limitless possibilities of innovation.",
      imageUrl: "./src/assets/images/avatar.png",
    },
    {
      name: "Keytros Gecho",
      role: "Lead Instructor",
      description:
        "Passionate about inclusivity in education, Keytros strives to create a learning environment where every individual feels valued and empowered.",
      imageUrl: "./src/assets/images/avatar.png",
    },
  ],
};

const CheckCircleIcon = () => (
  <div className="relative">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="h-6 w-6 inline-block text-white"
    >
      <circle cx="12" cy="12" r="8" fill="#1ac4dc" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 13l4 4L19 7"
      />
    </svg>
  </div>
);

const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#1ac4dc] mb-8">
          About Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="col-span-2 md:col-span-1 bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-[#1ac4dc]">
              Our Mission
            </h3>
            <p className="text-gray-700">{organizationData.mission}</p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-[#1ac4dc]">
              Our Values
            </h3>
            <ul className="list-inside text-gray-700">
              {organizationData.values.map((value, index) => (
                <li key={index} className="flex items-start mb-2">
                  <CheckCircleIcon />
                  <span className="ml-3">{value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-2 bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-[#1ac4dc]">
              Our History
            </h3>
            <p className="text-gray-700 whitespace-pre-line">
              {organizationData.history}
            </p>
          </div>

          <div className="col-span-3 mt-8">
            <h3 className="text-2xl text-center font-semibold mb-4 text-[#1ac4dc]">
              Meet Our Team
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {organizationData.team.map((member, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
                >
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-40 object-cover mb-4 rounded-lg"
                  />
                  <h4 className="text-lg font-semibold mb-2">{member.name}</h4>
                  <p className="text-gray-600 mb-4">{member.role}</p>
                  <p className="text-gray-700">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
