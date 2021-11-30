import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
        showContent,
        showLeftNavbar,
        showRightNavbar,
      } = value

      const firstcheckbox = () => {
        onToggleShowContent(showContent)
      }

      const secondcheckbox = () => {
        onToggleShowLeftNavbar(showLeftNavbar)
      }

      const thirdhcheckbox = () => {
        onToggleShowRightNavbar(showRightNavbar)
      }

      return (
        <div className="containercontroller">
          <h1 className="layout-heading">Layout</h1>
          <div className="checkboxcontainer">
            {showContent === true ? (
              <input
                type="checkbox"
                id="checkbox"
                onChange={firstcheckbox}
                value={showContent}
                checked
              />
            ) : (
              <input
                type="checkbox"
                id="checkbox"
                onChange={firstcheckbox}
                value={showContent}
              />
            )}
            <label htmlFor="checkbox">Content</label>
          </div>
          <div className="checkboxcontainer">
            {showLeftNavbar ? (
              <input
                sai1
                type="checkbox"
                id="checkbox1"
                onChange={secondcheckbox}
                value={showLeftNavbar}
                checked
              />
            ) : (
              <input
                sai1
                type="checkbox"
                id="checkbox1"
                onChange={secondcheckbox}
                value={showLeftNavbar}
              />
            )}
            <label htmlFor="checkbox1">Left Navbar</label>
          </div>
          <div className="checkboxcontainer">
            {showRightNavbar ? (
              <input
                sai2
                type="checkbox"
                id="checkbox2"
                onChange={thirdhcheckbox}
                value={showRightNavbar}
                checked
              />
            ) : (
              <input
                sai2
                type="checkbox"
                id="checkbox2"
                onChange={thirdhcheckbox}
                value={showRightNavbar}
              />
            )}
            <label htmlFor="checkbox2">Right Navbar</label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
