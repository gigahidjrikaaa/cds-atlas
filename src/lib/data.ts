export type Domain =
  | "tech"
  | "fashion"
  | "grooming"
  | "beauty"
  | "consumable"
  | "sports";

export const domainLabels: Record<Domain, string> = {
  tech: "Tech",
  fashion: "Fashion",
  grooming: "Personal Care",
  beauty: "Beauty",
  consumable: "Consumable",
  sports: "Sports Gear",
};

export type InvolvementLevel =
  | "low"
  | "moderate"
  | "moderate-high"
  | "hybrid"
  | "high";

export const involvementLabel: Record<InvolvementLevel, string> = {
  low: "Low",
  moderate: "Moderate",
  "moderate-high": "Moderate–High",
  hybrid: "Hybrid",
  high: "High",
};

export const involvementFill: Record<InvolvementLevel, number> = {
  low: 1,
  moderate: 2,
  "moderate-high": 2,
  hybrid: 2,
  high: 3,
};

export interface Story {
  respondent: string;
  profile: string[];
  product: string;
  domain: Domain;
  price?: string;
  involvement: { level: InvolvementLevel; text: string };
  dmu: { roles: string; influencer?: string };
  trigger: { need: string; source: string };
  alternatives: { considered: string; outcome: string };
  channel: { name: string; steps: string[] };
  postPurchase: {
    satisfaction: string;
    scores?: string[];
    notes?: string[];
    metaphor?: string;
    metaphorMeaning?: string;
    quote?: string;
    gapNote?: string;
  };
}

export interface CaseStudy {
  slug: string;
  code: string;
  letter: string;
  title: string;
  tagline: string;
  interviewer: string;
  sourceNote?: string;
  stories: Story[];
}

export const siteUrl = "https://cds-g4-atlas.vercel.app/";

