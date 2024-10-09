import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });
const isMatch = true;

export default function ProviderOurValue(block) {
  return (
    <section className="" suppressHydrationWarning>
      <div
        className="bg-white relative py-[50px] pb-[50px] lg:pb-20 xl:pb-[100px] xxl:pb-[200px]"
      >
        <img
          className="hidden lg:block"
          src="/images/circle-shape-top-2.svg"
          alt="circle-shape"
          // className="absolute left-1/2 -translate-x-1/2 w-full z-[0] top-[-80px] hidden lg:block"
          style={{
            position: 'absolute',
            top: '-100px',
            width: '100%',
            height: 'auto',
            background: '#EEFCFF',
            objectFit: 'cover',
            objectPosition: '0px 5px'
          }}
        />
        <div className="max-container relative z-[1]" style={{ paddingTop: '50px' }}>
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
