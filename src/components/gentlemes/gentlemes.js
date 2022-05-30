import { Gentleman, list } from "../gentleman/gentleman.js";

export function Gentlemens() {
    return (
        <>
            {list.map((item) => (
                <Gentleman></Gentleman>
            ))}
        </>
    );
}
