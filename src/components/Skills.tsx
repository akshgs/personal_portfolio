"use client";

import { motion } from "framer-motion";

const SKILLS = {
  Programming: ["Python", "SQL", "MySQL"],

  "Data Science": [
    "Pandas",
    "NumPy",
    "Data Analysis",
    "Statistical Analysis",
  ],

  "Machine Learning": [
    "Regression",
    "Classification",
    "Clustering",
    "Scikit-learn",
  ],

  "Deep Learning": [
    "ANN",
    "CNN",
    "Computer Vision",
    "Natural Language Processing",
  ],

  Visualization: [
    "Power BI",
    "Matplotlib",
    "Seaborn",
    "Excel",
  ],

  Tools: [
    "Git",
    "Flask",
    "Joblib",
    "Pickle",
  ],
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-[#0a0a0a] py-32 px-6 md:px-12 text-white"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-bold mb-16 text-center"
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {Object.entries(SKILLS).map(([category, skills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-sm hover:bg-white/10 transition"
            >

              <h3 className="text-2xl font-bold mb-6">{category}</h3>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-sm bg-white/10 px-3 py-1 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
