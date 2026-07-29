"use client";

import React, {
  forwardRef,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
  type RefObject,
} from "react";
import {
  CheckCircle2,
  ChevronDown,
  HelpCircle,
  Mail,
  Send,
  User,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { serviceOptions } from "../../pages/HomeHeroSection/data";
import type { FormData, FormErrors } from "../../pages/HomeHeroSection/types";
import SpinningCircle from "./SpinningCircle";

type ContactFormProps = {
  formRef: RefObject<HTMLDivElement | null>;
  nameInputRef: RefObject<HTMLInputElement | null>;
  formData: FormData;
  formErrors: FormErrors;
  isSubmitting: boolean;
  isSubmitted: boolean;
  onChange: (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
  onSubmit: (event: FormEvent) => void;
  onReset: () => void;
};

const initialFormData: FormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
}; 
export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);



  const handleFormChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));

    if (formErrors[name as keyof FormData]) {
      setFormErrors((current) => ({ ...current, [name]: "" }));
    }
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    const errors: FormErrors = {};
    if (!formData.name.trim()) errors.name = "Full name is required";
    if (!formData.email.trim()) {
      errors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.subject) errors.subject = "Please select a service subject";
    if (!formData.message.trim()) errors.message = "Message is required";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    window.setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleResetForm = () => {
    setFormData(initialFormData);
    setFormErrors({});
    setIsSubmitted(false);
  };

  return (
    <motion.div
      ref={formRef}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
      className="lg:col-span-5"
    >
      <div className="relative bg-white/20 rounded-md p-3">
      <div className="relative rounded-sm bg-white  p-5 shadow-lg sm:p-6 lg:p-8">
        
        <SpinningCircle />


        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleFormSubmit}
              className="flex flex-col gap-4"
            >
              <h1 className="text-xl text-black">Send me a Mail</h1>
              <div className="grid gap-4 lg:gap-6 sm:grid-cols-2">
                <LabelledInput
                  ref={nameInputRef}
                  icon={<User className="size-4 text-neutral-400" />}
                  label="Name*"
                  name="name"
                  value={formData.name}
                  error={formErrors.name}
                  placeholder="Enter Full Name"
                  onChange={handleFormChange}
                />
                <LabelledInput
                  icon={<Mail className="size-4 text-neutral-400" />}
                  label="Email*"
                  name="email"
                  type="email"
                  value={formData.email}
                  error={formErrors.email}
                  placeholder="Enter Email"
                  onChange={handleFormChange}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm  text-[#8BA615]">
                  Subject*
                </label>
                <div className="relative">
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleFormChange}
                    className={`w-full cursor-pointer appearance-none rounded-sm border border-transparent bg-[#f4f4f4] px-4 py-4 text-sm text-neutral-700 outline-none transition focus:border-neutral-300 focus:bg-white ${
                      formErrors.subject ? "border-red-500" : ""
                    }`}
                  >
                    <option value="">Select One</option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-neutral-500" />
                </div>
                {formErrors.subject && (
                  <div className="mt-2 text-xs font-medium text-red-500">
                    {formErrors.subject}
                  </div>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm  text-[#8BA615]">
                  What Can We Help You?
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  placeholder="Write your message here"
                  rows={5}
                  className={`w-full resize-none rounded-sm border border-transparent bg-[#f4f4f4] px-4 py-4 text-sm text-neutral-700 outline-none transition focus:border-neutral-300 focus:bg-white ${
                    formErrors.message ? "border-red-500" : ""
                  }`}
                />
                {formErrors.message && (
                  <div className="mt-2 text-xs font-medium text-red-500">
                    {formErrors.message}
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 flex w-full items-center cursor-pointer justify-center rounded-sm bg-[#cfef00] px-6 py-4 text-sm font-semibold uppercase tracking-widest text-neutral-900 transition hover:brightness-95 disabled:cursor-wait"
              >
                {isSubmitting ? (
                  <span className="animate-spin rounded-full border-2 border-black border-t-transparent px-3 py-2" />
                ) : (
                  "Send A Message"
                )}
              </button>
            </motion.form>
          ) : (
            <div className="py-10 text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <CheckCircle2 className="size-8" />
              </div>
              <h3 className="text-xl font-extrabold text-neutral-900">
                Enquiry Received!
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                Thanks {formData.name}, we&rsquo;ll be in touch at{" "}
                {formData.email}.
              </p>
              <button
                onClick={handleResetForm}
                className="mt-6 inline-flex items-center rounded-sm bg-neutral-900 px-5 py-3 text-xs font-bold uppercase tracking-widest text-white hover:bg-neutral-800"
              >
                Send Message
              </button>
            </div>
          )}
        </AnimatePresence>
      </div></div>
    </motion.div>
  );
}

const LabelledInput = forwardRef<
  HTMLInputElement,
  {
    icon?: ReactNode;
    label: string;
    name: keyof Pick<FormData, "name" | "email">;
    value: string;
    error?: string;
    type?: string;
    placeholder: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  }
>(
  (
    { icon, label, name, value, error, type = "text", placeholder, onChange },
    ref,
  ) => (
    <label className="flex flex-col gap-2">
      <span className="text-sm  text-[#8BA615]">{label}</span>
      <div className="relative">
        {icon ? (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400">
            {icon}
          </span>
        ) : null}
        <input
          ref={ref}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full rounded-sm focus:border-neutral-300 bg-[#f4f4f4] py-4 pl-12 pr-4 text-sm text-neutral-700 outline-none transition focus:bg-white ${
            error ? "border-red-500" : "border border-transparent"
          }`}
        />
      </div>
      {error && (
        <div className="mt-1 text-xs font-medium text-red-500">{error}</div>
      )}
    </label>
  ),
);
LabelledInput.displayName = "LabelledInput";

export default ContactForm;
