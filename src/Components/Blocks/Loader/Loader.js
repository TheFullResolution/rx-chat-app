import * as style from './Loader.scss'

import React from 'react'

export const Loader = () => (
  <div className={style.loader}>
    <div className={style.wrapper}>
      <p className={style.loaderText}>Loading</p>
    </div>
    <img src="img/index.flask-loader.svg" alt="loader icon" />
  </div>
)