export const cases: CaseStudy[] = [
  {
    slug: "a",
    code: "CDS A",
    letter: "A",
    title: "Everyday Calculations",
    tagline: "A lipstick and a pack of cigarettes in Jakarta — proof that “low-stakes” purchases can still be researched like investments.",
    interviewer: "Anggit Driasaditya",
    stories: [
      {
        respondent: "RW",
        profile: ["Age 35", "Jakarta", "B.A. in Economics", "Assurance"],
        product: "Revlon Lipstick",
        domain: "beauty",
        price: "IDR 75,000",
        involvement: {
          level: "moderate",
          text: "Moderate involvement: a deliberate, multi-day information search — reading reviews and comparing brands — despite it being an ordinary depletion repurchase.",
        },
        dmu: {
          roles: "Decider / Buyer: RW.",
          influencer:
            "A beauty advisor (advised on product quality) and a personal friend (advised on color suitability).",
        },
        trigger: {
          need: "Routine depletion — the previous lipstick ran out — combined with a functional need to appear fresh and well put-together.",
          source: "Social media, online reviews, a beauty advisor, and a friend.",
        },
        alternatives: {
          considered:
            "Compared 2 shortlisted brands on color, price, quality, durability and online reviews.",
          outcome:
            "Selected Revlon for its superior color range, wear comfort on the lips, and longevity.",
        },
        channel: {
          name: "Offline — mall cosmetics counter",
          steps: [
            "Need recognition (lipstick depleted)",
            "Multi-day online search & review reading",
            "Consulted friend & beauty advisor",
            "Executed the purchase offline",
          ],
        },
        postPurchase: {
          satisfaction:
            "Highly satisfied — expectations for color, texture and durability were completely met.",
          metaphor: "Appearance Enhancer",
          metaphorMeaning:
            "A functional tool relied upon to look neat and reflect personal taste.",
        },
      },
      {
        respondent: "CG",
        profile: ["Age 25", "Jakarta", "B.A. in Psychology"],
        product: "Cigarettes (premium tier)",
        domain: "consumable",
        price: "IDR 40,000",
        involvement: {
          level: "high",
          text: "High involvement: a highly calculated process for a routine consumable — budget checks and specific vlog reviews — because of the item’s premium price point.",
        },
        dmu: {
          roles: "Sole Decider / Buyer / User: CG.",
          influencer:
            "None — acted entirely self-driven, with zero influence, recommendations or comments from peers or family.",
        },
        trigger: {
          need: "A need for stress relief, curiosity regarding flavor marketing, and offline point-of-sale ads.",
          source: "Physical ads at warung/minimarkets and an internet vlog review.",
        },
        alternatives: {
          considered: "Evaluated 4–5 alternative brands.",
          outcome:
            "Selected his current brand for the most competitive price-to-quality ratio in its tier and a distinct flavor.",
        },
        channel: {
          name: "Offline — minimarket / warung",
          steps: [
            "Offline trigger (point-of-sale ads)",
            "Digital validation via internet vlog",
            "Evaluated alternative brands",
            "Purchased at a local minimarket for convenience",
          ],
        },
        postPurchase: {
          satisfaction:
            "Highly satisfied — expectations across price, quality and flavor were met.",
          metaphor: "Calculated Relief",
          metaphorMeaning:
            "A rigorously researched premium habit for daily stress reduction.",
        },
      },
    ],
  },
  {
    slug: "b",
    code: "CDS B",
    letter: "B",
    title: "The Executive Toolkit",
    tagline: "An iPad and a Michael Kors bag, bought like board decisions — budgets, criteria and long-term value.",
    interviewer: "Rick Owen Handel Purba",
    stories: [
      {
        respondent: "Kris",
        profile: ["Age 24", "B.Sc. Cybersecurity", "Chief Security Officer", "Lives with family"],
        product: "iPad Air 5",
        domain: "tech",
        price: "IDR 9.5 M",
        involvement: {
          level: "high",
          text: "High involvement / complex buying behavior: compared Apple and Samsung, conducted an extensive information search, and evaluated long-term use, budget, productivity and ecosystem.",
        },
        dmu: {
          roles:
            "Decider / Buyer / User: Kris — held total authority, managed his own strict evaluation over several days, paid cash, sole user.",
        },
        trigger: {
          need: "A need to boost work/study productivity and organize notes and schedules.",
          source: "Tech influencers, social-media reviews, official docs, IT friends, his brother, Tokopedia, and prior Apple ecosystem experience.",
        },
        alternatives: {
          considered:
            "Samsung tablets — rejected in favor of Apple for long-term device longevity, seamless integration with his existing iPhone/MacBook ecosystem, and software support.",
          outcome: "Chose the iPad Air 5; bought via Tokopedia over iBox to execute a cash purchase.",
        },
        channel: {
          name: "Tokopedia (trusted seller)",
          steps: [
            "Identified the productivity need",
            "Set long-term value criteria",
            "Researched tech reviews",
            "Consulted friends & family to compare Samsung against Apple",
            "Chose Tokopedia over iBox — cash purchase",
          ],
        },
        postPurchase: {
          satisfaction: "Highly satisfied — device fully met productivity goals.",
          metaphor: "Personal OS Investment",
          metaphorMeaning:
            "A long-term tool to upgrade personal efficiency and workflow.",
        },
      },
      {
        respondent: "Clay",
        profile: ["Age 26", "B.S. Agribusiness", "Procurement Officer", "Boarding-house"],
        product: "Michael Kors Bag",
        domain: "fashion",
        price: "IDR 6 M",
        involvement: {
          level: "high",
          text: "High involvement / complex buying behavior: compared Michael Kors, Coach and Pedro on price, quality, design and authenticity; the purchase was ultimately triggered by a discount.",
        },
        dmu: {
          roles:
            "Decider / Buyer / User: Clay — strictly controlled the criteria (budget, executive look) and made the final call to execute the cash purchase.",
        },
        trigger: {
          need: "A need for “executive presence” at vendor meetings, with the transaction triggered by a promo discount.",
          source: "Instagram, Google, her partner, social-circle opinions, and discount ads for preloved products.",
        },
        alternatives: {
          considered:
            "Coach and Pedro — passed on Coach (higher price point / styling) and Pedro (different positioning).",
          outcome:
            "Chose Michael Kors: the ideal balance of luxury, brand prestige and executive presence within her target budget.",
        },
        channel: {
          name: "Online reseller / e-commerce platform",
          steps: [
            "Identified the “executive presence” need",
            "Set budget parameters",
            "Searched Instagram & Google",
            "Compared Coach & Pedro with MK alongside her partner",
            "Postponed the purchase",
            "Finally executed a cash purchase on a preloved discount",
          ],
        },
        postPurchase: {
          satisfaction:
            "Satisfied — the bag successfully delivered the desired professional image.",
          metaphor: "Strategic Armor",
          metaphorMeaning:
            "A confidence shield for executive credibility at meetings.",
        },
      },
    ],
  },
  {
    slug: "c",
    code: "CDS C",
    letter: "C",
    title: "Thesis-Season Hardware",
    tagline: "Two students, two ecosystems: a Samsung bought on ROI logic, an iPhone bought on peer gravity.",
    interviewer: "Kevin Rehuel",
    stories: [
      {
        respondent: "Bima",
        profile: ["Age 21", "Business Management, semester 7", "Consulting intern & thesis student"],
        product: "Samsung Galaxy S24 Ultra (Titanium Black)",
        domain: "tech",
        price: "≈ IDR 21 M",
        involvement: {
          level: "high",
          text: "High involvement: two months of careful consideration covering ROI, trade-in value and 7-year software updates.",
        },
        dmu: {
          roles:
            "Decider / Buyer: Bima — funded by personal savings and an intern stipend.",
          influencer: "His intern mentor, who recommended Samsung DeX.",
        },
        trigger: {
          need: "Productivity needs (quick deck edits via the S-Pen, outside meetings) plus an IDR 1.5 M bank cashback flash deal.",
          source: "Mentor recommendation and the bank’s promo.",
        },
        alternatives: {
          considered:
            "iPhone / iOS — dismissed due to the dominant Windows office ecosystem.",
          outcome: "Prioritized Samsung DeX & Link to Windows; bought during a flash deal.",
        },
        channel: {
          name: "E-commerce — Tokopedia Official Store",
          steps: [
            "Need recognition",
            "ROI & financial evaluation (2 months)",
            "Checked e-commerce during a break",
            "Flash-deal checkout",
          ],
        },
        postPurchase: {
          satisfaction:
            "Pleased — the phone functions as a full work machine.",
          metaphor: "Work / Productivity Companion",
          metaphorMeaning:
            "Enables responsive, practical, professional work execution — without opening a laptop.",
        },
      },
      {
        respondent: "Clara",
        profile: ["Age 22", "Chinese Literature, semester 8", "Thesis student & lifestyle/cafe content creator"],
        product: "iPhone 15 Pro (Natural Titanium, 256 GB)",
        domain: "tech",
        price: "≈ IDR 19 M",
        involvement: {
          level: "hybrid",
          text: "Moderate-to-high / hybrid: saved since last semester and did a month of visual research, yet executed spontaneously — driven by mood.",
        },
        dmu: {
          roles:
            "Decider / Buyer: Clara — funded by personal savings plus parental allowance/subsidy.",
          influencer: "Campus peers, who recommended the Pro series and the color.",
        },
        trigger: {
          need: "A need for a clear low-light camera and AirDrop, thesis fatigue (a self-reward / mood refresh), and the last unit in stock.",
          source: "TikTok research and campus peer influence.",
        },
        alternatives: {
          considered:
            "No other brands considered — only Natural vs White Titanium.",
          outcome:
            "Strongly driven by her peer group’s Apple ecosystem; chose the iPhone 15 Pro.",
        },
        channel: {
          name: "Offline store — iBox (mall)",
          steps: [
            "Saving & TikTok research (1 month)",
            "Post-thesis-revision stress",
            "Mall visit",
            "Found the last unit in stock",
            "Immediate purchase",
          ],
        },
        postPurchase: {
          satisfaction: "Satisfied with the self-reward purchase.",
          gapNote:
            "Post-purchase detail and relationship metaphor were not captured in the source table.",
        },
      },
    ],
  },
  {
    slug: "d",
    code: "CDS D",
    letter: "D",
    title: "The Minimarket Loyalists",
    tagline: "Two 56-year-old lecturers whose grooming routines run on habit, trust and a short walk from home.",
    interviewer: "Astriwisessa Indahsari Bhanuwati",
    stories: [
      {
        respondent: "Katarina",
        profile: ["Age 56", "Doctoral degree in performing arts", "Lecturer"],
        product: "Sariayu Body Splash Cologne",
        domain: "grooming",
        price: "IDR 44,000",
        involvement: {
          level: "low",
          text: "Low involvement: a habitual purchase with no active search or comparison — the decision is close to automatic.",
        },
        dmu: {
          roles:
            "Buyer: Katarina — recognizes the need when stock runs low or a new scent appeals to her.",
          influencer:
            "Indirect: coworkers who compliment the scent reinforce (but never initiate) repurchase.",
        },
        trigger: {
          need: "Running out of her current bottle, or spotting an appealing, affordable new scent.",
          source: "No active search — occasional passive exposure to online perfume promotions.",
        },
        alternatives: {
          considered:
            "Evoked set: her usual brand vs online perfume brands seen on promotion. Judged on scent match and how long the fragrance lasts.",
          outcome:
            "Alternatives tried were too sharp-smelling and not long-lasting — she returned to her usual brand.",
        },
        channel: {
          name: "Minimarket near home",
          steps: [
            "Need recognition",
            "No search",
            "Purchased alone at the minimarket",
            "Post-purchase judgment (scent duration, social feedback)",
          ],
        },
        postPurchase: {
          satisfaction:
            "Fairly satisfied — expectations on scent, price and mildness are met.",
          metaphor: "Dependency",
          metaphorMeaning:
            "A daily habit built around a functional need (smelling fresh) — not an emotional brand bond.",
        },
      },
      {
        respondent: "Sun",
        profile: ["Age 56", "Doctoral degree in performing arts", "Lecturer"],
        product: "Tancho Black Natural Hair Color",
        domain: "grooming",
        price: "IDR 35,000",
        involvement: {
          level: "low",
          text: "Low-to-moderate involvement: the purchase itself is routine and largely unresearched, but the outcome — appearance and professional image — carries more personal significance, sustaining strong repeat commitment.",
        },
        dmu: {
          roles: "Buyer: Sun — recognizes the need when grey hair becomes visible.",
          influencer:
            "A peer’s recommendation originally influenced the switch to this brand; he now influences colleagues in turn.",
        },
        trigger: {
          need: "Grey hair becoming visible, or an opportunistic restock while already at the minimarket.",
          source: "Word-of-mouth from a peer (the origin of the current brand choice); otherwise no active search today.",
        },
        alternatives: {
          considered:
            "Currently a set of one (loyal). Previously considered brand “Ayu”, judged on quality, ease of application and brand reputation.",
          outcome:
            "“Ayu” was rejected — awkward to apply by hand and less durable — so the current brand was retained.",
        },
        channel: {
          name: "Minimarket",
          steps: [
            "Need recognition (or opportunistic restock)",
            "Minimal / no search",
            "Purchased alone at the minimarket",
            "Post-purchase judgment (result, scalp reaction)",
            "Shares the outcome with colleagues",
          ],
        },
        postPurchase: {
          satisfaction:
            "Satisfied — results and comfort meet expectations; his only wish is a faster, more practical application.",
          metaphor: "Dependency → Partnership",
          metaphorMeaning:
            "5–7 years of consistent reliance, high trust, and a willingness to pay more to keep the relationship.",
        },
      },
    ],
  },
  {
    slug: "e",
    code: "CDS E",
    letter: "E",
    title: "Campus Flagships",
    tagline: "Two 22-year-old students, two Apple purchases — one gifted frictionless, one ground out through stock bottlenecks.",
    interviewer: "Aminah Rafa Laksita Azmi",
    stories: [
      {
        respondent: "Ais",
        profile: ["Age 22", "Final-year Public Policy Management student", "Lives with parents"],
        product: "Apple iPhone 17 Pro",
        domain: "tech",
        involvement: {
          level: "high",
          text: "High involvement: deliberate consideration of whether a new device is a “significant upgrade”; used daily across all routine environments as an essential schedule and task manager.",
        },
        dmu: {
          roles:
            "Decoupled DMU (purchaser / funder / user separated): the iPhone was purchased and gifted for her by someone else — minimal financial hesitation despite exceeding her personal expensive threshold of IDR 30,000,000.",
        },
        trigger: {
          need: "Functional degradation in her previous smartphone (battery health decay) plus a need for camera-quality upgrades.",
          source: "Direct influence from official Apple promotional launch materials.",
        },
        alternatives: {
          considered:
            "Evaluated whether the flagship upgrade delivered significant hardware improvements over her existing device.",
          outcome:
            "Color selection acted as a decisive personal-identity driver on top of the hardware case.",
        },
        channel: {
          name: "Local Indonesian urban retail",
          steps: [
            "Purchased on February 26, 2026",
            "Zero acquisition friction — “tidak, sangat mudah karena di mana-mana ada” (widely available everywhere)",
          ],
        },
        postPurchase: {
          satisfaction:
            "Maximum satisfaction with zero product issues; battery endurance was a standout positive surprise.",
          scores: ["Brand attachment 9/10", "Satisfaction 5/5"],
          metaphor: "Dependency",
          metaphorMeaning:
            "The device is woven into daily life as an essential manager of schedule and tasks.",
        },
      },
      {
        respondent: "Ian",
        profile: ["Age 22", "Final-year Informatics student", "Lives with parents"],
        product: "Apple iPad (10th gen, 2024)",
        domain: "tech",
        involvement: {
          level: "high",
          text: "High involvement: rigorous pre-purchase research on practical usability, feature set, software integration and opportunity costs; his daily primary tool for tasks, work and relaxation.",
        },
        dmu: {
          roles:
            "Sole DMU (purchaser = user), funded as a personal purchase — evaluated against a subjective high price limit of IDR 45,000,000 based on individual opportunity cost.",
        },
        trigger: {
          need: "A longstanding desire for hardware-exclusive software capabilities.",
          source: "TikTok affiliate promotional videos — bought during a major discount sale event.",
        },
        alternatives: {
          considered:
            "Alternative smartphones (noting 50%-cheaper options with identical core functions), alternative device categories (high-performance laptops offering superior productivity value), and price-matched Android competitors.",
          outcome:
            "Color selection dictated the final choice after shortlisting based on specifications.",
        },
        channel: {
          name: "Indonesian retail channels",
          steps: [
            "AISAS path: Attention → Interest → Search → Action → Share",
            "Driven by discount events",
            "Frequent friction: official stock bottlenecks, release delays, local pricing markups",
          ],
        },
        postPurchase: {
          satisfaction:
            "Satisfied overall, but 50% dissatisfied with screen panel quality; camera color rendering outperformed rival Android devices — a positive surprise.",
          scores: ["Brand attachment 50%", "Satisfaction 4/5"],
          metaphor: "Best Friend",
          metaphorMeaning:
            "Loved despite flaws — attachment survives minor defects thanks to standout feature surprises.",
        },
      },
    ],
  },
  {
    slug: "f",
    code: "CDS F",
    letter: "F",
    title: "Dressed for the Long Run",
    tagline: "A Kate Spade bag found through a personal shopping service, and New Balance sneakers bought on impulse — both kept for what they do, not what they signify.",
    interviewer: "Safia Aisyah Nur Saffanah",
    stories: [
      {
        respondent: "R.A. Rosiearum Aisyah Lestiyani, S.I.P.",
        profile: ["Age 23", "Recent International Relations graduate", "Lives with parents"],
        product: "Kate Spade Handbag",
        domain: "fashion",
        involvement: {
          level: "moderate",
          text: "Moderate involvement: evaluating 3 years of use — durability, easy maintenance, practicality, and design comparison with other brands.",
        },
        dmu: {
          roles: "Personally chooses and uses the Kate Spade handbag.",
          influencer: "None.",
        },
        trigger: {
          need: "A functional need — carry all necessary belongings when going out — plus daily usage; and a style/appearance need (match her personal style) plus product quality and durability expectations.",
          source: "Encountered through a personal shopping offering.",
        },
        alternatives: {
          considered:
            "Other handbag brands, with the final choice dependent on design, quality and price.",
          outcome: "The Kate Spade won on design, quality and price.",
        },
        channel: {
          name: "Personal shopping service",
          steps: [
            "Saw the bag through the personal shopping offering",
            "No initial purchase intention",
            "Attracted by the appearance / design",
            "Decided to purchase",
          ],
        },
        postPurchase: {
          satisfaction:
            "Highly satisfied — expectations on quality, durability, easy maintenance and practicality are met.",
          metaphor: "Functional Dependency",
          metaphorMeaning:
            "The bag is difficult to replace because she relies on it to carry everything — yet there is no strong emotional attachment to the brand.",
        },
      },
      {
        respondent: "Ivan Ardiansyah, S.T., M.Eng.",
        profile: ["Age 23", "Recent Mechanical Engineering graduate", "Lives with parents"],
        product: "New Balance 1906R Shoes",
        domain: "fashion",
        involvement: {
          level: "high",
          text: "High involvement: a relatively high price, price–performance consideration, durability, weather resistance, and comparison with alternative brands.",
        },
        dmu: {
          roles:
            "Personally purchased and evaluates the New Balance 1906R based on price, performance and durability.",
          influencer: "None.",
        },
        trigger: {
          need: "Mobility needs (long walks) plus comfort and durability expectations; value-for-money consideration (price-to-performance) given the relatively high product price.",
          source: "Encountered in store.",
        },
        alternatives: {
          considered:
            "Other shoe brands, compared on price, quality, performance and overall drawbacks.",
          outcome: "The New Balance 1906R offered the best balance.",
        },
        channel: {
          name: "Offline store",
          steps: [
            "Impulsive purchase",
            "Saw / encountered the New Balance 1906R",
            "Immediate purchase decision",
            "Post-purchase evaluation: quality, durability, price-to-performance",
          ],
        },
        postPurchase: {
          satisfaction:
            "Highly satisfied — expectations on durability, quality and price-to-performance are met.",
          metaphor: "Value-based Dependency",
          metaphorMeaning:
            "Continued use depends on the product maintaining quality that matches its price — rather than emotional attachment to New Balance.",
        },
      },
    ],
  },
  {
    slug: "f-giga",
    code: "CDS F · Giga",
    letter: "G",
    title: "Precision Instruments",
    tagline: "A doctor’s pocketable Samsung and an engineer’s billiard cue — both bought on function, both named “Partner”.",
    interviewer: "Giga Hidjrika Aura Adkhy",
    stories: [
      {
        respondent: "dr. Eta Auria Latiefa",
        profile: ["Age 29", "DV resident, Sardjito Hospital", "Sole user — daily"],
        product: "Samsung Galaxy S25",
        domain: "tech",
        price: "IDR 14,000,000 (2025)",
        involvement: {
          level: "high",
          text: "High involvement: online search, YouTube reviews, expert opinions and 2–3 store-counter visits until it felt physically right (“srek”). Not an impulse buy — her usual phone replacement cycle is 4–5 years.",
        },
        dmu: {
          roles: "Sole Decider / Buyer / User: Eta.",
          influencer:
            "Non-decider influencers: YouTube reviewers (“people who already know the product”) and store staff; accompanied at purchase by Mas Erwan. Strongest influence self-reported as herself.",
        },
        trigger: {
          need: "Entering PPDS residency created a functional need: handy, small, light, easy to type on one-handed, a good camera for patient photos, and durable for ~4 years. Need more than want.",
          source: "Internal life-stage change; then YouTube, experts and stores.",
        },
        alternatives: {
          considered:
            "Compared compact phones — the #2 option was an iPhone (small + strong camera), rejected as expensive and because she is an “Android person” wary of switching to iOS. Almost chose the S25+ (better camera and RAM).",
          outcome:
            "Dropped the S25+ to keep the small / handy / pocketable profile — criteria: size, patient photography, OS familiarity, durability, price.",
        },
        channel: {
          name: "Offline store (official / mall counter)",
          steps: [
            "Need recognition (PPDS residency)",
            "Online search + YouTube + experts",
            "2–3 counter visits for a physical check",
            "Hesitation between S25 and S25+",
            "Bought the S25 offline, with Mas Erwan",
          ],
        },
        postPurchase: {
          satisfaction:
            "8/10 — the compact/handy need is fully met and on-device AI exceeded expectations; the fingerprint reader is average, and night photos plus the promised 10× zoom fell short (the iPhone is better in low light). Owned ~1 year; less protective of it lately, but it must never be dropped.",
          scores: ["Satisfaction 8/10"],
          metaphor: "Partner",
          metaphorMeaning:
            "A partner across work, play, study and living — a work-support tool, not a lifestyle statement.",
          quote: "Buy it for function, not for prestige.",
        },
      },
      {
        respondent: "Ariq Wiratno, S.T.",
        profile: ["Age 23", "Battery engineer, Formulatrix (Salatiga)", "Mainly sole user — weekends"],
        product: "Cuetec Shane van Boening Billiard Cue",
        domain: "sports",
        price: "IDR 8,500,000",
        involvement: {
          level: "moderate-high",
          text: "Moderate-to-high involvement: already searching other cues, comparing price and brand, and had previously tried this exact stick. Time-to-purchase ~2 weeks — accelerated when a relative offered it cheap.",
        },
        dmu: {
          roles: "Sole Decider / Buyer / User: Ariq. Bought alone via COD.",
          influencer:
            "Key influencer: a relative who owned the cue and sold it at a discount (“talked into it”).",
        },
        trigger: {
          need: "Desire plus opportunity — not a depleted-item need. A relative suddenly offered a cue he had already tried, at a discounted price.",
          source: "Interpersonal first: Facebook #1, then Instagram.",
        },
        alternatives: {
          considered:
            "Compared other cues on price and brand; almost closed another deal before someone else bought it first.",
          outcome:
            "Chose this unit because he had already tried it and the price was discounted. Post-purchase: the shaft feels excellent, the butt weaker; the set should have included a tip sharpener and embroidered badge (missing at sale).",
        },
        channel: {
          name: "Offline COD from the relative (bought alone)",
          steps: [
            "Searched other cues",
            "No satisfactory find",
            "Relative offers the already-tried cue, cheap",
            "Price check",
            "Bought with no last-moment doubt — thanks to the prior trial",
            "Info flow: Facebook first, then Instagram",
          ],
        },
        postPurchase: {
          satisfaction:
            "8/10 — met overall; the shortfall is the butt. Owned 6 months; attachment moved from 100% to 80%. Positive surprise: compliments and glances from others — the shaft feels excellent for the money.",
          scores: ["Satisfaction 8/10", "Attachment 100% → 80%"],
          metaphor: "Partner",
          metaphorMeaning:
            "Used only when playing — a gift to himself, not a love-to-death bond. Brand trust still matters: he would refuse a no-name at the same price.",
          quote: "Buy what you like, and don’t tell other people the price.",
        },
      },
    ],
  },
];

