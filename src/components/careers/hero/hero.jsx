import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });
const isMatch = true;

export default function CareersHero(block) {
  return (
    <section className={isMatch ? " bg-white md:pt-20 text-blue lg:pt-[120px]" : "bg-blue text-white py-20 md:py-[80px] lg:pt-[120px] lg:pb-6"} suppressHydrationWarning style={{overflow:'hidden'}}>
      <div className="max-container flex flex-col lg:flex-row items-start justify-between gap-x-5 gap-y-10">
        <div className="text-center lg:text-left w-full lg:w-1/2 lg:min-w-1/2">
          {block.title && (
            <h1 className="font-[500] mt-28">{block.title}</h1>
          )}
          {block.content && (
            <p className="p4 leading-7 md:leading-8 font-medium max-w-[400px] my-5 md:my-10 mx-auto lg:mx-0 whitespace-pre-line">
              {block.content.trim()}
            </p>
          )}
          {block.content2 && (
            <p className="p4 leading-7 md:leading-8 font-medium max-w-[400px] my-5 mx-auto lg:mx-0 whitespace-pre-line text-common-clr">
              {block.content2.trim()}
            </p>
          )}
          {block.button && (
            <button className="bg-green hover:bg-highlight-green shadow-[0px 0px 10px 0px rgba(1, 118, 160, 0.80)] p3 leading-[18px] btn1 mx-auto lg:mx-0">
              {block.button}
            </button>
          )}
        </div>
        {block.image && (
          <div className="w-full lg:w-1/2 lg:min-w-1/2 relative z-[1] mt-5">
            <img
              src={block.image.src}
              alt={block.image.alt || "image"}
              width={block.image.width}
              height={block.image.height}
              className={`relative z-[1] w-full ${block.image.isRounded ? 'rounded-full object-cover' : 'rounded-none object-contain'}`}
            />
            {block.yellowCircleImage && (
              <img
                src={block.yellowCircleImage.src}
                alt={block.yellowCircleImage.alt || "image"}
                width={block.yellowCircleImage.width}
                height={block.yellowCircleImage.height}
                className="absolute bottom-16 right-[-30px] xl:-right-20 hidden lg:block"
              />
            )}
          </div>
        )}
      </div>
      <div className="relative h-[250px] -mt-[130px]">
        <div className="absolute left-1/2 -translate-x-1/2 w-full bottom-[-5px] hidden lg:block">
          <svg className="w-screen h-[445px]" viewBox="0 0 1440 360" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1033.77 0.777344C725.72 0.777344 674.08 190.046 373.99 197.96C205.43 197.96 117.5 162.062 0 134.344V359.03H1440V172.431C1294.84 98.5833 1165.95 0.777344 1033.77 0.777344Z" fill="#eefcff"/>
          </svg>
        </div>
      </div>
    </section>

  );
}
