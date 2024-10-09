import MarkdownIt from "markdown-it";

export default function MemberPatientPlanResource(block) {
  const positions = [
    'bottom-[-40px] right-[180px] md:right-[80px]',
    'bottom-[-80px] left-[120px] md:left-[80px]',
    'bottom-[-40px] left-[160px] md:left-[80px]'
  ];
  return (
    <section id="Health_Plans_Resources" className="pt-[50px] md:pt-20 lg:pt-[100px] pb-[50px] md:pb-20 lg:pb-[150px]" suppressHydrationWarning  style={{ scrollMarginTop: '100px' }}>
      <div className="max-container">
        <div className="plans-resources grid grid-cols-1 lg:grid-cols-2 gap-[50px] lg:gap-[70px]">
          <div className="health-plans">
            <h3 className="text-blue font-medium mb-[30px]">{block.healthPlans.title}</h3>
            <p className="p1 font-normal text-common-clr text-common-clr mb-10">{block.healthPlans.description}</p>
            {block.healthPlans.links?.length > 0 && (
              <ul className="">
                {block.resources.links.map(link => (
                  <li className="flex flex-col justify-start py-5 border-t-[1px] border-[#B3E1F2]">
                    <p className="p1 text-common-clr font-medium">{link.text}</p>
                    <a href={link.url} target={link.target || "_self"} className="p1 text-green hover:text-blue font-normal">
                      {link.url}
                    </a>
                  </li>
                ))}
              </ul>
            )}
            {block.healthPlans.buttonlinks?.length > 0 && (
              <ul className="border-b-[1px] border-[#B3E1F2]">
                {block.healthPlans.buttonlinks.map(link => (
                  <li className="py-5 border-t-[1px] border-[#B3E1F2]">
                    <a href={link.url} className="p2 font-medium text-blue hover:text-green inline-block">
                      {link.text}
                      <i className="fa-solid fa-circle-chevron-right text-green ml-1"></i>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="helpful-resources">
            <h3 className="text-blue font-medium mb-[30px]">{block.resources.title}</h3>
            <p className="p1 font-normal text-common-clr text-common-clr mb-10">{block.resources.description}</p>

            {block.resources.links?.length > 0 && (
              <ul className="">
                {block.resources.links.map(link => (
                  <li className="py-5 border-t-[1px] border-[#B3E1F2]">
                    <p className="p1 text-common-clr font-medium">{link.text}</p>
                    <a href={link.url} target={link.target || "_self"} className="p1 text-green hover:text-blue font-normal">
                      {link.url_text}
                    </a>
                  </li>
                ))}
              </ul>
            )}
            {block.resources.buttonlinks?.length > 0 && (
              <ul className="border-b-[1px] border-[#B3E1F2]">
                {block.resources.buttonlinks.map(link => (
                  <li className="flex items-center py-5 border-t-[1px] border-[#B3E1F2]">
                    <a href={link.url} className="p2 font-medium text-blue hover:text-green inline-block">
                      {link.text}
                      <i className="fa-solid fa-circle-chevron-right text-green ml-1"></i>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>

  );
}
