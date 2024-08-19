import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });
const isMatch = true;

export default function OurImpactStrategicGoals(block) {
  return (
    <section className="strategic-goals-section bg-blue text-white py-[50px] lg:pt-[80px]  xl:pt-[100px] xxl:pt-[130px] lg:pb-[250px] xxl:pb-[350px]" suppressHydrationWarning>
      <div id="Strategic_Goals" style={{paddingTop: '100px'}}>
        <div className="max-container">
          {
            block?.title && (
              <h2 className="text-center font-medium mb-[50px] xl:mb-[80px]">{block.title}</h2>
            )
          }
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] lg:gap-[40px] xl:gap-[70px]">
            {block?.goals?.map((goal, index) => (
              <div className="goal text-white rounded-[10px]" key={'goal-' + index}>
                <img
                  src={goal.icon.src}
                  alt={goal.icon.alt}
                  width={goal.icon.width}
                  height={goal.icon.height}
                  className="mb-[20px]"
                />
                {
                  goal.title && (
                    <h3 className="font-semibold mb-[20px]">{goal.title}</h3>
                  )
                }
                <p className="p2" dangerouslySetInnerHTML={{ __html: goal.description }}></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

  );
}
