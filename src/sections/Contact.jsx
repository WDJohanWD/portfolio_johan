import { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from '@emailjs/browser';

export function ContactSection() {
    const { t } = useTranslation("contact");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const serviceID = 'service_we7lelf'; 
        const templateID = 'template_l2b5qe1';
        const publicKey = 'XJ_mNfRae3GGAzOhm';

        emailjs.send(serviceID, templateID, formData, publicKey)
            .then((result) => {
                console.log('Email successfully sent!', result.text);
                setIsSubmitting(false);
                setIsSubmitted(true);
                setFormData({ name: "", email: "", message: "" });

                setTimeout(() => {
                    setIsSubmitted(false);
                }, 5000); 
            })
            .catch((error) => {
                console.error('Failed to send email:', error.text);
                setIsSubmitting(false);
                setError(t("error")); 
            });
    };

    return (
        <section className="py-12 px-4 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-secondary">{t("title")}</h2>

            {isSubmitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4" role="alert">
                    {t("success")}
                </div>
            )}

            {error && (
                 <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="mt-6 max-w-[42rem] text-muted-foreground text-xl mx-auto " style={{ "textShadow": 'var(--text-shadow)' }}>
                        {t("name")}
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary relative bg-transparent"
                        style={{
                            border: '2px solid transparent',
                            background: 'linear-gradient(white, white) padding-box, linear-gradient(to right, var(--color-secondary), var(--color-bg-primary)) border-box'
                        }}
                    />
                </div>

                <div>
                    <label htmlFor="email" className="mt-6 max-w-[42rem] text-muted-foreground text-xl mx-auto " style={{ "textShadow": 'var(--text-shadow)' }}>
                        {t("email")}
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary relative bg-transparent"
                        style={{
                            border: '2px solid transparent',
                            background: 'linear-gradient(white, white) padding-box, linear-gradient(to right, var(--color-secondary), var(--color-bg-primary)) border-box'
                        }}
                    />
                </div>

                <div>
                    <label htmlFor="message" className="mt-6 max-w-[42rem] text-muted-foreground text-xl mx-auto " style={{ "textShadow": 'var(--text-shadow)' }}>
                        {t("message")}
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary relative bg-transparent"
                        style={{
                            border: '2px solid transparent',
                            background: 'linear-gradient(white, white) padding-box, linear-gradient(to right, var(--color-secondary), var(--color-bg-primary)) border-box'
                        }}
                    />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary  text-bg-primary font-bold py-2 px-4 rounded-md hover:bg-primary-dark transition-colors disabled:opacity-70"
                >
                    {isSubmitting ? t("sending") : t("button")}
                </button>
            </form>
        </section>
    );
}