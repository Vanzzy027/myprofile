import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import type { ContactFormData } from "../../types";

import emailjs from "@emailjs/browser";  // to be removed when i switch to Netlify functions + Resend




const schema = z.object({
  name:    z.string().min(2, "Name must be at least 2 characters"),
  email:   z.string().email("Please enter a valid email address"),
  subject: z.string().min(4, "Subject must be at least 4 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
  });

// Shortterm: To work with emailjs, which is free and easier to set up without a backend. Will switch to Netlify functions + Resend when I get a domain and can set up email forwarding.
const onSubmit = async (data: ContactFormData) => {
  setStatus("sending");

  try {
    await emailjs.send(
      "service_9f8k4b7",
      "template_iu8zmhc",
      {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      },
      "lTt7-qCCYfkQmJpzy"
    );

    setStatus("success");
    reset();
  } catch (error) {
    console.error("EmailJS error:", error);
    setStatus("error");
  }
};

  //To work when i get a domain
   
  // const onSubmit = async (data: ContactFormData) => {
  //   setStatus("sending");
  //   try {
  //     const res = await fetch("/.netlify/functions/sendEmail", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(data),
  //     });
  //     if (!res.ok) throw new Error("Send failed");
  //     setStatus("success");
  //     reset();
  //   } catch {
  //     setStatus("error");
  //   }
  // };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="form-control">
          <label className="label"><span className="label-text font-medium">Your Name</span></label>
          <input {...register("name")} placeholder="John Doe" className={`input input-bordered ${errors.name ? "input-error" : ""}`} />
          {errors.name && <span className="label-text-alt text-error mt-1">{errors.name.message}</span>}
        </div>

        <div className="form-control">
          <label className="label"><span className="label-text font-medium">Email Address</span></label>
          <input {...register("email")} type="email" placeholder="john@example.com" className={`input input-bordered ${errors.email ? "input-error" : ""}`} />
          {errors.email && <span className="label-text-alt text-error mt-1">{errors.email.message}</span>}
        </div>
      </div>

      <div className="form-control">
        <label className="label"><span className="label-text font-medium">Subject</span></label>
        <input {...register("subject")} placeholder="Project enquiry / Collaboration" className={`input input-bordered ${errors.subject ? "input-error" : ""}`} />
        {errors.subject && <span className="label-text-alt text-error mt-1">{errors.subject.message}</span>}
      </div>

      <div className="form-control">
        <label className="label"><span className="label-text font-medium">Message</span></label>
        <textarea {...register("message")} rows={5} placeholder="Tell me about your project or idea…" className={`textarea textarea-bordered resize-none ${errors.message ? "textarea-error" : ""}`} />
        {errors.message && <span className="label-text-alt text-error mt-1">{errors.message.message}</span>}
      </div>

      {/* Status messages */}
      {status === "success" && (
        <div className="alert alert-success">
          <CheckCircle size={18} />
          <span>Message sent! I'll get back to you within 24 hours.</span>
        </div>
      )}
      {status === "error" && (
        <div className="alert alert-error">
          <AlertCircle size={18} />
          <span>Something went wrong. Please try emailing me directly.</span>
        </div>
      )}

      <button type="submit" disabled={status === "sending"} className="btn btn-primary w-full gap-2">
        {status === "sending" ? (
          <><span className="loading loading-spinner loading-sm" /> Sending…</>
        ) : (
          <><Send size={16} /> Send Message</>
        )}
      </button>
    </form>
  );
}