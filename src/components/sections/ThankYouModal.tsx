"use client";

import { useEffect } from "react";

export function ThankYouModal() {
  useEffect(() => {
    const timer = setTimeout(() => {
      // O modal se fecha automaticamente após 3 segundos
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg text-center">
        <h3 className="text-2xl font-semibold mb-4">Obrigado!</h3>
        <p className="text-gray-600">Entraremos em contato em breve.</p>
        <div className="mt-4">
          <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    </div>
  );
}
