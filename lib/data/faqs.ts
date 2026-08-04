/**
 * FAQ copy. Each answer is written to remove a real objection honestly —
 * no medical guarantees, no dodging the money question.
 * Bracketed text = placeholder awaiting clinic confirmation.
 */

export interface Faq {
  question: string;
  answer: string;
}

export const FAQS: Faq[] = [
  {
    question: "Honestly — will it hurt?",
    answer:
      "Here is the honest version. The anaesthetic injection is a brief pinch; after that, you should feel pressure and movement but not pain. We numb before we begin, we confirm it has worked before touching anything, and if you feel discomfort at any point you raise a hand and we stop. That agreement is not a slogan — it is how every appointment here runs.",
  },
  {
    question: "What will my treatment cost?",
    answer:
      "We can't quote a price for a tooth we haven't seen — anyone who does is guessing. What we promise instead: after your examination you receive a written, itemised estimate before any treatment begins, and nothing is added to it without your approval. Consultation fees are told to you when you book, so even the first visit has no surprises.",
  },
  {
    question: "How do you sterilise your instruments?",
    answer:
      "Every reusable instrument is cleaned, sealed in a pouch and sterilised in an [autoclave], and the pouch is opened in front of you at the chair. Needles, gloves, suction tips and cups are single-use and disposed of after every patient. If you'd like to see the sterilisation area, ask — we take it as a compliment, not an insult.",
  },
  {
    question: "I haven't seen a dentist in years and I'm embarrassed.",
    answer:
      "You are describing our most common patient. There will be no lecture and no theatrical sighing at your X-rays. A long gap usually means one or two priority problems and a simple plan to stop new ones — that's it. The visit you're dreading is almost always easier than the version in your head.",
  },
  {
    question: "My child is terrified of dentists. What do you do differently?",
    answer:
      "We don't force anything. A first visit might be a ride in the chair, counting teeth with a mirror, and going home — that's a success, because the second visit will be easy. Parents stay in the room, we explain everything in child-language first, and treatment starts only when your child gives us permission to.",
  },
  {
    question: "Do root canals really need multiple visits?",
    answer:
      "Sometimes one, sometimes two — it depends on the tooth and whether infection needs time to settle. With modern rotary instruments the appointments are shorter and calmer than the reputation suggests. We'll tell you which case yours is after seeing the X-ray, not after starting.",
  },
  {
    question: "Is teeth whitening safe for my enamel?",
    answer:
      "Supervised by a dentist, yes — professional whitening does not strip or soften enamel. The honest caveat: some people get temporary sensitivity for a day or two, and whitening doesn't change the colour of fillings or crowns. We check your teeth first and tell you what result to realistically expect before you spend anything.",
  },
  {
    question: "Can I just walk in, or do I need an appointment?",
    answer:
      "Book ahead if you can — it's how we protect unhurried appointment times, and WhatsApp makes it a one-minute job. That said, genuine emergencies are different: message or call first thing and we hold [same-day] time for people in pain.",
  },
  {
    question: "Which payment methods do you accept? Any insurance?",
    answer:
      "We accept [cash, card and bank transfer]. For insurance and corporate panels we currently work with [insurance partners — confirm list]; if you're covered elsewhere we'll happily prepare the documentation you need to claim. Either way, the written estimate comes first.",
  },
];
