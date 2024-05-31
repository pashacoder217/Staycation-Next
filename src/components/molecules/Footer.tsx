import React from "react";

export default function Footer() {
  return (
    <footer className="text-gray-300 py-10 mt-24">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h5 className="text-3xl font-semibold mb-4 text-black">
            <span className="text-cyan-800">Stay</span>cation
          </h5>
          <p>We kaboom your beauty holiday instantly and memorable.</p>
        </div>
        <div>
          <h5 className="text-lg font-semibold mb-4 text-cyan-800">
            For Beginners
          </h5>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-cyan-700">
                New Account
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-cyan-700">
                Start Booking a Room
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-cyan-700">
                Use Payments
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-lg font-semibold mb-4 text-cyan-800">
            Explore Us
          </h5>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-cyan-700">
                Cookies Policy
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-cyan-700">
                Our Careers
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-cyan-700">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-700">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-lg font-semibold mb-4 text-cyan-800">
            Connect Us
          </h5>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-cyan-700">
                diko.dev99@gmail.com
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-cyan-700">
                0823 - 8489 - 8030
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-cyan-700">
                Staycation, Bandar Lampung{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-12 mb-10">
        <p>&copy; Copyright 2024 • All rights reserved • Staycation</p>
      </div>
    </footer>
  );
}
