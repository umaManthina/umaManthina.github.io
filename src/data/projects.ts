export interface CaseStudyImage {
  src: string
  alt: string
  caption?: string
}

export interface Persona {
  name: string
  tagline: string
  body: string
}

export interface Stat {
  value: string
  label: string
}

export interface CaseStudyLink {
  label: string
  url: string
}

export interface CaseStudySection {
  heading: string
  paragraphs?: string[]
  list?: string[]
  images?: CaseStudyImage[]
  personas?: Persona[]
  stats?: Stat[]
  link?: CaseStudyLink
  centerText?: boolean
}

export interface PlayEmbed {
  embedUrl: string
  width: number
  height: number
  pageUrl: string
}

export interface Control {
  action: string
  keys: string
}

export interface Project {
  slug: string
  number: string
  title: string
  description: string
  // PLACEHOLDER — swap with real artwork
  cardImage: string
  bannerImage: string
  productImage: string
  credits: string[]
  playEmbed?: PlayEmbed
  screenshots?: string[]
  externalLink?: CaseStudyLink
  previewImage?: string
  previewPlaceholder?: boolean
  previewScreens?: string[]
  bannerLabel?: string
  pageHeading?: string
  subheading?: string
  bodyParagraphs?: string[]
  controls?: Control[]
  controlsLabel?: string
  fullDescription: string
  previewHeading?: string
  showContactNote?: boolean
  introImages?: string[]
  hasRealArtwork?: boolean
  useRecycleRingArt?: boolean
  iframeArt?: string
  caseStudy?: CaseStudySection[]
}

