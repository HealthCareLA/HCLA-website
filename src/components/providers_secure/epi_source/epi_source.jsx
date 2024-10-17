import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function ProviderSecureEpiSource(block) {

    return (

        <section
            className="bg-trans-blue relative pt-[50px] pb-[100px]"
            id="EpiSource"
            suppressHydrationWarning
        >
            <div className="max-container py-[50px] relative z-[1]">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-[50px]">
                    <div className="w-full lg:max-w-1/2 text-center lg:text-left">
                        <h3 className="font-medium text-blue mb-[35px] md:mb-[54px]">
                            {block?.title}
                        </h3>
                        {
                            block?.descriptionData?.map((item, i) => {
                                return (
                                    <p
                                        key={'m_' + i}
                                        className={`text-dark-blue p1 mt-3 whitespace-pre-line ${i != block?.descriptionData?.length - 1
                                            ? "mb-[25px] md:mb-[35px]"
                                            : ""
                                            }`}
                                    >
                                        {item?.description}
                                    </p>
                                );
                            })
                        }
                    </div>
                    <div className="w-full lg:max-w-1/2">
                        <div style={{ position: 'relative', height: '600px' }}>
                            <img
                                src={block?.image1?.src}
                                alt={block?.image1?.alt}
                                width={block?.image1?.width}
                                height={block?.image1?.height}
                                style={{
                                    position: 'absolute',
                                    top: '0px',
                                    bottom: '200px',
                                    left: '0px',
                                    borderRadius: block?.image1?.borderRadius,
                                }}
                            />
                            <img
                                src={block?.image2?.src}
                                alt={block?.image2?.alt}
                                width={block?.image2?.width}
                                height={block?.image2?.height}
                                style={{
                                    position: 'absolute',
                                    top: '300px',
                                    bottom: '0px',
                                    right: '50px',
                                    borderRadius: block?.image2?.borderRadius,
                                }}
                            />
                            <img
                                width='305'
                                height='305'
                                className='hidden lg:block'
                                style={{
                                    position: 'absolute',
                                    top: '350px',
                                    bottom: '0px',
                                    right: '250px',
                                    background: 'green',
                                    opacity: 0.5,
                                    borderRadius: block?.image2?.borderRadius,
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
