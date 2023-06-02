import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

export default function useTotalAmount() {
    const { totalAmount, setTotalAmount } = useContext(AppStateContext);

    return { totalAmount, setTotalAmount } ;
}