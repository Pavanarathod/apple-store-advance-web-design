import React from "react";
import clsx from "clsx";
import { members } from "../utils/members";
import Image from "next/image";
import Link from "next/link";
type Props = {};

const About = (props: Props) => {
  return (
    <section
      className={clsx("flex flex-col bg-white py-20 text-3xl md:text-4xl")}
    >
      <div className="container mx-auto px-11">
        <p className="leading-tight max-w-5xl mx-auto text-4xl lg:text-4xl tracking-tight">
          <strong>We will help you ship better apps, faster.</strong>
          Our team of expert engineers has created the best user experiences in
          some of the most populer aps woeldwide.
        </p>
      </div>

      <div className="container mx-auto px-11 text-center mt-28">
        <h2>Our Team.</h2>
        <div className="mt-2">the &ldquo;spec-ops&ldquo;</div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 lg:gap-20">
          {members.map((mem, index) => (
            <div key={index}>
              <Image
                src={mem.image}
                height={"200px"}
                width={"200px"}
                alt="members"
              />
              <div className="text-sm md:text-2xl">{mem.name}</div>
              <div>
                <Link
                  className="text-sm text-red-500"
                  href={`https://github.com/${mem.link}`}
                >
                  <a className="text-sm md:text-2xl" target="_blank">
                    {mem.link}
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
