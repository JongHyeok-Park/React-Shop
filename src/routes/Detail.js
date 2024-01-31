import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { Context1 } from "./../App.js"
import { addToCart } from "../store/cartSlice.js";
import { useDispatch } from "react-redux";

function Detail(props) {
    let [inputVal, setInputVal] = useState("");
    let [tab, setTab] = useState(0);
    let [fade, setFade] = useState('');
    let dispatch = useDispatch();

    useEffect(() => {
        let a = setTimeout(() => {
            setFade('end');
        }, 10);
        return () => {
            clearTimeout(a);
            setFade('');
        }
    }, []);

    // useEffect(() => {
    //     if (isNaN(inputVal)) {
    //         alert("그러지 마세요.");
    //     }
    // }, [inputVal])

    let {id} = useParams();
    const shoe = props.shoes.find((item) => item.id === Number(id));

    return (
        <div className={"container start " + fade}>
            <div className="row">
                <div className="col-md-6">
                    <img src={`https://codingapple1.github.io/shop/shoes${shoe.id + 1}.jpg`} width="100%" alt=""/>
                </div>
                <div className="col-md-6">
                    <input type="text" value={inputVal} onChange={(e) => {
                        if (isNaN(e.target.value)) {
                            e.preventDefault();
                            alert("그러지 마세요.");
                        } else {
                            setInputVal(e.target.value);
                        }
                    }}/>
                    <h4 className="pt-5">{shoe.title}</h4>
                    <p>{shoe.title}</p>
                    <p>{shoe.price}원</p>
                    <button className="btn btn-danger" onClick={() => {
                        let product = {
                            id: shoe.id,
                            name: shoe.title,
                            count: 1
                        }
                        dispatch(addToCart(product));
                    }}>주문하기</button> 
                </div>
            </div>
            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link eventKey="link0" onClick={() => {setTab(0)}}>버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link1" onClick={() => {setTab(1)}}>버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link2" onClick={() => {setTab(2)}}>버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tab={tab}/>
        </div>
    )    
}

function TabContent(props) {
    let {stock} = useContext(Context1);
    let [fade, setFade] = useState('');

    useEffect(() => {
        let a = setTimeout(() => {
            setFade('end');
        }, 10);
        return () => {
            clearTimeout(a);
            setFade('');
        }
    }, [props.tab]);

    return <div className={"start " + fade}>
        {[<div>{stock[0]}</div>, <div>내용1</div>, <div>내용2</div>][props.tab]}
    </div>
    
}

export default Detail;