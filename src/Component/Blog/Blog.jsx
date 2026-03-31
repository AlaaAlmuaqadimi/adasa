import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("الكل");
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [search, setSearch] = useState("");
  const postsPerClick = 6;
  const handleLoadMore = () => {
    setVisiblePosts((prev) => prev + postsPerClick);
  };
  const gatPosts = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/posts`);
      console.log(response);
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    gatPosts()
  }, [])
  const categories = ["الكل", ...new Set(posts.map(post => post.category))];
  const filteredPosts =
    activeCategory === "الكل"
      ? posts
      : posts.filter(post => post.category === activeCategory);
  const searchedPosts = filteredPosts.filter(post => {
    const term = search.trim().toLowerCase();
    if (!term) return true;
    return (
      post.title.toLowerCase().includes(term) ||
      post.category.toLowerCase().includes(term) ||
      post.excerpt.toLowerCase().includes(term)
    );
  });

  return (
    <>
      <section id='SeactionOneBlog' className='h-100 p-5 mt-5'>
        <div className="title text-center text-white pt-5">
          <span className='span rounded-pill p-2'>
            <i className="fa-solid fa-circle"></i> <i className="fa-solid fa-newspaper"></i>مدونتنا
          </span>
          <h2 className='py-4'>استكشف <span>مقالاتنا</span></h2>
          <p>اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث</p>
        </div>
      </section>
      <section id='SeactionTowBlog' className='p-5'>
        <div className="d-flex justify-content-around align-items-center gap-3 mb-4">
          <div className="mb-4">
            <input
              type="text"
              placeholder="ابحث في المقالات..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setVisiblePosts(6);
              }}
              className="form-control bg-black p-2 px-5"
            />
          </div>
          <div className="filter-buttons mb-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setVisiblePosts(6);
                }}
                className={activeCategory === category ? "active" : ""}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <hr className='text-white pb-4' />
        <div className="row">
          {searchedPosts.slice(0, visiblePosts).map((post) => (
            <Link
              to={`/blog/${post.id}`}
              className="col-md-4 card-list mb-4 text-decoration-none position-relative"
              key={post.id}
            >
              <div className="card p-0">
                <img
                  src={post.image}
                  className="w-100 img"
                  alt={post.author.name}
                />
                <div className=' position-absolute top-0 text-white bg-black rounded-pill p-1 '>
                  {post.tags[0]}
                </div>
                <div className="p-3">
                  <div className="d-flex">
                    <span className="badge-category mb-3">{post.readTime}</span>
                    <span className='me-3 text-dark-emphasis'>. {post.date}</span>
                  </div>
                  <h3 className="hero-title fs-3 mb-3">{post.title}</h3>
                  <p className="hero-desc">{post.excerpt}</p>
                  <hr />
                  <div className="d-flex align-items-center justify-content-between mt-4">
                    <div className="d-flex align-items-center gap-2">
                      <img
                        src={post.author.avatar}
                        className="author-img"
                        alt={post.author.name}
                      />
                      <div className='text-white'>
                        <p className="mb-0">{post.author.name}</p>
                        <small className="fs-6">{post.author.role}</small>
                      </div>
                    </div>
                    <span className="read-more">
                      <i className="fa-solid fa-angle-left"></i>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {visiblePosts < searchedPosts.length && (
          <div className="text-center mt-4">
            <button className="btn btn-outline-light px-4 py-2" onClick={handleLoadMore}>
              عرض المزيد
            </button>
          </div>
        )}
      </section>
    </>
  )
}
