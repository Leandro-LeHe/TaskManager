function Alert({ color = "green", title, message }) {
  return (
    <div
      className={`
        p-4 mb-4 text-sm rounded-lg
        bg-${color}-50 text-${color}-800
        dark:bg-gray-800 dark:text-${color}-400
      `}
      role="alert"
    >
      <span className="font-medium">{title}</span> {message}
    </div>
  );
}
export default Alert;
