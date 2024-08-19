import React, { useState, useEffect } from 'react';
import axios from 'axios'; // For making HTTP requests

const HealthPlansFilter = (block) => {

  return (
    <section suppressHydrationWarning>
      <div className="bg-trans-blue relative py-[50px] md:py-[120px] lg:pt-0 min-h-[550px] lg:mt-14" suppressHydrationWarning>
        <img
          className="hidden lg:block"
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
        <div className="max-container flex flex-col justify-between gap-x-5 gap-y-10 relative lg:pt-[50px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[30px] lg:gap-y-[55px] gap-y-[30px]">
            {block.plans.map((plan, index) => (
              <div key={'health_plans_item_list_' + index} className="bg-white rounded-[18px] lg:py-[30px] py-[30px] xl:px-[80px] px-[30px] shadow-[0px_0px_10px_0px_#0183B31A] text-center text-common-clr">
                <img src={plan.logo} alt={plan.name} className="mx-auto mb-[10px]" />
                <h3 className="p4 font-medium leading-snug mb-[10px]">{plan.name}</h3>
                <p className="p2 mb-[10px]">{plan.description}</p>
                <a href={`tel:${plan.phone}`} className="hover:text-blue p2 mb-[10px]">{plan.phone}</a><br />
                <a href={plan.website} target="_blank" rel="noopener noreferrer" className="text-green hover:text-blue p2">View website</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthPlansFilter;
