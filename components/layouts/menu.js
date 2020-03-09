import Link from 'next/link';

const menuContainerStyle = {
  width: "100%"
};

const Menu = () => (
  <div className="menuContainer" style={menuContainerStyle}>
    <div className="logo">
      <img loading="lazy" src="/assets/imgs/jos-de-berdt-logo.jpg" alt="Jos De Berdt"/>
    </div>
    <div className="menu">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>Who</a>
      </Link>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
    </div>
  </div>
);

export default Menu;