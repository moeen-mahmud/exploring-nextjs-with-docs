import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Hi there!</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I'm Moeen, a human and a web developer who loves the Frontend.
          <style jsx>{`
            p {
              font-weight: bold;
              color: #0070f3;
            }
          `}</style>
        </p>
        <p>
          This is my first ever{" "}
          <span>
            serious
            <style jsx>{`
              span {
                font-weight: 500;
                font-style: italic;
              }
            `}</style>
          </span>{" "}
          <span>
            Next.js{" "}
            <style jsx>{`
              span {
                color: #0070f3;
              }
            `}</style>
          </span>{" "}
          project
        </p>
      </section>
    </Layout>
  );
}
