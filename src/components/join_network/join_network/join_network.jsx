import React, { useState } from 'react';
import MarkdownIt from "markdown-it";

const JoinNetworkSection = (block) => {
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
      <div className="max-container">
      <div className="faq-section text-left">
          {block.title && (
            <h2 className="text-blue font-medium">
              {block.title}
            </h2>
          )}
          {block.description && (
            <p className="text-blue">
              {block.description}
            </p>
          )}
        </div>        
        <div className='w-full'>
          <form action="" className='p-[50px]'>
            <div className="flex flex-col text-center">
              <label htmlFor="">Health Center or Practice Name(Required)</label>
              <input className="p-[10px] border-[1px]" type='text' placeholder='' required />
            </div>
            <div className="flex flex-col mt-5">
              <label className="mb-2 font-semibold" htmlFor="">Name of Person Submitting this Request(Required)</label>
              <div className="flex flex-row">
                <div className="flex flex-col w-full">
                  <label htmlFor="">First Name</label>
                  <input className="p-[10px] border-[1px]" type='text' placeholder='' required />
                </div>
                <div className="flex flex-col w-full ml-[20px]">
                  <label htmlFor="">Last Name</label>
                  <input className="p-[10px] border-[1px]" type='text' placeholder='' required />
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-5">
              <label htmlFor="">Your Title(Required)</label>
              <input className="p-[10px] border-[1px]" type='text' placeholder='' required />
            </div>
            <div className="flex flex-col mt-5">
              <label className="mb-2 font-semibold" htmlFor="">Your Email Address(Required)</label>
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
              <label htmlFor="">Your Phone Number(Required)</label>
              <input className="p-[10px] border-[1px]" type='text' placeholder='' required />
            </div>
            <div className="flex flex-col mt-5">
              <label htmlFor="">Questions or Comments</label>
              <textarea className="p-[10px] border-[1px]" rows="5">

              </textarea>
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

export default JoinNetworkSection;
