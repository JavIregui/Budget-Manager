export default function Header() {
    return (
        // Container
        <div className="flex flex-col sm:flex-row items-center justify-between pb-4 mb-4 space-y-4 sm:space-y-0">
            {/* Title */}
            <h1 className="text-4xl font-bold">Budgets</h1>
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0 sm:space-x-4">
                <button className="bg-red-500 text-white px-4 py-2 rounded shadow">Add Budget</button>
                <button className="ring-2 ring-red-500 ring-inset px-4 py-2 rounded shadow">Add Expense</button>
            </div>
        </div>
    );
}