export interface Lens {
  n: string;
  name: string;
  question: string;
  body: string;
}

export const lenses: Lens[] = [
  {
    n: "01",
    name: "Respondent & Demographics",
    question: "Who is buying?",
    body: "Age, education, job and household. Context shapes budget, priorities and risk tolerance before any product enters the picture.",
  },
  {
    n: "02",
    name: "Products & Domain",
    question: "What did they buy?",
    body: "The product and its category — from a IDR 35,000 hair-color touch-up to a IDR 21 M smartphone — and the price point that frames the whole decision.",
  },
  {
    n: "03",
    name: "Involvement Level",
    question: "How much thinking did it take?",
    body: "The cognitive effort a purchase demands: from close-to-automatic habit to months of comparison, budget checks and store visits.",
  },
  {
    n: "04",
    name: "Buying Center (DMU)",
    question: "Who was involved?",
    body: "The Decision-Making Unit — who initiates, decides, buys and uses, and who influences them: mentors, partners, reviewers, or nobody at all.",
  },
  {
    n: "05",
    name: "Trigger & Source",
    question: "What started it?",
    body: "The spark — depletion, a life-stage change, a promo, stress — and where the information came from: reviews, word-of-mouth, ads, or plain observation.",
  },
  {
    n: "06",
    name: "Alternatives Evaluated",
    question: "What else was on the table?",
    body: "The evoked set: which brands made the shortlist, what criteria were applied, and why the winner won.",
  },
  {
    n: "07",
    name: "Purchase Channel & Sequence",
    question: "Where did the money change hands?",
    body: "Online or offline — and the exact order of steps from need recognition to checkout, reconstructed step by step.",
  },
  {
    n: "08",
    name: "Post-purchase & Metaphor",
    question: "How does the buyer describe the product now?",
    body: "Satisfaction, surprises, and the relationship metaphor each buyer reaches for — “Personal OS”, “Strategic Armor”, “Partner”, “Dependency”.",
  },
];

