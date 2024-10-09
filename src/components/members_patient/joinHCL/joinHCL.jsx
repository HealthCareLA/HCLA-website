import MarkdownIt from "markdown-it";

export default function MemberPatientJoinHCL(block) {
  const positions = [
    'bottom-[-40px] right-[180px] md:right-[80px]',
    'bottom-[-80px] left-[120px] md:left-[80px]',
    'bottom-[-40px] left-[160px] md:left-[80px]'
  ];
  return (
    <section id="How_to_Enroll" className="relative z-1 pt-[50px]" suppressHydrationWarning style={{ scrollMarginTop: '100px' }}>
      <div className="max-container">
        <div className="join-hcla-section" >
          <div className="text-center mb-[30px] md:mb-[60px]">
            {
              block.title && (
                <h2 className="text-blue font-medium mb-5 md:mb-[30px] lg:mb-[50px]">{block.title}</h2>
              )
            }
            {
              block.subtitle && (
                <p className="p4 text-common-clr max-w-[520px] mx-auto font-medium">{block.subtitle}</p>
              )
            }
          </div>

          <div className="steps-grid grid grid-cols-1 lg:grid-cols-3 gap-[30px] text-center mb-[50px]">
            {block.steps.map((step) => (
              <div className="step bg-trans-blue p-[30px] md:px-[35px] md:pt-[30px] md:pb-[50px] rounded-[18px]">
                <h5 className="p5 step-number bg-green text-white w-[45px] sm:w-[55px] h-[45px] sm:h-[55px] rounded-full flex items-center justify-center mx-auto font-medium">
                  {step.number}
                </h5>
                <p className="p4 font-medium mt-[25px] text-common-clr">{step.title}</p>
                {
                  step.linkText && (
                    <a href={step.linkUrl} className="p2 text-blue hover:text-green mt-[25px] inline-block">
                      {step.linkText} <i className="fa-solid fa-circle-chevron-right ml-1 text-green"></i>
                    </a>
                  )
                }
              </div>
            ))}
          </div>

          <div className="contact-info text-center bg-trans-blue py-10 px-5] rounded-[18px]">
            {
              block.contactInfo.additionalTextTop && (
                <p className="p4 text-common-clr font-medium">{block.contactInfo.additionalTextTop}</p>
              )
            }
            {
              block.contactInfo.phone && (
                <a href={`tel:${block.contactInfo.phoneUrl}`} className="p4 font-medium text-blue text-2xl mt-[10px] inline-block hover:text-green">
                  {block.contactInfo.phone}
                </a>
              )
            }
            {
              block.contactInfo.hours && (
                <p className="p4 font-medium text-blue mt-[10px]">{block.contactInfo.hours}</p>
              )
            }
            {
              block.contactInfo.additionalTextBottom && (
                <p className="mt-[10px] p4 text-common-clr font-medium">{block.contactInfo.additionalTextBottom}</p>
              )
            }
          </div>
        </div>
      </div>
    </section>
  );
}
