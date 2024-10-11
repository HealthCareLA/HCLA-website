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
      <div className="bg-white relative py-[40px]">
        <img
          src="/images/quick-links-shape.png"
          alt="shape"
          className="absolute left-[0px] top-[-200px] w-screen h-[350px] hidden lg:block" 
        />
      </div>
    </section>

  );
}
