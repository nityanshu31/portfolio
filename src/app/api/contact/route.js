import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";
import { resend } from "@/lib/resend";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const { name, email, phone, subject, message } = body;

    // Save to MongoDB
    const contact = await Contact.create({
      name,
      email,
      phone,
      subject,
      message,
    });

    // Send Admin Email
    await resend.emails.send({
      from: "Cetrionyx <onboarding@resend.dev>",
      to: "nityanshuranawat.deuglo@gmail.com",
      subject: `New Contact Inquiry - ${subject}`,
      html: `
        <h2>New Inquiry Received</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // Auto Reply
    await resend.emails.send({
      from: "Cetrionyx <onboarding@resend.dev>",
      to: email,
      subject: "We Received Your Message",
      html: `
        <h2>Thank You for Contacting Cetrionyx</h2>

        <p>Hello ${name},</p>

        <p>
          We have received your inquiry and our team will get back to you shortly.
        </p>

        <p>Regards,<br/>Cetrionyx Team</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
      data: contact,
    });

  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      { status: 500 }
    );
  }
}