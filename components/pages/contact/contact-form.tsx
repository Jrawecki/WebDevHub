"use client";

import { FormEvent, MouseEvent, useMemo, useState } from "react";

type ContactFormProps = {
  brandName: string;
  toEmail: string;
};

function buildMailtoHref({
  brandName,
  message,
  toEmail,
}: {
  brandName: string;
  message: string;
  toEmail: string;
}) {
  const params = new URLSearchParams({
    subject: `Project inquiry for ${brandName}`,
    body: ["Request:", message].join("\n"),
  });

  return `mailto:${toEmail}?${params.toString().replace(/\+/g, "%20")}`;
}

function buildGmailHref({
  brandName,
  message,
  toEmail,
}: {
  brandName: string;
  message: string;
  toEmail: string;
}) {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: toEmail,
    su: `Project inquiry for ${brandName}`,
    body: ["Request:", message].join("\n"),
  });

  return `https://mail.google.com/mail/?${params.toString().replace(/\+/g, "%20")}`;
}

export function ContactForm({ brandName, toEmail }: ContactFormProps) {
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isOpening, setIsOpening] = useState(false);

  const trimmedMessage = message.trim();

  const mailtoHref = useMemo(
    () =>
      buildMailtoHref({
        brandName,
        message: trimmedMessage,
        toEmail,
      }),
    [brandName, toEmail, trimmedMessage],
  );

  const gmailHref = useMemo(
    () =>
      buildGmailHref({
        brandName,
        message: trimmedMessage,
        toEmail,
      }),
    [brandName, toEmail, trimmedMessage],
  );

  function validateFields() {
    if (!trimmedMessage) {
      setFeedback("Tell me what you need help with.");
      return false;
    }

    return true;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validateFields()) {
      return;
    }

    setFeedback("Opening your email app with the message ready to send.");
    setIsOpening(true);
    window.location.href = mailtoHref;
    window.setTimeout(() => setIsOpening(false), 1200);
  }

  function handleGmailClick(event: MouseEvent<HTMLAnchorElement>) {
    if (!validateFields()) {
      event.preventDefault();
      return;
    }

    setFeedback("Opening Gmail in your browser with the message ready to send.");
  }

  return (
    <form
      className="contact-form"
      data-mailto-href={mailtoHref}
      data-gmail-href={gmailHref}
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="contact-field">
        <label htmlFor="contact-message">Project/request message</label>
        <textarea
          id="contact-message"
          name="message"
          rows={7}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Tell me what you need help with."
        />
      </div>

      {feedback ? (
        <p className="contact-form__feedback" role="status">
          {feedback}
        </p>
      ) : null}

      <div className="contact-form__actions">
        <button type="submit" className="cta-link" disabled={isOpening}>
          {isOpening ? "Opening email..." : "Open email to send"}
        </button>
        <a
          href={gmailHref}
          target="_blank"
          rel="noreferrer"
          className="secondary-link"
          onClick={handleGmailClick}
        >
          Open in Gmail
        </a>
      </div>
    </form>
  );
}
