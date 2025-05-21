export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-primary-50">
      <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm space-y-6">
        <h1 className="text-2xl font-bold text-primary-900 mb-4 text-center">Login</h1>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-primary-700 mb-1">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="w-full px-3 py-2 border border-primary-200 rounded focus:outline-none focus:ring-2 focus:ring-primary-400"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-primary-700 mb-1">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="w-full px-3 py-2 border border-primary-200 rounded focus:outline-none focus:ring-2 focus:ring-primary-400"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary-600 text-white py-2 rounded font-semibold hover:bg-primary-700 transition"
        >
          Sign In
        </button>
      </form>
    </main>
  );
} 