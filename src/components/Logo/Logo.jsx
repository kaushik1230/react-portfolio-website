import React from "react";
// import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div style={{ padding: "5px 15px" }}>
      <LogoSvg color="white" width={40} height={40} />
    </div>
  );
};

const LogoSvg = ({ color, width, height }) => (
  <text
    x="50%"
    y="50%"
    fontSize="100rem"
    fill="black"
    fontFamily="Arial, sans-serif"
    fontWeight="bold"
    textAnchor="middle"
    dominantBaseline="middle"
  ></text>
);

export default Logo;
