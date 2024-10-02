import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });
const isMatch = true;

export default function CareersHero(block) {
  return (
    <section className={isMatch ? " bg-white text-blue py-[80px] md:py-[80px] lg:pt-[120px] lg:pb-[25px]" : "bg-blue text-white py-[80px] md:py-[80px] lg:pt-[120px] lg:pb-[25px]"} suppressHydrationWarning style={{overflow:'hidden'}}>
      <div className="max-container flex flex-col lg:flex-row items-start justify-between gap-x-5 gap-y-10">
        <div className="text-center lg:text-left w-full lg:w-1/2 lg:min-w-1/2">
          {block.title && (
            <h1 className="font-[500] mt-[90px]">{block.title}</h1>
          )}
          {block.content && (
            <p className="p4 leading-[28px] md:leading-[34px] font-[500] max-w-[400px] my-[20px] md:my-[40px] mx-auto lg:mx-0 whitespace-pre-line">
              {block.content.trim()}
            </p>
          )}
          {block.content2 && (
            <p className="p4 leading-[28px] md:leading-[34px] font-medium max-w-[400px] my-[20px] mx-auto lg:mx-0 whitespace-pre-line text-common-clr">
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
          <div className="w-full lg:w-1/2 lg:min-w-1/2 relative z-[1] mt-[30px]">
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
                className="absolute bottom-[64px] right-[-30px] xl:right-[-81px] hidden lg:block"
              />
            )}
          </div>
        )}
      </div>
      <div className="bg-white relative" style={{ height: '250px', marginTop: '-125px'}}>
        <img
          src="/images/quick-links-shape.svg"
          alt="shape"
          className="absolute left-1/2 -translate-x-1/2 w-full quick-links-shape hidden lg:block"
        />
      </div>
    </section>

  );
}
