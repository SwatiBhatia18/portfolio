"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I&apos;m a <span className="font-medium">Software Engineer</span> with{" "}
        <span className="font-medium">2+ years of experience</span>,
        specializing in{" "}
        <span className="font-medium">Frontend Development</span>. I thrive on
        the <span className="italic">thrill of problem-solving</span>&mdash;there&apos;s
        nothing quite like the moment a tough bug finally breaks. My core
        strengths include{" "}
        <span className="font-medium">
          React, Next.js, JavaScript, HTML, and CSS
        </span>
        , with a strong foundation in{" "}
        <span className="font-medium">TypeScript</span>. I&apos;m passionate about
        building{" "}
        <span className="font-medium">
          scalable, high-performance applications
        </span>{" "}
        and continuously expanding my technical toolkit.
      </p>

      <p>
        <span className="italic">Beyond coding</span>, I love traveling,
        watching movies, and embracing{" "}
        <span className="font-medium">continuous learning</span>. I&apos;m always
        exploring new ideas and finding inspiration outside the screen.
      </p>
    </motion.section>
  );
}
