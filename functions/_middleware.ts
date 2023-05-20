import mailChannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

export const onRequest: PagesFunction = (context) => mailChannelsPlugin({
    personalizations: [
        {
            to: [{ name: "ACME Support", email: `${context.env.RECEIVER_EMAIL}`, }],
        },
    ],
    from: { name: "Contact Us Form Inquiry", email: `${context.env.SENDER_EMAIL}` },
    respondWith: () => {
        return new Response(
            `Gracias por enviarnos su consulta. Un miembro del equipo se pondrá en contacto con usted en breve..`
        );
    },
})(context);