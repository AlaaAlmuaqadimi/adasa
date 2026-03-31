
import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {

  const [posts, setPosts] = useState([])

  const gatPosts = async () => {

    try {
      const response = await axios.get(`http://localhost:3001/posts`)
      console.log(response)
      setPosts(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    gatPosts()

  }, [])

  return (
    <>
      <section id='sectionHomeOne' className=' section-hero '>
        <div className='p-5 m-5'>
          <div className="title-section1 text-center ">
            <span className=' span rounded-pill px-3 py-2 '> <i className="fa-solid fa-circle"></i><i className="fa-solid me-1 fa-circle"></i>مرحباً بك في عدسة</span>
            <h1 className='fw-bolder mt-5 hero-title'>اكتشف <span>فن</span>
              <br /> التصوير الفوتوغرافي</h1>
            <p className='m-3 fs-4 text-mute'>انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في  <br />التصوير.</p>
            <div className='m-4'>
              <button type="button" className="btn  rounded-pill m-2 btn-lg"> استكشف المقالات<i className="fa-solid me-2 fa-arrow-left-long"></i></button>
              <button type="button" className="btn  rounded-pill m-2 border btn-lg"> <i className="fa-solid ms-2 fa-circle-info"></i>اعرف المزيد</button>
            </div>
          </div>
          <div>
            <div className="row row-cols-1 row-cols-md-5 g-3 text-center m-auto">
              <div className="col  card-hero">
                <span><i className="fa-solid fa-newspaper"></i></span>
                <h5 className="card-title">+50</h5>
                <p className=' fs-6'>مقالة</p>
              </div>
              <div className="col card-hero">
                <span><i className="fa-solid fa-users"></i></span>
                <h5 className="card-title">+10ألف</h5>
                <p className=' fs-6'>قارئ</p>
              </div>
              <div className="col card-hero">
                <span><i className="fa-solid fa-folder-open"></i></span>
                <h5 className="card-title">4</h5>
                <p className='fs-6'>تصنيفات</p>
              </div>
              <div className="col card-hero">
                <span><i className="fa-solid fa-pen-nib"></i></span>
                <h5 className="card-title">6</h5>
                <p className='fs-6'>كاتب</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='sectionHomeTow' className='p-5  border'>
        <div className='title2'>
          <span className='span  rounded-pill px-3 py-1 '> <i className="fa-solid fa-circle"></i><i className="fa-solid me-1 fa-circle"></i>مميز</span>
          <h2 className='pt-4'>مقالات مختارة</h2>
          <div className='d-flex pt-3 justify-content-between'>
            <p>محتوى منتقى لبدء رحلة تعلمك</p>
            <Link to="/blog" className="ms-2 text-decoration-none">
              <button className="btn-all"> عرض الكل <i class="fa-solid fa-angle-left"></i>   </button>
            </Link>
          </div>
          <div className=" py-5">
            {posts.slice(0, 3).map((post) => (
              <Link
                to={`/blog/${post.id}`}
                className="hero-card2 text-decoration-none my-4 d-flex flex-column border flex-lg-row overflow-hidden">
                <div className="hero-image">
                  <span className="badge-featured text-white"><i class="fa-solid  fa-star"></i> مميز</span>
                  <img
                    src={post.image}
                    className="img-fluid h-100 w-100 object-fit-cover"
                    alt={post.author.name}
                  />
                </div>
                <div className="hero-content p-4 d-flex flex-column justify-content-between">
                  <div>
                    <div className=' d-flex  text-black'>
                      <span className=' tags ms-2 pb-0'>{post.tags[0]}</span>
                      <span className="badge-category mb-3 ">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="hero-title fs-3 mb-3">
                      {post.title}
                    </h3>
                    <p className="hero-desc">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mt-4">
                    <div className="d-flex align-items-center gap-2">
                      <img
                        src={post.author.avatar}
                        className="author-img"
                        alt={post.author.name}
                      />
                      <div>
                        <p className=" mb-0">{post.author.name}</p>
                        <small className="date">{post.date}</small>
                      </div>
                    </div>
                    <span className="read-more"> اقرأ المقال <i className="fa-solid fa-arrow-left"></i></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section id='seactionHomeThree' className='p-5'>
        <div className=" text-center">
          <span className=' span rounded-pill px-5  py-1 '> <i className="fa-solid fa-circle"></i><i className="fa-solid me-1 fa-circle"></i>التصنيفات
          </span>
          <h2 className='text-white pt-4 fw-bolder'>استكشف حسب الموضوع</h2>
          <p className=' text-white pt-2 pb-4'>اعثر على محتوى مصمم حسب اهتماماتك
          </p>
        </div>
        <div>
          <div className='row g-3 m-auto pe-5 text-decoration-none '>
            <div className="col-md-2 position-relative card-box col-6">
              <Link className='card-custom3 text-decoration-none py-3' to={`/blog?category==إضاءة`}>
                <div className='position-relative z-10'>
                  <div className=' mb-4 me-2 icon-box-custom'>
                    <i className='fa-solid fa-sun icon-sun'></i>
                  </div>
                  <h3 className='title-card3 mb-1'>إضاءة</h3>
                  <p className='card-desc mb-0'>3 مقالة</p>
                  <div className='icon-circle position-absolute'>
                    <i className="fa-solid fa-angle-left"></i>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-2 card-box col-6">
              <Link className='card-custom3 text-decoration-none py-3' to={`/blog?category= بورتريه`}>
                <div className='position-relative z-10'>
                  <div className='d-flex me-2 mb-4 icon-box-custom'>
                    <i className='fa-solid fa-user icon-sun'></i>
                  </div>
                  <h3 className='title-card3 mb-1'>بورتريه</h3>
                  <p className='card-desc mb-0'>3 مقالة</p>
                  <div className='icon-circle position-absolute'>
                    <i className="fa-solid fa-angle-left"></i>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-2 card-box col-6">
              <Link className='card-custom3 text-decoration-none py-3' to={`/blog?category=مناظرطبيعية`}>
                <div className='position-relative z-10'>
                  <div className='d-flex me-2 mb-4 icon-box-custom'>
                    <i className='fa-solid fa-mountain-sun icon-sun'></i>
                  </div>
                  <h3 className='title-card3 mb-1'>مناظر طبيعية</h3>
                  <p className='card-desc mb-0'>2 مقالة</p>
                  <div className='icon-circle position-absolute'>
                    <i className="fa-solid fa-angle-left"></i>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-3 card-box col-6">
              <Link className='card-custom3  text-decoration-none py-3' to={`/blog?category=تقنيات`}>
                <div className='position-relative z-10'>
                  <div className='d-flex me-2 mb-4 icon-box-custom'>
                    <i className='fa-solid fa-sliders icon-sun'></i>
                  </div>
                  <h3 className='title-card3 mb-1'>تقنيات</h3>
                  <p className='card-desc mb-0'>5 مقالة</p>
                  <div className='icon-circle position-absolute'>
                    <i className="fa-solid fa-angle-left"></i>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-3 card-box col-6">
              <Link className='card-custom3 text-decoration-none py-3' to={`/blog?category=معدات`}>
                <div className='position-relative z-10'>
                  <div className='d-flex me-2 mb-4 icon-box-custom'>
                    <i className='fa-solid fa-sun icon-sun'></i>
                  </div>
                  <h3 className='title-card3 mb-1'>معدات</h3>
                  <p className='card-desc mb-0'>3 مقالة</p>
                  <div className='icon-circle position-absolute'>
                    <i className="fa-solid fa-angle-left"></i>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id='seaction4' className='p-5'>
        <span className='span  rounded-pill px-3 py-1 '> <i className="fa-solid fa-circle"></i><i className="fa-solid me-1 fa-circle"></i>
          الأحدث
        </span>
        <h2 className='text-white my-4 '>أحدث المقالات</h2>
        <div className='d-flex text-white py-3 justify-content-between'>
          <p>محتوى جديد طازج من المطبعة</p>
          <Link to="/blog" className="ms-2 text-decoration-none">
            <button className="btn-allArticl "> عرض جميع المقالات <i class="fa-solid fa-arrow-left"></i> </button>
          </Link>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {posts.slice(3, 6).map((post) => (
            <Link
              to={`/blog/${post.id}`}
              className="col card-list text-decoration-none position-relative" >
              <div className="card p-0">
                <img
                  src={post.image}
                  className="w-100 img "
                  alt={post.author.name}
                />
                <div className=' position-absolute top-0 text-white bg-black rounded-pill p-1 '>
                  {post.tags[0]}
                </div>
                <div className="p-3">
                  <div className="d-flex">
                    <span className="badge-category mb-3">
                      {post.readTime}
                    </span>
                    <span className='me-3  text-dark-emphasis'>. {post.date}</span>
                  </div>
                  <h3 className="hero-title fs-3 mb-3">
                    {post.title}
                  </h3>
                  <p className="hero-desc">
                    {post.excerpt}
                  </p>
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
                        <small >{post.author.role}</small>
                      </div>
                    </div>
                    <span className="read-more"> <i class="fa-solid fa-angle-left"></i></span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className='py-6 position-relative overflow-hidden section-dark-y'>
        <section className="newsletter-section">
          <div className="newsletter-card">
            <div className="icon-box">
              <i className="fa-regular fa-envelope"></i>
            </div>
            <h2>
              اشترك في <span>نشراتنا الإخبارية</span>
            </h2>
            <p>
              احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
            </p>
            <div className="newsletter-form">
              <input
                type="email"
                className="newsletter-input"
                placeholder="أدخل بريدك الإلكتروني"
              />  
              <button>اشترك الآن</button>
            </div>
            <div className="newsletter-footer">
              <span><b>+10,000</b> مصور</span>
              <span>بدون إزعاج</span>
              <span>إلغاء الاشتراك في أي وقت</span>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}
