const ShopCard = (props) => {
    const { card } = props;
    return (
        <div className="col">
            <div className="card h-100">
                <h5 className="card-title text-center text-uppercase mt-2">{card.name}</h5>
                <p className="card-text text-center"><small className="text-body-secondary">{card.color}</small></p>
                <img className="card-img-top" src={card.img} alt={card.name} />
                <div className="card-footer d-flex justify-content-between align-items-center">
                    <small className="text-danger">${card.price}</small>
                    <button className="btn btn-outline-danger rounded-5 text-uppercase fw-bold" type="button" >Add to cart</button>
                </div>
            </div>
        </div>
    )
}
  
export default ShopCard