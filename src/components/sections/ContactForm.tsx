"use client";

import { useState } from "react";
import { Button } from "../ui/Button";

interface ContactFormProps {
  onSubmit: () => void;
}

interface FormData {
  name: string;
  phone: string;
  message: string;
}

export function ContactForm({ onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
    setFormData({ name: "", phone: "", message: "" });
  };

  const handleInputChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          placeholder="Seu nome"
          value={formData.name}
          onChange={handleInputChange("name")}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          required
        />
      </div>
      <div>
        <input
          type="tel"
          placeholder="Seu telefone"
          value={formData.phone}
          onChange={handleInputChange("phone")}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          required
        />
      </div>
      <div>
        <textarea
          placeholder="Sua mensagem (opcional)"
          value={formData.message}
          onChange={handleInputChange("message")}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>
      <Button
        type="submit"
        variant="primary"
        className="w-full"
      >
        Solicitar Orçamento
      </Button>
    </form>
  );
}
