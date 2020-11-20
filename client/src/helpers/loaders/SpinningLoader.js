import '../../styles/loaders/Loader.scss'


import React from 'react'





function SpinningLoader() {
  return (
    <div className="container myLoaderHolder">
      <div>
        <h3 className="myLoadingTitle">Loading...</h3>
        <div class="spinner">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default SpinningLoader
