import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  return (
    <button
      type="button"
      className="theme-toggle"
      data-theme-toggle
      suppressHydrationWarning
      aria-pressed="false"
      aria-label="Toggle color theme"
      title="Toggle color theme"
    >
      <span className="theme-toggle__track" aria-hidden="true">
        <span className="theme-toggle__icon theme-toggle__icon--sun">
          <Sun aria-hidden="true" focusable="false" strokeWidth={2} />
        </span>
        <span className="theme-toggle__icon theme-toggle__icon--moon">
          <Moon aria-hidden="true" focusable="false" strokeWidth={2} />
        </span>
        <span className="theme-toggle__thumb" />
      </span>
    </button>
  );
}
