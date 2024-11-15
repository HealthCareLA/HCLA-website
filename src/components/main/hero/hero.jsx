import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function MainHero(block) {


  return (

    <section className="bg-blue text-white py-20 md:py-20 lg:pt-[120px] lg:pb-[0px]" suppressHydrationWarning>
      <div className="max-container flex flex-col lg:flex-row items-start justify-between gap-x-5 gap-y-10">
        <div className="text-center lg:text-left w-full lg:w-1/2 lg:min-w-1/2">
          <h1 className="font-medium mt-24">
            {block?.title}
          </h1>
          <p
            className="p4 leading-7 md:leading-[34px] font-medium max-w-[400px] my-[20px] md:my-[30px] mx-auto lg:mx-0 whitespace-pre-line"
          >
            {block?.description?.trim()}
          </p>
          {
            block?.button?.text && (
              <a href={block?.button?.link}>
                <button className="relative z-[1] bg-green hover:bg-highlight-green shadow-[0px 0px 10px 0px rgba(1, 118, 160, 0.80)] p3 leading-[18px] btn1 mx-auto lg:mx-0 cursor-pointer">
                  {block?.button?.text}
                </button>
              </a>
            )
          }
        </div>
        <div className="w-full lg:w-1/2 lg:min-w-1/2 relative z-[1] mt-5">
          <img
            src={block?.image?.src}
            alt={block?.image?.alt || "image"}
            width={block?.image?.width}
            height={block?.image?.height}
            className="rounded-full object-cover relative z-[1] w-full"
          />
          <img
            src={block?.yellowCircleImage?.src}
            alt={block?.yellowCircleImage?.alt || "image"}
            width={block?.yellowCircleImage?.width}
            height={block?.yellowCircleImage?.height}
            className="absolute bottom-16 right-[-81px] hidden lg:block"
          />
        </div>
      </div>
      <div className="relative h-[250px] -mt-[130px]">
        <div className="absolute left-1/2 -translate-x-1/2 w-full bottom-[-5px] hidden lg:block">
          <svg className="w-full h-[445px]" viewBox="0 0 1440 360" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1033.77 0.777344C725.72 0.777344 674.08 190.046 373.99 197.96C205.43 197.96 117.5 162.062 0 134.344V359.03H1440V172.431C1294.84 98.5833 1165.95 0.777344 1033.77 0.777344Z" fill="rgb(225 249 255)"/>
          </svg>
        </div>
      </div>
    </section>

  );
}
