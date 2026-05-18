import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router";
const Footer = () => {
  return (
    <div className="bg-black p-10 md:p-20  rounded-t-2xl">
      <footer className="footer flex flex-col md:flex-row justify-between text-white gap-10">
        <nav className="flex-1 flex flex-col items-center md:items-start gap-3">
          <Link to={"/"} className="flex items-center justify-center gap-2">
            <img src={logo} className="w-10" alt="" />
            <p className="text-base md:text-xl font-bold text-primary">
              ScholarStream
            </p>
          </Link>
          <p className="text-accent">
            “Every dream deserves a chance to grow. We're here to guide you
            toward the future you imagine.”
          </p>
        </nav>
        <div className="flex-1 flex w-full justify-around">
          <nav className="flex items flex-col justify-between">
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover mb-1">Branding</a>
            <a className="link link-hover mb-1">Design</a>
            <a className="link link-hover mb-1">Marketing</a>
            <a className="link link-hover mb-1">Advertisement</a>
          </nav>
          <nav className="flex items flex-col justify-between">
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover mb-1">About us</a>
            <a className="link link-hover mb-1">Contact</a>
            <a className="link link-hover mb-1">Jobs</a>
            <a className="link link-hover mb-1">Press kit</a>
          </nav>
          <nav className="flex items flex-col justify-between">
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover mb-1">Terms of use</a>
            <a className="link link-hover mb-1">Privacy policy</a>
            <a className="link link-hover mb-1">Cookie policy</a>
          </nav>
        </div>
        <div className="flex-1 flex flex-col items-center text-center">
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="w-80">
            <label>Enter your email address</label>
            <div className="join mt-2">
              <input
                type="email"
                placeholder="identity@gmail.com"
                className="input input-bordered rounded-l-lg join-item outline-none text-black"
              />
              <button className="btn btn-primary rounded-r-lg join-item text-white">
                Subscribe
              </button>
            </div>
          </fieldset>
        </div>
      </footer>
      <hr className="my-10 text-primary w-full" />
      <small className="flex justify-center items-center w-full text-xs gap-1">
        <Link to={"/"} className="text-primary font-medium hover:underline">
          ScholarStream
        </Link>
        <span className="text-gray-400">
          - 2026 &copy; All Rights Reserved.
        </span>
      </small>
    </div>
  );
};

export default Footer;
