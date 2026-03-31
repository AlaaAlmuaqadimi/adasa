import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Blogdetils() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/posts/${id}`)
      .then(res => {
        setPost(res.data);
        axios.get("http://localhost:3001/posts").then(r => {
          const related = r.data
            .filter(p => p.id !== res.data.id)
            .slice(0, 3);
          setRelatedPosts(related);
        });
      })
      .catch(err => console.log(err));
  }, [id]);

  if (!post) return <p>Loading...</p>;
  const sections = post.content.split("\n\n## ");

  return (
    <section id="bg_color" className="py-5">
      <div className="card text-bg-dark">
        <img src={post.image} alt={post.title} className="w-100 my-4" />
        <div className="card-img-overlay p-5  d-flex flex-column justify-content-center">
          <div className="breadcrumb-pill">
            <Link to={`/`}
              className="active"> <i className="fa-solid fa-house"></i>
            </Link>
            <span className="separator">
              <i className="fa-solid fa-angle-left"></i>
            </span>
            <Link to={`/Blog`}>المدونة</Link>
            <span className="separator">
              <i className="fa-solid fa-angle-left"></i>
            </span>
            <a href="#" class="icon">
              {post.tags[0]}
            </a>
          </div>
          <div className="d-flex align-items-center p-5  gap-4 blog-meta ">
            <span className=' tags-light ms-2 pb-0'>{post.tags[0]}</span>
            <span className="d-flex align-items-center gap-2">
              <i className="fa-regular fa-calendar"></i>
              {post.date}
            </span>
            <span className="d-flex align-items-center gap-2">
              <i className="fa-regular fa-clock"></i>
              {post.readTime}
            </span>
          </div>
          <h5 className="card-title card-si text-center  fw-bolder">
            {post.title}
          </h5>
          <div class="author-cards p-3 mt-5">
            <img
              src={post.author.avatar}
              className=""
              alt={post.author.name}
            />  <div class="author-in">
              <h4> {post.author.name}</h4>
              <span>{post.author.role} </span>
            </div>
          </div>
        </div>
      </div>
      <section >
        <div className="container ">
          <div className="d-flex position-relative">
            <div className="left col-8">

              <div className="mt-4">
                {sections.map((section, index) => {
                  const [title, ...content] = section.split("\n\n");
                  return (
                    <div key={index} className="mb-5">
                      {index !== 0 && <h2 className="mb-4"><i className="fa-solid fa-camera"></i> {title}</h2>}
                      <p>{content.join("\n\n")}</p>
                    </div>
                  );
                })}
              </div>
              <div className="mt-5 p-4 blog-box">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="blog-minis-icon">
                    <i className="fa-solid fa-tags"></i>
                  </div>
                  <h3 className="mb-0  text-white">الوسوم</h3>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  {post.tags?.map((tag, index) => (
                    <span key={index} className="blog-tag border rounded-pill p-2 me-4">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4 p-4 blog-box">
                <div className="d-flex align-items-center justify-content-between  p-2 flex-wrap gap-3">
                  <div className="d-flex align-items-center gap-3">
                    <div className="blog-mini-icon">
                      <i className="fa-solid fa-share-nodes"></i>
                    </div>
                    <h3 className="mb-0 fw-bold text-white">شارك المقال</h3>
                  </div>
                  <div className="d-flex gap-2">
                    <button className="blog-share-btn blog-share-x" type="button">
                      <i className="fa-brands fa-x-twitter"></i>
                    </button>
                    <button className="blog-share-btn blog-share-ln" type="button">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </button>
                    <button className="blog-share-btn blog-share-wa" type="button">
                      <i className="fa-brands fa-whatsapp"></i>
                    </button>
                    <button className="blog-share-btn blog-share-link" type="button">
                      <i className="fa-solid fa-link"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-4 p-md-5 blog-box2 ">
                <div className="d-flex  flex-column flex-sm-row align-items-center align-items-sm-start gap-4">
                  <img
                    alt={post.author.name}
                    className="blog-author-big-img"
                    src={post.author.avatar}
                  />
                  <div className="text-center text-sm-end flex-grow-1">
                    <span className="mb-0">كاتب المقال</span>
                    <h3 className=" mb-0 fw-bold text-white">
                      {post.author.name}
                    </h3>
                    <p className="mb-2 small ">{post.author.role}</p>
                    <p className="mb-0 small ">
                      مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير
                      الفوتوغرافي.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="right col-4 pt-5 position-sticky me-2">
              <div className="toc-container">
                <div className="toc-header">
                  <h3>محتويات المقال</h3>
                  <button className="toc-btn">
                    <span></span><span></span><span></span>
                  </button>
                </div>
                <div className="mt-4">
                  {sections.map((section, index) => {
                    const [title, ...content] = section.split("\n\n");
                    return (
                      <ul key={index} className="mb-1 position-sticky toc-list">
                        {index !== 0 && <li className="mb-1">{title}</li>}
                      </ul>
                    );
                  })}
                </div>
              </div>
              <div className="info-box">
                <div className="info-card">
                  <i className="fa-regular fa-clock"></i>
                  <p className="label"> {post.readTime}</p>
                  <p className="value">وقت القراءة</p>
                </div>
                <div className="info-card">
                  <i className="fa-regular fa-calendar"></i>
                  <p className="label">{post.date}</p>
                  <p className="value">تاريخ النشر</p>
                </div>
              </div>
              <div className="p-4 card-event mt-5">
                <div className="text-center">
                  <div className="blog-cta-icon mx-auto mb-3">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <h3 className="fw-bold text-white mb-2">لا تفوّت جديدنا</h3>
                  <p className="small blog-muted-2 mb-3">
                    اشترك للحصول على أحدث المقالات
                  </p>
                  <Link className="blog-cta-btn w-100 text-decoration-none text-white mt-4" to="/blog">
                    تصفح المزيد
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex ">
            <div>
              <h4>مقالات قد تعجبك</h4>
              <p>استكشف المزيد من المحتوى المميز</p>
            </div>
            <Link
              className=" d-sm-flex align-items-center text-decoration-none  gap-2  mt-4"
              to="/blog"
            >
              عرض الكل
              <i className="fa-solid fa-arrow-left "></i>
            </Link>
          </div>
          <div className="row g-4 mt-4">
            {relatedPosts.map(post => (
              <div key={post.id} className="col-sm-6 col-lg-4">
                <Link
                  to={`/blog/${post.id}`}
                  className="col card-list text-decoration-none" >
                  <div className="card p-0">
                    <img
                      src={post.image}
                      className="w-100 img"
                      alt={post.author.name}
                    />
                    <div className="p-3">
                      <h3 className="hero-title fs-5 mb-3">
                        {post.title}
                      </h3>
                      <hr />
                      <div className="d-flex align-items-center justify-content-between mt-4">
                        <div className="d-flex align-items-center gap-2">
                          <img
                            src={post.author.avatar}
                            className="author-img rounded-circle"
                            alt={post.author.name}
                          />
                          <div className=' text-white'>
                            <p className="mb-0">{post.author.name}</p>
                          </div>
                        </div>
                        <span className="badge-category mb-3">
                          {post.readTime}
                        </span>                             </div>
                    </div>
                  </div>
                  {/* </div> */}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
