// This hook is used to display proper price based on yearly/monthly plan selection

import { useSelector } from "react-redux";

export default function useCalculatePrice(price: number) {
    const planType = useSelector((state: any) => state.planType);
    if(planType === 'monthly') return price;
    else return price * 10;
}