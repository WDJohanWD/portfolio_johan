export function Button({ children, onClick, className = "", ...props }) {
    return (
      <button
        onClick={onClick}
        className={`px-4 py-2 text-sm font-medium rounded-md transition-colors  ${className}`}
        {...props}
      >
        {children}
      </button>
    )
  }
  