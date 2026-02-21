import React, { useState } from 'react';
import { Logo } from './Logo';

interface LoginProps {
  onLogin: () => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'ClienteBH12') {
      onLogin();
    } else {
      setError('Credenciais inválidas. Tente novamente.');
      setTimeout(() => setError(''), 3000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-otherx-dark p-4">
      <div className="w-full max-w-md bg-white dark:bg-otherx-card p-8 rounded-2xl shadow-2xl border border-gray-200 dark:border-otherx-gray">
        <div className="flex justify-center mb-8">
          <Logo />
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              E-mail de Acesso
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-otherx-dark border border-gray-300 dark:border-otherx-gray text-gray-900 dark:text-white focus:ring-2 focus:ring-otherx-green focus:border-transparent outline-none transition-all"
              placeholder="seu@email.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Senha Mestre
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-otherx-dark border border-gray-300 dark:border-otherx-gray text-gray-900 dark:text-white focus:ring-2 focus:ring-otherx-green focus:border-transparent outline-none transition-all"
              placeholder="•••••••"
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center font-medium animate-pulse">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-otherx-green hover:bg-emerald-400 text-black font-bold py-3 rounded-lg shadow-[0_0_15px_rgba(0,255,136,0.4)] hover:shadow-[0_0_25px_rgba(0,255,136,0.6)] transition-all transform hover:scale-[1.02]"
          >
            ACESSAR PAINEL
          </button>
        </form>
        
        <div className="mt-6 text-center text-xs text-gray-400 dark:text-gray-600">
          Acesso restrito a membros convidados.
          <br />ID do sistema: OTX-SECURE-99
        </div>
      </div>
    </div>
  );
};