import MarkdownIt from "markdown-it";
import { useEffect, useState } from "react";
const md = new MarkdownIt({ html: true });

export default function WhoWeAreBoard(block) {

    return (
        <>
            <section className="py-[50px] lg:pt-[250px] xl:pt-[300px] lg:pb-[100px] xl:pb-[175px] bg-[#EEFCFF]" suppressHydrationWarning>
                <div className="max-container mx-auto px-6">
                    <h2 className="font-[500] leading-[40px] md:leading-[54px] text-blue mb-[32px] text-center">{block.title}</h2>
                    {block.description && (
                        <p className="max-w-[980px] mx-auto mb-[50px] p1 text-common-clr text-center whitespace-pre-line">
                            {block.description}
                        </p>
                    )}

                    {block.sections.map((section) => (
                        <div className="mt-[40px] lg:mt-[75px] first-of-type:mt-0 bg-white rounded-[18px] lg:py-[60px] py-[40px] px-[20px] shadow-[0px_0px_10px_0px_#0183B31A]">
                            <h3 className="text-center font-medium lg:mb-[35px] mb-[20px] text-[#0183B3]">{section.title}</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[30px] lg:gap-y-[60px] gap-y-[30px]">
                                {section.members.map(member => (
                                    <div className="text-center">
                                        <h5 className="font-semibold p6 text-blue-900 text-common-clr">{member.name}</h5>
                                        <p className="font-normal text-gray-700 p3 text-common-clr">{member.title}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>


        </>
    );
}
