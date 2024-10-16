import React, { useState } from 'react';
import MarkdownIt from "markdown-it";

const JobListSection = (block) => {
  const [expandedFaqIndex, setExpandedFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaqIndex(expandedFaqIndex === index ? null : index);
  };
  return (
    <section className="relative pt-[50px] md:pt-20 lg:pt-[30px] pb-[50px] md:pb-20 lg:pb-[150px] bg-trans-blue"
      suppressHydrationWarning style={{ scrollMarginTop: '100px' }}>
      <div className="absolute left-0 w-full top-[-164px] hidden lg:block">
          <svg className='w-full h-[446px]' viewBox="0 0 1440 446" preserveAspectRatio='none' fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1440.92 122.92C1217.28 43.48 974.816 0 721.546 0C468.276 0 224.906 43.65 0.915527 123.37V445.09H1440.92V122.92Z" fill="#eefcff"/>
          </svg>
        </div>
      <div className="max-container relative z-1 -top-10">
        <div className="faq-section text-left">
          {block.title && (
            <h2 className="text-blue mb-[30px] md:mb-[50px] lg:mb-20 font-medium">
              {block.title}
            </h2>
          )}
          <div className="space-y-8 md:space-y-12">
            {block.job_list?.map((job_item, index) => (
              <div
                key={index}
                className="faq-item bg-white rounded-s-xl shadow-[0_0_10px_0_rgb(1_131_179_/10%)] hover:shadow-lg transition"
              >
                <button
                  className="py-[30px] px-5 md:p-[30px] faq-question flex items-center gap-5 w-full text-left bg-white rounded-lg"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={expandedFaqIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-white bg-green w-[25px] h-[25px] rounded-full flex justify-center items-center text-xl faq-icon">
                    <i className={`fa-solid ${expandedFaqIndex === index ? 'fa-minus' : 'fa-plus'} text-sm`}></i>
                  </span>
                  <h4 className="p4 leading-none text-blue font-medium w-[calc(100%-45px)]">
                    {job_item.job}
                  </h4>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className="faq-answer overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: expandedFaqIndex === index ? `${document.getElementById(`faq-answer-${index}`)?.scrollHeight}px` : '0',
                  }}
                >

                  {job_item.details && (
                    <div className="px-5 sm:px-[75px] pb-[30px] lg:pb-[50px] text-left">
                      {job_item.details.map((detail, colIndex) => (
                        <div key={colIndex}>
                          {
                            detail.content && (
                              <>
                                <h5 className="text-common-clr font-medium p4 mb-[5px]">{detail.content}</h5>
                                <ul>
                                  {
                                    detail.lines && detail.lines.map((lineItem, linIndex) => (
                                      <li>{lineItem.text}</li>
                                    ))
                                  }
                                </ul>
                                <hr />
                              </>
                            )
                          }
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr className="mx-6 my-10" />

        <div className='w-full'>
          <h4 className='text-center'>Apply Now</h4>
          <form action="" className='p-[50px]'>
            <div className="flex flex-col">
              <label htmlFor="">Which job are you applying for?(Required)</label>
              <input className="p-[10px] border-[1px]" type='text' placeholder='' required />
            </div>
            <div className="flex flex-col mt-5">
              <label htmlFor="">Name(Required)</label>
              <div className="flex flex-row">
                <div className="flex flex-col w-full">
                  <label htmlFor="">First Name</label>
                  <input className="p-[10px] border-[1px]" type='text' placeholder='' required />
                </div>
                <div className="flex flex-col w-full ml-5">
                  <label htmlFor="">Last Name</label>
                  <input className="p-[10px] border-[1px]" type='text' placeholder='' required />
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-5">
              <label htmlFor="">Email(Required)</label>
              <div className="flex flex-row">
                <div className="flex flex-col w-full">
                  <label htmlFor="">Enter Email</label>
                  <input className="p-[10px] border-[1px]" type='text' placeholder='' required />
                </div>
                <div className="flex flex-col w-full ml-5">
                  <label htmlFor="">Confirm Email</label>
                  <input className="p-[10px] border-[1px]" type='text' placeholder='' required />
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-5">
              <label htmlFor="">Zip Code(Required)</label>
              <input className="p-[10px] border-[1px]" type='text' placeholder='' required />
            </div>

            <div className="flex flex-col mt-5">
              <label htmlFor="">Upload your resumé or CVS (optional)</label>
              <input className="p-[10px] border-[1px]" type='file' placeholder='' required />
              <label htmlFor="">Max. file size: 20 MB.</label>
            </div>

            <div className="flex flex-col mt-5">
              <input className="p-[10px] border-[1px] bg-blue text-white" type='submit' value="Submit" />
            </div>

          </form>
        </div>
      </div>

    </section>
  );
};

export default JobListSection;
