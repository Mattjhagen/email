export default {
  async email(message, env, ctx) {
    const from = message.from;

    if (/donotreply|no-reply/i.test(from)) {
      console.log(`❌ Ignored automated email from: ${from}`);
      return new Response("Ignored no-reply sender", { status: 200 });
    }

    const subject = message.headers.get("subject") || "(no subject)";
    const body = await message.text();

    console.log(`📨 New email from: ${from}`);
    console.log(`Subject: ${subject}`);
    console.log(`Body: ${body}`);

    await message.reply(
      `Hey there!

Thanks for reaching out to VibeCode — whether it’s a partnership idea, a question about our platform, or just exploring the vibe, we’re excited to connect.

We’re on a mission to help small and mid-sized businesses grow smarter using no-code AI automation. If you’re here to talk partnerships, demos, integrations, or collaborations — awesome! Let’s make some magic happen.

To skip the back-and-forth, you can book a time directly on my calendar below:

👉 Book a time to chat

I’ll also reply to your message as soon as I can. Looking forward to discovering how we can build something amazing together.

With good vibes,  
Matty Hagen  
Founder | VibeCode  
📧 Matty@vibecode.space`
    );

    return new Response("Auto-reply sent", { status: 200 });
  },
};
