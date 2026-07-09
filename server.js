const express = require("express");
const next = require("next");
const path = require("path");
const nodemailer = require("nodemailer");

const dev = process.env.NODE_ENV !== "production";
const hostname = process.env.HOST || "localhost";
const port = Number(process.env.PORT) || 3000;
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();
const rootDir = __dirname;

function serveDirectory(server, route, directory) {
  server.use(route, express.static(path.join(rootDir, directory), { index: false }));
}

function serveFile(server, route, file) {
  server.get(route, (_request, response) => {
    response.sendFile(path.join(rootDir, file));
  });
}


app.prepare().then(() => {
  const server = express();

  server.use(express.json());

  server.post("/api/contact", async (request, response) => {
    const { name, email, subject, phone, message } = request.body || {};

    if (!name || !email || !subject || !message) {
      response.status(400).json({ success: false, message: "Please fill in the required fields." });
      return;
    }

    const recipient = process.env.CONTACT_TO || "starpoliceacademy2022@gmail.com";
    const smtpHost = process.env.SMTP_HOST || process.env.MAIL_HOST || "smtp.gmail.com";
    const smtpPort = Number(process.env.SMTP_PORT || process.env.MAIL_PORT || 587);
    const smtpUser = process.env.SMTP_USER || process.env.MAIL_USER;
    const smtpPass = process.env.SMTP_PASS || process.env.MAIL_PASS;
    const smtpFrom = process.env.SMTP_FROM || process.env.MAIL_FROM || smtpUser || recipient;

    const transportConfig = {
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
    };

    if (smtpUser && smtpPass) {
      transportConfig.auth = { user: smtpUser, pass: smtpPass };
    }

    const transporter = nodemailer.createTransport(transportConfig);

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222;">
        <h2 style="margin-bottom: 12px;">New contact enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      </div>
    `;

    try {
      await transporter.sendMail({
        from: `Star Police Academy <${smtpFrom}>`,
        to: recipient,
        replyTo: email,
        subject: `[Contact Form] ${subject}`,
        html,
      });

      response.json({ success: true, message: "Your message has been sent successfully." });
    } catch (error) {
      console.error("Contact form email error:", error);
      response.status(500).json({
        success: false,
        message: "We could not send your message right now. Please contact the academy directly at starpoliceacademy2022@gmail.com.",
      });
    }
  });

  serveDirectory(server, "/assets", "assets");
  serveDirectory(server, "/echooling-rtl/assets", "echooling-rtl/assets");
  serveDirectory(server, "/echooling-rtl/landing/assets", "echooling-rtl/landing/assets");
  serveDirectory(server, "/echooling-rtl/landing/landing/assets", "echooling-rtl/landing/landing/assets");

  serveFile(server, "/style.css", "style.css");
  serveFile(server, "/variables.css", "variables.css");
  serveFile(server, "/echooling-rtl/style.css", "echooling-rtl/style.css");
  serveFile(server, "/echooling-rtl/variables.css", "echooling-rtl/variables.css");
  serveFile(server, "/echooling-rtl/landing/style.css", "echooling-rtl/landing/style.css");
  serveFile(server, "/echooling-rtl/landing/landing/style.css", "echooling-rtl/landing/landing/style.css");

  server.use((request, response) => handle(request, response));

  server.listen(port, hostname, () => {
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});
