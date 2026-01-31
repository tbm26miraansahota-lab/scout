import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  question: string;
  answer: string;
}

export function AccordionItem({ question, answer }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-charcoal-700 rounded-xl overflow-hidden transition-colors hover:border-charcoal-600">
      <button
        className="w-full flex items-center justify-between p-5 text-left cursor-pointer bg-transparent border-none text-white"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-semibold pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-charcoal-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-5 pb-5 text-charcoal-300 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}
