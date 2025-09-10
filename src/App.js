import React, { useState } from "react";
import SwimStyle from "./SwimStyle";
import CommentSection from "./CommentSection";
import "./App.css";

function App() {
  const [purchased, setPurchased] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [price] = useState(500000); // Giá cố định

  const handleBuy = () => {
    setShowConfirm(true);
  };

  const handleConfirm = () => {
    setShowConfirm(false);
    setPurchased(true);
  };

  const handleGoHome = (e) => {
    e.preventDefault();
    setPurchased(false);
    setShowConfirm(false);
  };

  return (
    <div className="container">
      <header>
        <img
          className="logo"
          src="https://thvnext.bing.com/th/id/OIP.uPBlaWpWPQm_sZtIPKIiHgAAAA?w=193&h=193&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.3&pid=1.7&rm=3"
          alt="Logo"
        />
        <h1>Khóa Học Bơi Lội Chuyên Nghiệp</h1>
        <div className="slogan">Học bơi an toàn - Tự tin dưới nước!</div>
        {purchased && (
          <nav>
            <a href="#home" onClick={handleGoHome}>
              Trang chủ
            </a>
            <a href="#styles">Các kiểu bơi</a>
            <a href="#discussion">Thảo luận</a>
          </nav>
        )}
      </header>
      <main>
        {!purchased ? (
          <section id="home">
            <div className="card-list">
              <div className="card">
                <div className="card-icon">🏊‍♂️</div>
                <div className="card-title">Khóa học bơi cơ bản</div>
                <div className="card-desc">
                  Hướng dẫn chi tiết các kiểu bơi, kỹ thuật chuẩn, video demo,
                  hỗ trợ thảo luận.
                </div>
                <div className="price-info">
                  Giá: <strong>{price.toLocaleString()} VNĐ</strong>
                </div>
                <button className="buy-btn" onClick={handleBuy}>
                  Mua khóa học
                </button>
              </div>
            </div>
            {showConfirm && (
              <div className="qr-section">
                <h3>Xác nhận thanh toán</h3>
                <p>
                  Sau khi thanh toán, nhấn xác nhận bên dưới để truy cập khóa
                  học.
                </p>
                <button className="confirm-btn" onClick={handleConfirm}>
                  Tôi đã thanh toán
                </button>
              </div>
            )}
          </section>
        ) : (
          <>
            <section id="styles">
              <SwimStyle />
            </section>
            <section id="discussion">
              <CommentSection />
            </section>
          </>
        )}
      </main>
      <footer>
        <div className="footer-info">
          Liên hệ: 0877 153 142 | 23520014@gm.uit.edu.vn
        </div>
        <div className="social-icons">
          <a
            href="https://www.facebook.com/2im.XjAnuaa"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            title="Facebook"
            style={{ textDecoration: "none" }}
          >
            <i className="fab fa-facebook"></i> Facebook
          </a>
          <button type="button" title="Zalo" className="social-btn">
            0877 153 142
          </button>
        </div>
        <p>&copy; 2025 Khóa Học Bơi Lội Chuyên Nghiệp</p>
      </footer>
    </div>
  );
}

export default App;
