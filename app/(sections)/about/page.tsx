"use client";

export default function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center pt-2 pb-10">
      <div className="text-justify animate_in p-6 md:w-1/2">
        <h1 className="text-2xl font-bold text-center mt-2 mb-5">About Me</h1>
        <p className="text-lg md:text-xl">
          Hello! I'm Zitouni, a passionate <span className="font-semibold mx-2">Full Stack Web Developer Intern</span> dedicated to transforming ideas into comprehensive digital experiences. I excel in both frontend and backend development.<br /><br />
          On the frontend, I use HTML, CSS, JavaScript, and React.js to create visually appealing interfaces and seamless user experiences. For the backend, I utilize Node.js, Express, and Laravel to build robust and scalable applications.<br /><br />
          I manage databases like MongoDB and MySQL to ensure secure and efficient data handling. What sets me apart is not only my technical proficiency but also my ability to collaborate and communicate effectively to ensure project success.<br /><br />
          My goal is to innovate and create solutions that leave a lasting impact. If you're looking for a <span className="font-semibold mx-2">Full Stack Web Developer Intern</span> who combines technical expertise with a creative touch, I'm excited to explore opportunities with you. Let's create outstanding digital experiences together!
        </p>
      </div>
    </div>
  );
}

