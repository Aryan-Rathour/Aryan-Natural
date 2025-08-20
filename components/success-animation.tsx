"use client"

import { useEffect, useState } from "react"

interface SuccessAnimationProps {
  show: boolean
  message?: string
  onComplete?: () => void
}

export function SuccessAnimation({ show, message = "Success!", onComplete }: SuccessAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (show) {
      setIsVisible(true)
      const timer = setTimeout(() => {
        setIsVisible(false)
        onComplete?.()
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [show, onComplete])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-background rounded-lg p-8 text-center animate-success">
        <div className="w-16 h-16 mx-auto mb-4 relative">
          <svg className="w-16 h-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
            <path
              className="checkmark-path"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m9 12 2 2 4-4"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">Thank You!</h3>
        <p className="text-muted-foreground">{message}</p>
      </div>
    </div>
  )
}
