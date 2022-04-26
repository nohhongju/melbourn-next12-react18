import Head from "next/head"

export function Layout({ children }){
  return (
        <main className="layout" >
        <Head> <title> Next Framework</title> </Head>
        {children}
      </main>
  );
}
