import React from "react";

import aboutImg from "../../../assets/Images/5121056.jpg";
import aboutImg2 from "../../../assets/Images/5101602.jpg";
import aboutImg3 from "../../../assets/Images/5132728.jpg";

export default function AboutUs() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-20">

      {/* MAIN HEADING */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-3xl font-default text-gray-900 mb-4">
          Connecting Businesses Through
          <span className="text-blue-500"> DialInfinity VoIP</span>
        </h1>

        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
          DialInfinity delivers intelligent VoIP and telecom solutions that enable
          seamless communication, secure connectivity, and scalable collaboration
          for modern businesses operating in a digital-first world.
        </p>
      </div>

      {/* SECTION 1 — WHO WE ARE */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

        <img
          src={aboutImg}
          alt="About DialInfinity"
          className="w-full h-[450px] object-cover rounded-xl"
        />

        <div className="max-w-xl">
          <h2 className="text-2xl font-default mb-4">
            <span className="text-gray-600">Who</span>{" "}
            <span className="text-blue-500">We Are</span>
          </h2>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            DialInfinity is a next-generation VoIP and telecom solutions provider
            focused on transforming business communication through advanced cloud
            technology. We help organizations move beyond traditional phone systems
            by delivering reliable, flexible, and high-performance communication
            platforms designed for today’s connected workforce.
          </p>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            Our team combines deep telecom expertise with innovative engineering
            to build communication systems that enhance collaboration, improve
            customer engagement, and ensure uninterrupted connectivity. At
            DialInfinity, we believe communication should be simple, powerful,
            and accessible from anywhere in the world.
          </p>
        </div>
      </div>

      {/* SECTION 2 — MISSION */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

        <div className="max-w-xl">
          <h2 className="text-2xl font-default mb-4">
            <span className="text-gray-600">Our</span>{" "}
            <span className="text-blue-500">Mission</span>
          </h2>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            Our mission is to empower businesses with secure and scalable VoIP
            communication solutions that simplify operations and strengthen global
            connectivity. We aim to eliminate communication barriers by providing
            cloud-based systems that deliver clarity, speed, and reliability across
            every interaction.
          </p>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            Through continuous innovation and customer-focused development,
            DialInfinity creates communication environments that improve
            productivity, support remote collaboration, and enable organizations
            to grow confidently in an increasingly digital business landscape.
          </p>
        </div>

        <img
          src={aboutImg2}
          alt="DialInfinity Mission"
          className="w-full h-[680px] object-cover rounded-xl mt-[40px]"
        />
      </div>

      {/* SECTION 3 — VISION */}
      <div className="grid md:grid-cols-2 gap-12 items-center">

        <img
          src={aboutImg3}
          alt="DialInfinity Vision"
          className="w-full h-[450px] object-cover rounded-xl"
        />

        <div className="max-w-xl">
          <h2 className="text-2xl font-default mb-4">
            <span className="text-gray-600">Our</span>{" "}
            <span className="text-blue-500">Vision</span>
          </h2>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            Our vision is to shape the future of global communication by creating
            intelligent VoIP ecosystems that connect people and businesses without
            boundaries. We strive to redefine telecom experiences through
            innovation, automation, and advanced cloud infrastructure.
          </p>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            DialInfinity aims to become a trusted global leader in VoIP technology,
            setting new standards for communication quality, reliability, and user
            experience. By continuously evolving with technology, we help businesses
            stay connected, competitive, and ready for the future.
          </p>
        </div>
      </div>

    </section>
  );
}