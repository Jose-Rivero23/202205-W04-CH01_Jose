import { useState } from "react";
import "./button.css";

export function Button() {
    const [selected, setSelected] = useState(true);

    return (
        <>
            <i
                className={`${
                    selected
                        ? "circule__on icon gentleman__icon fas fa-check"
                        : "circule__off icon gentleman__icon fas fa-check"
                } `}
                onClick={() => setSelected(!selected)}
            ></i>
            <i class="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
        </>
    );
}
