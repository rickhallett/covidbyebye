import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Covid Bye Bye</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.4.1/css/all.css"
          integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz"
          crossorigin="anonymous"
        />
      </Head>

      <main>
        <h1 className="title">
          Get <a href="https://nextjs.org">Tested!</a>
        </h1>

        <p className="description">
          No one wants to be a <span>covidiot</span>... go to
          <code>wisdom/my-tests</code>
        </p>

        <p className="description sub-description">
          Or fill in the form below:
        </p>

        {/* first and last name, email address, date of birth and phone number.  */}

        <div className="grid">
          <div className="card">
            <h4 className="inline">First Name &rarr;</h4>
            <input className="form-input" placeholder="Boris"></input>
            {/* <p>Find in-depth information about Next.js features and API.</p> */}
          </div>

          <div className="card">
            <h4 className="inline">Last Name &rarr;</h4>
            <input className="form-input" placeholder="Mugwump"></input>
          </div>

          <div className="card">
            <h4 className="inline">Date of Birth &rarr;</h4>
            <input
              className="form-input"
              placeholder="moderndaytyrant@fake.gov.uk"
            ></input>
          </div>

          <div className="card">
            <h4 className="inline">Phone &rarr;</h4>
            <input className="form-input" placeholder="Boris"></input>
          </div>

          <div className="card">
            <h4 className="inline">Consent &rarr;</h4>
            <input className="form-input" type="checkbox"></input>
            <p className="consent">
              I *firstname* *lastname* consent to the storing of my details for
              reasons of national security. I hereby release all consequences of
              giving this consent, and hope that future governments are
              basically nice people
            </p>
          </div>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .description span {
          font-size: 2rem;
          letter-spacing: 0.15rem;
          color: red;
        }

        .sub-description {
          color: grey;
          font-size: 1.3rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          margin-left: 0.5rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 900px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        .inline {
          display: inline;
        }

        .form-input {
          height: 1.5rem;
          font-size: 1rem;
        }

        .consent {
          font-size: 1px;
          color: red;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
