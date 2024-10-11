import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });
const isMatch = true;

export default function OurImpactOurValueData({ title, isLargeTitle, points }) {
  return (
    <section className="bg-trans-blue pt-20 pb-32" suppressHydrationWarning>
      <div className="max-container relative z-[1]">
        {title && (
          <h2
            className={`text-center text-blue font-medium mb-[30px] xl:mb-20 ${isLargeTitle ? '' : 'text-[32px] lg:text-[42px]'
              }`}
          >
            {title}
          </h2>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px] lg:gap-10 xl:gap-[70px]">
          {points?.map((point, index) => (
            <div key={index} className="text-common-clr">
              {point.icon && (
                <div
                  className={`mb-5 ${point.icon.hasBackground
                    ? 'mb-[10px] bg-[#EEFCFF] w-[90px] h-[90px] p-[15px] rounded-full flex justify-center items-center'
                    : ''
                    }`}
                >
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
                <h3 className="font-medium mb-[10px] leading-normal text-[22px] lg:text-2xl xl:text-[28px] text-blue">
                  {point.title}
                </h3>
              )}
              <p className="p2" dangerouslySetInnerHTML={{ __html: point.description }}>{ }</p>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
}
