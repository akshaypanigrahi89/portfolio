import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const authUser = process.env.SMTP_USER;
    const authPass = process.env.SMTP_PASS;

    if (!authUser || !authPass) {
      console.warn("SMTP not configured — logging to console instead.");
      console.log("Contact form submission:", { name, email, subject, message });
      return NextResponse.json({ success: true });
    }

    const nodemailer = await import("nodemailer");

    const transporter = nodemailer.default.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: { user: authUser, pass: authPass },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${authUser}>`,
      replyTo: email,
      to: "akshaypanigrahi7@gmail.com",
      subject: `Portfolio Contact: ${subject || "No Subject"}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
          <h2 style="color:#3b82f6">New Portfolio Contact Message</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px;font-weight:700;width:80px">Name:</td><td style="padding:8px">${name}</td></tr>
            <tr><td style="padding:8px;font-weight:700">Email:</td><td style="padding:8px">${email}</td></tr>
            <tr><td style="padding:8px;font-weight:700">Subject:</td><td style="padding:8px">${subject || "—"}</td></tr>
          </table>
          <hr style="margin:16px 0;border:none;border-top:1px solid #eee" />
          <p style="white-space:pre-wrap">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}
