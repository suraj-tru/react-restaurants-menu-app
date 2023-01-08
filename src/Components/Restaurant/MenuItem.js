const MenuItem = ({ menu }) => {
    return (
        <>
            <div className="card-group">
                {
                    menu.map((item) => {
                        const {id,category,dishName,image, description} = item;
                        return (
                            <div className="card" key={`${id}${category}`}>
                                <span>category: <b> { category } </b>   </span>
                             <img className="card-img-top" src={image}  alt="image1"/>
                                <div className="card-body">
                                    <h5 className="card-title">{ dishName }</h5>
                                    <p className="card-text">{ description }</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">ID: { id }</small>
                                </div>
                            </div>
                        )
                    })
                }
        </div>
        </>
    );
}
export default MenuItem;