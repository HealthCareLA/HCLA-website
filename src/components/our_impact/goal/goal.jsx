import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });
const isMatch = true;

export default function OurImpactGoal(block) {
  return (
    <section className="" suppressHydrationWarning>
      <div
        className="bg-trans-blue relative py-[50px] pb-[50px] lg:pb-20 xl:pb-[100px] xxl:pb-[200px]"
      >
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
            background: '#FFF',
            objectFit: 'cover',
            objectPosition: '0px 5px'
          }}
        />
        <div className="max-container relative z-[1]">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-[50px]">
            <div className="w-full lg:max-w-1/2 text-center lg:text-left">
              <h3 className={`font-medium text-blue mb-[35px] md:mb-[54px] ${block?.isLargeTitle ? 'text-[28px] md:text-[42px] xl:text-[52px] leading-[1.2]' : ''}`}>
                {block?.title}
              </h3>
              {
                block.description && (
                  <p className="p2 text-[#003041]">{block.description}</p>
                )
              }
              {
                block.points && (
                  <div className="flex flex-col gap-[30px] text-dark-blue p2 my-10">
                    {
                      block.points?.map((point, index) => (
                        <div key={'ip-goal-' + index} className="flex gap-2">
                          <i className="fa-solid fa-circle-check h-7 md:h-10 text-med-blue mt-[6px] md:mt-2" aria-hidden="true" />
                          <p className="text-[#003041] text-left">{point}</p>
                        </div>
                      ))
                    }
                  </div>
                )
              }
              {
                block?.descriptionData?.map((item, i) => {
                  return (
                    <>
                      <img
                        src={item?.image?.src}
                        alt={item?.image?.alt}
                        width={item?.image?.width}
                        height={item?.image?.height}
                        className="mx-auto lg:mx-0"
                      />
                      <p
                        className={`text-dark-blue p1 mt-3 whitespace-pre-line ${i != block?.descriptionData?.length - 1
                          ? "mb-[25px] md:mb-[35px]"
                          : ""
                          }`}
                      >
                        {item?.boldText && <b>Our Mission:</b>} {item?.description}
                      </p>
                    </>
                  );
                })
              }
              {
                block.description2 && (
                  <p className="p2 text-[#003041]">{block.description2}</p>
                )
              }
              {
                block.learnMoreText && (
                  <p className="mt-[50px] p2 max-w-[575px] mx-auto font-medium text-blue whitespace-pre-line">
                    <a className="cursor-pointer" href="/contact" target="_self">
                      {block?.learnMoreText}
                      <i className="fa-solid fa-circle-chevron-right text-green ml-1" aria-hidden="true" ></i>
                    </a>
                  </p>
                )
              }
            </div>
            <div className="w-full lg:max-w-1/2 flex justify-center">
              <img
                src={block?.image?.src}
                alt={block?.image?.alt}
                width={block?.image?.width}
                height={block?.image?.height}
                className="w-[455px]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>

  );
}
