import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Description = () => {
  const [slogan, setSlogan] = useState("");

  useEffect(() => {
    const sloganText = "Empowering Developers, Enriching Skills!";
    let index = 0;

    const interval = setInterval(() => {
      setSlogan((prevSlogan) => prevSlogan + sloganText[index]);
      index++;

      if (index === sloganText.length) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex justify-center items-center h-screen bg-gradient-to-r from-teal-400 to-blue-500"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="bg-white p-8 rounded shadow-lg max-w-md"
      >
        <motion.h1
          className="text-4xl font-bold mb-4 text-start text-indigo-800"
        >
          Welcome to Geyon Technology
        </motion.h1>
        <motion.p
          className="text-lg mb-6 text-gray-800 text-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Geyon is a leading provider of programming courses designed to help
          individuals learn and master a wide range of programming languages and
          technologies.
        </motion.p>
        <motion.p
          className="text-lg text-gray-800 text-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Our team of experienced instructors is dedicated to providing
          high-quality content and practical exercises to ensure you gain the
          skills you need to succeed in the world of software development.
        </motion.p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        {slogan && (
          <motion.p className="text-3xl font-bold text-white">{slogan}</motion.p>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Description;
