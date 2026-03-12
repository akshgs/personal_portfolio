"use client";

import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    quote:
      "Akash demonstrated strong analytical thinking while working on machine learning and computer vision projects.",
    name: "Mentor Feedback",
    role: "Data Science Trainer",
    initials: "MF",
  },
  {
    quote:
      "Akash showed curiosity in exploring datasets and improving model performance using Python and machine learning.",
    name: "Internship Supervisor",
    role: "Data Science Team Lead",
    initials: "IS",
  },
  {
    quote:
      "Akash contributed actively to AI and data analysis projects and showed solid Python and problem-solving skills.",
    name: "Project Collaboration",
    role: "Team Member",
    initials: "PC",
  },
];

export default function Testimonials() {
  return (
    <section
      className="relative z-20 bg-[#0a0a0a] py-32 overflow-hidden"
      id="testimonials"
    >
      {/* Background ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 mb-16 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          Testimonials
        </motion.h2>

        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Feedback from mentors and collaborators during my learning and project journey.
        </p>
      </div>

      <div className="relative w-full overflow-hidden">

        <div className="flex w-max">
          <motion.div
            className="flex gap-8 px-4"
            animate={{ x: "-50%" }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...TESTIMONIALS, ...TESTIMONIALS].map((item, index) => (
              <div
                key={index}
                className="w-[350px] md:w-[450px] p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shrink-0"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                    {item.initials}
                  </div>

                  <div>
                    <h4 className="text-white font-bold text-lg">
                      {item.name}
                    </h4>
                    <p className="text-sm text-gray-400">{item.role}</p>
                  </div>
                </div>

                <p className="text-gray-300 italic leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
