import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });
const isMatch = true;

export default function OurImpactHealthcare({
  title,
  description,
  description2,
  buttonText,
  points,
  image,
  greenCircleImage,
  icondescriptions
}) {
  return (
    <section className={isMatch ? " bg-sky-blue text-blue py-[50px] md:py-[80px] lg:pt-[120px] lg:pb-[25px]" : "bg-blue text-white py-[50px] md:py-[80px] lg:pt-[120px] lg:pb-[25px]"} suppressHydrationWarning
      id="Why_HCLA" >
      <div className="max-container flex flex-col justify-between gap-x-5 gap-y-10 relative lg:pt-[50px]">

        <div className="flex flex-col-reverse lg:flex-row items-start justify-between gap-[50px]">
          <div className="mx-auto lg:w-1/2 relative">
            <img
              src={image?.src}
              alt={image?.alt}
              width={image?.width}
              height={image?.height}
              className={`object-cover ${image?.isRound ? 'rounded-full mx-auto max-w-[280px] md:max-w-[320px] xl:max-w-[480px] max-h-[280px] md:max-h-[320px] xl:max-h-[480px]' : 'rounded-[40px]'}`}
            />
            <img
              src={greenCircleImage?.src}
              alt={greenCircleImage?.alt}
              width={greenCircleImage?.width}
              height={greenCircleImage?.height}
              className={`absolute w-[130px] md:w-[200px] ${image?.isRound ? 'bottom-[-10px] md:bottom-0 lg:bottom-[-50px] right-[-15px] md:right-[-20px] xl:right-[65px]' : 'bottom-[-60px] md:bottom-[-102px] right-0 xl:right-[120px]'}`}
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="font-[500] leading-[40px] md:leading-[54px] text-blue mb-[32px] text-center lg:text-left">
              {title}
            </h2>
            <p className="p1 text-common-clr mb-[28px] text-center lg:text-left whitespace-pre-line">
              {description}
            </p>
            <div className="flex flex-col gap-2 text-common-clr p1">
              {points?.map((point, index) => (
                <div className="flex gap-[8px]" key={index}>
                  <i className="fa-solid fa-circle-check h-[28px] md:h-[40px] text-med-blue mt-[6px] md:mt-[8px]" aria-hidden="true"/>
                  <p>{point}</p>
                </div>
              ))}
            </div>
            <p className="p1 text-common-clr my-[28px] text-center lg:text-left whitespace-pre-line">
              {description2}
            </p>
            {buttonText && (
              <button className="mt-[30px] bg-green hover:bg-highlight-green text-white p3 btn1">
                {buttonText}
              </button>
            )}
            {icondescriptions && (
              <div className="bg-white py-[30px] px-[35px] rounded-[18px] flex flex-wrap gap-[20px] sm:gap-[30px] mt-[50px]">
                <div className="w-full sm:w-[90px]">
                  <img
                    src={icondescriptions.image.src}
                    alt={icondescriptions.image.alt}
                    width={icondescriptions.image.width}
                    height={icondescriptions.image.height}
                    className="w-[60px] sm:w-[85px]"
                  />
                </div>
                <div className="w-full sm:w-[calc(100%-120px)]">
                  <p className="p2 text-blue font-medium">{icondescriptions.description}</p>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>

  );
}
