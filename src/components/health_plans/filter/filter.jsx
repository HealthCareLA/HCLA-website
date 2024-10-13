import React, { useState, useEffect } from 'react';
import axios from 'axios'; // For making HTTP requests

const HealthPlansFilter = (block) => {

  return (
    <section suppressHydrationWarning>
      <div className="bg-trans-blue relative py-[50px] md:py-[120px] lg:pt-0 min-h-[550px]" suppressHydrationWarning>
        <div className="absolute left-0 w-full top-[-164px] hidden lg:block">
          <svg className='w-full h-full' width="1440" height="446" viewBox="0 0 1440 446" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1440.92 122.92C1217.28 43.48 974.816 0 721.546 0C468.276 0 224.906 43.65 0.915527 123.37V445.09H1440.92V122.92Z" fill="#eefcff"/>
          </svg>
        </div>
        <div className="max-container flex flex-col justify-between gap-x-5 gap-y-10 relative lg:pt-[50px] -top-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[30px] lg:gap-y-[55px] gap-y-[30px]">
            {block.plans.map((plan, index) => (
              <div key={'health_plans_item_list_' + index} className="bg-white rounded-[18px] lg:py-[30px] py-[30px] xl:px-20 px-[30px] shadow-[0px_0px_10px_0px_#0183B31A] text-center text-common-clr">
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
