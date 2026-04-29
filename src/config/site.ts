export const SITE_CONFIG = {
    repoName: "lazybeanslab-website",
    basePath: "/lazybeanslab-website",
    showProjects: false,
    // EmailJS configuration (from environment variables)
    emailjs: {
        serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
    },
};