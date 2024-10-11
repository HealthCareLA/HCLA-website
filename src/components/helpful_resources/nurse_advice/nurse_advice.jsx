import MarkdownIt from "markdown-it";
import { useEffect } from "react";
export default function HelpfulResourceNurseAdvice(block) {
    useEffect(() => {
        var params = window.location.href.split("#");
        if(params.length > 1 && params[1] === 'nurse_advice_section') {
            const targetRef = document.getElementById('nurse_advice_section');
            window.scrollTo({
                top: targetRef.offsetTop - 280,
                behavior: 'smooth',
            });
        }
    }, [])

    return (
        <section suppressHydrationWarning>
            <div id="nurse_advice_section" className="relative pt-[50px] lg:pt-0 pb-[50px] md:pb-20" style={{'marginTop' : '100px'}}>
                <img
                    src="/images/quick-links-shape-bottom.png"
                    alt="shape"
                    className="absolute left-1/2 -translate-x-1/2 w-full z-[1] top-[-8%] lg:top-[-14%] hidden lg:block"
                    style={{background: 'rgb(238 252 255)'}}
                />
                <div className="max-container relative z-[2]">
                    <div className="text-center">
                        <h2 className="text-center font-medium text-blue mb-[30px] md:mb-[50px] xl:mb-20">
                            {block.title}
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-[30px]">
                            {block.plans.map(plan => (
                                <div className="bg-trans-blue rounded-[18px] py-5 px-[15px] shadow-md text-center">
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
                            <p className="text-base text-common-clr mt-[30px] md:mt-[50px] lg:mt-20 text-left"
                                dangerouslySetInnerHTML={{ __html: block.plansNote }}>{ }</p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
