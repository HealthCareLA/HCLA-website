import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function GlobalError(block) {
  return (
    <section className="error py-md-16 py-10">
      <div className="container mx-auto">
        <div className="row">
          <div className="col-lg-12">
            <div className="error-content text-center">
              <img src={block.image} className="mx-auto" alt={block.image_alt} />
              <h3
                className="my-5"
                dangerouslySetInnerHTML={{
                  __html: md.render(block.description),
                }}
              ></h3>
              <a href="/" className="btn btn-lg btn-primary">
                Try again
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
