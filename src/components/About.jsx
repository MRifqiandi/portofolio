// import React from 'react'

function About() {
  return (
    <div className="p-4 md:p-10">
      <div className="flex flex-col md:flex-row gap-6 justify-between items-center shadow-xl shadow-gray-700 bg-custom-brown p-6 rounded-2xl">
        <div className="flex-shrink-0 md:shadow-lg md:shadow-amber-950 md:rounded-lg">
          <img
            className="h-72 md:h-96 rounded-lg"
            src="./src/assets/profile.jpg"
            alt="Profile Picture"
          />
        </div>
        <div className="flex flex-col gap-6 justify-center text-lg md:text-xl  text-justify text-black">
          <p>
            Hi, my name is Muhammad Rifqiandi, but you can call me Andi. I am a
            Computer Science student at the Institut Teknologi Kalimantan,
            currently in my 6th semester, focusing on Front End Development.
          </p>
          <p>
            From the beginning, I was fascinated by how websites work. This
            curiosity drove me to learn HTML, CSS, JavaScript, and React.js to
            build dynamic and responsive user interfaces. I believe that front
            end development is not just about writing code, but also about
            creating intuitive and enjoyable user experiences.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
