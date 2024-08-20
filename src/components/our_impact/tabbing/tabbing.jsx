import MarkdownIt from "markdown-it";
import React, { useState } from 'react';
const md = new MarkdownIt({ html: true });
const isMatch = true;

export default function OurImpactTabbing(block) {

  const [activeTab, setActiveTab] = useState(0);
  // Handler for tab click
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <section className="tabbing-section" suppressHydrationWarning>
      <div id="Strength_Stability" className="bg-white py-[50px] lg:pt-[80px] xl:pt-[100px] xxl:pt-[170px] lg:pb-[250px] xl:pb-[300px] xxl:pb-[350px]">
        <div className="max-container">
          {
            block.title && (
              <h2 className="font-medium text-blue text-center mb-[80px]">{block.title}</h2>
            )
          }
          <div className="tabs flex flex-wrap justify-center gap-[25px] mb-[30px] lg:mb-[50px] xl:mb-[80px]">
            {block.tabs.map((tab, index) => (
              <button
                key={'btn-tabbing-' + index}
                className={`tab-button ${index === activeTab ? 'active' : ''} cursor-pointer p2 font-medium text-blue hover:text-green py-[15px] min-w-[300px] lg:min-w-[320px] border-2 border-sky-blue rounded-[4px]`}
                data-tab={`tab-${index}`}
                type="button"
                onClick={() => handleTabClick(index)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="tab-content">
            {block.tabs.map((tab, index) => (
              <div
                key={'tab-content-' + index}
                className={`tab-panel ${index === activeTab ? 'active' : ''}`}
                id={`tab-${index}`}
              >
                <div className="flex flex-wrap gap-[30px] xl:gap-[50px] xxl:gap-[85px] lg:flex-row-reverse">
                  <div className="w-full lg:w-[calc(100%-485px)]">
                    <h4 className="h4 font-medium text-blue mb-[23px]">{tab.label}</h4>
                    <p className="p2 text-[#003041]">{tab.content}</p>
                    {
                      tab?.points && (
                        <div className="flex flex-wrap gap-[10px] p1 font-medium text-[#003041] mt-[30px]">
                          {
                            tab?.points?.map((point, index) => (
                              <div className="flex gap-[8px] items-start w-full sm:w-[calc(50%-10px)]" key={'tc-p-' + index}>
                                <i className="fa-solid fa-circle-check h-[28px] md:h-[40px] text-med-blue mt-[4px] md:mt-[6px]" aria-hidden="true" />
                                <p>{point}</p>
                              </div>
                            ))
                          }
                        </div>
                      )
                    }
                    <p className="p2 text-[#003041] mt-[25px]">{tab.content2}</p>
                  </div>
                  <div className="w-full lg:w-[400px]">
                    {tab.image && (
                      <img
                        src={tab.image.src}
                        alt={tab.image.alt}
                        width={tab.image.width}
                        height={tab.image.height}
                        className="rounded-full sm:w-[380px]"
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section >
  );
}