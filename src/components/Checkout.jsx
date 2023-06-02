import useOrders from "../hooks/useOrders";
import {Link} from "react-router-dom";
import usePrototypes from "../hooks/usePrototypes";
import useTotalAmount from "../hooks/useTotalAmount";

export default function Checkout() {
    const orders = useOrders();
    const prototypes = usePrototypes();
    const { totalAmount } = useTotalAmount();

    return (
        <aside>
            <div className="order">
                <div className="body">
                    {orders.map((order) => {
                        const { id } = order;
                        const prototype = prototypes.find((p) => p.id === id);

                        return (
                            <div className="item" key={id}>
                                <div className="img">
                                    <video src={prototype.thumbnail} />
                                </div>
                                <div className="content">
                                    <p className="title">
                                        {prototype.title} x {order.quantity}
                                    </p>
                                </div>
                                <div className="action">
                                    <p className="price">$ {prototype.price * order.quantity}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="total">
                    <hr />
                    <div className="item">
                        <div className="content">Total</div>
                        <div className="action">
                            <div className="price">$ {totalAmount}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button
                    className="btn btn--secondary"
                    style={{ width: "48%", marginTop: 10 , marginRight : 10}}
                >
                    결제
                </button>
                <Link to= '/'><button
                    className="btn btn--secondary"
                    style={{ width: "48%", marginTop: 10 }}
                >
                    취소
                </button></Link>
            </div>
        </aside>
    );
}