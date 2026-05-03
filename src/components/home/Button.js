// components/Button.js
'use client'

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  href,
  className = '',
  icon,
  ...props 
}) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 cursor-pointer'
  
  const variants = {
    primary: 'bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--primary-light))] text-white shadow-[0_2px_8px_rgba(var(--primary),0.2)] hover:translate-y-[-2px] hover:shadow-[0_6px_20px_rgba(var(--primary),0.4)]',
    secondary: 'border-2 border-[rgb(var(--primary))] text-[rgb(var(--primary))] bg-transparent hover:bg-[rgba(var(--primary),0.1)] hover:translate-y-[-2px]',
    outline: 'border border-[rgba(var(--border),0.5)] text-[rgb(var(--text-secondary))] bg-transparent hover:bg-[rgba(var(--primary),0.05)] hover:text-[rgb(var(--primary))] hover:border-[rgb(var(--primary))]',
    ghost: 'text-[rgb(var(--text-secondary))] bg-transparent hover:bg-[rgba(var(--primary),0.05)] hover:text-[rgb(var(--primary))]',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3 text-base',
    xl: 'px-10 py-4 text-lg',
  }
  
  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
        {children}
        {icon && icon}
      </a>
    )
  }
  
  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
      {icon && icon}
    </button>
  )
}