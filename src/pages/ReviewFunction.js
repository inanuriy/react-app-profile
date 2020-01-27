import React , {useState} from 'react'

function ReviewFunction() {
    const [counter, setCounter] = useState(0);
    // const [number, setNumber] = useState(999999);
    const [name, setName] = useState("Nama Kosong")
    const [obj, setObj] = useState({
        firstName: "ina",
        lastName: "nuri",
        hobby: ["nonton", "foto"]
    })

    const increment = () => {
        setCounter(prevState => prevState + 1);
    }
    const decrement = () => {
        setCounter(prevState => prevState - 1);
    }
    const changeName = () => {
        setName("Ina Nuri")
    }

    return (
        <div>
        <h1>
            Functional based
            {/* {counter}
            {number} */}
        </h1>
        counter functional based: {counter}
        <button onClick={increment}>+</button>
        <button onClick={decrement} style={{backgroundColor: "red"}}>-</button>
        <div>{name}</div>
        <button onClick={changeName}>Ganti Nama</button>
        <div>{obj.firstName}</div>
        <div>{obj.lastName}</div>
        <div>{obj.hobby[0]}</div>
        <div>{obj.hobby[1]}</div>
        <ul>
            {obj.hobby.map(item => (
                <li>{item}</li>
            ))}
        </ul>
        </div>
       
    );
};

export default ReviewFunction;