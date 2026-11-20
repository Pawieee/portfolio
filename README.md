# Portfolio Repository

This repository contains the source code and assets for a personal developer portfolio website.

You can browse the code, customize it for your own use, and deploy it as your own portfolio site.

---
*Built with React, TypeScript, and SCSS.*
## Contact form (EmailJS)

The contact form sends messages through [EmailJS](https://www.emailjs.com), so no backend is needed.

1. Create a free EmailJS account.
2. Under **Email Services**, connect the inbox that should receive messages (for example, Gmail). Copy the **Service ID**.
3. Under **Email Templates**, create a template that uses the variables `{{name}}`, `{{email}}`, and `{{message}}`. Set **Reply To** to `{{email}}`. Copy the **Template ID**.
4. Under **Account > General**, copy the **Public Key**.
5. Copy `.env.example` to `.env.local` and fill in the three values.
6. Rebuild and deploy with `npm run deploy`. Create React App bakes the values into the build at build time.

In EmailJS, under **Account > Security**, restrict requests to your site's domain (`pawieee.github.io`) so other sites cannot use your quota.

If the values are missing, the form shows a notice that points visitors to LinkedIn instead.