export interface Insight {
  n: string;
  dimension: string;
  surprise: string;
  pattern: string[];
  within: { domain: Domain | "all"; label: string; text: string }[];
  across: string;
}

export const insights: Insight[] = [
  {
    n: "01",
    dimension: "Triggers & Need Recognition",
    surprise:
      "High-involvement purchases like the iPad Air 5 and the Michael Kors / Kate Spade bags were driven by cold, functional rationale (“Personal OS”, “Executive Armor”) — not emotional brand devotion.",
    pattern: [
      "Tech: triggered by functional degradation (battery decay), workflow efficiency, or platform/software capabilities.",
      "Fashion / Grooming: triggered by professional identity (“executive presence”), social representation, or physical depletion.",
    ],
    within: [
      { domain: "tech", label: "Tech", text: "Productivity gaps, hardware degradation, or ecosystem locks." },
      { domain: "fashion", label: "Fashion", text: "Professional image and visual presentation goals." },
      { domain: "grooming", label: "Grooming", text: "Physical stock depletion or grey-hair visibility." },
    ],
    across:
      "Tech triggers lean heavily on functional utility and ROI, whereas Fashion/Grooming triggers rely on identity representation and physical replenishment.",
  },
  {
    n: "02",
    dimension: "Decision Sequence & Channel",
    surprise:
      "Decoupled DMUs (gifted/funded by others) experienced zero purchase friction, while sole DMUs faced budget limits, friction, and stock bottlenecks.",
    pattern: [
      "High involvement: multi-channel digital search → 2–3 competitor evaluations → promo/discount trigger → purchase.",
      "Low involvement: depletion trigger → direct minimarket visit → habitual repurchase.",
    ],
    within: [
      { domain: "tech", label: "Tech", text: "Extensive digital research (TikTok, YouTube, specs comparison) across e-commerce or authorized retail." },
      { domain: "fashion", label: "Fashion", text: "Visual browsing (Instagram, Google) and holding out for discounts or preloved deals." },
      { domain: "grooming", label: "Grooming", text: "An abbreviated path using local minimarket channels without active search." },
    ],
    across:
      "High-involvement goods follow long evaluation paths across online/offline touchpoints, whereas low-involvement routine goods rely on immediate, localized channel convenience.",
  },
  {
    n: "03",
    dimension: "Buying Center & Influencers",
    surprise:
      "Habitual, low-involvement grooming products carry surprisingly high personal/professional image stakes — leading to multi-year “Dependency” without active search.",
    pattern: [
      "Cross-evaluations frequently hit a wall not on price, but on ecosystem compatibility (Windows DeX vs Apple Ecosystem).",
    ],
    within: [
      { domain: "tech", label: "Tech", text: "Influenced by tech reviewers, IT friends, family, and peer ecosystem choices." },
      { domain: "fashion", label: "Fashion", text: "Influenced by partners, personal style criteria, and social circles." },
      { domain: "grooming", label: "Grooming", text: "Influenced by initial word-of-mouth recommendations, leading to self-reliant repeat buys." },
    ],
    across:
      "Tech/Fashion purchases involve external sounding boards (peers, reviews, partners) during evaluation, while Grooming relies on self-execution once brand trust is established.",
  },
  {
    n: "04",
    dimension: "Post-Purchase & Metaphor",
    surprise:
      "Brand attachment scores can be low due to minor product defects — even while the product is regarded as a “Best Friend” because of standout feature surprises.",
    pattern: [
      "Satisfaction is heavily tied to whether the initial core functional requirement (efficiency, image, performance) was met.",
    ],
    within: [
      { domain: "tech", label: "Tech", text: "Evaluated on performance, battery life, screen quality, and daily workflow enhancement." },
      { domain: "fashion", label: "Fashion", text: "Evaluated on durability, styling match, and perceived social/executive value." },
      { domain: "grooming", label: "Grooming", text: "Evaluated on mildness, scent duration, and lack of adverse reactions." },
    ],
    across:
      "Tech produces “Investment”, “Personal OS”, or “Work Companion” metaphors; Fashion produces “Armor” or “Style Extension”; Grooming produces “Dependency” or “Partnership” metaphors.",
  },
];

