import { useState } from 'react'

const wait = (duration) => new Promise((resolve) => window.setTimeout(resolve, duration))

async function mockSignIn({ email }) {
  await wait(850)
  return { email }
}

function SoundMark({ className = '' }) {
  const bars = [18, 31, 44, 57, 44, 31, 18]

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 64 64"
    >
      <circle cx="32" cy="32" r="30.5" stroke="currentColor" strokeOpacity="0.42" />
      {bars.map((height, index) => (
        <path
          d={`M${14 + index * 6} ${32 - height / 2}v${height}`}
          key={height + index}
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="3.7"
        />
      ))}
    </svg>
  )
}

function EyeIcon({ visible }) {
  return visible ? (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
      <path d="M3 3l18 18M10.6 10.7a2 2 0 002.7 2.7M9.9 5.2A10.7 10.7 0 0112 5c5.2 0 8.8 5.2 8.8 7s-1.3 3.6-3.4 4.9M6.2 6.2C3.9 7.6 3.2 10.2 3.2 12c0 1.9 3.6 7 8.8 7 .8 0 1.5-.1 2.2-.3" />
    </svg>
  ) : (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
      <path d="M2.8 12s3.3-6.4 9.2-6.4 9.2 6.4 9.2 6.4-3.3 6.4-9.2 6.4S2.8 12 2.8 12z" />
      <circle cx="12" cy="12" r="2.8" />
    </svg>
  )
}

function LockIcon() {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
      <rect height="10" rx="2" width="14" x="5" y="10" />
      <path d="M8 10V7a4 4 0 018 0v3" />
    </svg>
  )
}

function WaveField() {
  const paths = [
    'M-70 490C58 258 142 274 245 394s217 123 320-34 197-222 371-129 249 297 401 184',
    'M-48 548C78 294 162 315 262 426s209 99 311-51 207-213 374-113 243 270 383 154',
    'M-26 609C94 344 181 361 278 461s198 81 299-70 214-205 374-97 236 239 362 125',
    'M-8 671C110 396 198 408 293 497s187 61 288-92 220-195 374-82 228 210 345 99',
    'M12 733C126 449 215 456 309 533s174 42 277-114 225-185 372-65 218 180 327 73',
    'M34 796C144 503 234 507 326 570s160 22 263-137 230-172 368-48 207 150 308 48',
    'M58 860C164 558 254 559 344 607s145 2 247-160 235-157 362-29 194 121 285 25',
  ]

  return (
    <svg
      aria-hidden="true"
      className="wave-field"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 1280 900"
    >
      <defs>
        <linearGradient id="wave-stroke" x1="0" x2="1180" y1="650" y2="235">
          <stop stopColor="#159F58" stopOpacity="0.15" />
          <stop offset="0.35" stopColor="#1ED760" stopOpacity="0.8" />
          <stop offset="0.67" stopColor="#27DEC5" stopOpacity="0.65" />
          <stop offset="1" stopColor="#26A7DC" stopOpacity="0.06" />
        </linearGradient>
        <filter id="wave-blur" x="-10%" y="-30%" width="120%" height="160%">
          <feGaussianBlur stdDeviation="8" />
        </filter>
      </defs>
      <path
        className="wave-field__glow"
        d={paths[2]}
        filter="url(#wave-blur)"
        stroke="#1ED760"
        strokeWidth="16"
      />
      <g className="wave-field__lines">
        {paths.map((path) => (
          <path d={path} key={path} stroke="url(#wave-stroke)" strokeWidth="1.65" />
        ))}
      </g>
    </svg>
  )
}

