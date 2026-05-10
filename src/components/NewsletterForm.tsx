"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { ArrowRight, CheckCircle } from "lucide-react";

type FormData = {
  email: string;
};

export default function NewsletterForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Newsletter submission:", data);
    setTimeout(() => {
      setIsSubmitted(true);
      reset();
    }, 500);
  };

  if (isSubmitted) {
    return (
      <div className="flex items-center gap-2 text-primary-green bg-primary-green/10 p-3 rounded-lg">
        <CheckCircle size={16} />
        <span className="font-medium text-[10px]">Subscribed!</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="relative flex items-center">
        <input
          {...register("email", { 
            required: "Email is required", 
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } 
          })}
          type="email"
          placeholder="Enter your email"
          className="w-full bg-[#1A2D3C] border border-white/10 rounded-lg px-4 py-3 text-xs text-white placeholder:text-gray-500 focus:outline-none focus:border-primary-blue transition-colors"
        />
        <button
          type="submit"
          className="absolute right-1 top-1 bottom-1 px-3 rounded-md bg-primary-blue text-white hover:bg-blue-600 transition-colors"
        >
          <ArrowRight size={16} />
        </button>
      </div>
      {errors.email && (
        <span className="text-red-400 text-[10px] absolute mt-1">{errors.email.message}</span>
      )}
    </form>
  );
}
