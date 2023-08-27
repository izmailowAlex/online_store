import React from 'react'

import './Footer.css'

function Footer (): JSX.Element {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="contributors">
          <a
            href="https://github.com/izmailowAlex"
            className="contributors__link github"
            rel="noreferrer"
            target="_blank"
          >
            <span className="contributors__item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                  <path
                    d="M14.883,0a14.885,14.885,0,0,0-4.7,29.007c.743.136,1.015-.324,1.015-.719,0-.352-.013-1.289-.02-2.53-4.14.9-5.014-2-5.014-2a3.948,3.948,0,0,0-1.653-2.177c-1.351-.923.1-.905.1-.905A3.124,3.124,0,0,1,6.9,22.214a3.167,3.167,0,0,0,4.332,1.237,3.188,3.188,0,0,1,.944-1.99c-3.308-.375-6.78-1.652-6.78-7.356a5.755,5.755,0,0,1,1.532-3.993A5.363,5.363,0,0,1,7.07,6.173s1.25-.4,4.093,1.526a14.11,14.11,0,0,1,7.453,0C21.456,5.773,22.7,6.173,22.7,6.173a5.348,5.348,0,0,1,.148,3.939,5.743,5.743,0,0,1,1.53,3.993c0,5.718-3.479,6.976-6.8,7.345a3.553,3.553,0,0,1,1.01,2.756c0,1.989-.018,3.595-.018,4.082,0,.4.268.862,1.023.717A14.886,14.886,0,0,0,14.883,0Z"
                    fill="#b4b4b4"
                  />
                </svg>
            </span>
            <span className="contributors__item item__title">Aleksandr Izmailow</span>
          </a>
        </div>
        <div className="footer__copyright">2023, All Rights Reserved</div>
      </div>
    </footer>
  )
}

export default Footer
