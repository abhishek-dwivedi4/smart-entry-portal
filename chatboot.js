 const intents = [
  {
    keywords: ["outpass", "out pass", "exit"],
    response: {
      text: "Outpass apply karne ke liye:\n1. Student Portal open karo\n2. Outpass select karo\n3. Details fill karo\n4. Submit karo\n5. Approval ka wait karo",
      links: [{ label: "Open Student Portal", href: "index3.html" }]
    }
  },
  {
    keywords: ["home pass", "homepass", "leave", "ghar"],
    response: {
      text: "Home Pass ke liye:\n1. Student Portal kholo\n2. Home Pass select karo\n3. Dates fill karo\n4. Submit karo\n5. Approval ke baad hi valid hoga",
      links: [{ label: "Open Student Portal", href: "index3.html" }]
    }
  },
  {
    keywords: ["fine", "penalty", "late"],
    response: {
      text: "Fine lagta hai jab student late return kare ya rules break kare.\nCheck Student Portal ya Admin Panel.",
      links: [
        { label: "Student Portal", href: "index3.html" },
        { label: "Admin Panel", href: "admin.html" }
      ]
    }
  },
  {
    keywords: ["gate", "verification", "entry"],
    response: {
      text: "Gate verification se student entry/exit check hota hai using approval ya return code.",
      links: [{ label: "Open Gate", href: "gate.html" }]
    }
  },
  {
    keywords: ["registration", "register"],
    response: {
      text: "Student registration ke liye form fill karo.",
      links: [{ label: "Register Now", href: "student_registration.html" }]
    }
  }
];

function getResponse(msg) {
  msg = msg.toLowerCase();

  for (let intent of intents) {
    for (let key of intent.keywords) {
      if (msg.includes(key)) {
        return intent.response;
      }
    }
  }

  return {
    text: "Sorry bhai, samajh nahi aya 😅\nTry karo:\n- outpass\n- home pass\n- fine\n- gate\n- registration"
  };
}