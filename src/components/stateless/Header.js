export default function Header() {
  return (
    <header className="headerContainer">
      <div className="iconSide">
        <img src="ff.png" width={30} height={30} />
      </div>
      <div className="navigationItemsSide">
        <a href="#">About</a>
        <a href="#">Experience</a>
        <a href="#">Work</a>
        <a href="#">Contact</a>
        <button>Resume</button>
      </div>
    </header>
  );
}
