export default function BudgetCard({ name, amount, max }) {
    return (
        <div className="max-w-md mx-auto p-4 border rounded shadow-md">
          <div className="font-bold mb-2">{name}</div>
          <div className="text-gray-600">{amount} / {max}</div>
        </div>
      );
}
