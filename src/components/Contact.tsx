import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Entre em Contato</h2>
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col items-center gap-6">
            <p className="text-center text-gray-300 mb-8">
              Estou sempre interessado em novas oportunidades e colaborações.
              Sinta-se à vontade para entrar em contato através dos seguintes canais:
            </p>
            <div className="flex gap-8">
              <a
                href="mailto:vitorcesarsilvestre2017@gmail.com"
                className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Mail className="h-6 w-6" />
                <span>Email</span>
              </a>
              <a
                href="https://www.linkedin.com/in/vitor-silvestre-4811a3212/"
                className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}