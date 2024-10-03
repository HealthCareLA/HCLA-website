import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function MainHero(block) {


  return (

    <section
      className="bg-blue text-white py-[80px] md:py-[80px] lg:pt-[120px] lg:pb-[25px]"
      suppressHydrationWarning
    >
      <div
        className="max-container flex flex-col lg:flex-row items-start justify-between gap-x-5 gap-y-10"
      >
        <div className="text-center lg:text-left w-full lg:w-1/2 lg:min-w-1/2">
          <h1 className="font-[500] mt-[40px]">
            {block?.title}
          </h1>
          <p
            className="p4 leading-[28px] md:leading-[34px] font-[500] max-w-[400px] my-[20px] md:my-[40px] mx-auto lg:mx-0 whitespace-pre-line"
          >
            {block?.description?.trim()}
          </p>
          {
            block?.button?.text && (
              <a href={block?.button?.link}>
                <button className="bg-green hover:bg-highlight-green shadow-[0px 0px 10px 0px rgba(1, 118, 160, 0.80)] p3 leading-[18px] btn1 mx-auto lg:mx-0">
                  {block?.button?.text}
                </button>
              </a>
            )
          }
        </div>
        <div className="w-full lg:w-1/2 lg:min-w-1/2 relative z-[1]">
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
            className="absolute bottom-[64px] right-[-81px] hidden lg:block"
          />
        </div>
      </div>
    </section>

  );
}
