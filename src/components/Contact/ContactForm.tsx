import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { Toaster, toast } from "sonner";
import type { ContactFormData } from "../../types";

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

const inputClass = (hasError: boolean, base: string) =>
  `${base} w-full transition-all focus:outline-none focus:ring-2 focus:ring-primary/40 ${hasError ? `${base.split(" ")[0]}-error` : ""}`;

export default function ContactForm() {
  const [params] = useSearchParams();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  // Prefill the subject from links such as /contact?subject=HFCB%20personal%20banking%20enquiry
  useEffect(() => {
    const subject = params.get("subject");
    if (subject) setValue("subject", subject.slice(0, 120));
  }, [params, setValue]);

  // Sent through api/sendEmail.ts (Resend). Use `vercel dev` to test it locally.
  const onSubmit = async (data: ContactFormData) => {
    const toastId = toast.loading("Sending message...");

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`sendEmail responded ${res.status}`);

      toast.success("Message sent successfully", { id: toastId });
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please email me directly.", { id: toastId });
    }
  };

  const describedBy = (field: keyof ContactFormData) => (errors[field] ? `${field}-error` : undefined);

  return (
    <>
      <Toaster position="top-right" richColors />
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6" aria-label="Contact form">
        {/* Name + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label htmlFor="name" className="block font-medium mb-1">Your Name</label>
            <input
              id="name"
              autoComplete="name"
              {...register("name")}
              placeholder="Full Name"
              aria-invalid={!!errors.name}
              aria-describedby={describedBy("name")}
              className={inputClass(!!errors.name, "input input-bordered")}
            />
            {errors.name && (
              <p id="name-error" className="text-error text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="form-control">
            <label htmlFor="email" className="block font-medium mb-1">Email Address</label>
            <input
              id="email"
              autoComplete="email"
              {...register("email")}
              type="email"
              placeholder="you@yourdomain.com"
              aria-invalid={!!errors.email}
              aria-describedby={describedBy("email")}
              className={inputClass(!!errors.email, "input input-bordered")}
            />
            {errors.email && (
              <p id="email-error" className="text-error text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Subject */}
        <div className="form-control">
          <label htmlFor="subject" className="block font-medium mb-1">Subject</label>
          <input
            id="subject"
            {...register("subject")}
            placeholder="Project enquiry / Personal banking enquiry"
            aria-invalid={!!errors.subject}
            aria-describedby={describedBy("subject")}
            className={inputClass(!!errors.subject, "input input-bordered")}
          />
          {errors.subject && (
            <p id="subject-error" className="text-error text-sm mt-1">{errors.subject.message}</p>
          )}
        </div>

        {/* Message */}
        <div className="form-control">
          <label htmlFor="message" className="block font-medium mb-1">Message</label>
          <textarea
            id="message"
            {...register("message")}
            rows={5}
            placeholder="Tell me about your project, idea or banking need…"
            aria-invalid={!!errors.message}
            aria-describedby={describedBy("message")}
            className={`${inputClass(!!errors.message, "textarea textarea-bordered")} resize-none`}
          />
          {errors.message && (
            <p id="message-error" className="text-error text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary w-full gap-2"
        >
          {isSubmitting ? (
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
