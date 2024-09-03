import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });
const isMatch = true;

export default function OurImpactCollaborataction(block) {
  return (
    <section id="Latest_News" className="bg-trans-blue py-[120px]" suppressHydrationWarning>
      <div className="max-container">
        <div className="bg-white py-[30px] lg:py-[0] px-[20px] lg::p-[30px] xl:p-[50px] xxl:p-[80px] rounded-[18px]">

          {
            block.title && (
              <h2 className="text-[32px] lg:text-[42px] text-center font-[500] text-blue mb-[50px] xl:mb-[70px]">{block.title}</h2>
            )
          }

          <div className="flex flex-wrap">
            {block?.newsData?.map((item, index) => (
              <div key={'im-ca-' + index} className=" text-blue w-full sm:w-[50%]  xl:w-[33.33%] px-[20px] mb-[30px] xl:mb-0">
                <img
                  src={item.image.src}
                  alt={item.image.alt}
                  width={item.image.width}
                  height={item.image.height}
                  className="w-full rounded-[10px] h-[210px] object-cover"
                />
                {
                  item.category && (
                    <h3 className="font-medium leading-4 mt-[20px] mb-[10px] text-[16px]">{item.category}</h3>
                  )
                }
                <p className="p2 font-medium text-[#003041]">{item.title}</p>
                <p className="p2 text-[#003041]" style={{ fontWeight: 300 }}>{item.titleNote}</p>
              </div>
            ))}
          </div>
          {
            block.learnMoreText && (
              <p className="mt-[10px] sm:mt-[20px] xl:mt-[50px] p2 max-w-[575px] mx-auto font-[500] text-blue whitespace-pre-line text-center">
                {block?.learnMoreText}
                <i className="fa-solid fa-circle-chevron-right text-green ml-1" aria-hidden='true'></i>
              </p>
            )
          }
        </div>
      </div>
    </section>
  );
}
