import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_jpcmyr8", // Your Service ID
        "template_gkelals", // Your Template ID
        {
          from_name: form.name,
          from_email: form.email, // This will be used as the Reply-To
          to_name: "Shiva Yadav",
          to_email: "yaduvanshishubha678@gmail.com",
          message: form.message,
        },
        "Y7GaFJP8CSRwkPWcI" // Your Public Key
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-purple-400 transition-transform transform hover:scale-105"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

        {/* Social Media Icons */}
        <div className="social-media flex gap-4 mt-6">
          <a
            href="https://www.linkedin.com/in/shiva-yadav-4043912b9/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex justify-center items-center border-2 border-purple-400 rounded-full text-purple-400 hover:bg-purple-400 hover:text-white hover:shadow-purple-400 hover:shadow-[0_0_18px_3px] transition-all"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>

          <a
            href="https://www.instagram.com/shiva.datascience/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex justify-center items-center border-2 border-purple-400 rounded-full text-purple-400 hover:bg-purple-400 hover:text-white hover:shadow-purple-400 hover:shadow-[0_0_18px_3px] transition-all"
          >
            <i className="fab fa-instagram"></i>
          </a>

          <a
            href="https://github.com/shiva-iitm"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex justify-center items-center border-2 border-purple-400 rounded-full text-purple-400 hover:bg-purple-400 hover:text-white hover:shadow-purple-400 hover:shadow-[0_0_18px_3px] transition-all"
          >
            <i className="fab fa-github"></i>
          </a>

          <a
            href="https://www.youtube.com/@noisegaming678"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex justify-center items-center border-2 border-purple-400 rounded-full text-purple-400 hover:bg-purple-400 hover:text-white hover:shadow-purple-400 hover:shadow-[0_0_18px_3px] transition-all"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
