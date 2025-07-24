import React from 'react';

export default function Footer() {
  return (
    <>
      <style>{`
        .footer {
          background: linear-gradient(to right, #1e3a8a, #2563eb);
          color: #f1f5f9;
          padding: 24px 48px;
          font-family: 'Segoe UI', sans-serif;
        }

        .footer-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          flex-wrap: wrap;
        }

        .footer-contact, .footer-copy {
          font-size: 1.1rem;
          position: relative;
          left: 0 px;
        }

        .footer-contact strong {
          font-size: 1.2rem;
          display: block;
          margin-bottom: 4px;
        }

        .footer-contact a {
          color: #dbeafe;
          text-decoration: underline;
        }

        @media (max-width: 640px) {
          .footer-container {
            flex-direction: column;
            gap: 12px;
            text-align: center;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-contact">
            <strong>Contact Us:</strong>
            Email: <a href="mailto:support@rozgaryojna.in">support@rozgaryojna.in</a><br />
            Phone: +91 98765 43210
          </div>
          <div className="footer-copy">
            © {new Date().getFullYear()} RozgarYojna. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
