import MarkdownIt from "markdown-it";

export default function OurImpactHealthcare(block) {
  const positions = [
    'bottom-[-40px] right-[180px] md:right-[80px]',
    'bottom-[-80px] left-[120px] md:left-[80px]',
    'bottom-[-40px] left-[160px] md:left-[80px]'
  ];
  return (
    <section id="Quality_Care_Network" className="relative bg-trans-blue w-full relative z-1 pt-[50px] lg:pt-[85px] pb-[50px] lg:pb-[200px] xl:pb-[350px]" suppressHydrationWarning  style={{ scrollMarginTop: '100px' }}>
      <div className="max-container">
        <h2 className="text-center font-medium text-blue max-w-[980px] mx-auto mb-[50px] xl:mb-20 xxl:mb-[110px]">
          {block.title}
        </h2>
        <div className="flex flex-wrap">
          {block.sections.map((section, index) => (
            <div className={`flex flex-col justify-between gap-24 items-start w-full mb-[50px] md:mb-[120px] last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} mb-12`}>
              <div className="relative w-full mb-[50px] md:mb-0 md:w-1/2 lg:w-1/2 flex justify-start">
                <img
                  src={section.image.src}
                  alt={section.image.alt}
                  className={`w-full object-cover ${section.image.isSquare ? 'h-[350px] md:h-[400px] w-full mx-auto md:mx-[none]' : 'h-auto max-w-[450px] mx-auto'} ${section.image.isRound ? 'rounded-full' : 'rounded-[40px]'}`}
                />
                <img
                  src={section?.shapIcon?.src}
                  alt={section?.shapIcon?.alt}
                  width={section?.shapIcon?.width}
                  height={section?.shapIcon?.height}
                  className={`absolute ${positions[index % positions.length]} w-[130px] md:w-[200px]`}
                />
              </div>
              <div className={`relative flex flex-col md:max-w-max w-full md:w-1/2 lg:w-1/2 text-blue mb-[30px] xl:mb-0 ${index % 2 === 0 ? 'lg:items-end' : 'lg:items-start'}`}>
                {section.title && (
                  <h3 className="font-medium mb-[10px] w-full ">{section.title}</h3>
                )
                }
                {section.description && (
                  <p className="p2 text-[#003041] w-full whitespace-pre-line">{section.description}</p>
                )
                }
                {
                  section.pointsTitle && (
                    <h4 className="p2 font-medium text-[#003041] w-full mt-[30px] mb-5">{section.pointsTitle}</h4>
                  )
                }
                {
                  section.points && (
                    <div className="flex flex-wrap w-full gap-[10px] p1 font-medium text-[#003041]">
                      {
                        section.points.map((point) => (
                          <div className="flex gap-2 items-start w-full">
                            <i className="fa-solid fa-circle-check h-7 md:h-[40px] text-med-blue mt-1 md:mt-[6px]" />
                            <p>{point}</p>
                          </div>
                        ))
                      }
                    </div>
                  )
                }
                {
                  section.link.text && (
                    <p className="mt-[10px] sm:mt-5 xl:mt-[30px] p2 font-medium text-blue whitespace-pre-line w-full max-w-[550px]">
                      {section.link.text}
                      <i className="fa-solid fa-circle-chevron-right text-green ml-1"></i>
                    </p>
                  )
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
