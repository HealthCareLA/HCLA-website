import React from 'react';

const SingleNewsItem = (block) => {
  console.log("Single New Item Block", block);
  return (
    <>
      <div className="max-container">
        <a href="/news-events" className="mt-[150px] p2 font-[500] text-blue hover:text-green whitespace-pre-line block">
          <i className="fa-solid fa-circle-chevron-left text-green ml-1"></i> Back to News and Events
        </a>
      </div>

      <article className="single-news-item pt-[40px] lg:pt-[60px] pb-[50px] lg:pb-[80px] xl:pb-[120px] max-container">
        <div className="max-w-[775px] mx-auto">
          <div className="text-left mb-[50px]">
            <h1 className="font-medium text-blue h3">{block.data.title}</h1>
            <div className="flex align-middle gap-[5px] mt-[20px] mb-[30px] text-common-clr font-normal p2">
              <p>{block.data.category}</p> / <p>{block.data.date}</p>
            </div>
            <img
              src={block.data.image}
              alt={block.data.title}
              className="w-full rounded-[18px] h-[300px] md:h-[400px] lg:h-[500px] object-cover"
            />
          </div>
          <div className="content p2 text-common-clr">
            {/* Render the HTML content directly */}
            <div
              className="rendered-content"
              dangerouslySetInnerHTML={{ __html: block.body }}
            />
          </div>
        </div>
      </article>
    </>
  );
};

export default SingleNewsItem;