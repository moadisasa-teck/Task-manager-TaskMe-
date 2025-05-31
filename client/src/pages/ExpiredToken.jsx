const ExpiredToken = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 max-w-md text-center">
        <h1 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">
          Token Expired
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The password reset link has expired or is invalid.
        </p>
        <a
          href="/forgot-password"
          className="text-blue-600 hover:underline font-medium"
        >
          Request a new password reset
        </a>
      </div>
    </div>
  );
};

export default ExpiredToken;
