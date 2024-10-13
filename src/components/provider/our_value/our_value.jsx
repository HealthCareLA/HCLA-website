import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });
const isMatch = true;

export default function ProviderOurValue(block) {
  return (
    <section className="" suppressHydrationWarning>
      <div className="bg-white relative py-[50px] pb-[50px] lg:pb-20 xl:pb-[100px] xxl:pb-[200px]">
        <div className="absolute left-1/2 -translate-x-1/2 w-full top-[-165px] hidden lg:block">
          <svg className="w-full h-full" width="1440" height="447" viewBox="0 0 1440 447" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1440 123.895C1216.36 44.4551 973.9 0.975098 720.63 0.975098C467.36 0.975098 223.99 44.6251 0 124.345V446.065H1440V123.895Z" fill="white"/>
          </svg>
        </div>
        <div className="max-container relative z-[1] pt-1 lg:-top-16">
          {block?.title && (
            <h2 className={`text-center text-blue font-medium mb-[30px] xl:mb-20 ${block?.isLargeTitle ? '' : 'text-[32px] lg:text-[42px]'}`}>
              {block.title}
            </h2>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px] lg:gap-10 xl:gap-[70px]">
            {block?.points?.map((point, index) => (
              <div className="text-common-clr" key={'m1-point-' + index}>
                {point.icon && (
                  <div className={`mb-5 ${point.icon.hasBackground ? 'mb-[10px] bg-[#EEFCFF] w-[90px] h-[90px] p-[15px] rounded-full flex justify-center items-center' : ''}`}>
                    <img
                      src={point.icon.src}
                      alt={point.icon.alt}
                      width={point.icon.width}
                      height={point.icon.height}
                      className={point.icon.hasBackground ? 'w-auto h-10' : ''}
                    />
                  </div>
                )}
                {point.title && (
                  <h3 className="font-medium mb-[10px] leading-normal text-[22px] lg:text-2xl xl:text-[28px] text-blue">{point.title}</h3>
                )}
                <p className="p2" dangerouslySetInnerHTML={{ __html: point.description }}>{ }</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>

  );
}
