import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabItem, isActive} = props
  const {tabId} = tabDetails
  const {displayText} = tabDetails
  const clickBtn = () => {
    updateActiveTabItem(tabId)
  }
  const tabclassName = isActive ? 'active-tab-btn' : ''
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${tabclassName}`}
        onClick={clickBtn}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
