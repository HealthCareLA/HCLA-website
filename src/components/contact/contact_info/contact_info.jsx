import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });
const isMatch = true;

export default function ContactInfo(block) {
  return (
    <section className="bg-white pt-[50px] lg:pt-[50px] xl:pt-[85px] xxl:pt-[85px] pb-[50px] lg:pb-[80px] xl:pb-[85px]" suppressHydrationWarning id="Grants_Collaboration">
      <div className="max-container">
        <h2 className="text-blue font-medium mb-[70px]">{block.title}</h2>
        <div class="flex flex-wrap">
          <div className="w-full lg:w-1/2 mb-[30px] lg:mb-0">
            <div className="w-full flex justify-center">
              <img src={block.icon1} />
            </div>
            {
              block.subtitle1 && (
                <h4 className="text-[28px] lg:max-w-[400px] my-[15px] text-common-clr">{block.subtitle1}</h4>
              )
            }
            <p className="max-w-full lg:max-w-[480px] p2 whitespace-pre-line text-common-clr" dangerouslySetInnerHTML={{ __html: block.description1 }}>
            </p>
            <p className="max-w-full lg:max-w-[480px] p2 whitespace-pre-line text-common-clr mt-[30px]" dangerouslySetInnerHTML={{ __html: block.phone_desc }}>
            </p>
            <p className="max-w-full lg:max-w-[480px] p2 whitespace-pre-line text-common-clr" dangerouslySetInnerHTML={{ __html: block.phone_details }}>
            </p>
            <p className="max-w-full lg:max-w-[480px] p2 whitespace-pre-line text-common-clr mt-[30px]" dangerouslySetInnerHTML={{ __html: block.operation_hours }}>
            </p>
          </div>
          <div className="w-full lg:w-1/2  flex flex-col gap-[22px]">
            <div className="w-full flex justify-center">
              <img src={block.icon2} />
            </div>
            {
              block.subtitle2 && (
                <h4 className="text-[28px] lg:max-w-[400px] my-[15px] text-common-clr">{block.subtitle2}</h4>
              )
            }
            <p className="max-w-full lg:max-w-[480px] p2 whitespace-pre-line text-common-clr" dangerouslySetInnerHTML={{ __html: block.part2_description1 }}></p>
            <p className="max-w-full lg:max-w-[480px] p2 whitespace-pre-line text-common-clr" dangerouslySetInnerHTML={{ __html: block.part2_description2 }}></p>
          </div>
        </div>
      </div>
    </section>
  );
}
