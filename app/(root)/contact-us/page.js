"use client";

import React, { useState } from "react";
import { submitContactForm } from "./actions";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    complaint: "",
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState({
    message: "",
    isError: false,
    isSuccess: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Client-side validation
    if (!formData.name.trim()) {
      setFormStatus({
        message: "Please enter your name",
        isError: true,
        isSuccess: false
      });
      return;
    }
    
    if (!formData.email.trim()) {
      setFormStatus({
        message: "Please enter your email address",
        isError: true,
        isSuccess: false
      });
      return;
    }
    
    if (!formData.complaint.trim()) {
      setFormStatus({
        message: "Please enter your message",
        isError: true,
        isSuccess: false
      });
      return;
    }
    
    setSubmitting(true);
    setFormStatus({
      message: "",
      isError: false,
      isSuccess: false
    });

    try {
      // Show temporary submitting message
      setFormStatus({
        message: "Sending your message...",
        isError: false,
        isSuccess: false
      });
      
      const result = await submitContactForm(formData);
      
      if (result.status === "SUCCESS") {
        setFormStatus({
          message: result.message || "Thank you! Your message has been sent successfully.",
          isError: false,
          isSuccess: true
        });
        // Reset form
        setFormData({ name: "", email: "", complaint: "" });
      } else {
        setFormStatus({
          message: result.error || "Something went wrong. Please try again later.",
          isError: true,
          isSuccess: false
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus({
        message: "Something went wrong. Please try again later.",
        isError: true,
        isSuccess: false
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="px-4 md:px-16 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        {/* Contact Form */}
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-[2rem] leading-[1.89994rem] md:text-[3rem] md:leading-[2.91563rem] lg:text-[4.75rem] lg:leading-[5rem] font-normal text-primary1">
            Get In <span className="text-secondary1 font-dafoe">Touch</span>{" "}
            <span className="text-secondary1">!</span>
            <img
              src="/img/pizza-slice.png"
              alt="pizza slice"
              className="w-[0.80731rem] h-[1.63906rem] md:w-[1.23888rem] md:h-[2.51519rem] lg:w-[2.125rem] lg:h-[4.3125rem] mb-1 md:mb-2 lg:mb-4 inline"
            />
          </h1>
          <p className="text-[#737373BF] w-[75%] text-[1rem] md:text-[1.5rem]">
            We love hearing about your experience with our fresh food,
            handcrafted shakes, and homemade sauces.
          </p>          {formStatus.message && (
            <div 
              className={`p-4 rounded-md transition-all duration-300 ${
                formStatus.isError 
                  ? 'bg-red-100 text-red-700 border-l-4 border-red-500' 
                  : formStatus.isSuccess
                    ? 'bg-green-100 text-green-700 border-l-4 border-green-500'
                    : 'bg-blue-100 text-blue-700 border-l-4 border-blue-500'
              }`}
            >
              <div className="flex items-center">
                {formStatus.isError ? (
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                ) : formStatus.isSuccess ? (
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                )}
                {formStatus.message}
              </div>
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Your Name"
              className="placeholder-[#836464] placeholder:text-[1.2rem] w-full px-4 py-3 border border-dashed border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
              className="placeholder-[#836464] placeholder:text-[1.2rem] w-full px-4 py-3 border border-dashed border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <textarea
              name="complaint"
              value={formData.complaint}
              onChange={handleChange}
              placeholder="Enter Your Message"
              rows="4"
              className="placeholder-[#836464] placeholder:text-[1.2rem] w-full px-4 py-3 border border-dashed border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            ></textarea>
            <button
              type="submit"
              disabled={submitting}
              className={`bg-primary1 text-white text-[1.2rem] font-semibold py-3 w-full rounded-lg transition duration-200 ${
                submitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-red-700'
              }`}
            >
              {submitting ? "Submitting..." : "Submit Complaint Form"}
            </button>
          </form>        </div>

        {/* Pizza Image */}
        <div className="bg-red-200 relative md:flex md:w-1/2 justify-center items-center">
          <img
            src="/contact-us/pizza-plate.png"
            alt="Pizza Plate"
            className="w-[85%] md:left-20 z-2 absolute"
          />
        </div>
      </div>
    </div>
  );
}
