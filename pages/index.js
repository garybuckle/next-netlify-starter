import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="banner">
        <h1>garybuckle</h1>
      </div>

      <main>
        <Header title="let the wild rumpus start!" />
        <p className="description">
          garybuckle started editing at <code>pages/index.js</code>
          installed tailwind and then disabled it!
        </p>
      </main>

      <Footer />
    </div>
  )
}
