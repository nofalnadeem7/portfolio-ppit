import React from "react";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-900 via-black to-purple-900 text-gray-300 py-8 mt-10 text-center">
      <div className="flex justify-center gap-6 mb-4 text-2xl">
        <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors">
          <GithubOutlined />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors">
          <LinkedinOutlined />
        </a>
      </div>
      <p className="text-sm text-gray-500">© {new Date().getFullYear()} AI Team. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
