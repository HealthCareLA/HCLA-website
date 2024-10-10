import MarkdownIt from "markdown-it";
import { useEffect, useState } from "react";
const md = new MarkdownIt({ html: true });

export default function WhoWeAreLeadership(block) {

    const backgroundColors = ['bg-[#EBF9F0]', 'bg-[#FCF2D6]', 'bg-[#EEFCFF]'];

    return (
        <>
            <section suppressHydrationWarning>
                <h2 className="font-medium leading-10 md:leading-[54px] text-blue mb-8 text-center">{block.title}</h2>
                {
                    block.description && (
                        <p className="max-w-[775px] mx-auto p1 text-common-clr text-center whitespace-pre-line">
                            {block.description}
                        </p>
                    )
                }
                <div className="max-container">

                    <div className="z-[2] relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[30px] lg:mt-[70px] mb-[50px]">
                        {
                            block.keyPoints.map((point, index) => {
                                return (
                                    <div key={'m1-p-' + index} className={`text-center p-[30px] lg:px-[30px] lg:pt-[35px] lg:pb-10 rounded-[18px] ${backgroundColors[index % backgroundColors.length]} p-6 rounded-lg text-center`}>
                                        <img src={point.icon.src} alt={point.icon.alt} height={point.icon.height} className="mb-5 mx-auto h-[50px] lg:h-[70px] w-auto" />
                                        <p className="mx-auto p1 text-common-clr text-center whitespace-pre-line" dangerouslySetInnerHTML={{ __html: point.text }}>
                                        </p>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </section>
            <div className="relative py-[40px]">
                <img
                    src="/images/health-centers-curve.png"
                    alt="shape"
                    className="absolute left-[0px] bottom-[-130px] z-[1] w-full h-[445px] hidden lg:block" 
                />
            </div>
        </>
    );
}
