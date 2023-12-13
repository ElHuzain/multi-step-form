// This hook is used to retrieve & calculate final prices for summary page

import { useSelector } from "react-redux";
import useCalculatePrice from "./useCalculatePrice";

export default function useCalculateFinalPrice() {
    const planType = useSelector((state: any) => state.planType);
    const plans = useSelector((state: any) => state.plan); // Then I'll have to dig for its pricu
    const addons = useSelector((state: any) => state.addons);

    const selectedPlan = plans.plans.filter((plan: any) => plan.name.toLowerCase() === plans.selected)[0];
    const selectedAddons = addons.filter((addon: any) => addon.selected === true);

    let finalPrice = useCalculatePrice(selectedPlan.price);
    for (let i = 0; i < selectedAddons.length; i++) finalPrice += useCalculatePrice(selectedAddons[i].price);

    return {
        planType: planType,
        selectedPlan: selectedPlan,
        selectedAddons: selectedAddons,
        finalPrice
    }
}