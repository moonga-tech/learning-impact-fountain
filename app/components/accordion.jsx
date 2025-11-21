"use client"
import { useState } from 'react';
import { Icon } from './icon'; // Assuming you have an Icon component

const AccordionItem = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-4 px-6 text-left text-lg font-semibold text-gray-800 focus:outline-none"
        onClick={onClick}
      >
        <span>{title}</span>
        <Icon name={isOpen ? 'minus' : 'plus'} className="w-5 h-5" />
      </button>
      {isOpen && <div className="p-6 pt-0 text-gray-600">{children}</div>}
    </div>
  );
};

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="rounded-lg shadow-md overflow-hidden">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
