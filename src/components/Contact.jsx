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
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row w-full justify-between items-center gap-6 md:gap-4">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
          className="w-full md:w-[50%] lg:w-[55%]"
      >
          <div className="bg-black-100 p-5 md:p-6 rounded-2xl">
            <h3 className={`${styles.sectionHeadText} mb-2`}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
              className="mt-4 flex flex-col gap-4"
        >
          <label className="flex flex-col">
                <span className="text-white font-medium mb-2">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
                  className="bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>

          <label className="flex flex-col">
                <span className="text-white font-medium mb-2">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
                  className="bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>

          <label className="flex flex-col">
                <span className="text-white font-medium mb-2">Your Message</span>
            <textarea
                  rows={3}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
                  className="bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>

              <div className="pb-2 pt-1">
          <button
            type="submit"
                  className="bg-tertiary py-2.5 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-purple-400 transition-transform transform hover:scale-105"
          >
            {loading ? "Sending..." : "Send"}
          </button>
              </div>
        </form>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
          className="w-full md:w-[50%] lg:w-[45%] h-[320px] md:h-[380px] flex items-center justify-center"
      >
          <div className="w-full h-full scale-110 flex items-center justify-center">
        <EarthCanvas />
          </div>
      </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
