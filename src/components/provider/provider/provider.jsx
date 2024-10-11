import MarkdownIt from "markdown-it";
import { useEffect, useState } from "react";
const md = new MarkdownIt({ html: true });

export default function ProviderPart(block) {
    const positions = [
        'bottom-[-40px] right-[180px] md:right-[80px]',
        'bottom-[-80px] left-[120px] md:left-[80px]',
        'bottom-[-40px] left-[180px] md:left-[80px]'
    ];

    return (
        <>
            <div className="bg-white relative py-[60px]">
                <img
                    src="/images/quick-links-shape.png"
                    alt="shape"
                    className="absolute left-[0px] top-[-220px] w-screen h-[350px] hidden lg:block" 
                />
            </div>
            <section className="relative" style={{ background: '#EEFCFF', paddingBottom: '200px' }}>
                <div className="max-container">
                    <h2 className="text-center font-medium text-blue max-w-[980px] mx-auto mb-[50px] xl:mb-20 xxl:mb-[110px]">
                        {block.title}
                    </h2>
                    <div className="flex flex-wrap">
                        {block.sections.map((section, index) => (
                            <div key={'m1_section_' + index} className={`flex flex-col justify-between gap-[30px] items-start w-full mb-[50px] md:mb-[120px] last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} mb-12`}>
                                <div className="relative w-full mb-[50px] md:mb-0 md:w-[350px] lg:w-[480px]">
                                    <img
                                        src={section.image.src}
                                        alt={section.image.alt}
                                        className={`w-full object-cover ${section.image.isSquare ? 'h-[350px] max-w-[480px] mx-auto md:mx-[none]' : 'h-auto max-w-[380px] mx-auto'} ${section.image.isRound ? 'rounded-full' : 'rounded-[40px]'}`}
                                    />
                                    <img
                                        src={section?.shapIcon?.src}
                                        alt={section?.shapIcon?.alt}
                                        width={section?.shapIcon?.width}
                                        height={section?.shapIcon?.height}
                                        className={`absolute ${positions[index % positions.length]} w-[130px] md:w-[200px]`}
                                    />
                                </div>
                                <div className={`relative flex flex-col max-w-[500px] md:max-w-max w-full md:w-[calc(100%-350px)] lg:w-[calc(100%-480px)] text-blue mb-[30px] xl:mb-0 ${index % 2 === 0 ? 'lg:items-end' : 'lg:items-start'}`}>
                                    {section.title && (
                                        <h3 className="font-medium mb-[10px] w-full max-w-[500px]">{section.title}</h3>
                                    )
                                    }
                                    {section.description && (
                                        <p className="p2 text-[#003041] w-full max-w-[500px]">{section.description}</p>
                                    )
                                    }
                                    {
                                        section.pointsTitle && (
                                            <h4 className="p2 font-medium text-[#003041] w-full max-w-[500px] mt-[30px] mb-5">{section.pointsTitle}</h4>
                                        )
                                    }
                                    {
                                        section.points && (
                                            <div className="flex flex-wrap w-full max-w-[500px] gap-[10px] p1 font-medium text-[#003041]">
                                                {
                                                    section.points.map((point, index) => (
                                                        <div key={"m2_point_" + index} className="flex gap-2 items-start w-full">
                                                            <i className="fa-solid fa-circle-check h-7 md:h-[40px] text-med-blue mt-1 md:mt-[6px]" aria-hidden="true" />
                                                            <p>{point}</p>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        )
                                    }
                                    {
                                        section.link.text && (
                                            <a href={section.link.href} style={{ width: '100%' }}>
                                                <p className="mt-[10px] sm:mt-5 xl:mt-[30px] p2 font-medium text-blue whitespace-pre-line w-full max-w-[500px]">
                                                    {section.link.text}
                                                    <i className="fa-solid fa-circle-chevron-right text-green ml-1" aria-hidden="true"></i>
                                                </p>
                                            </a>
                                        )
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section >
        </>
    );
}
