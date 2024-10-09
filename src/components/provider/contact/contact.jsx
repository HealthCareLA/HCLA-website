import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });
const isMatch = true;

export default function ProviderContact(block) {
  return (
    <section className="mb-[150px]" suppressHydrationWarning>
      <div className="max-container relative z-[1]">
        <div
          className="mt-[25px] md:mt-[47px] flex flex-col lg:flex-row items-stretch gap-[25px] md:gap-[35px] justify-between"
        >
          <div
            className="bg-trans-blue w-full lg:max-w-1/2 drop-shadow-[0_0_10px_0_rgba(1,131,179,0.10)] rounded-lg md:rounded-[18px] px-[15px] md:px-[50px] py-[15px] md:py-[35px]"
          >
            <p className="p1 text-dark-blue mb-5 md:mb-[25px] whitespace-pre-line">
              {block?.detailSection1?.description}
            </p>
            {
              block?.detailSection1?.buttonText && (
                <a href={block?.detailSection1?.buttonLink}>
                  <button className="bg-blue hover:bg-med-blue text-white mx-auto p3 btn1">
                    {block?.detailSection1?.buttonText}{" "}
                    <i className="fa-solid fa-circle-chevron-right text-green ml-1" />
                  </button>
                </a>
              )
            }
          </div>
          <div
            className="bg-trans-blue w-full lg:max-w-1/2 drop-shadow-[0_0_10px_0_rgba(1,131,179,0.10)] rounded-lg md:rounded-[18px] px-[15px] md:px-[50px] py-[15px] md:py-[35px]"
          >
            <p className="p1 text-dark-blue mb-5 md:mb-[25px] whitespace-pre-line">
              {block?.detailSection2?.description}
            </p>
            {
              block?.detailSection2?.buttonText && (
                <a href={block?.detailSection2?.buttonLink}>
                  <button className="mx-auto bg-green hover:bg-highlight-green btn1 text-white p3">
                    {block?.detailSection2?.buttonText}
                  </button>
                </a>
              )
            }
          </div>
        </div>
      </div>
    </section>

  );
}
