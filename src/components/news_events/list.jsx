import React, { useState, useEffect } from 'react';
import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function NewEventList({ page, posts }) {

  let newsItems = posts;
  // Ensure that newsItems is defined and has content before accessing the first item
  const featuredNews = newsItems && newsItems.length > 0 ? newsItems[0] : null;
  const otherNews = newsItems && newsItems.length > 1 ? newsItems.slice(1) : [];

  console.log("featuredNews", featuredNews);

  // Get the unique categories from otherNews items
  const categories = ["Category", ...new Set(otherNews.map((news) => news.data.category))];


  // State for selected category
  const [selectedCategory, setSelectedCategory] = useState('Category');
  const [filteredNews, setFilteredNews] = useState(otherNews);

  // Handle category change
  useEffect(() => {
    if (selectedCategory === 'Category') {
      setFilteredNews(otherNews);
    } else {
      setFilteredNews(otherNews.filter((news) => news.data.category === selectedCategory));
    }
  }, [selectedCategory, otherNews]);

  return (
    <section suppressHydrationWarning>
      <section
        className="bg-blue text-white py-[50px] md:py-[80px] lg:pt-[120px] lg:pb-[25px] min-h-[350px]"

      >
        <div
          className="max-container flex flex-col items-start justify-between gap-x-5 gap-y-10"
        >
          <h1 className="font-[500] mt-[40px] w-full text-center">
            {page.title}
          </h1>
        </div>
      </section>
      <section>
        <div className="relative py-[50px] md:py-[120px] lg:pt-0 min-h-[550px]" style={{ marginTop: '55px' }}>
          <img
            src="/images/quick-links-shape-bottom.png"
            alt="circle-shape"
            style={{
              position: 'absolute',
              top: '-100px',
              width: '100%',
              height: 'auto',
              background: 'rgb(1 131 179)',
              objectFit: 'cover',
              objectPosition: '0px 5px'
            }}
          />
          <div className="max-container flex flex-col items-start justify-between gap-x-5 gap-y-10 relative" style={{ 'paddingTop': '50px' }}>
            <div className="blog-hero-content">

              {featuredNews && featuredNews.data.image ? (
                <div className="featured-news md:flex items-center md:gap-[40px] xl:gap-[65px] mb-[50px] lg:mb-[100px]">
                  <img
                    src={featuredNews.data.image}
                    alt={featuredNews.data.title || 'Default Title'}
                    className="w-full md:w-1/2 mb-[20px] lg:mb-0 h-[300px] md:h-[360px] object-cover rounded-[18px]"
                  />
                  <div className="w-full md:w-1/2">
                    <span className="block text-blue font-medium mb-[20px]">{featuredNews.data.category || 'General'}</span>
                    <h2 className="text-[28px] md:text-[32px] lg:text-[36px] leading-[38px] md:leading-[42px] lg:leading-[46px] font-medium mb-[15px] text-blue">{featuredNews.data.title || 'Default Title'}</h2>
                    <p className="mb-[20px] p2 text-common-clr">{featuredNews.data.description || 'Default Description'}</p>
                    <a href={featuredNews.data.url || '#'} className="mt-[10px] sm:mt-[20px] xl:mt-[25px] p2 mx-auto font-[500] text-blue hover:text-green transition">
                      Read more <i className="fa-solid fa-circle-chevron-right text-green ml-1" />
                    </a>
                  </div>
                </div>
              ) : (
                <p>No featured news available.</p>
              )}


              <div className="mb-[40px]">
                <select
                  className="p3 leading-[1.2] font-normal text-common-clr cursor-pointer outline-none"
                  id="category-filter"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {filteredNews.length > 0 ? (
                <div className="news-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]" id="news-grid">
                  {filteredNews.map((news, index) => (
                    news.data.image && (
                      <div className="news-item bg-white" data-category={news.data.category}>
                        <img
                          src={news.data.image}
                          alt={news.data.title || 'Default Title'}
                          className="rounded-[10px] mb-[15px] h-[250px] object-cover w-full"
                        />
                        <span className="block text-blue mb-[10px]">{news.data.category || 'General'}</span>
                        <h4 className="p4 leading-[32px] text-common-clr font-medium mb-[10px]">{news.data.title || 'Default Title'}</h4>
                        <a href={news.data.url || '#'} className="text-green font-normal hover:text-blue transition p2">
                          Read more
                        </a>
                      </div>
                    )
                  ))}
                </div>
              ) : (
                <p>No other news available.</p>
              )}


            </div>
          </div>
        </div>
      </section>
      <section className="blog-hero pt-xl-22 pt-sm-20 pt-18 pb-xxl-25 pb-xl-23 pb-22 position-relative">
      </section>
      <section className="blog @@padding @@blog-two">
        <div className="container">
          <div className="row">
            {/*
            posts.map((post, i) => (
              <PostSummary post={post} key={i} />
            ))
            */}
          </div>
        </div>
      </section>
    </section>
  );
}
