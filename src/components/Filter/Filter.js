const Filter = ({ actionOnClick }) => {

  return (
    <>
      <label htmlFor="section">Choose section:</label>
      <select name="section" onClick={(e) => actionOnClick(e)}>
        <option value="football">football</option>
        <option value="sport">sport</option>
        <option value="news" >news</option>
        <option value="culture" defaultValue>culture</option>
        <option value="science">science</option>
        <option value="society">society</option>
        <option value="world">world</option>
        <option value="music">music</option>
        <option value="lifeandstyle">lifeandstyle</option>
        <option value="film">film</option>
      </select>
    </>
  )
}

export default Filter;