
import React from 'react'
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <>

<footer className="footer">
  <div className="footer-container">

    <div className="footer-col brand">
      <div className="brand-title">
        <span className="brand-icon">ع</span>
        <h3>عدسة</h3>
      </div>
      <p>
        مدونة متخصصة في فن التصوير الفوتوغرافي،
        نشارك معكم أسرار المحترفين ونصائح عملية
        لتطوير مهاراتكم.
      </p>

      <div class="social-icons">
        <a href="#"><i className="fa-brands fa-youtube"></i></a>
        <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
        <a href="#"><i className="fa-brands fa-github"></i></a>
        <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
      </div>
    </div>

    <div className="footer-col">
      <h4>استكشف</h4>
      <ul>
        <li><Link to={`./`}>الرئيسية</Link></li>
        <li><Link to={`./blog`}>المدونة</Link></li>
        <li><Link to={`./about`}>من نحن</Link></li>
      </ul>
    </div>

    <div className="footer-col">
      <h4>التصنيفات</h4>
      <ul>
        <li><Link to={`./blog`}>إضاءة</Link></li>
        <li><Link to={`./blog`}>بورتريه</Link></li>
        <li><Link to={`./blog`}>مناظر طبيعية</Link></li>
        <li><Link to={`./blog`}>تقنيات</Link></li>
      </ul>
    </div>

    <div className="footer-col newsletter">
      <h4>ابقى على اطلاع</h4>
      <p>اشترك للحصول على أحدث المقالات والتحديثات</p>

<input
  type="email"
  className="newsletter-input"
  placeholder="أدخل بريدك الإلكتروني"
/>      
 <button>اشترك</button>
    </div>
  </div>
  <div className="footer-bottom">
    <p>© 2026 عدسة. صُنع بكل <i class="fa-solid fa-heart"></i> جميع الحقوق محفوظة.</p>
    <div className="bottom-links">
      <a href="#">سياسة الخصوصية</a>
      <a href="#">شروط الخدمة</a>
    </div>
  </div>
</footer>
 </>
 )
}
