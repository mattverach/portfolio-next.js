import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "React" },
  { skill: "Git" },
  { skill: "Java" },
  { skill: "Spring" },
  { skill: "MySQL" },
  { skill: "Jira" },
  { skill: "Agile" },
  { skill: "Salesforce" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
            Hello, my name is Matías Vera, and I am a software developer based in CABA, Buenos Aires and Im fluent both in English and Spanish. I have over a year of experience as a Software Developer, working for a world-renowned bank, where I mostly use Java with Spring Framework to develop APIs that communicate the frontend of the bank with Salesforce. I also developed several systems within Salesforce, which allowed me to gain a deep understanding of the platform.
            </p>
            <br />
            <p>
            What drives me in life is making progress and learning new things. I am passionate about advancing in my field and constantly improving my skills. I find it exciting to be a part of the ever-evolving tech industry, and I am always looking for new challenges and opportunities.
            </p>
            <br />
            <p>
            Thank you for taking the time to read about me, I look forward to connecting with you.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
