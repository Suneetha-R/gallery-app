/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, updateItem, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = thumbnailDetails

  const onClickThumbnail = () => {
    updateItem(id)
  }

  const activeTabBtnClassName = isActive ? 'active-btn' : ''

  return (
    <li className="list-item">
      <button
        type="button"
        className={`btn ${activeTabBtnClassName}`}
        onClick={onClickThumbnail}
      >
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
