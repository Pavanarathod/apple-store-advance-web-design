import React from "react";
import memberData from "../utils/memberData";
import Member from "./member";

const About: React.FC = () => {
  return (
    <section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl`}>
      <div className="container mx-auto px-11">
        <p className="leading-tight max-w-5xl mx-auto text-4xl lg:text-4xl tracking-tight">
          <strong>We will help you ship better apps, faster. </strong>
          Our team of experts engineers has created the best user experience in
          some of the most populer apps worldwide.
        </p>
      </div>
      <div className="container mx-auto px-11 text-center mt-28">
        <h2>Out team </h2>
        <div>the &ldquo;spec-ops&rdquo;</div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20">
          {memberData.map((item) => (
            <Member
              key={item.id}
              name={item.name}
              socialId={item.socialId}
              link={item.link}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
