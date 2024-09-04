import MarkdownIt from "markdown-it";

export default function MemberPatientPlanResource(block) {
  const positions = [
    'bottom-[-40px] right-[180px] md:right-[80px]',
    'bottom-[-80px] left-[120px] md:left-[80px]',
    'bottom-[-40px] left-[160px] md:left-[80px]'
  ];
  return (
    <section id="Health_Plans_Resources" class="pt-[50px] md:pt-[80px] lg:pt-[100px] pb-[50px] md:pb-[80px] lg:pb-[150px]" suppressHydrationWarning  style={{ scrollMarginTop: '100px' }}>
      <div class="max-container">
        <div class="plans-resources grid grid-cols-1 lg:grid-cols-2 gap-[50px] lg:gap-[70px]">
          <div class="health-plans">
            <h3 class="text-blue font-medium mb-[30px]">{block.healthPlans.title}</h3>
            <p class="p1 font-normal text-common-clr text-common-clr mb-[40px]">{block.healthPlans.description}</p>
            {block.healthPlans.links?.length > 0 && (
              <ul class="">
                {block.resources.links.map(link => (
                  <li class="flex flex-col justify-start py-[20px] border-t-[1px] border-[#B3E1F2]">
                    <p class="p1 text-common-clr font-medium">{link.text}</p>
                    <a href={link.url} target={link.target || "_self"} class="p1 text-green hover:text-blue font-normal">
                      {link.url}
                    </a>
                  </li>
                ))}
              </ul>
            )}
            {block.healthPlans.buttonlinks?.length > 0 && (
              <ul class="border-b-[1px] border-[#B3E1F2]">
                {block.healthPlans.buttonlinks.map(link => (
                  <li class="py-[20px] border-t-[1px] border-[#B3E1F2]">
                    <a href={link.url} class="p2 font-medium text-blue hover:text-green inline-block">
                      {link.text}
                      <i class="fa-solid fa-circle-chevron-right text-green ml-1"></i>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div class="helpful-resources">
            <h3 class="text-blue font-medium mb-[30px]">{block.resources.title}</h3>
            <p class="p1 font-normal text-common-clr text-common-clr mb-[40px]">{block.resources.description}</p>

            {block.resources.links?.length > 0 && (
              <ul class="">
                {block.resources.links.map(link => (
                  <li class="py-[20px] border-t-[1px] border-[#B3E1F2]">
                    <p class="p1 text-common-clr font-medium">{link.text}</p>
                    <a href={link.url} target={link.target || "_self"} class="p1 text-green hover:text-blue font-normal">
                      {link.url}
                    </a>
                  </li>
                ))}
              </ul>
            )}
            {block.resources.buttonlinks?.length > 0 && (
              <ul class="border-b-[1px] border-[#B3E1F2]">
                {block.resources.buttonlinks.map(link => (
                  <li class="flex items-center py-[20px] border-t-[1px] border-[#B3E1F2]">
                    <a href={link.url} class="p2 font-medium text-blue hover:text-green inline-block">
                      {link.text}
                      <i class="fa-solid fa-circle-chevron-right text-green ml-1"></i>
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