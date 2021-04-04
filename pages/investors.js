import Head from 'next/head'

import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'

/* Component imports */
import GlobalHead from "../components/head/globalhead";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import PostItem from "../components/postitem/postitem";

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default function Investors({ allPostsData }) {
    return (
        <>
            <Head>
                <GlobalHead/>
                <title>Investors – Wyona</title>
                <meta name="description" content="Wyona investors page" />
            </Head>
            <Header color={"white"}/>
            <main className="padding--top--header margin--bottom--layout-06">
                <section className="margin--top--layout-06 flex-direction--column flex--align-items--center">
                    <div className="bx--grid flex-direction--column">
                        <h1 className="margin--top--spacing-04 expressive-heading-05">Investor Relations</h1>
                        <p className="margin--top--spacing-06 text-length--02">TODO</p>
                        <h2 className={"expressive-heading-04 margin--top--layout-05"}>Latest News</h2>
                        <ul className="ul--no-styles flex flex-wrap--wrap flex-direction--column margin--top--spacing-06">
                            {allPostsData.map(({ id, date, title }) => (
                                <PostItem id={id} date={date} title={title}></PostItem>
                            ))}
                        </ul>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}
