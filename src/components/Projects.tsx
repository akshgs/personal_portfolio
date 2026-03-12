"use client";

import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "Ethereum Fraud Detection",
    description:
      "Machine learning system for detecting fraudulent Ethereum transactions using feature engineering and classification models.",
    tech: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
    github: "https://github.com/yourgithub/ethereum-fraud-detection",
  },
  {
    title: "Air Drawing System",
    description:
      "Computer vision application that allows users to draw in the air using hand gestures using OpenCV and MediaPipe.",
    tech: ["Python", "OpenCV", "MediaPipe", "Computer Vision"],
    github: "https://github.com/yourgithub/air-drawing-opencv",
  },
  {
    title: "Text Summarization System",
    description:
      "End-to-end NLP system that summarizes long documents automatically using Python and natural language processing techniques.",
    tech: ["Python", "NLP", "Machine Learning"],
    github: "https://github.com/yourgithub/text-summarization",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-[#0a0a0a] py-32 px-6 md:px-12 text-white"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-bold mb-16 text-center"
        >
          AI &amp; Data Science Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-sm hover:bg-white/10 transition"
            >
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

              <p className="text-gray-400 mb-6">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-white/10 px-3 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                className="text-blue-400 font-semibold hover:underline"
              >
                View Project →
              </a>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
