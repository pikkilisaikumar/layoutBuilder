import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="overallcontaiener">
          {showLeftNavbar === true && (
            <div className="leftnabar-container">
              <h1>Left Navbar Menu</h1>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </div>
          )}
          {showContent === true && (
            <div className="content-conainer">
              <h1>Content</h1>
              <p>
                Lorem ipsum dolor sit amet ,consectetur adipiscing elit ,sed do
                elusmod tempor incididunt ut labore et dolore magna alique Ut
                enim ad minum veniam.
              </p>
            </div>
          )}
          {showRightNavbar === true && (
            <div className="leftnabar-container1">
              <h1>Right Navbar Menu</h1>
              <div className="add1container">
                <p>Ad 1</p>
              </div>
              <div className="add1container">
                <p>Ad 2</p>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
