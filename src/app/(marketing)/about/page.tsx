"use client";

import { storeLocations, teamMembers } from '@/features/marketing/data/abouts.mock';
import React from 'react';

export default function About() {
  return (
    <main className="w-full bg-white">
      {/* Page Header */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Learn about our story, our mission, and the people behind Alice
            Furniture Land
          </p>
        </div>
      </div>
      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                Alice Furniture Land was founded in 2010 by Alice Johnson, who
                had a vision to create beautiful, high-quality furniture that
                would be accessible to everyone. What started as a small
                workshop in Los Angeles has grown into a nationwide brand with
                showrooms across the country.
              </p>
              <p className="text-gray-600 mb-4">
                Our journey has been guided by a simple philosophy: furniture
                should be well-made, beautiful, and bring joy to the homes it
                inhabits. We work with skilled craftspeople and designers who
                share our passion for quality and sustainability.
              </p>
              <p className="text-gray-600">
                Today, we're proud to offer a diverse collection of furniture
                that blends timeless design with modern sensibilities, all while
                maintaining our commitment to quality and customer satisfaction.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Alice Furniture Land workshop"
                  className="rounded-lg shadow-lg" />

                <div className="absolute -bottom-6 -right-6 bg-amber-600 p-6 rounded-lg shadow-lg">
                  <p className="text-white font-bold text-xl">Since 2010</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />

                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Quality</h3>
              <p className="text-gray-600">
                We believe in creating furniture that lasts. Every piece is
                crafted with attention to detail and made from the finest
                materials to ensure durability and longevity.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />

                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Design</h3>
              <p className="text-gray-600">
                We're passionate about design that balances form and function.
                Our pieces are thoughtfully designed to be beautiful,
                comfortable, and practical for everyday living.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />

                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Sustainability
              </h3>
              <p className="text-gray-600">
                We're committed to responsible sourcing and production
                practices. We work with suppliers who share our values and
                continuously strive to reduce our environmental footprint.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) =>
            <div key={index} className="text-center">
                <div className="mb-4 relative">
                  <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover" />

                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-amber-600 mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Store Locations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Visit Our Stores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {storeLocations.map((location, index) =>
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md">

                <img
                src={location.image}
                alt={`${location.city} store`}
                className="w-full h-48 object-cover" />

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {location.city}
                  </h3>
                  <p className="text-gray-600 mb-2">{location.address}</p>
                  <p className="text-gray-600 mb-2">{location.phone}</p>
                  <p className="text-gray-600">{location.hours}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>);

}