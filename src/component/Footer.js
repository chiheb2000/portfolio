import React from 'react';



export default function Footer() {
  return (
    <footer className="footer bg-dark text-white text-center">
      <div className="bg-secondary py-2">
        <div className="container text-center">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} My Website. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
