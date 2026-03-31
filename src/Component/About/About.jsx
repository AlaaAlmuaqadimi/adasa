import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function About() {

  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await axios.get('http://localhost:3001/posts');
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    < >
      <section id='AboutOne' className='p-5 bg_color vh-100'>
        <div className="text-center">
          <h2 className="pt-5 mt-5">
            مهمتنا هي <span>الإعلام والإلهام</span>
          </h2>
          <p className="  mt-4 mx-auto">
            مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم
            أسرار المحترفين ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية
            مهاراتهم من خلال محتوى عالي الجودة.    </p>
        </div>
        <div className="row g-4 justify-content-center mt-5">
          <div className="col-6 col-md-3">
            <div className="stat-card">
              <i className="fa-solid fa-users"></i>
              <h3>2+ مليون</h3>
              <p>قارئ شهريًا</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="stat-card">
              <i className="fa-solid fa-newspaper"></i>
              <h3>500+</h3>
              <p>مقالة منشورة</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="stat-card">
              <i className="fa-solid fa-book"></i>
              <h3>50+</h3>
              <p>كاتب خبير</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="stat-card">
              <i className="fa-solid fa-book-open"></i>
              <h3>15+</h3>
              <p>تصنيف</p>
            </div>
          </div>
        </div>
      </section>
      <section class="py-5 bg_color text-white">
        <div class="container text-center">
          <h2 class="section-title mb-3">قيمنا</h2>
          <p class="text-secondary mb-5">المبادئ التي توجه كل ما نقوم بإنشائه</p>
          <div class="row g-4">
            <div class="col-md-6 col-lg-3">
              <div class="value-card">
                <div class="value-icon">
                  <i class="bi bi-arrow-repeat"></i>
                </div>
                <h5>دائمًا نحدّث</h5>
                <p>أحدث الاتجاهات وأفضل الممارسات</p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="value-card">
                <div class="value-icon">
                  <i class="bi bi-people-fill"></i>
                </div>
                <h5>المجتمع</h5>
                <p>تعلّم مع آلاف المصورين</p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="value-card">
                <div class="value-icon">
                  <i class="bi bi-lightning-charge-fill"></i>
                </div>
                <h5>تركيز عملي</h5>
                <p>أمثلة واقعية يمكنك تطبيقها اليوم</p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="value-card">
                <div class="value-icon">
                  <i class="bi bi-bullseye"></i>
                </div>
                <h5>الجودة أولًا</h5>
                <p>محتوى مدروس ومكتوب بخبرة</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='SeactionTowAbout'>
        <div className="container">
          <div className="row p-5 g-4">
            {posts.map((post) => (
              <div className="col-md-4 " key={post.id}>
                <div className="profile-card text-center p-4">
                  <div className="avatar-wrapper mb-3">
                    <img className='rounded-circle' src={post.author.avatar} alt={post.author.name} />
                    <span className="check"><i class="fa-solid fa-check"></i></span>
                  </div>
                  <h5 className="text-white mb-1">
                    {post.author.name}
                  </h5>
                  <p className="role mb-3">
                    {post.author.role}
                  </p>
                  <div className="social d-flex justify-content-center gap-2">
                    <button className="icon-btn"><i className="fa-brands fa-x-twitter"></i></button>
                    <button className="icon-btn"><i className="fa-brands fa-github"></i></button>
                    <button className="icon-btn"><i className="fa-brands fa-linkedin"></i></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
