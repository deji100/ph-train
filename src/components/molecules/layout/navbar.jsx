const Navbar = () => {
  return (
    <nav>
      <div className="top-nav">
        <div className="inner-top">
          <p className="ph">PORT-HACOURT ABA RAILWAY E-TICKETING PLATFORM</p>
          <div className="sign-in">
            <p>Sign Up</p>|<p>Login</p>
          </div>
        </div>
      </div>
      <div className="bottom-nav">
        <div className="inner-bottom">
          <div className="links">
            <p>Home</p>
            <p>Shopping Cart</p>
            <p>Information</p>
            <p>Purchase History</p>
          </div>
          <div className="others">
            <p>
              TRAIN SCHEDULE{" "}
              <span class className="material-symbols-outlined">
                expand_more
              </span>
            </p>
            |
            <p>
              Help{" "}
              <span class className="material-symbols-outlined">
                expand_more
              </span>
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
