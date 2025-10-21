import React from "react";
import { FaHeart } from "react-icons/fa";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 p-4 text-center">
      <p className="flex items-center justify-center gap-2 m-0">
        <span>© 2025 Archi's Academy. All Rights Reserved.</span>
        <FaHeart className={styles.footerIcon} />
      </p>
    </footer>
  );
};

export default Footer;
