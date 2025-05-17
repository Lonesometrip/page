import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../contexts/LanguageContext";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import "../index.css";
import { StarsCanvas } from "./canvas";
import BookingForm from "./BookingForm";

const InputField = ({ label, value, onChange, placeholder, name, type }) => {
  const { dir } = useLanguage();

  return (
    <div className="flex flex-col">
      <span className="text-[#D4AF37] text-base font-medium mb-4">{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-black py-4 px-6 placeholder:text-gray-400 text-white rounded-lg outline-none border border-[#D4AF37] font-medium focus:shadow-[0_0_5px_#D4AF37] transition-all duration-300"
        style={{ textAlign: dir === 'rtl' ? 'right' : 'left', direction: dir }}
      />
    </div>
  );
};

const Contact = () => {
  const { t } = useTranslation();
  const { dir } = useLanguage();
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError("");
    setNameError("");
    setConfirmation("");

    if (!validateEmail(form.email)) {
      setEmailError(t("contact.email") + " " + t("contact.error"));
      return;
    }

    if (!form.name.trim()) {
      setNameError(t("contact.name") + " " + t("contact.error"));
      return;
    }

    setLoading(true);

    // Use Formspree to handle form submission
    fetch("https://formspree.io/f/myzerjwz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        message: form.message,
        _subject: "New Contact Form Submission",
      }),
    })
      .then((response) => {
        if (response.ok) {
          setLoading(false);
          setConfirmation(t("contact.success"));

          setForm({
            name: "",
            email: "",
            message: "",
          });
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        setConfirmation(t("contact.error"));
      });
  };

  return (
    <div className="section-container">
      <div className="section-header">
        <h2 className="section-title" style={{ fontSize: '4rem', fontWeight: '800', letterSpacing: '0.05em' }}>{t('contact.section_title')}</h2>
        <div className="section-title-underline"></div>
      </div>

      <div className="contact-container">
        <motion.div
          variants={slideIn(dir === 'rtl' ? "right" : "left", "tween", 0.2, 1)}
          className="contact-form-container"
        >
          <div className="section-header">
            <h3 className="section-title">{t('contact.title')}</h3>
            <div className="section-title-underline"></div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-6 flex flex-col gap-8">
            <InputField
              label={t('contact.name')}
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={t('contact.name')}
              type="text"
            />
            {nameError && <span className="text-red-500">{nameError}</span>}

            <InputField
              label={t('contact.email')}
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder={t('contact.email')}
              type="email"
            />
            {emailError && <span className="text-red-500">{emailError}</span>}

            <div className="flex flex-col">
              <span className="text-[#D4AF37] text-base font-medium mb-4">{t('contact.message')}</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder={t('contact.message')}
                className="bg-black py-4 px-6 placeholder:text-gray-400 text-white rounded-lg outline-none border border-[#D4AF37] font-medium h-24 resize-none focus:shadow-[0_0_5px_#D4AF37] transition-all duration-300"
                style={{ textAlign: dir === 'rtl' ? 'right' : 'left', direction: dir }}
              />
            </div>

            <button
              type="submit"
              className="bg-black py-3 px-8 rounded-xl outline-none w-fit text-[#D4AF37] font-bold shadow-md border border-[#D4AF37] hover:shadow-[0_0_10px_#D4AF37] transition-all duration-300 mx-auto"
            >
              {loading ? t('contact.sending') : t('contact.send')}
            </button>
            {confirmation && <p className="text-green-500">{confirmation}</p>}
          </form>
        </motion.div>

        <motion.div
          variants={slideIn(dir === 'rtl' ? "left" : "right", "tween", 0.2, 1)}
          className="booking-form-container"
        >
          <BookingForm />
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
