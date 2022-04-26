import { wrapper } from '../store/store'
import { Header, Layout, Nav } from "../components"
const App = ({ Component, pageProps}) => {
  return (<>
  <Nav/>
    <Header/>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default wrapper.withRedux(App)
