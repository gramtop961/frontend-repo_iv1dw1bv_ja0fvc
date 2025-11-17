import React from 'react'

// Small helpers for consistent buttons, chips, inputs
export function Button({ variant = 'primary', as = 'button', className = '', children, ...props }) {
  const Comp = as
  const base = 'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[--accent-500] focus-visible:ring-offset-transparent disabled:opacity-50 disabled:cursor-not-allowed'
  const styles = {
    primary: 'bg-[--accent-900] text-[--on-accent-dark] hover:bg-[--accent-800] active:bg-[--accent-950] border border-transparent',
    secondary: 'border border-[--accent-900] text-[--accent-900] hover:bg-[--accent-100] active:bg-[--accent-300] active:text-[--on-accent-light] bg-transparent',
    link: 'text-[--accent-900] hover:underline px-0 py-0 rounded-none',
  }
  return (
    <Comp className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </Comp>
  )
}

export function Chip({ tone = '100', children, className = '' }) {
  const bg = tone === '300' ? 'bg-[--accent-300]' : 'bg-[--accent-100]'
  return (
    <span className={`inline-flex items-center gap-1 rounded-full ${bg} text-[--on-accent-light] px-3 py-1 text-xs font-medium border border-[--lines] ${className}`}>
      {children}
    </span>
  )
}

export function Card({ className = '', children }) {
  return (
    <div className={`bg-[--card] border border-[--lines] rounded-2xl shadow-sm ${className}`}>
      {children}
    </div>
  )
}

export function Input({ className = '', ...props }) {
  return (
    <input
      className={`w-full rounded-2xl border border-[--lines] bg-[--card] px-4 py-3 text-sm text-[--text-primary] placeholder:text-[--text-secondary] focus:outline-none focus:ring-2 focus:ring-[--accent-500] shadow-xs ${className}`}
      {...props}
    />
  )
}

export function Textarea({ className = '', ...props }) {
  return (
    <textarea
      className={`w-full rounded-2xl border border-[--lines] bg-[--card] px-4 py-3 text-sm text-[--text-primary] placeholder:text-[--text-secondary] focus:outline-none focus:ring-2 focus:ring-[--accent-500] shadow-xs resize-none ${className}`}
      {...props}
    />
  )
}