/* ------------------------------------------------------------------ */
/*  Group analysis — the group’s revised insights, as written in the   */
/*  updated source document.                                           */
/* ------------------------------------------------------------------ */

export interface GroupAnalysisNote {
  n: string;
  title: string;
  body: string[];
}

export const groupAnalysis: GroupAnalysisNote[] = [
  {
    n: "01",
    title: "Important similarities and differences",
    body: [
      "Most respondents showed that purchase decisions involve a combination of functional needs, price/value considerations, and personal preferences. However, the level of involvement varied considerably. Tech products such as the iPad Air 5, Samsung S24/S25 and iPhone involved extensive research and comparison, while routine grooming products such as fragrance and hair coloring were often purchased habitually. Fashion products generally fell between these extremes, with consumers considering both practical value and appearance.",
    ],
  },
  {
    n: "02",
    title: "Differences in consumer involvement",
    body: [
      "High involvement was evident when the product had significant financial, functional, or personal consequences. Kris spent several days evaluating the iPad’s long-term value, productivity, budget and ecosystem; Bima spent two months evaluating ROI and software support for the Samsung S24 Ultra. In contrast, Katarina’s fragrance purchase was largely automatic, with no active information search or brand comparison.",
    ],
  },
  {
    n: "03",
    title: "Cases that challenged the expected profile",
    body: [
      "An important finding is that price alone does not determine involvement. CG showed high involvement when purchasing cigarettes, despite the product being a routine consumable: he checked his budget, watched specific reviews, and compared 4–5 brands because of the premium price point. Conversely, some relatively expensive products were also strongly influenced by situational factors such as promotions.",
    ],
  },
  {
    n: "04",
    title: "Utilitarian vs. hedonic / ego-expressive motivations",
    body: [
      "The interviews revealed that motivations are often mixed rather than purely utilitarian or hedonic. Kris’s iPad purchase was predominantly utilitarian — productivity, studying and workflow improvement. Clay’s Michael Kors purchase combined functional need with an ego-expressive motivation, as she explicitly sought an “executive presence”. Meanwhile, Clara’s iPhone purchase included both functional needs and a hedonic element, as thesis fatigue contributed to the desire for a self-reward.",
    ],
  },
  {
    n: "05",
    title: "Key revised insight",
    body: [
      "Our initial understanding of involvement was refined: consumer involvement is better explained by perceived importance, risk, relevance and consequences than by product category or price alone. The same type of product can generate different decision processes depending on the consumer’s situation — smartphones ranged from careful two-month evaluations to decisions influenced by existing ecosystem preferences and personal circumstances.",
    ],
  },
  {
    n: "06",
    title: "Most surprising finding",
    body: [
      "The most unexpected finding was that routine or low-involvement products can still carry meaningful personal or professional consequences. Sun’s hair-coloring purchase was routine, but maintaining his appearance and professional image made the outcome personally significant. This suggests involvement can differ between the purchase process and the importance of the consumption outcome.",
    ],
  },
  {
    n: "07",
    title: "Age and life-stage segmentation: students vs. professionals",
    body: [
      "Student respondents (Bima, Clara, Ian, Ais) show decision paths heavily influenced by peer ecosystems, digital channels (TikTok/YouTube), and hedonic or stress-relief triggers such as post-thesis self-rewards. Working professionals and lecturers (dr. Eta, Katarina, Sun) prioritize long-term durability, functional work necessity and established brand loyalty, engaging in minimal digital exploration once trust is established.",
    ],
  },
  {
    n: "08",
    title: "Channel friction vs. post-purchase satisfaction",
    body: [
      "Acquisition channels directly impact post-purchase satisfaction alignment. Purchases executed through physical, multi-visit evaluations — such as dr. Eta’s in-store S25 checks — yielded high alignment with initial functional expectations. In contrast, online acquisitions or opportunistic discount-driven buys (Ian’s iPad, Ariq’s billiard cue) occasionally surfaced minor post-purchase trade-offs or missing components, such as screen-panel quality critiques or omitted accessories.",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Additional analysis — our reading beyond the source table.         */
/* ------------------------------------------------------------------ */

export interface AnalysisNote {
  n: string;
  title: string;
  body: string[];
  seenIn: string[];
}

export const analysisNotes: AnalysisNote[] = [
  {
    n: "01",
    title: "Effort tracks identity, not price",
    body: [
      "One of the cheapest stories in the survey — a IDR 40,000 pack of cigarettes — was bought with high involvement: budget checks, flavor-marketing curiosity, vlog validation. Meanwhile a ≈IDR 19 M iPhone was saved for passively over months, then executed spontaneously, “driven by mood”.",
      "Involvement, it turns out, measures how much a purchase says about the buyer — a premium habit, a professional self-image — not what the receipt says. The lipstick (IDR 75 K) got a multi-day review process; the hair color (IDR 35 K) got none, yet anchors a 5–7 year brand relationship.",
    ],
    seenIn: ["CDS A · CG", "CDS C · Clara", "CDS A · RW", "CDS D · Sun"],
  },
  {
    n: "02",
    title: "Who pays decides how frictionless",
    body: [
      "The single decoupled DMU in the survey — Ais’s iPhone 17 Pro, gifted above her own IDR 30 M threshold — was acquired with “zero friction, available everywhere”. Every self-funder, by contrast, hit a wall of some kind: Clay postponed until a preloved discount appeared, Ian fought stock bottlenecks and markups, Bima spent two months on ROI before a flash deal closed him.",
      "Decoupling the payer from the user doesn’t just remove budget pain — it removes the entire evaluation-vs-price negotiation that shapes every other journey.",
    ],
    seenIn: ["CDS E · Ais", "CDS E · Ian", "CDS B · Clay", "CDS C · Bima"],
  },
  {
    n: "03",
    title: "The real wall is ecosystem compatibility",
    body: [
      "Across cases, rejections were justified by ecosystems rather than by specs or price: a Windows-dominant office beat the iPhone/iOS (Bima chose DeX); an existing iPhone + MacBook stack beat Samsung tablets (Kris); being “an Android person” outweighed a stronger low-light camera (dr. Eta); and Clara considered no other brand at all, absorbed by her peer group’s Apple gravity.",
      "Compatibility — with tools, devices, or the social circle — is the invisible criterion that ends more evaluations than any feature comparison.",
    ],
    seenIn: ["CDS C · Bima", "CDS B · Kris", "CDS F·G · dr. Eta", "CDS C · Clara"],
  },
  {
    n: "04",
    title: "Promos and scarcity close, they don’t open",
    body: [
      "Almost no journey in the survey started with a discount — but a striking number ended with one. A bank cashback flash deal closed Bima’s two-month evaluation; a promo discount re-opened Clay’s postponed bag hunt; a major sale event converted Ian’s AISAS path; a relative’s cheap offer accelerated Ariq’s two-week search; a last unit in stock pushed Clara from mood to checkout.",
      "Promotions in this data act as a closing mechanism on formed intentions — which is why they appear at the end of high-involvement sequences and never at the start.",
    ],
    seenIn: ["CDS C · Bima", "CDS B · Clay", "CDS E · Ian", "CDS F·G · Ariq"],
  },
  {
    n: "05",
    title: "Grooming runs on trust loops, not marketing",
    body: [
      "Both grooming stories entered the brand through word-of-mouth and now broadcast outcomes themselves: Katarina’s coworkers compliment her scent (reinforcing, never initiating), Sun’s colleagues hear about scalp reactions and results — and Sun himself originally switched because of a peer. Neither has searched actively in years; both repurchase on depletion alone.",
      "Once the trust loop is established, the community — not the channel or the campaign — does the retention work. That’s how a low-involvement product sustains a multi-year “Dependency”.",
    ],
    seenIn: ["CDS D · Katarina", "CDS D · Sun"],
  },
  {
    n: "06",
    title: "Metaphors cluster by function, and predict the relationship",
    body: [
      "Function metaphors dominate where performance is the point: “Personal OS Investment”, “Work Companion”, “Partner”, “Calculated Relief”. Protection metaphors (“Strategic Armor”) appear only where a purchase stands in for professional image. Attachment metaphors (“Dependency”, “Best Friend”) mark products woven into daily routine.",
      "The metaphor also predicts post-purchase behavior: “Armor” owners repurchase when image needs return, “Dependency” owners repurchase on depletion, and “Partner” owners — like dr. Eta — buy the successor “for function, not for prestige”.",
    ],
    seenIn: ["CDS B · Kris", "CDS C · Bima", "CDS B · Clay", "CDS E", "CDS F·G"],
  },
];

/* ------------------------------------------------------------------ */
/*  Derived analytics — counts and price points computed from the      */
/*  14 stories above, transcribed honestly from the source table.      */
/* ------------------------------------------------------------------ */

export const pricePoints: {
  label: string;
  price: string;
  value: number; // IDR
  domain: Domain;
}[] = [
  { label: "Hair Color · Sun", price: "35 K", value: 35000, domain: "grooming" },
  { label: "Cigarettes · CG", price: "40 K", value: 40000, domain: "consumable" },
  { label: "Body Splash · Katarina", price: "44 K", value: 44000, domain: "grooming" },
  { label: "Revlon Lipstick · RW", price: "75 K", value: 75000, domain: "beauty" },
  { label: "Michael Kors Bag · Clay", price: "6 M", value: 6000000, domain: "fashion" },
  { label: "Cuetec Cue · Ariq", price: "8.5 M", value: 8500000, domain: "sports" },
  { label: "iPad Air 5 · Kris", price: "9.5 M", value: 9500000, domain: "tech" },
  { label: "Galaxy S25 · dr. Eta", price: "14 M", value: 14000000, domain: "tech" },
  { label: "iPhone 15 Pro · Clara", price: "≈19 M", value: 19000000, domain: "tech" },
  { label: "Galaxy S24 Ultra · Bima", price: "≈21 M", value: 21000000, domain: "tech" },
];

export const priceUnstated = [
  "iPhone 17 Pro (Ais)",
  "iPad 10th gen (Ian)",
  "Kate Spade Bag (Rosie)",
  "New Balance 1906R (Ivan)",
];

export const involvementCounts: { label: string; count: number }[] = [
  { label: "High", count: 8 },
  { label: "Moderate–High", count: 2 },
  { label: "Moderate", count: 2 },
  { label: "Low", count: 2 },
];

export const channelCounts: { label: string; count: number }[] = [
  { label: "Offline — store / minimarket", count: 8 },
  { label: "Online — Tokopedia / reseller", count: 3 },
  { label: "Personal shopping service", count: 1 },
  { label: "P2P via a relative (COD)", count: 1 },
  { label: "Retail, unspecified", count: 1 },
];

export const dmuCounts: { label: string; count: number }[] = [
  { label: "Sole & self-directed", count: 8 },
  { label: "Sole, with sounding boards", count: 5 },
  { label: "Decoupled — gifted / funded", count: 1 },
];

export const headlineStats = [
  { n: "35 K – 21 M", label: "Stated price range (IDR)" },
  { n: "≈ 7 M", label: "Median price, 10 priced stories" },
  { n: "8 / 14", label: "High-involvement purchases" },
  { n: "13 / 14", label: "Metaphors recorded" },
];

export const team = [
  { role: "A", name: "Anggit Driasaditya", id: "56" },
  { role: "B", name: "Rick Owen Handel Purba", id: "106" },
  { role: "C", name: "Kevin Rehuel", id: "180" },
  { role: "D", name: "Astriwisessa Indahsari Bhanuwati", id: "256" },
  { role: "E", name: "Aminah Rafa Laksita Azmi", id: "308" },
  { role: "F", name: "Safia Aisyah Nur Saffanah & Giga Hidjrika Aura Adkhy", id: "364 · 388" },
];

export interface MetaphorEntry {
  name: string;
  domain: Domain;
  caseCode: string;
  meaning: string;
}

export const metaphors: MetaphorEntry[] = [
  {
    name: "Personal OS Investment",
    domain: "tech",
    caseCode: "CDS B · iPad Air 5",
    meaning: "A long-term tool to upgrade personal efficiency and workflow.",
  },
  {
    name: "Work / Productivity Companion",
    domain: "tech",
    caseCode: "CDS C · Galaxy S24 Ultra",
    meaning: "Professional work execution without opening a laptop.",
  },
  {
    name: "Dependency",
    domain: "tech",
    caseCode: "CDS E · iPhone 17 Pro",
    meaning: "An essential manager of schedule and tasks, woven into daily life.",
  },
  {
    name: "Best Friend",
    domain: "tech",
    caseCode: "CDS E · iPad 10th gen",
    meaning: "Loved despite flaws — attachment survives minor defects.",
  },
  {
    name: "Partner",
    domain: "tech",
    caseCode: "CDS F·G · Galaxy S25",
    meaning: "A work-support tool across work, play, study and living. Function, not prestige.",
  },
  {
    name: "Strategic Armor",
    domain: "fashion",
    caseCode: "CDS B · Michael Kors Bag",
    meaning: "A confidence shield for executive credibility at meetings.",
  },
  {
    name: "Functional Dependency",
    domain: "fashion",
    caseCode: "CDS F · Kate Spade Bag",
    meaning: "Hard to replace in function, but no emotional bond to the brand.",
  },
  {
    name: "Value-based Dependency",
    domain: "fashion",
    caseCode: "CDS F · New Balance 1906R",
    meaning: "Kept only while quality matches the price paid.",
  },
  {
    name: "Appearance Enhancer",
    domain: "beauty",
    caseCode: "CDS A · Revlon Lipstick",
    meaning: "A functional tool to look neat and reflect personal taste.",
  },
  {
    name: "Dependency",
    domain: "grooming",
    caseCode: "CDS D · Body Splash",
    meaning: "A daily habit around a functional need — not an emotional brand bond.",
  },
  {
    name: "Dependency → Partnership",
    domain: "grooming",
    caseCode: "CDS D · Hair Color",
    meaning: "5–7 years of reliance, trust, and willingness to pay more.",
  },
  {
    name: "Calculated Relief",
    domain: "consumable",
    caseCode: "CDS A · Cigarettes",
    meaning: "A rigorously researched premium habit for daily stress reduction.",
  },
  {
    name: "Partner",
    domain: "sports",
    caseCode: "CDS F·G · Cuetec Cue",
    meaning: "A gift to himself — used only when playing, but brand trust still matters.",
  },
];

export function getCase(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug);
}
