import { getSession } from 'next-auth/react';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const Banner = dynamic(() => import('../components/Banner'), {
  ssr: false,
});
const ProductFeed = dynamic(() => import('../components/ProductFeed'), {
  ssr: false,
});
const Header = dynamic(() => import('../components/Header'), {
  ssr: false,
});

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon</title>
      </Head>
      <Header />

      <main className="max-w-screen-2xl mx-auto">
        <Banner />

        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export const getServerSideProps = async context => {
  const session = await getSession(context);
  const products = await fetch('https://fakestoreapi.com/products').then(res =>
    res.json()
  );

  return {
    props: {
      products,
      session,
    },
  };
};
