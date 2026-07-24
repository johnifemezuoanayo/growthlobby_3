 // Map slide indices to blog post IDs
  export const featuredSlides = [
    {
      id: "post-claude-review",
      tag: "AI & Design",
      title:
        "Claude Design Review: Is Anthropic's AI Website Designer Actually Worth Using?",
      excerpt:
        "An in-depth review of Claude's recent AI interface builder and website generators. We put it to the test against human-crafted designs.",
      image: "/images/project-1.png",
    },
    {
      id: "post-web-design-advice",
      tag: "Web Design",
      title:
        "Web Design Advice After 7 Years: Principles That Build High-Converting Websites",
      excerpt:
        "Discover 16 essential web design principles learned over 7 years of experience. We cover visual hierarchy, layout boundaries, and visual weight.",
      image: "/images/project-1.png",
    },
    {
      id: "post-bullet-points",
      tag: "List sections",
      title:
        "How to Add Bullet Points in Squarespace List Sections (Step-by-Step Guide)",
      excerpt:
        "Squarespace list sections previously allowed bullet points but this feature stopped working for a time, and now it's available again.",
      image: "/images/project-1.png",
    },
  ];


   export const blogPosts = [
      {
        id: "post-bullet-points",
        title:
          "How to Add Bullet Points in Squarespace List Sections (Step-by-Step Guide)",
        excerpt:
          "Squarespace list sections previously allowed bullet points but this feature stopped working for a time, and now it's available again. Learn how to toggle it and style it.",
        content: [
          "Squarespace list sections previously allowed bullet points, but due to a series of framework updates, this feature was temporarily disabled. Fortunately, it is now back and fully functional. This guide will take you step-by-step through enabling list section bullet points, styling them to match your branding, and troubleshooting common editor bugs.",
          'To begin, navigate to the page editor and select your List Section. Inside the list styling parameters, a brand-new "Text Formatting" panel has been added. Here, toggling the simple list structure yields a rich-text toolbar allowing nested bullet points and ordered lists directly inside your item cards.',
          "Why does this matter? Well, readability is everything. Studies show that structured lists increase user comprehension by up to 40% over solid paragraph blocks. Using lists in your feature roundups, service packages, and testimonials makes your layout infinitely more engaging.",
          'If you want custom iconography instead of standard black bullet dots, you can insert a tiny snippet of custom CSS under Website Tool Settings: \n\n.user-items-list-simple .list-item li::marker { content: "→ "; color: #9E5DE5; } \n\nThis simple adjustment swaps default circles with stylized arrow indicators that match the John.Design brand perfectly.',
          "Remember to preview your list layout on mobile. Squarespace occasionally squishes list padding on smaller viewports. Adding a minor custom responsive rule guarantees that the extra indentation required for lists is preserved on all standard mobile devices.",
        ],
        image: "/images/project-1.png",
        category: "Squarespace",
        date: "July 18, 2026",
        readTime: "4 min read",
        author: {
          name: "John Design",
          avatar: "/src/assets/images/john_portrait_1784550954073.jpg",
          role: "Squarespace Expert & Community Leader",
        },
        tag: "Squarespace",
      },
      {
        id: "post-web-design-advice",
        title:
          "Web Design Advice After 7 Years: Principles That Build High-Converting Websites",
        excerpt:
          "Discover 16 essential web design principles learned over 7 years of experience running a digital agency. Learn why visual hierarchy, negative space, and click-targets drive true commercial results.",
        content: [
          "After designing and shipping over 700 websites, you start to notice clear patterns in what separates good design from exceptionally performing design. High conversion is never a product of accidental beauty; it is the result of strict visual engineering and spatial rhythm.",
          "The first core rule is Visual Weight Hierarchy. When a user lands on your site, their eyes should follow a predetermined sequence of focal coordinates: Headline → Primary Call-to-Action → Value Showcase. If your navigation menu, social icons, or auxiliary background decorations are fighting for that same visual attention, your conversion rate drops immediately.",
          "The second principle is Touch Target Density. On desktop, hover states provide cursor feedback, but on mobile devices, every interactive element must support tactile ease. Touch targets should be at least 44px by 44px with generous negative margins. Cramping buttons close together leads to rage-clicks and cart abandonment.",
          "Thirdly, stop using unrequested visual decorations. In-page terminal logging lines, fake network status indicators, or synthetic telemetry are symbols of over-engineered AI clutter. Real premium craftsmanship utilizes clean, honest layouts where typography pairs intentionally and colors reinforce actual brand mood.",
          "Finally, always optimize for performance. A beautiful web layout that takes 4 seconds to download on an LTE connection is a failure. Compressing visual elements, lazy-loading heavy background carousels, and stripping unnecessary heavy javascript dependencies are the unsung heroes of design success.",
        ],
        image: "/images/project-1.png",
        category: "Web Design",
        date: "July 12, 2026",
        readTime: "6 min read",
        author: {
          name: "John Design",
          avatar: "/src/assets/images/john_portrait_1784550954073.jpg",
          role: "Squarespace Expert & Partner",
        },
        tag: "Web Design",
      },
      {
        id: "post-claude-review",
        title:
          "Claude Design Review: Is Anthropic's AI Website Designer Actually Worth Using?",
        excerpt:
          "An in-depth review of Claude's recent AI interface builder and website generators. We put it to the test against human-crafted designs to evaluate speed, responsiveness, and aesthetic customizability.",
        content: [
          "Generative AI is transforming how we construct initial mockups, but does it represent a true replacement for bespoke, engineered design? Today, we review Claude's recent UI generation capabilities and see if it can withstand professional agency standards.",
          "In terms of raw speed, Claude is a marvel. Generating a single-view prototype complete with custom responsive headers and styled inputs takes under 15 seconds. For rapid brainstorming, this accelerates client feedback loops significantly.",
          "However, where AI-generated layouts consistently fall short is in the subtle details: typographic rhythm, specific custom paddings, and unique brand identity. AI-designed systems tend to fall back on generic modern frameworks, creating a homogenized web aesthetic where every site looks exactly the same.",
          "Additionally, the underlying code output requires serious developer refactoring. Many auto-generated elements use absolute calculations or unoptimized flex properties that behave unpredictably under container resize events. To achieve true production-ready quality, a skilled Design Engineer must step in to refactor, structure, and refine.",
          "Our verdict? Claude is an exceptional tool for your visual ideation stack. It replaces static wireframe sketches, but the final, high-fidelity implementation still demands human craftsmanship, strategic positioning, and custom design intuition.",
        ],
        image: "/images/project-1.png",
        category: "AI & Design",
        date: "July 05, 2026",
        readTime: "5 min read",
        author: {
          name: "John Design",
          avatar: "/src/assets/images/john_portrait_1784550954073.jpg",
          role: "Design Engineer Expert",
        },
        tag: "AI & Design",
      },
      {
        id: "post-mobile-ux",
        title:
          "Maximizing Mobile UX: Mobile-First Layout Rules for Modern SaaS Interfaces",
        excerpt:
          "With mobile traffic exceeding 55% of global web interactions, designing mobile-first is no longer a suggestion. Master the 5 essential design boundaries for small viewports.",
        content: [
          "Designing for mobile-first means designing for constraint. You are dealing with less screen real estate, limited cognitive bandwidth, and varying environmental lighting. The best mobile interfaces feel light, spacious, and extremely focused.",
          "A critical mistake in responsive translation is shrinking desktop elements proportionally. If a card is beautiful on desktop, piling its contents vertically on mobile without modifying padding leads to infinite scroll-fatigue.",
          "Instead, use progressive disclosure. Hide secondary or decorative elements and keep the primary conversion funnel central. Ensure standard headers tuck away into an elegant, responsive slide drawer that responds to quick touch interactions.",
          "We also highly recommend testing with physical devices rather than relying solely on browser simulator grids. Real thumbs have varying reach limits. Placing vital navigational triggers within the middle-to-lower portion of the screen prevents physical strain and enhances daily user retention.",
        ],
        image: "/images/project-1.png",
        category: "Web Design",
        date: "June 28, 2026",
        readTime: "5 min read",
        author: {
          name: "John Design",
          avatar: "/src/assets/images/john_portrait_1784550954073.jpg",
          role: "Design Engineer Expert",
        },
        tag: "Web Design",
      },
      {
        id: "post-negative-space",
        title:
          "The Power of Negative Space: How to Let Your Designs Breathe and Direct Focus",
        excerpt:
          "Why empty space is your most powerful layout tool. Learn how to master padding and margin scaling to elevate simple cards and command visual authority.",
        content: [
          "Many designers feel an urge to fill empty space with graphics, dividers, or badges. However, negative space is not empty space; it is active spacing that defines relations, commands visual authority, and establishes reading rhythm.",
          "When you increase the margin around an element, you are signaling its importance. A simple title isolated in a vast, neutral container looks infinitely more premium and editorial than the same title crowded by borders and helper tags.",
          "To master negative space, establish a rigid spatial grid. We prefer an 8px base: 8px, 16px, 24px, 32px, 48px, 64px, and 96px. Apply these values consistently for padding and margin values throughout your layout.",
          "This consistency creates an invisible structural alignment that the human brain instantly recognizes as professional, calming, and visually satisfying. When in doubt, add more space.",
        ],
        image: "/images/project-1.png",
        category: "Process",
        date: "June 19, 2026",
        readTime: "4 min read",
        author: {
          name: "John Design",
          avatar: "/src/assets/images/john_portrait_1784550954073.jpg",
          role: "Design Engineer Expert",
        },
        tag: "Process",
      },
      {
        id: "post-seo-squarespace",
        title: "SEO Optimization for Squarespace: Common Pitfalls and Fast Fixes",
        excerpt:
          "Squarespace gets a bad rep for SEO, but it has all the tools you need. Fix these 3 critical setup errors to double your organic traffic and rank first.",
        content: [
          "There is a persistent myth that Squarespace is bad for search engine rankings. In reality, modern Squarespace handles sitemaps, structured schema, meta tags, and URL redirects with incredible speed and technical precision.",
          "The primary issues with poor rankings are almost always content-based. Ensure you are setting clear, descriptive H1, H2, and H3 tags sequentially. Search spiders use these heading tags to map out the logical hierarchy of your content.",
          'Secondly, compress and name your images correctly. Google Image Search is a powerful organic traffic funnel. Swapping a generic "IMG_8829.jpg" with a keyword-rich, dash-separated descriptive tag like "squarespace-list-section-bullet-points.jpg" and adding an alt tag makes a massive SEO difference.',
          "Lastly, link your posts internally. Inter-linking relevant design insights keeps users browsing your site longer. This signal of low bounce rates tells search engines that your site provides genuine, high-quality answers, pushing your search rank upward.",
        ],
        image: "/images/project-1.png",
        category: "SEO",
        date: "June 04, 2026",
        readTime: "4 min read",
        author: {
          name: "John Design",
          avatar: "/src/assets/images/john_portrait_1784550954073.jpg",
          role: "Squarespace Expert & Strategist",
        },
        tag: "SEO",
      },
    ];
  