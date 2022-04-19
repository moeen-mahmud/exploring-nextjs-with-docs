import Head from "next/head";
import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
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
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
