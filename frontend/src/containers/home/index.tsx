import { observer } from 'mobx-react-lite'

import Banner from './banner'

const Home = () => {
  return (
    <>
      <div className="home-container">
        <Banner />
        {/* <Service /> */}
      </div>
    </>
  )
}

export default observer(Home)
