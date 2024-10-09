import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });
const isMatch = true;

export default function OurImpactWaysServe({
  title,
  description,
  points,
  button,
  image,
  greenCircleImage,
}) {
  return (
    <section className="" suppressHydrationWarning
      id="Ways_We_Serve">
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
            top: '-170px',
            width: '100%',
            height: 'auto',
            background: 'transparent',
            objectFit: 'cover',
            objectPosition: '0px 5px'
          }}
        />
        <div className="max-container relative z-[1]" style={{ paddingTop: '50px' }}>
          <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-[50px] xxl:gap-[100px]">
            <div className="w-full lg:max-w-1/2 text-center lg:text-left mb-[30px] lg:mb-0">
              {title && (
                <h2 className="font-medium text-blue mb-5 lg:mb-10">
                  {title}
                </h2>
              )}
              {description && (
                <p className="max-w-full lg:max-w-[480px] p2 whitespace-pre-line text-common-clr" dangerouslySetInnerHTML={{ __html: description }}>
                </p>
              )}
              <div className="flex flex-col gap-2 text-dark-blue p1 my-[30px]">
                {points?.map((point, index) => (
                  <div key={'ws-' + index} className="flex gap-2">
                    <i className="fa-solid fa-circle-check h-7 md:h-10 text-med-blue mt-[6px] md:mt-2" aria-hidden="true"/>
                    <p>{point}</p>
                  </div>
                ))}
              </div>
              {button && (
                <a
                  href={button.link}
                  target={button.target}
                  className="mt-[10px] bg-green hover:bg-highlight-green text-white p3 btn1 !inline-flex"
                >
                  {button.buttontext}
                </a>
              )}
            </div>
            <div className="w-full lg:max-w-1/2 relative">
              <img
                src={image?.src}
                alt={image?.alt}
                width={image?.width}
                height={image?.height}
                className="rounded-[50%] object-cover w-full"
              />
              {greenCircleImage && (
                <img
                  src={greenCircleImage.src}
                  alt={greenCircleImage.alt}
                  width={greenCircleImage.width}
                  height={greenCircleImage.height}
                  className={`absolute w-[130px] md:w-[200px] ${greenCircleImage.isRight
                    ? 'bottom-[-40px] md:bottom-[-50px] right-[20px]'
                    : 'bottom-[-40px] md:bottom-[-40px] left-[15px]'
                    }`}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
