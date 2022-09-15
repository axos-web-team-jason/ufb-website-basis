import { useRouter } from "next/router";
import styles from "./ActiveLink.module.css";

function ActiveLink({ children, href }) {
  const router = useRouter();
  const style = {
    marginRight: 10,
    color: router.asPath === href ? "red" : "black",
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={router.asPath === href ? styles.navItemActive : styles.navItem}
    >
      {children}
    </a>
  );
}

export default ActiveLink;
