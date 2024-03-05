import React from "react";

export const About = () => {
  return (
    <div className="p-4 pt-2 flex flex-col gap-2">
      {/* <h1 className='px-8 py-1 flex flex-col items-center self-center text-xl opacity-70 border-b-2 border-gray-400'>
                <span>Yevgen Kotyk</span>
                <span className='text-sm'>Web Developer</span>
            </h1> */}
      <p className="w-2/4 self-center text-center">
        Hard-working, creative, and proactive web developer with expertise in
        React, PHP, and Laravel.Ambitious, self-learning, and constantly
        developing new skills. Dedicated to growth and evolution in the
        programming field
      </p>
      <article className="p-2">
        <h2 className="font-bold text-xl">Experience:</h2>
        <div className="p-1 flex flex-col gap-2 hidden">
          <div>
            <h3 className="font-semibold">Math Tutor</h3>
            <p className="p-1">
              <span>Buki.com</span>
              <span>January 2021 - October 2023, Ivano-Frankivsk</span>
              <p>
                • Strengthened communication skills and assumed responsibility
                for diverse learning styles, refining the ability to effectively
                convey complex concepts. • Adapted teaching strategies through a
                continual learning process, fostering an environment of
                professional growth and collaboration with peers. • Implemented
                creative teaching methods and educational tools to enhance the
                learning experience, fostering a more engaging and effective
                tutoring environmen
              </p>
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Sales Manager</h3>
            <p className="p-1">
              <span>Krynta</span>
              <span>January 2019 - December 2019, Ivano-Frankivsk</span>
              <p>
                Enhanced soft skills vital for the role by excelling in
                high-pressure situations, showcasing unparalleled stress
                resilience. Cultivated enduring client relationships through the
                embodiment of patience in interactions, establishing a hallmark
                of reliability. Facilitated a positive team and client
                environment by prioritizing effective communication as a central
                tenet.
              </p>
            </p>
          </div>
          <div className="font-semibold">
            And a lot of other jobs, but it`s boring to read, so...
          </div>
        </div>
      </article>

      <article className="p-2">
        <h2 className="font-bold text-xl">Education & Coursework</h2>
        <div className="flex flex-col gap-2 p-1 hidden">
          <div>
            <p>Bachelor of Computer Science IFNTUOG • Ivano-Frankivsk • 2020</p>
          </div>
          <div>
            Laracasts Online • 2023 • PHP, Laravel, design patterns, OOP and
            others • I can use this things comfortly :D
          </div>
          <div>
            Kottans Online • 2022 • HTML,JS,CSS, GIT and others • I can use this
            things comfortly too
          </div>
        </div>
      </article>
      <article className="p-2">
        <h2 className="font-bold text-xl">Skills</h2>
        <div className="p-1 hidden">
          HTML: Pixel-perfect, semantic HTML CSS: SCSS JavaScript: ES5, ES6+
          React: Redux, Redux Toolkit & Thunk PHP: Proficient in PHP Laravel:
          <br /> Knowledgeable in Laravel Other Technologies: Tailwind,
          TypeScript, Git (GitHub) Knowledge of: OOP/SOLID, clean code
          principles Familiar with: Material UI, REST API, Axios, NextJS,
          MongoDB (Mongoose), Node.js
        </div>
      </article>
    </div>
  );
};
