import React, { useState, useEffect } from 'react';
import axios from 'axios'; // For making HTTP requests

const PostDischargeClinicsFilter = (block) => {

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
        <p className="text-common-clr note p3">{block.titleNote}</p>
        <div className="max-container flex flex-col items-start justify-between gap-x-5 gap-y-10 relative">
          {block.items.map((item, index) => (
            <div key={'ch_' + index} className="w-full flex flex-wrap bg-white rounded-[18px] mb-[40px] overflow-hidden p-[30px] lg:p-[40px] shadow-[0px_0px_10px_0px_#0183B31A]">
              <div className="mx-auto lg:w-[160px] mb-[20px] lg:mb-0">
                <img
                  src={item.image.src}
                  alt={item.image.alt}
                  width={item.image.width}
                  height={item.image.height}
                  className="w-full h-[160px] rounded-full"
                />
              </div>
              <div className="w-full lg:w-[calc(100%-160px)] lg:pl-[40px] text-center lg:text-left">
                <h4 className="text-common-clr font-medium">{item.clinicName}</h4>
                <ul>
                  <li className="flex flex-col md:flex-row p2 md:gap-[12px] justify-center lg:justify-start items-center text-common-clr mb-[3px] last:mb-0">
                    {item.address && (
                      <span>{item.address}</span>
                    )}
                  </li>
                  <li className="flex flex-col md:flex-row p2 md:gap-[12px] justify-center lg:justify-start items-center text-common-clr mb-[3px] last:mb-0">
                    <strong>Phone:</strong>
                    {item.phone && (
                      <span>{item.phone}</span>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostDischargeClinicsFilter;