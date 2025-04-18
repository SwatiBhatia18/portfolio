"use client"
import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks'


export default function About() {
  const {ref} = useSectionInView("About")
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
        As a <span className="font-medium">Software Engineer</span> with{" "}
        <span className="font-medium">2+ years of experience</span>, I specialize in{" "}
        <span className="font-medium">Frontend Development</span>.{" "}
        <span className="italic">What I love most about programming</span> is
        the problem-solving aspect—that <span className="underline">thrill</span>{" "}
        of finally cracking a tough challenge. My expertise lies in{" "}
        <span className="font-medium">
          React, Next.js, JavaScript, HTML, and CSS
        </span>
        , with proficiency in TypeScript. I'm passionate about{" "}
        <span className="font-medium">building scalable, performant applications</span>{" "}
        while continuously expanding my technical horizons.
      </p>

      <p>
        <span className="italic">Beyond coding</span>, I enjoy traveling, watching movies, and{" "}
        <span className="font-medium">continuous learning</span>. Currently, I'm{" "}
        <span className="font-medium">deepening my knowledge</span> of system design principles
        to enhance my architectural thinking.
      </p>
    </motion.section>
  )
}
