import ContactForm from './ContactForm';

export const metadata = { title: 'Contact — Kritika.dev' };

export default function ContactPage() {
  return (
    <div className="max-w-lg mx-auto space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Get in touch</h1>
        <p className="text-foreground opacity-60">
          Have a question or want to work together? Send me a message.
        </p>
      </div>
      <ContactForm />
    </div>
  );
}
