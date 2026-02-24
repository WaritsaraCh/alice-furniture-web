"use client";

import React from 'react';
import Link from 'next/link';
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
  MapPinIcon,
  PhoneIcon,
  MailIcon } from
'lucide-react';
export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Alice<span className="text-amber-500">Furniture Land</span>
            </h3>
            <p className="mb-4">
              Curating the finest furniture pieces for your home since 2010.
              Quality, style, and comfort are at the heart of everything we do.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors">

                <FacebookIcon size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors">

                <InstagramIcon size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors">

                <TwitterIcon size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors">

                <YoutubeIcon size={20} />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-amber-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="hover:text-amber-500 transition-colors">

                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-amber-500 transition-colors">

                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-amber-500 transition-colors">

                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-amber-500 transition-colors">

                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Customer Service
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/faq"
                  className="hover:text-amber-500 transition-colors">

                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="hover:text-amber-500 transition-colors">

                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/warranty"
                  className="hover:text-amber-500 transition-colors">

                  Warranty Information
                </Link>
              </li>
              <li>
                <Link
                  href="/payment"
                  className="hover:text-amber-500 transition-colors">

                  Payment Options
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-amber-500 transition-colors">

                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPinIcon size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>123 Furniture Lane, Design District, CA 90210</span>
              </li>
              <li className="flex items-center">
                <PhoneIcon size={20} className="mr-2 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <MailIcon size={20} className="mr-2 flex-shrink-0" />
                <span>support@alicefurnitureland.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p>© 2023 Alice Furniture Land. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <img
              src="https://cdn.pixabay.com/photo/2021/12/06/13/48/visa-6850402_1280.png"
              alt="Payment Methods"
              className="h-6" />

          </div>
        </div>
      </div>
    </footer>);

}