import { useEffect, useState } from "react";
import './Message.css';

export const Message = () => {
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const onMouseMove = ({ x, y }) => {
            setCoords({ x, y });
        };

        window.addEventListener("mousemove", onMouseMove);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
        };
    }, []);

    return (
        <div className="message-container">
            <h3 className="message-title">Usuario ya existe</h3>
            <pre className="message-coords">{JSON.stringify(coords, null, 2)}</pre>
        </div>
    );
};