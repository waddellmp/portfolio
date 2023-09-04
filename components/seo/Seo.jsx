import Head from 'next/head';

const Seo = ({ pageTitle }) => (
    <>
        <Head>
            <title>{pageTitle && `${pageTitle} || Matthew Waddell - Portfolio Site}`}</title>
        </Head>
    </>
);

export default Seo;
