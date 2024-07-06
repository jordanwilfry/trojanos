"use client"

import Link from "next/link";
import { motion } from 'framer-motion';
import { useState } from 'react';

export function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log('Subscribed:', email);
    setEmail('');
  };

  const footerSections = [
    {
      title: "About Us",
      links: [
        { name: "Our Mission", href: "/mission" },
        { name: "Team", href: "/team" },
        { name: "Partners", href: "/partners" },
        { name: "Sustainability", href: "/sustainability" },
      ],
    },
    {
      title: "Farmers",
      links: [
        { name: "Join the Network", href: "/join" },
        { name: "Resources", href: "/resources" },
        { name: "Training Programs", href: "/training" },
        { name: "Success Stories", href: "/success-stories" },
      ],
    },
    {
      title: "Buyers",
      links: [
        { name: "Shop Fresh Produce", href: "/shop" },
        { name: "Bulk Orders", href: "/bulk-orders" },
        { name: "Delivery Information", href: "/delivery" },
        { name: "Quality Guarantee", href: "/quality" },
      ],
    },
  ];

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className=""
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center" prefetch={false}>
              <LeafIcon className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">Cameroon Fresh</span>
            </Link>
            <p className="text-sm ">
              Empowering farmers, reducing waste, and bringing fresh produce to communities across Cameroon.
            </p>
            <div className="flex space-x-4">
              <a href="#" className=" hover transition-colors">
                <FacebookIcon className="h-6 w-6" />
              </a>
              <a href="#" className=" hover transition-colors">
                <TwitterIcon className="h-6 w-6" />
              </a>
              <a href="#" className=" hover transition-colors">
                <InstagramIcon className="h-6 w-6" />
              </a>
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className=" hover transition-colors" prefetch={false}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <form onSubmit={handleSubmit} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2"
                required
              />
              <button
                type="submit"
                className="w-full px-3 py-2  rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                Subscribe to Newsletter
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm ">&copy; 2024 Cameroon Fresh. All rights reserved.</p>
          <div className="mt-4 sm:mt-0">
            <Link href="/privacy" className="text-sm  hover mr-4" prefetch={false}>Privacy Policy</Link>
            <Link href="/terms" className="text-sm  hover" prefetch={false}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

function LeafIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function FacebookIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}