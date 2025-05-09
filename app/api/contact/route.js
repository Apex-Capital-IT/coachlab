import { NextResponse } from "next/server";

// Uncomment this line
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const formData = await request.json();
    const { name, phone, email, message } = formData;

    // Validate the form data
    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "coachlabmongoliainfo@gmail.com",
        pass: "iiwm mgam weoy mqsu", // The app password you provided
      },
    });

    // Current date for the footer
    const currentYear = new Date().getFullYear();

    // Email content
    const mailOptions = {
      from: email,
      to: "uzkhuthef@gmail.com",
      subject: `Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="text-align: center; margin-bottom: 20px;">
            <h1 style="color: #1782e0; margin-bottom: 10px;">Шинэ хүсэлт</h1>
            <p style="font-size: 16px; color: #4a4a4a;">
              You have received a new message from your website contact form.
            </p>
          </div>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
            <h2 style="color: #333; margin-top: 0;">Contact Information</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>
          
          <div style="background-color: #e8f4fe; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
            <h2 style="color: #1782e0; margin-top: 0;">Message</h2>
            <p>${message.replace(/\n/g, "<br/>")}</p>
          </div>
          
          <div style="margin-top: 30px; text-align: center; color: #666; font-size: 14px;">
            <p>This is an automated message from your CoachLab Mongolia website.</p>
            <p>© ${currentYear} CoachLab Mongolia. All rights reserved.</p>
          </div>
        </div>
      `,
    };

    // Send email
    try {
      await transporter.sendMail(mailOptions);
    } catch (emailError) {
      console.error("Error sending email via nodemailer:", emailError);
      return NextResponse.json(
        { error: "Failed to send email via nodemailer" },
        { status: 500 }
      );
    }

    // Log the data to console
    console.log("Contact form submission:", { name, phone, email, message });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("Error processing contact form submission:", error);
    return NextResponse.json(
      { error: "Failed to process form submission" },
      { status: 500 }
    );
  }
}
