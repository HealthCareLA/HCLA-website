import React, { useState, useEffect } from 'react';
import axios from 'axios'; // For making HTTP requests

const ContractedHospitalsFilter = (block) => {

  return (
    <section>
      <div className="bg-trans-blue relative py-[50px] md:py-[120px] lg:pt-0 min-h-[550px] mt-14" suppressHydrationWarning>
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
        <div className="max-container flex flex-col items-start justify-between gap-x-5 gap-y-10 relative pt-16">
          {block.items.map((item, index) => (
            <div key={'ch_' + index} className="w-full flex flex-wrap bg-white rounded-[18px] mb-10 overflow-hidden p-[30px] lg:p-10 shadow-[0px_0px_10px_0px_#0183B31A]">
              <div className="mx-auto lg:w-40 mb-5 lg:mb-0">
                <img
                  src={item.image.src}
                  alt={item.image.alt}
                  width={item.image.width}
                  height={item.image.height}
                  className="w-full h-40 rounded-full"
                />
              </div>
              <div className="w-full lg:w-[calc(100%-160px)] lg:pl-10 text-center lg:text-left">
                <h4 className="text-common-clr font-medium">{item.hospitalName}</h4>
                <ul>
                  {item.hospitals.map((subHospital, index) => (
                    <li key={'ch_2_' + index} className="flex flex-col md:flex-row p2 md:gap-3 justify-center lg:justify-start items-center text-common-clr mb-[3px] last:mb-0">
                      {subHospital.name && (
                        <span>{subHospital.name}</span>
                      )}
                      <a
                        href={subHospital.link}
                        target={subHospital.target}
                        className="text-green hover:text-blue"
                      >
                        {subHospital.linkText}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          <p className="text-common-clr note p3">{block.titleNote}</p>
        </div>
      </div>
    </section>
  );
};

export default ContractedHospitalsFilter;