function App() {
  const [form, setForm] = useState({ email: '', password: '', remember: false })
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ type: 'idle', message: '' })

  function updateField(event) {
    const { checked, name, type, value } = event.target
    setForm((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }))
    setErrors((current) => ({ ...current, [name]: undefined }))
    if (status.type !== 'idle') setStatus({ type: 'idle', message: '' })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = {}

    if (!form.email.trim()) nextErrors.email = 'Enter the email address for your account.'
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = 'Enter a valid email address.'
    if (!form.password) nextErrors.password = 'Enter your password to continue.'

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors)
      setStatus({ type: 'error', message: 'Check the highlighted fields and try again.' })
      return
    }

    setStatus({ type: 'loading', message: 'Signing you in…' })
    const response = await mockSignIn(form)
    setStatus({
      type: 'success',
      message: `Mock sign-in complete for ${response.email}. Connect your backend when it is ready.`,
    })
  }

  const isLoading = status.type === 'loading'

  return (
    <main className="app-shell">
      <section className="login-layout" aria-label="Sign in to Music Catalog Insights Platform">
        <div className="brand-panel">
          <div className="brand-panel__ambient" />
          <WaveField />
          <div className="brand-panel__content">
            <SoundMark className="brand-mark" />
            <p className="brand-name">Music Catalog Insights Platform</p>
            <h1>Bring your music into focus.</h1>
            <p className="brand-copy">
              A private library for the songs you want to remember.
            </p>
            <div className="insight-capsule">
              <LockIcon />
              <span>Private library</span>
              <span aria-hidden="true" className="capsule-dot">·</span>
              <span>Personal insights</span>
            </div>
          </div>
        </div>

        <section className="login-panel" aria-labelledby="login-heading">
          <div className="login-panel__inner">
            <div className="mobile-brand">
              <SoundMark className="mobile-brand__mark" />
              <span>Music Catalog</span>
            </div>
            <p className="product-label">Music Catalog Insights Platform</p>
            <h2 id="login-heading">Welcome back</h2>
            <p className="login-intro">Sign in to return to your saved music.</p>

            <form className="login-form" noValidate onSubmit={handleSubmit} aria-busy={isLoading}>
              <div className="field-group">
                <label htmlFor="email">Email address</label>
                <input
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  aria-invalid={Boolean(errors.email)}
                  autoComplete="email"
                  id="email"
                  inputMode="email"
                  name="email"
                  onChange={updateField}
                  placeholder="you@example.com"
                  required
                  type="email"
                  value={form.email}
                />
                {errors.email && <p className="field-error" id="email-error">{errors.email}</p>}
              </div>

              <div className="field-group">
                <label htmlFor="password">Password</label>
                <div className="password-input">
                  <input
                    aria-describedby={errors.password ? 'password-error' : undefined}
                    aria-invalid={Boolean(errors.password)}
                    autoComplete="current-password"
                    id="password"
                    name="password"
                    onChange={updateField}
                    placeholder="Enter your password"
                    required
                    type={passwordVisible ? 'text' : 'password'}
                    value={form.password}
                  />
                  <button
                    aria-label={passwordVisible ? 'Hide password' : 'Show password'}
                    className="password-toggle"
                    onClick={() => setPasswordVisible((current) => !current)}
                    type="button"
                  >
                    <EyeIcon visible={passwordVisible} />
                  </button>
                </div>
                {errors.password && <p className="field-error" id="password-error">{errors.password}</p>}
              </div>

              <div className="form-row">
                <label className="remember-control" htmlFor="remember">
                  <input
                    checked={form.remember}
                    id="remember"
                    name="remember"
                    onChange={updateField}
                    type="checkbox"
                  />
                  <span>Remember me</span>
                </label>
                <a href="#forgot-password">Forgot password?</a>
              </div>

              <button className="login-button" disabled={isLoading} type="submit">
                {isLoading ? 'Signing in…' : 'Log in'}
              </button>

              <p aria-live="polite" className={`form-status form-status--${status.type}`} role={status.type === 'error' ? 'alert' : 'status'}>
                {status.message}
              </p>

              <div className="form-divider" aria-hidden="true"><span /></div>
              <p className="register-copy">
                New here? <a href="#register">Create an account</a>
              </p>
            </form>
          </div>
        </section>
      </section>
    </main>
  )
}

export default App
