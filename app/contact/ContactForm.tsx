'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { sendContactEmail, FormState } from './actions';

const initial: FormState = { status: 'idle', message: '' };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 disabled:opacity-50 transition-opacity"
    >
      {pending ? 'Sending…' : 'Send message'}
    </button>
  );
}

export default function ContactForm() {
  const [state, action] = useFormState(sendContactEmail, initial);

  if (state.status === 'success') {
    return (
      <div className="rounded-lg border border-border bg-background p-6 text-center space-y-2">
        <p className="text-2xl">✅</p>
        <p className="font-semibold text-foreground">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-5" noValidate>

      {/* Top-level error banner */}
      {state.status === 'error' && !state.errors && (
        <div role="alert" className="rounded-md border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">
          {state.message}
        </div>
      )}

      {/* Name */}
      <div className="space-y-1">
        <label htmlFor="name" className="block text-sm font-medium text-foreground">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          aria-describedby={state.errors?.name ? 'name-error' : undefined}
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Kritika Kedia"
        />
        {state.errors?.name && (
          <p id="name-error" role="alert" className="text-xs text-red-500">{state.errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-1">
        <label htmlFor="email" className="block text-sm font-medium text-foreground">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-describedby={state.errors?.email ? 'email-error' : undefined}
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="you@example.com"
        />
        {state.errors?.email && (
          <p id="email-error" role="alert" className="text-xs text-red-500">{state.errors.email}</p>
        )}
      </div>

      {/* Message */}
      <div className="space-y-1">
        <label htmlFor="message" className="block text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-describedby={state.errors?.message ? 'message-error' : undefined}
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          placeholder="What's on your mind?"
        />
        {state.errors?.message && (
          <p id="message-error" role="alert" className="text-xs text-red-500">{state.errors.message}</p>
        )}
      </div>

      <SubmitButton />

    </form>
  );
}
