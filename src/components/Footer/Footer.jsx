import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-slate-950 p-10 md:p-20 rounded-t-2xl">
      <footer className="footer flex flex-col md:flex-row justify-between text-white gap-10">
        {/* Logo & Description */}
        <nav className="flex-1 flex flex-col items-center md:items-start gap-3">
          <Link to={"/"} className="flex items-center justify-center gap-2">
            <img src={logo} className="w-10" alt="ScholarStream Logo" />

            <p className="text-base md:text-xl font-bold text-primary">
              ScholarStream
            </p>
          </Link>

          <p className="text-gray-300 max-w-sm">
            Every dream deserves a chance to grow. We're here to guide you
            toward the future you imagine through scholarship opportunities from
            top universities around the world.
          </p>
        </nav>

        {/* Footer Links */}
        <div className="flex-1 flex w-full justify-around">
          {/* Scholarships */}
          <nav className="flex flex-col space-y-3">
            <h6 className="footer-title">Scholarships</h6>

            <Link to="/scholarships" className="link link-hover mb-2">
              All Scholarships
            </Link>

            <Link to="/scholarships" className="link link-hover mb-2">
              Fully Funded
            </Link>

            <Link to="/scholarships" className="link link-hover mb-2">
              Partial Funded
            </Link>

            <Link to="/scholarships" className="link link-hover mb-2">
              Study Abroad
            </Link>
          </nav>

          {/* Support */}
          <nav className="flex flex-col space-y-3">
            <h6 className="footer-title">Support</h6>

            <Link to="/contact-support" className="link link-hover mb-2">
              Contact Support
            </Link>

            <Link to="/dashboard" className="link link-hover mb-2">
              Dashboard
            </Link>

            <Link
              to="/dashboard/my-applications"
              className="link link-hover mb-2"
            >
              My Applications
            </Link>

            <Link to="/dashboard/my-profile" className="link link-hover mb-2">
              My Profile
            </Link>
          </nav>

          {/* Legal */}
          <nav className="flex flex-col space-y-3">
            <h6 className="footer-title">Legal</h6>

            <a className="link link-hover mb-2">Terms & Conditions</a>

            <a className="link link-hover mb-2">Privacy Policy</a>

            <a className="link link-hover mb-2">Cookie Policy</a>
          </nav>
        </div>

        {/* Social Links */}
        <div className="flex-1 flex flex-col items-center text-center">
          <h6 className="footer-title">Follow Us</h6>

          <p className="text-gray-400 mb-5 max-w-xs">
            Stay connected and receive updates about scholarships, study abroad
            opportunities, and student success stories.
          </p>

          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-500 transition flex items-center justify-center"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-[#E43467] transition flex items-center justify-center"
            >
              <FaInstagram />
            </a>

            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-black transition flex items-center justify-center"
            >
              <FaXTwitter />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-[#0A66C2] transition flex items-center justify-center"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-red-500 transition flex items-center justify-center"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </footer>

      <hr className="my-10 border-primary/30" />

      <small className="flex justify-center items-center w-full text-xs gap-1">
        <Link to={"/"} className="text-primary font-medium hover:underline">
          ScholarStream
        </Link>

        <span className="text-gray-400">- 2026 © All Rights Reserved.</span>
      </small>
    </div>
  );
};

export default Footer;
