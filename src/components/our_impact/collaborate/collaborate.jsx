import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });
const isMatch = true;

export default function OurImpactCollaborate(block) {
  return (
    <section className="bg-white pt-[50px] lg:pt-[80px] xl:pt-[135px] xxl:pt-[185px] pb-[50px] lg:pb-[80px] xl:pb-[135px]" suppressHydrationWarning id="Grants_Collaboration">
      <div className="max-container flex flex-wrap">
        <div className="w-full lg:w-2/5 mb-[30px] lg:mb-0">
          <h2 className="text-blue font-medium">{block.title}</h2>
          {
            block.subtitle && (
              <h4 className="text-[28px] lg:max-w-[400px] my-[15px] text-common-clr">{block.subtitle}</h4>
            )
          }
          {
            block.button && (
              <a href={block.button.link} target={block.button.target}
                className="lg:mt-[30px] bg-green hover:bg-highlight-green text-white p3 btn1 !inline-block"
              >
                {block.button.buttontext}
              </a>
            )
          }
        </div>
        <div className="w-full lg:w-3/5  xl:pl-[50px] xxl:pl-[90px] flex flex-col gap-[22px]">
          {block?.descriptionData?.map((item, index) => (
            <div key={'im-c-' + index} className="flex flex-wrap gap-[20px] border-2 border-sky-blue rounded-[18px] p-[35px]">
              <div className="sm:w-[55px]">
                <img src={item.icon.src} alt={item.icon.alt} />
              </div>
              <div className="sm:w-[calc(100%-75px)]">
                <p className="p2 text-common-clr">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
