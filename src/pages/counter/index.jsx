
import HeaderFooterWraper from "../../app/components/layout/InitWraper";
import Counter from "../../Views/counter/Counter";
import styles from "../../Views/counter/Counter.module.css";

const index = () => {
  return (
    <HeaderFooterWraper>
      <header style={{display:"flex", flexDirection:"column", alignItems:"center"}} className={styles.header}>
        <img src="/logo.svg" style={{width:"20%"}} className={styles.logo} alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload....
        </p>
        <span>
          <span>Learn </span>
          <a
            className={styles.link}
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className={styles.link}
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className={styles.link}
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className={styles.link}
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </HeaderFooterWraper>
  );
};

export default index;
