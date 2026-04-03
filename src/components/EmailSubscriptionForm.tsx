'use client';

import { useState } from 'react';
import { subscribeToNewsletter } from '@/app/actions';
import { Check, Loader2 } from 'lucide-react';

interface EmailSubscriptionFormProps {
  placeholder?: string;
  buttonText?: string;
  variant?: 'hero' | 'contact' | 'newsletter';
}

export default function EmailSubscriptionForm({ 
  placeholder = 'Váš e-mail', 
  buttonText = 'Chci být u toho',
  variant = 'newsletter'
}: EmailSubscriptionFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(formData: FormData) {
    setStatus('loading');
    setMessage('');

    try {
      const result = await subscribeToNewsletter(formData);
      
      if (result?.success) {
        setStatus('success');
        setMessage('Děkujeme! Brzy se vám ozveme se zprávami ze zahrádky. 🌿');
      } else {
        setStatus('error');
        setMessage(result?.error || 'Něco se nepovedlo. Zkuste to prosím znovu.');
      }
    } catch (err) {
      setStatus('error');
      setMessage('Omlouváme se, došlo k chybě. Zkuste to prosím později.');
    }
  }

  if (status === 'success') {
    return (
      <div className="flex items-center gap-3 py-3 px-6 bg-[#A3B18A]/10 border border-[#A3B18A]/20 rounded-full animate-in fade-in zoom-in duration-500">
        <div className="w-8 h-8 rounded-full bg-[#A3B18A] flex items-center justify-center text-white shrink-0">
          <Check className="w-5 h-5" />
        </div>
        <p className="text-[#44403c] text-sm font-medium">{message}</p>
      </div>
    );
  }

  // Base style for the input container
  const containerBase = "bg-white rounded-full flex items-center shadow-sm border border-stone-200/50 w-full transition-all duration-300 hover:shadow-md focus-within:ring-2 focus-within:ring-[#A3B18A]/20";
  
  // Padding & size variants
  const containerStyle = variant === 'hero' ? `${containerBase} p-[4px]` : `${containerBase} p-1.5`;
  const inputBase = "bg-transparent outline-none w-full text-stone-700 placeholder-stone-400 font-light";
  const inputStyle = variant === 'hero' ? `${inputBase} px-5 py-2.5 text-sm` : `${inputBase} px-6 py-3 text-base font-medium`;
  const buttonBase = "bg-[#A3B18A] text-white rounded-full font-bold tracking-wide hover:opacity-90 transition-all shrink-0 shadow-sm flex items-center justify-center gap-2";
  const buttonStyle = variant === 'hero' ? `${buttonBase} px-8 py-2.5 text-xs` : `${buttonBase} px-8 py-3.5 text-sm`;

  return (
    <div className="w-full flex flex-col gap-3">
      <form action={handleSubmit} className={containerStyle}>
        <input 
          type="email" 
          name="email"
          placeholder={placeholder} 
          className={inputStyle} 
          required
          disabled={status === 'loading'}
        />
        <button 
          type="submit"
          disabled={status === 'loading'}
          className={buttonStyle}
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span className="hidden sm:inline">Odesílám...</span>
            </>
          ) : (
            buttonText
          )}
        </button>
      </form>
      {status === 'error' && (
        <p className="text-red-500 text-xs px-4 animate-in fade-in slide-in-from-top-1">
          {message}
        </p>
      )}
    </div>
  );
}
