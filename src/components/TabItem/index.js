// Write your code here

const TabItem = props => {
  const {tabListDetails, clickTabId} = props
  const {displayText, tabId} = tabListDetails

  const onClickTabId = () => {
    clickTabId(tabId)
  }

  return (
    <li className="list">
      <button className="button" type="button" onClick={onClickTabId}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
