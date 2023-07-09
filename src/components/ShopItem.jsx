const ShopItem = (props) => {
    const { item } = props;
    return (
        <div className="card card-row mb-1">
            <div className="row align-items-md-center g-0">
                <div className="col-12 col-md-1 card-image-wrap">
                    <img className="img-fluid rounded-start w-100 w-md-none object-fit-cover" src={item.img} alt={item.name} style={{height: "100%"}}/>
                </div>
                <h5 className="col-6 col-md-3 card-title text-center text-uppercase mt-2">{item.name}</h5>
                <p className="col-6 col-md-3 card-text text-center"><small className="text-body-secondary">{item.color}</small></p>
                <small className="col-6 col-md-2 text-danger">${item.price}</small>
                <button className="col-6 col-md-2 btn btn-outline-danger rounded-5 text-uppercase fw-bold w-auto me-md-3 ms-auto" type="button">Add to cart</button>
            </div>
        </div>
    )
}
  
export default ShopItem