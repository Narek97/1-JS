import styles from "../styles/Home.module.css";
import MainLayout from "../layouts/MainLayout";

const Index = () => {
  return (
    <>
      <MainLayout>
        <div className={styles.center}>
          <h1>Welcome</h1>
          <h3>The best tracks are collected here</h3>
        </div>
      </MainLayout>
    </>
  );
};

export default Index;
