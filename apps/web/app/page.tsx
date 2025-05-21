import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-primary-50 p-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-4 text-4xl font-bold text-primary-900">
          Financial Tracking App
        </h1>
        <p className="text-lg text-primary-700">
          Welcome to your personal finance dashboard
        </p>
        <div className="mt-8 rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-2xl font-semibold text-primary-800">
            Quick Stats
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-md bg-primary-100 p-4">
              <p className="text-sm text-primary-600">Balance</p>
              <p className="text-2xl font-bold text-primary-900">$0.00</p>
            </div>
            <div className="rounded-md bg-primary-100 p-4">
              <p className="text-sm text-primary-600">Transactions</p>
              <p className="text-2xl font-bold text-primary-900">0</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
