import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import type { ContactFormData } from "../../types";
import emailjs from "@emailjs/browser"; // to be removed when i switch to Netlify functions + Resend
import { Toaster } from "sonner";
import { toast } from "sonner";

<Toaster position="top-right" richColors />;

const blockedEmails = [
  "test@test.com",
  "email@email.com",
  "example@example.com",
];

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),

  email: z
    .string()
    .email("Please enter a valid email address")
    .refine(
      (email) => !blockedEmails.includes(email.toLowerCase()),
      "Please use a real email address",
    )
    .refine(
      (email) => !email.endsWith("@example.com"),
      "Example domains are not allowed",
    ),

  subject: z.string().min(4, "Subject must be at least 4 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  // Shortterm: To work with emailjs, which is free and easier to set up without a backend. Will switch to Netlify functions + Resend when I get a domain and can set up email forwarding.
  const onSubmit = async (data: ContactFormData) => {
    const toastId = toast.loading("Sending message...");

    try {
      await emailjs.send(
        "service_9f8k4b7",
        "template_iu8zmhc",
        {
          name: data.name,
          email: data.email,
          subject: `[Portfolio] ${data.subject}`,
          message: data.message,
        },
        "lTt7-qCCYfkQmJpzy",
      );

      toast.success("Message sent successfully 🚀", { id: toastId });
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message ❌", { id: toastId });
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
    <>
      <Toaster position="top-right" richColors />
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
        {/* Name + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="block font-medium mb-1">Your Name</label>
            <input
              {...register("name")}
              placeholder="Full Name"
              className={`input input-bordered w-full transition-all focus:outline-none focus:ring-2 focus:ring-primary/40 ${
                errors.name ? "input-error" : ""
              }`}
            />
            {errors.name && (
              <p className="text-error text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="form-control">
            <label className="block font-medium mb-1">Email Address</label>
            <input
              {...register("email")}
              type="email"
              placeholder="email@example.com"
              className={`input input-bordered w-full transition-all focus:outline-none focus:ring-2 focus:ring-primary/40 ${
                errors.email ? "input-error" : ""
              }`}
            />
            {errors.email && (
              <p className="text-error text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Subject */}
        <div className="form-control">
          <label className="block font-medium mb-1">Subject</label>
          <input
            {...register("subject")}
            placeholder="Project enquiry / Collaboration"
            className={`input input-bordered w-full transition-all focus:outline-none focus:ring-2 focus:ring-primary/40 ${
              errors.subject ? "input-error" : ""
            }`}
          />
          {errors.subject && (
            <p className="text-error text-sm mt-1">{errors.subject.message}</p>
          )}
        </div>

        {/* Message */}
        <div className="form-control">
          <label className="block font-medium mb-1">Message</label>
          <textarea
            {...register("message")}
            rows={5}
            placeholder="Tell me about your project or idea…"
            className={`textarea textarea-bordered w-full resize-none transition-all focus:outline-none focus:ring-2 focus:ring-primary/40 ${
              errors.message ? "textarea-error" : ""
            }`}
          />
          {errors.message && (
            <p className="text-error text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn btn-primary w-full gap-2"
        >
          {status === "sending" ? (
            <>
              <span className="loading loading-spinner loading-sm" />
              Sending…
            </>
          ) : (
            <>
              <Send size={16} />
              Send Message
            </>
          )}
        </button>
      </form>
    </>
  );
}
