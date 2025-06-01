"use server";

const EMAIL_BASE_URL = process.env.EMAIL_BASE_URL || "https://example.com/api/email";
const EMAIL_API_KEY = process.env.EMAIL_API_KEY || "your-email-api-key";

export const sendGroupEmail = async (name, email, complaint) => {
  try {
    const templatename = "Pizza-point-contact-us";
    const groupName = "pizza-point-contact-us";
    const tempplateData = {name,email,complaint};

    if (!templatename || !groupName) {
      return {
        status: "ERROR",
        error: "Template name and group name are required",
      };
    }
    const response = await fetch(`${EMAIL_BASE_URL}/send-group`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": `${EMAIL_API_KEY}`,
      },
      body: JSON.stringify({
        templateName: templatename,
        groupName: groupName,
        data: tempplateData,
      }),
    });
    console.log("response", response);
    if (!response.ok) {
      console.log("response", response);
      const errorData = await response.json();
      return {
        status: "ERROR",
        error: errorData.message || "Failed to send group email",
      };
    }
    const data = await response.json();
    return {
      status: "SUCCESS",
      data: data.data,
      message: data.message || "Group email sent successfully",
    };
  } catch (error) {
    console.error("Error sending group email:", error);
    return {
      status: "ERROR",
      error: error.message || "Failed to send group email",
    };
  }
};