"use server";

import { sendGroupEmail } from '@/lib/emailService';

// Email regex pattern for better validation
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export async function submitContactForm(formData) {
  try {
    // Input validation and sanitization
    const { name, email, complaint } = formData;
    
    // Check if all required fields are provided
    if (!name || !email || !complaint) {
      return {
        status: "ERROR",
        error: "All fields are required",
      };
    }
    
    // Validate name (not empty and reasonable length)
    if (name.trim().length < 2 || name.trim().length > 100) {
      return {
        status: "ERROR",
        error: "Name should be between 2 and 100 characters",
      };
    }
    
    // Validate email with regex
    if (!EMAIL_REGEX.test(email)) {
      return {
        status: "ERROR",
        error: "Please enter a valid email address",
      };
    }
    
    // Validate complaint (not empty and reasonable length)
    if (complaint.trim().length < 10 || complaint.trim().length > 1000) {
      return {
        status: "ERROR",
        error: "Message should be between 10 and 1000 characters",
      };
    }
    
    // Call email service function
    const result = await sendGroupEmail(name.trim(), email.trim(), complaint.trim());
      // Check the result and provide useful error messages
    if (result.status === "ERROR") {
      console.error("Email service error:", result.error);
      return {
        status: "ERROR",
        error: "Sorry, we couldn't send your message. Please try again later.",
      };
    }
    
    return {
      status: "SUCCESS",
      message: "Thank you for your message! We'll get back to you soon.",
    };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return {
      status: "ERROR",
      error: "An unexpected error occurred. Please try again later.",
    };
  }
}
