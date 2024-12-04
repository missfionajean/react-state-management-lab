import { useState } from "react";

const Money = () => {
    // state varaible for current money
	const [money, setMoney] = useState(100);

    // html to be returned on component call
    return (
        <>
        <h2>Money: {money}</h2>
        </>
    )
}

export default Money