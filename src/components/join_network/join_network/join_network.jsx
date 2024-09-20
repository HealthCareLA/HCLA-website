import React, { useState } from 'react';
import MarkdownIt from "markdown-it";

const JoinNetworkSection = (block) => {
  const [expandedFaqIndex, setExpandedFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaqIndex(expandedFaqIndex === index ? null : index);
  };
  return (
    <section className="pt-[50px] md:pt-[80px] lg:pt-[100px] pb-[50px] md:pb-[80px] lg:pb-[150px] bg-trans-blue"
      suppressHydrationWarning style={{ scrollMarginTop: '100px' }}>
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
            <div className="flex flex-col">
              <label htmlFor="">Health Center or Practice Name(Required)</label>
              <input className="p-[10px] border-[1px]" type='text' placeholder='' required />
            </div>
            <div className="flex flex-col mt-[20px]">
              <label htmlFor="">Name of Person Submitting this Request(Required)</label>
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
            <div className="flex flex-col mt-[20px]">
              <label htmlFor="">Your Title(Required)</label>
              <input className="p-[10px] border-[1px]" type='text' placeholder='' required />
            </div>
            <div className="flex flex-col mt-[20px]">
              <label htmlFor="">Your Email Address(Required)</label>
              <div className="flex flex-row">
                <div className="flex flex-col w-full">
                  <label htmlFor="">Enter Email</label>
                  <input className="p-[10px] border-[1px]" type='text' placeholder='' required />
                </div>
                <div className="flex flex-col w-full ml-[20px]">
                  <label htmlFor="">Confirm Email</label>
                  <input className="p-[10px] border-[1px]" type='text' placeholder='' required />
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-[20px]">
              <label htmlFor="">Your Phone Number(Required)</label>
              <input className="p-[10px] border-[1px]" type='text' placeholder='' required />
            </div>
            <div className="flex flex-col mt-[20px]">
              <label htmlFor="">Quesioins or Comments</label>
              <textarea className="p-[10px] border-[1px]" rows="5">

              </textarea>
            </div>

            <div className="flex flex-col mt-[20px]">
              <input className="p-[10px] border-[1px] bg-blue" type='submit' value="Submit" />
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default JoinNetworkSection;
