import { currencyFormatter  } from "../utils";
import ProgressBar from "./ProgressBar";

export default function BudgetCard({ name, amount, max }) {
    return (
        // Card
        <div className="max-w-md mx-auto p-4 mb-2 border rounded shadow-md">
            {/* Card Title */}
            <div className="flex justify-between align-baseline mb-2">
                <div className="font-bold me-2">{name}</div>
                <div className="align-baseline">{currencyFormatter.format(amount)}
                    <span className=" ms-1 text-slate-400 text-sm"> / {currencyFormatter.format(max)} </span>
                </div>
            </div>
            {/* Progress Bar */}
            <ProgressBar percent={(amount/max)*100}></ProgressBar>
        </div>
      );
}