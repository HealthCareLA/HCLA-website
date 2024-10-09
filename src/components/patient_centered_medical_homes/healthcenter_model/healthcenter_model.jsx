import React, { useState, useEffect } from 'react';
import axios from 'axios'; // For making HTTP requests

const PatientHealthCenterModel = (block) => {

  return (
    <section>
      <div className="bg-trans-blue relative py-[50px] md:py-[120px] lg:pt-0 min-h-[550px]" style={{ marginTop: '55px' }} suppressHydrationWarning>
        <img
          src="/images/circle-shape-top.svg"
          alt="circle-shape"
          // className="absolute left-1/2 -translate-x-1/2 w-full z-[0] top-[-80px] hidden lg:block"
          style={{
            position: 'absolute',
            top: '-100px',
            width: '100%',
            height: 'auto',
            background: '#0183B3',
            objectFit: 'cover',
            objectPosition: '0px 5px'
          }}
        />
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
