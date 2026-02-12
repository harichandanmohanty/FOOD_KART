const HeaderComponent = () => {
  return (
    <header>
      <h1>Welcome to Food Kart</h1>
      <nav>
        <a href="/" className="nav-element">
          Home
        </a>
        <a href="/about" className="nav-element">
          About
        </a>
        <a href="/contact" className="nav-element">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default HeaderComponent;