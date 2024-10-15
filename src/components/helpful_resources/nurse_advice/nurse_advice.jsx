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
            <div id="nurse_advice_section" className="relative pt-[50px] lg:pt-0 pb-[50px] md:pb-20" >
                <div className="absolute left-1/2 -translate-x-1/2 w-full top-[-165px] hidden lg:block">
                    <svg className="w-full h-[447px]" viewBox="0 0 1440 447" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1440 123.895C1216.36 44.4551 973.9 0.975098 720.63 0.975098C467.36 0.975098 223.99 44.6251 0 124.345V446.065H1440V123.895Z" fill="white"/>
                    </svg>
                </div>
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
