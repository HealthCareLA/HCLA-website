import React, { useState } from 'react';
import MarkdownIt from "markdown-it";

const FaqSection = ({ title, faqs }) => {
  const [expandedFaqIndex, setExpandedFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaqIndex(expandedFaqIndex === index ? null : index);
  };

  return (
    <section id="FAQs" className="pt-[50px] md:pt-20 lg:pt-[100px] pb-[50px] md:pb-20 lg:pb-[150px] bg-trans-blue"
      suppressHydrationWarning style={{ scrollMarginTop: '100px' }}>
      <div className="max-container">
        <div className="faq-section text-center">
          {title && (
            <h2 className="text-blue mb-[30px] md:mb-[50px] lg:mb-20 font-medium">
              {title}
            </h2>
          )}
          <div className="space-y-5 md:space-y-[35px]">
            {faqs?.map((faq, index) => (
              <div
                key={index}
                className="faq-item bg-white rounded-xl shadow-[0_0_10px_0_rgb(1_131_179_/10%)] hover:shadow-lg transition"
              >
                <button
                  className="py-[30px] px-5 md:p-[30px] faq-question flex items-center gap-5 w-full text-left bg-white rounded-lg"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={expandedFaqIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-white bg-green w-[25px] h-[25px] rounded-full flex justify-center items-center text-xl faq-icon">
                    <i className={`fa-solid ${expandedFaqIndex === index ? 'fa-minus' : 'fa-plus'} text-[14px]`}></i>
                  </span>
                  <h4 className="p4 leading-none text-blue font-medium w-[calc(100%-45px)]">
                    {faq.question}
                  </h4>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className="faq-answer overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: expandedFaqIndex === index ? `${document.getElementById(`faq-answer-${index}`)?.scrollHeight}px` : '0',
                  }}
                >
                  {faq.answer && (
                    <p className="px-5 sm:px-[75px] pb-[30px] lg:pb-[50px] text-left text-common-clr p2">
                      {faq.answer}
                    </p>
                  )}

                  {faq.columns && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[30px] px-5 sm:px-[75px] pb-[30px] lg:pb-[50px] text-left">
                      {faq.columns.map((column, colIndex) => (
                        <div key={colIndex}>
                          <h5 className="text-common-clr font-medium p4 mb-[5px]">{column.title}</h5>
                          <p className="text-common-clr p2 mb-[10px]">{column.description}</p>
                          <a
                            href={column.linkUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green p2 hover:text-blue break-words"
                          >
                            {column.linkText}
                          </a>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
