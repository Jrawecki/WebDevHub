"use client";

import {
  type FormEvent,
  type KeyboardEvent,
  type MouseEvent,
  useState,
} from "react";

import { trackGenerateLead } from "@/components/analytics/events";

type ContactFormProps = {
  brandName: string;
  toEmail: string;
};

function hasValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function ContactForm({ brandName, toEmail }: ContactFormProps) {
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formSubmitAction = `https://formsubmit.co/${toEmail}`;
  const formSubmitAjaxAction = `https://formsubmit.co/ajax/${toEmail}`;
  const contactThanksPath = "/contact/thanks";
  const formSubmitNextUrl = "https://webhubde.com/contact/thanks";

  async function postToFormSubmit(form: HTMLFormElement) {
    try {
      const response = await fetch(formSubmitAjaxAction, {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("FormSubmit request failed.");
      }

      window.location.assign(contactThanksPath);
    } catch {
      setFeedback("Something went wrong. Please try again in a moment.");
      setIsSubmitting(false);
    }
  }

  function submitForm(form: HTMLFormElement) {
    if (isSubmitting) {
      return;
    }

    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name) {
      setFeedback("Add your name so I know who the request is from.");
      return;
    }

    if (!email || !hasValidEmail(email)) {
      setFeedback("Add a valid email address so I can reply.");
      return;
    }

    if (!message) {
      setFeedback("Tell me what you need help with.");
      return;
    }

    setFeedback("Sending your request.");
    setIsSubmitting(true);
    trackGenerateLead(
      {
        contactMethod: "formsubmit",
        ctaLabel: "Send project inquiry",
      },
      {
        onComplete: () => {
          void postToFormSubmit(form);
        },
      },
    );
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    submitForm(event.currentTarget);
  }

  function handleSubmitClick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const form = event.currentTarget.form;

    if (!form) {
      return;
    }

    submitForm(form);
  }

  function handleFormKeyDown(event: KeyboardEvent<HTMLFormElement>) {
    if (event.key !== "Enter" || event.target instanceof HTMLTextAreaElement) {
      return;
    }

    event.preventDefault();
    submitForm(event.currentTarget);
  }

  return (
    <form
      className="contact-form"
      action={formSubmitAction}
      method="POST"
      data-formsubmit-ajax={formSubmitAjaxAction}
      data-formsubmit-next={formSubmitNextUrl}
      onSubmit={handleSubmit}
      onKeyDown={handleFormKeyDown}
    >
      <input
        type="hidden"
        name="_subject"
        value={`Project inquiry for ${brandName}`}
      />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value={formSubmitNextUrl} />
      <input
        type="text"
        name="_honey"
        className="contact-form__honeypot"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="contact-field">
        <label htmlFor="contact-name">Name</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          placeholder="Your name"
        />
      </div>

      <div className="contact-field">
        <label htmlFor="contact-email">Email address</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="you@example.com"
        />
      </div>

      <div className="contact-field">
        <label htmlFor="contact-message">Project/request message</label>
        <textarea
          id="contact-message"
          name="message"
          rows={7}
          required
          placeholder="Tell me what you need help with."
        />
      </div>

      {feedback ? (
        <p className="contact-form__feedback" role="status">
          {feedback}
        </p>
      ) : null}

      <div className="contact-form__actions">
        <button
          type="submit"
          className="cta-link"
          disabled={isSubmitting}
          onClick={handleSubmitClick}
        >
          {isSubmitting ? "Sending request..." : "Send project inquiry"}
        </button>
      </div>
    </form>
  );
}
