import { injectGlobal } from 'emotion'

export const globalStyling = () => {
    injectGlobal`
      * {
        box-sizing: border-box;
      }
      html,
      body {
        margin: 0;
        font-size: 14px;
      }
      body {
        font-family: 'Open Sans', sans-serif;
      }
`
}
