function Recent(props) {
  return (
    <div className='recent'>
      <h6 className="recent-header">최근본상품</h6>
      <ul className='recent-products-container'>
        {
          props.recent.map((item, i) => {
            item = Number(item);
            return (
              <li className="recent-item" key={i}>
                <img src={`https://codingapple1.github.io/shop/shoes${item + 1}.jpg`} width={'80%'} alt=''/>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Recent;