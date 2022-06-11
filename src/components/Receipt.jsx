

const Receipt = ({data}) => {

    const{person, paid, order} = data;

    return (
        <div className="receipt">
            <div className="receipt-headers">
            <h2>
                {person}
            </h2>
            <h5>
                {order.main}
            </h5>
            </div>
            <ul id="the-ul">
                <li><span className="list-names">Protein:</span> {order.main}</li>
                <li><span className="list-names">Rice:</span> {order.rice}</li>
                <li><span className="list-names">Sauce:</span> {order.sauce}</li>
                <li><span className="list-names">Price:</span> {order.cost}</li>
                <li><span className="list-names">Paid: </span> {paid.toString()}</li>
            </ul>
        </div>
    )
}

export default Receipt;