export const projects: Project[] = [
  {
    slug: 'ui-ux',
    number: '01',
    title: 'UI/UX',
    description: '',
    cardImage: '/projects/ui-ux/hero.png',
    bannerImage: '/projects/ui-ux/hero.png',
    productImage: '/projects/ui-ux/home-final.png',
    credits: ['UX Research & Design: Uma Manthina', 'Tools: Figma'],
    hasRealArtwork: true,
    fullDescription:
      'A redesign of the San Mateo Public Library website, built around accessibility for seniors and cognitive impairments alongside a fast, expressive experience for younger patrons.',
    introImages: [
      '/projects/ui-ux/prototype/prototype-home.png',
      '/projects/ui-ux/prototype/prototype-events.png',
      '/projects/ui-ux/prototype/prototype-my-books.png',
    ],
    caseStudy: [
      {
        heading: 'Background',
        centerText: true,
        paragraphs: [
          'A public library is a uniquely inclusive civic space that is meant to serve everyone. Among this broad audience are those with varying confidence, language, memory, and technical fluency. As newer generations become increasingly involved within the digital space, older generations must not be left behind. Company ignorance to seniors’ lack of technical literacy has become an epidemic, and the problem is only worsening.',
        ],
      },
      {
        heading: 'Problem',
        centerText: true,
        paragraphs: [
          'San Mateo County’s websites for local libraries are out of date and unadapted to modern systems which are more intuitive to audiences. According to the US Census, 17% of San Mateo’s residents are 65 or older.',
          'Further, San Mateo serves a multilingual and multicultural community.',
          'This diversity makes it tricky to develop an inclusive website with a one-size-fits-all design.',
        ],
        stats: [
          { value: '17%', label: 'of San Mateo’s residents are 65 or older' },
          { value: '46.6%', label: 'of people ages 5+ speak a language besides English at home' },
          { value: '28.3%', label: 'identify as Asian' },
          { value: '27.6%', label: 'identify as Hispanic or Latino' },
          { value: '19.6%', label: 'are under 18' },
        ],
      },
      {
        heading: 'Project Goals',
        centerText: true,
        paragraphs: [
          'Create an engaging website which adapts to the user’s demographic. Aim to reduce time and uncertainty between finding relevant information by developing a concrete experience path which prioritizes scannability.',
        ],
      },
      {
        heading: 'Research Approach',
        centerText: true,
        paragraphs: [
          'I conducted three user interviews designed to uncover both what people wanted, and the specific points in the website design with which they lost their confidence.',
          'My research process had the following goals:',
        ],
        list: [
          'How long does it take for a user to complete their goal?',
          'How do people describe their goal before they know the library’s labels?',
          'How does their user journey change because of memory and visual impairments?',
        ],
      },
      {
        heading: 'Customer Interviews',
        centerText: true,
        paragraphs: [
          'I recruited 3 regular members of the San Mateo Library to participate in interviews. One member was a teen and the other two members were seniors of ages 70 and 66, one of which was a mild dementia patient. Each participant had a different goal with the website: One senior wanted to engage with the community, the other wanted tutoring and class opportunities, and the teen was looking to check out books.',
          'To conduct the interview, I first had each participant navigate through the website to their goal, verbally narrating their thought process.',
          'The following is a summary of their experiences.',
          'On average, it took anywhere between 10-20 minutes for each participant to locate their desired service, if it all. When asked about their experience, all mentioned wanting a simpler and clearer direction for the website.',
          'The two senior participants initially went through the home page, looking for cues as they scrolled through.They seemed to hesitate before clicking a button, and one’s accompanying narrations confirmed this: he listed out a few possible outcomes of a button before finally settling on what he thought it meant. This was especially prominent in icon-only interactions.',
          'The teen, however, skipped the home page and immediately located the search. This participant was familiar with keyword search, and typed in “catalog” to find books. Once searched, the teen noted that it was unusual for the site to take her to a new page, saying it felt “sketchy”. This discomfort only worsened when she saw the book-list experience that was heavy with information. After what seemed like a visual disconnect, the participant gave up and left the website.',
          'Following this behavioral scan of the participants was an interview. Here’s a summary of my findings:',
          'There were mental expectations that varied between the age groups.',
          'The teen participant expected a more organized system with subtopics beneath larger topics, and explained that she was frustrated when categories took her to unexpected places. She seemed to dislike the site’s inefficiency, and often compared it to other platforms like Instagram and Duolingo: both modern and visually stimulating apps.',
          'The senior participants described that the search function did not accommodate their commands as specifically as they had hoped. This is perhaps due to the nature of their searches being casual, with language similar to in-person bookings. One senior participant entered the search query “an event between ten and noon”.',
          'There are, however, some features that are worth protecting.',
          'That is, the senior participants appreciated the language option as a “nice feature that helps [them] talk in native tongue” and boost confidence.',
        ],
      },
      {
        heading: 'Persona Development',
        centerText: true,
        paragraphs: [
          'Because recognizable patterns primarily emerged between participants of similar age groups, I decided to create two personas that embody the problems/goals specific to both seniors and teens in navigating this website.',
        ],
        personas: [
          {
            name: 'Tim Smith',
            tagline: 'San Mateo resident',
            body: 'Meet Tim Smith, an 80 year old San Mateo resident that is looking for a library tech-tutoring event between 10am and noon. Tim is a mild dementia patient that has a hard time remembering the reason he started doing a task as well as the steps he took to get where he is. He has a limited technological background and has only worked with a handful of websites in the forgettable past. He is unfamiliar with conventional digital icons like search, microphone, and forward and back navigation, and is uneasy when a page changes unexpectedly. He also struggles with a visual imparity, and uses an accessibility feature on his laptop that expands the page size. Because of this, a congested screen with this enlarged setting worsens his confusion; he needs fewer choices, clear words, and consistent location cues that give him a way to recover when he loses his place.',
          },
          {
            name: 'Emily Hart',
            tagline: 'San Mateo resident',
            body: 'Meet Emily Hart. Emily is a 14 year old San Mateo resident that is looking to replace some of her screen time by reading new fantasy-fiction novels. With her high phone-usage comes high technological fluency, and an expectation for quick and responsive websites. Emily expects her technology to grab her attention visually and motivate her to continue navigating the page. She also expects that there be no clutter: she wants clear hierarchy systems that intuitively organize topics and follow her mental expectations. Because she is used to a personalized for-you-page in applications like Instagram and TikTok, she expects that nothing on her screen be irrelevant to her. She gets frustrated quickly when a site makes her dig for what she wants, and she’s unlikely to give a clunky interface a second chance. Ultimately, Emily wants book search to feel as effortless and engaging as scrolling through her favorite apps.',
          },
        ],
      },
      {
        heading: 'Problem Statements',
        centerText: true,
        paragraphs: [
          'I’ve organized these key findings in the form of “how might we” questions, and narrowed them down to a list of 3 calls to action.',
        ],
        list: [
          'How might we personalize the library experience for a user’s specific goals and interests?',
          'How might we support people with various disabilities and cognitive change?',
          'How might we give specific demographics an expressive and fast discovery path?',
        ],
      },
      {
        heading: 'User Flow',
        centerText: true,
        images: [
          {
            src: '/projects/ui-ux/user-flow.svg',
            alt: 'User flow diagram mapping Home to Event/Class, Check out a book, Book a room, and Manage my Account paths',
          },
          {
            src: '/projects/ui-ux/testing-annotations.png',
            alt: 'Annotated wireframes describing design decisions from usability testing',
          },
        ],
      },
      {
        heading: 'Branding and Style',
        centerText: true,
        paragraphs: [
          'In order to grip the teen users’ attention, I knew I wanted an aesthetic color palette paired with a fresh, modern layout. At the same time, the colors and buttons needed to contrast to hold up for the senior demographic. According to a National Research Council study on aging vision, the eye’s lens yellows over time and filters out blue light, making it harder for older adults to differentiate blue and green tones. However, this conflicted with the ocean, summer-reading aesthetic I wanted to build the site around.',
          'My solution was to commit to one consistent shade of teal as the site’s accent color, and to only ever place it against high contrast elements like white, cream, or gold. That way, teal could still define the visual theme without the confusion of a neighboring hue. In some purely decorative elements, like the hero illustration, I allowed more range for mixes of blue and yellow, since those are catered more to younger visitors in order to set a mood.',
        ],
        images: [
          {
            src: '/projects/ui-ux/style-guide.png',
            alt: 'Style guide showing typography, color palette, and UI component library',
          },
        ],
      },
      {
        heading: 'Final Design',
        centerText: true,
        link: {
          label: 'View the high-fidelity prototype',
          url: 'https://www.figma.com/proto/lNN17EYSn1yzvEmMKRv1MR/Final-Design?node-id=7-2&t=oOpm2NPbHkLf39nR-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=7%3A2',
        },
      },
      {
        heading: 'Testing',
        centerText: true,
        paragraphs: [
          'I tested my high fidelity prototype on 3 participants: my grandma, an 80 year old dementia patient, and two of the three participants from the pre-low-fidelity interviews. In total, that meant 2 seniors and one teen. The goal of this round was to see whether participants understood where they were and what came next at each point. Like before, I had each participant narrate their actions and thought processes as they navigated the site. Here’s what I found:',
          'On the home page, all participants (even the teen) skipped the search bar entirely and scrolled directly to the four circular tiles, which was surprising but nonetheless what I was hoping for. Two of the three participants audibly read the “I Want To…” out loud before choosing a tile, suggesting that the phrase does help with mental direction. One participant tried tapping on the illustration in the hero before finding the tiles, though she recovered quickly on her own.',
          'The breadcrumb trail proved to be the MVP of the site. That is, participants quickly understood what step they were on and what was in store ahead. My grandmother, specifically, would often forget the purpose of the website midway through a task. But each time, she was able to 1) trace her steps back to the home page via the breadcrumb,  2) remember she was on a library’s site, and 3) continue her task. None of the participants tried clicking on a future step, so I don’t know yet that it’s clear those are not clickable until reached.',
          'Another feature that worked well was the age filtering system. All three participants understood the chips were tap-to-select, and switching between the filters didn’t cause any hesitation.',
          'Back on the home page, all participants noticed and narrated the “Ask a Librarian” and video tutorial, but didn’t engage with either. When I asked about this, both seniors mentioned that they would only use it as a last resort. The teen, however, said she would probably close the tab instead of looking for help, but clarified that this would depend on how much she needed to get done on the site.',
        ],
      },
      {
        heading: 'Reflection',
        centerText: true,
        paragraphs: [
          'This was my first UI/UX project, and it pushed me to learn a lot of new tools and principles. It’s given me a lot of appreciation for how much thought goes into what looks like a simple interface, and it was especially rewarding to design for a cause I genuinely care about.',
          'Have questions about this project? I’d love to talk more about it.',
          'Contact me: umamanthina@gmail.com',
        ],
      },
    ],
  },
  {
    slug: 'game-jam',
    number: '02',
    title: 'Game Jam',
    description: '48-hour builds, scrappy code, and big ideas.',
    cardImage: '/projects/game-jam/hero.png',
    bannerImage: '/projects/game-jam/hero.png',
    productImage: '/projects/game-jam/hero.png',
    credits: ['Team: Uma Manthina, Apy Sen, Akhil Manthina', 'Engine: Godot'],
    hasRealArtwork: true,
    bannerLabel: 'Melon Jam 2026',
    pageHeading: 'Winning Game Jam Project!',
    screenshots: [
      '/projects/game-jam/screenshots/screenshot-01.jpg',
      '/projects/game-jam/screenshots/screenshot-02.jpg',
      '/projects/game-jam/screenshots/screenshot-03.jpg',
      '/projects/game-jam/screenshots/screenshot-04.jpg',
      '/projects/game-jam/screenshots/screenshot-05.jpg',
    ],
    externalLink: {
      label: 'Play on itch.io ↗',
      url: 'https://apysen.itch.io/flashpoint-pi',
    },
    subheading:
      "This is a project we made for the 2026 Melon Jam with a theme of Spark! We took home first place. My role was establishing the game's art direction, designing the homepage, and building the visual assets and itch.io backplate.",
    bodyParagraphs: [
      'All an inspector needs to survive a cultist dungeon is a lighter, a short supply of flames, and a longer supply of one liners.',
      'Light your way through the pitch-black environment, and explode your way to the bottom. Just keep an eye on the flame. When it goes out, so do you.',
    ],
    controls: [
      { action: 'Move', keys: 'WASD / Arrow Keys' },
      { action: 'Flick your lighter', keys: 'Spacebar' },
      { action: 'Interact / pick things up', keys: 'E' },
      { action: 'Menu', keys: 'Esc' },
    ],
    fullDescription:
      'PLACEHOLDER — Highlights from a weekend game jam, including concept sketches, gameplay screenshots, and postmortem notes. Replace with real project description.',
    showContactNote: true,
  },
  {
    slug: 'hackathon',
    number: '03',
    title: 'Hackathon',
    description: 'See what your choices leave behind.',
    cardImage: '',
    bannerImage: '',
    productImage: '',
    previewScreens: [
      '/projects/hackathon/screens/iris-01.jpg',
      '/projects/hackathon/screens/iris-02.jpg',
      '/projects/hackathon/screens/iris-03.jpg',
    ],
    credits: ['Built by Sanjoli Chattopadhyay & Uma Manthina', 'FutureHacks 8'],
    hasRealArtwork: true,
    iframeArt: '/projects/hackathon/iris-preview.html',
    bannerLabel: 'FutureHacks 8',
    previewHeading: 'Environmental Footprint Scanner',
    fullDescription:
      "This is a project we made for the 2026 FutureHacks Hackathon! My role was product ideation and designing the frontend of the website/product UI.",
    showContactNote: true,
    caseStudy: [
      {
        heading: 'Inspiration',
        centerText: true,
        paragraphs: [
          'There is a long history attached to every object around us that runs deeper than we would think; that is, a long chain of materials, production, and transport. We learned this in AP Environmental Science, giving us a completely foreign perspective on ordinary life. More often than not, apathy to the planet is a person’s inability to visualize the environmental impact of the choices they make, no matter how nuanced. Iris works to bridge this divide.',
        ],
      },
      {
        heading: 'What it does',
        centerText: true,
        paragraphs: [
          'Iris detects what a user is looking at via eye tracking. When a user fixates on an object for a certain time, Iris identifies it and returns a summary of its environmental impact: microplastic risk, recyclability, and overall impact score, along with a threat level ranging from low to critical.',
        ],
      },
      {
        heading: 'How we built it',
        centerText: true,
        paragraphs: [
          'We built Iris by combining a Python eye-tracking backend with an HTML/CSS/JavaScript frontend. The backend handles webcam gaze tracking via EyeTrax, product zone detection, AI analysis via Groq’s Llama 4 Scout model, and real-time WebSocket broadcasting; the frontend handles the landing page, scanner shelf layout, product images, gaze UI, and popup results. The WebSocket is the connective tissue between the two. Python and the browser are separate runtimes that can’t normally communicate, and the WebSocket bridges them, streaming normalized gaze coordinates 30 times per second and delivering scan results the moment the AI responds.',
        ],
      },
      {
        heading: 'Challenges we ran into',
        centerText: true,
        paragraphs: [
          'Our biggest technical challenge was calibration. We assumed eye-tracking would simply require dropping in a library, but it quickly became clear that getting it to actually work would require much more iteration than we anticipated. Key components for usability, such as the scanner’s speed and accuracy, depended heavily on the calibration pattern we chose. We had to find a pattern that could train the system, but also not so detailed as to force the user to follow nearly every pixel on the screen. We spent time iterating through several options before landing on one that worked. Our first try was the figure-8 pattern. Despite our initial confidence in it, the system was too sensitive. If the user didn’t follow the dot perfectly, the whole program would fail. We then tested a 9-point grid; it was fast, but not precise enough. We eventually settled on a 16-point calibration. This would give us the accuracy we needed without being too much for the user to handle. A subtler challenge was coordinate normalization. Python tracks gaze in a 1280×720 pixel space, but the browser uses percentage-based positioning. Getting those two systems to agree on where the eyes were actually pointing required careful mapping on both ends. The front-end posed a different challenge. We wanted Iris to feel both cozy and futuristic; finding the right balance was harder than we anticipated. The design went through various renditions across this spectrum until we finally narrowed in on a design that balanced warmth and technical precision with the use of soft earth tones and clean typography in order to make the tool feel approachable.',
        ],
      },
      {
        heading: 'Accomplishments that we’re proud of',
        centerText: true,
        paragraphs: [
          'Building a real-time pipeline between webcam eye tracking and a web frontend was the biggest technical win we had. Using EyeTrax and a custom dense-grid calibration system, we stream gaze coordinates over a WebSocket 30 times per second. It is the same architecture used in commercial AR products. When your gaze rests on a product for one second, Iris triggers a live Groq AI scan and displays the environmental impact in under two seconds. We’re also proud of how the frontend came together by integrating a Spline 3D animation with a real-time Python backend into a seamless experience.',
        ],
      },
      {
        heading: 'What we learned',
        centerText: true,
        paragraphs: [
          'We learned that eyetracking is far more layered than it looks from the outside. We used EyeTrax, which is an open-source Python library that uses your webcam and MediaPipe face landmarks to estimate where your eyes are pointing on screen. Going in, we assumed that the library would handle most of the heavy lifting. However, EyeTrax outputs raw gaze predictions that still need calibration to map accurately to screen coordinates. This pushed us to learn how head position, lighting, and monitor distance all distort the mapping, and why calibration pattern choice matters so much. We also learned how to structure the system effectively- for example, using a dwell timer instead of firing an AI call on every gaze frame, which was the difference between a sluggish prototype and a responsive product.',
        ],
      },
      {
        heading: 'What’s next for Iris',
        centerText: true,
        paragraphs: [
          'Despite currently living in a browser, Iris is a part of a much larger vision. As smart glasses and brain-computer interfaces improve, the way humans understand and interact with the world around them will fundamentally shift. We believe, however, that environmental awareness should remain integral throughout this change. Iris ensures that our planet is never left behind, and as technology further embeds itself, our awareness of environmental impact grows alongside it.',
        ],
      },
      {
        heading: 'Built With',
        centerText: true,
        list: [
          'eyetrax',
          'groq',
          'html/css',
          'javascript',
          'llama-4-scout',
          'mediapipe',
          'opencv',
          'python',
          'spline',
          'websocket',
        ],
      },
    ],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
