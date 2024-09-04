import MarkdownIt from "markdown-it";
export default function HelpfulResourceNurseAdvice(block) {
    return (
        <section suppressHydrationWarning>
            <div id="" className="relative pt-[50px] lg:pt-0 pb-[50px] md:pb-[80px]">
                <img
                    src="/images/quick-links-shape-bottom.png"
                    alt="shape"
                    className="absolute left-1/2 -translate-x-1/2 w-full z-[1] top-[-8%] lg:top-[-14%] hidden lg:block"
                />
                <div className="max-container relative z-[2]">
                    <div className="text-center">
                        <h2 className="text-center font-[500] text-blue mb-[30px] md:mb-[50px] xl:mb-[80px]">
                            {block.title}
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] lg:gap-[30px]">
                            {block.plans.map(plan => (
                                <div className="bg-trans-blue rounded-[18px] py-[20px] px-[15px] shadow-md text-center">
                                    {plan.name && (
                                        <h4 className="text-common-clr font-medium p4 leading-normal mb-[10px]">
                                            {plan.name}
                                        </h4>
                                    )}
                                    <a href={`tel:${plan.phone}`} className="text-blue hover:text-green font-medium p4">
                                        {plan.phone}
                                    </a>
                                </div>
                            ))}
                        </div>
                        {block.plansNote && (
                            <p className="text-[16px] text-common-clr mt-[30px] md:mt-[50px] lg:mt-[80px] text-left"
                                dangerouslySetInnerHTML={{ __html: block.plansNote }}>{ }</p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
