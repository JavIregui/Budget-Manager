import { currencyFormatter  } from "../utils";
import ProgressBar from "./ProgressBar";

export default function BudgetCard({ name, amount, max, gray }) {
    const classNames = []
    if(amount >= max) {
        classNames.push("bg-red-100")
    } else if (gray) {
        classNames.push("bg-slate-100")
    }

    return (
        // Card
        <div className={"max-w-md mx-auto p-4 mb-2 border rounded shadow-md " + classNames.join(" ")}>
            {/* Card Title */}
            <div className="flex justify-between align-baseline mb-2">
                <div className="font-bold me-2">{name}</div>
                <div className="align-baseline">{currencyFormatter.format(amount)}
                    <span className=" ms-1 text-slate-400 text-sm"> / {currencyFormatter.format(max)} </span>
                </div>
            </div>
            {/* Progress Bar */}
            <ProgressBar percent={(amount/max)*100}></ProgressBar>
            {/* Buttons */}
            <div className="flex justify-end space-x-2">
                <button className="ring-2 ring-red-500 ring-inset px-4 py-2 rounded shadow">Add Expense</button>
                <button className="ring-2 ring-slate-400 text-slate-400 ring-inset px-4 py-2 rounded shadow">View Expenses</button>
            </div>
        </div>
      );
}