import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });
const isMatch = true;

export default function ProviderContact(block) {
  return (
    <section className="mb-[150px]" suppressHydrationWarning>
      <div className="max-container relative z-[1]">
        <div className="bg-[#EEFCFF] p-[30px] lg:py-[60px] lg:px-[70px] rounded-[18px] flex items-center justify-center">
          <div className="flex md:items-center flex-col md:flex-row gap-[20px] md:gap-0">
            {block.icon && (
              <div>
                <div className="w-[80px] md:w-[120px] xl:w-[170px] h-[80px] md:h-[120px] xl:h-[170px] rounded-full p-[15px] md:p-[25px] xl:p-[40px] flex items-center justify-center relative before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-blue before:rounded-full before:opacity-[6%]">
                  <img
                    src={block.icon.src}
                    alt={block.icon.alt}
                    width={block.icon.width}
                    height={block.icon.height}
                    className="w-full z-10"
                  />
                </div>
              </div>
            )}
            <div className="w-full md:w-calc(100%-170px) pl-0 md:pl-[20px] lg:pl-[40px] xl:pl-[80px]">
              <div>
                <h4 className="text-[#003041] text-[22px] lg:text-[24px] xl:text-[28px]">{block.text}</h4>
              </div>
              <div className="flex-shrink-0">
                <a href={block.button.link} className="mt-[20px] bg-green hover:bg-highlight-green text-white p3 btn1 !inline-block">
                  {block.button.text}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
