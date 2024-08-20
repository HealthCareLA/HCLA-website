import MarkdownIt from "markdown-it";
import { useEffect, useState } from "react";
const md = new MarkdownIt({ html: true });

export default function WhoWeAreMissionVision(block) {

    return (
        <>
            <section className="flex flex-wrap" suppressHydrationWarning>
                {block.sections.map((section, index) => (
                    <div key={'wwa-m1-' + index} className={`xl:flex-1 pt-[50px] lg:pt-[80px] xl:pt-[125px] pb-[50px] first:lg:pb-[100px] last:lg:pb-[350px] xl:pb-[400px] px-[20px] lg:px-[95px] xl:first:pl-[calc((100%-1190px)/2)] xl:last:pr-[calc((100%-1190px)/2)] text-white`} style={{ 'backgroundColor': `${section.backgroundColor}` }}>
                        <div className="flex mb-[10px] lg:mb-[30px]">
                            <img
                                src={section.icon.src}
                                alt={section.icon.alt}
                                width={section.icon.width}
                                height={section.icon.height}
                                className="w-auto h-[55px] lg:h-[72px]"
                            />
                        </div>
                        <h2 className="font-medium mb-[10px] lg:mb-[20px]">{section.title}</h2>
                        <p className="p2">{section.description}</p>
                    </div>
                ))}
            </section>
        </>
    );
}
