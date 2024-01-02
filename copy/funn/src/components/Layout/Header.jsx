import Button from "../UI/Button";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <>
      <header className={classes.header}>
        <h1>Redux Store</h1>

        <nav>
          <ul>
            <li>
              <Button />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
