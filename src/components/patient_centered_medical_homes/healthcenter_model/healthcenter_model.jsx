import React, { useState, useEffect } from 'react';
import axios from 'axios'; // For making HTTP requests

const PatientHealthCenterModel = (block) => {

  return (
    <section>
      <div className="bg-trans-blue relative py-[50px] md:py-[120px] lg:pt-0 min-h-[550px]"suppressHydrationWarning>
        <div className="absolute left-0 w-full top-[-164px] hidden lg:block">
          <svg className='w-full h-[446px]' viewBox="0 0 1440 446" preserveAspectRatio='none' fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1440.92 122.92C1217.28 43.48 974.816 0 721.546 0C468.276 0 224.906 43.65 0.915527 123.37V445.09H1440.92V122.92Z" fill="#eefcff"/>
          </svg>
        </div>
        <div className="max-container flex flex-col items-start justify-between gap-x-5 gap-y-10 relative">
          <p className="p2" dangerouslySetInnerHTML={{ __html: block.titleNote }}>{ }</p>

          <div>
            {
              block?.items1 && (
                <div className="flex flex-wrap gap-[10px] p1 font-medium text-[#003041] mt-[30px]">
                  <div className="flex flex-col gap-2 items-start w-full sm:w-[calc(50%-10px)]">
                    {
                      block.items1.map((point, index) => (
                        <div className='flex flex-row' key={'items1-' + index}>
                          <i className="fa-solid fa-circle-check h-7 md:h-10 text-med-blue mt-1 md:mt-[6px]" aria-hidden="true" />
                          <div className='ml-[10px] mb-[10px] pr-5' style={{ display: 'flex', 'flexDirection': 'column' }}>
                            <p>{point.healthCenterName}</p>
                            <div style={{ fontWeight: 300 }}>{point.address}</div>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                  <div className="flex flex-col gap-2 items-start w-full sm:w-[calc(50%-10px)]">
                    {
                      block.items2.map((point, index) => (
                        <div className='flex flex-row' key={'items2-' + index}>
                          <i className="fa-solid fa-circle-check h-7 md:h-10 text-med-blue mt-1 md:mt-[6px]" aria-hidden="true" />
                          <div className='ml-[10px] mb-[10px] pr-5' style={{ display: 'flex', 'flexDirection': 'column' }}>
                            <p>{point.healthCenterName}</p>
                            <div style={{ fontWeight: 300 }}>{point.address}</div>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
              )
            }
          </div>

        </div>
      </div>
    </section>
  );
};

export default PatientHealthCenterModel;
