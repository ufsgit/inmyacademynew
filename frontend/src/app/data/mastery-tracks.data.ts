export const MASTERY_TRACKS_DETAILS = [
  {
    id: 1,
    title: 'Diplomatic Policy Leadership',
    description: 'Dive into governance, diplomacy, and global relations — from public policy and civic leadership to persuasive debate and campaign strategy.',
    phase1: 'Submit a policy pitch or debate video for shortlisting',
    final: 'Shine in live negotiations and panel diplomacy rounds',
    extras: 'Policy templates and access to virtual youth summits',
    lessons: [
      { title: 'Lesson 1', syllabus: 'Introduction to global governance and the fundamentals of public policy creation.' },
      { title: 'Lesson 2', syllabus: 'Effective debate techniques and strategies for persuasive diplomatic communication.' }
    ]
  },
  {
    id: 2,
    title: 'Legal Advocacy Professional',
    description: 'Understand justice systems, legal research, case writing, and courtroom communication.',
    phase1: 'Submit a mock-trial or advocacy video',
    final: 'Face live legal argument sessions with expert judges',
    extras: 'Legal writing guides and virtual courtroom workshops',
    lessons: [
      { title: 'Lesson 1', syllabus: 'Overview of the justice system, legal research methods, and case analysis.' },
      { title: 'Lesson 2', syllabus: 'Drafting legal documents and mastering courtroom communication skills.' }
    ]
  },
  {
    id: 3,
    title: 'Advanced Research Publication',
    description: 'Apply real-world science and engineering skills — from research design to data storytelling.',
    phase1: 'Submit a research abstract or visualisation',
    final: 'Defend your findings live before academic judges',
    extras: 'Research toolkits and academic publishing resources',
    lessons: [
      { title: 'Lesson 1', syllabus: 'Fundamentals of research design, methodology, and ethical considerations.' },
      { title: 'Lesson 2', syllabus: 'Data analysis and translating findings into compelling narratives for publication.' }
    ]
  },
  {
    id: 4,
    title: 'Digital Media Strategy',
    description: 'Create high-impact media content — mastering storytelling, editing, branding, and campaign strategy.',
    phase1: 'Submit a digital media piece or article',
    final: 'Present your live strategy to industry professionals',
    extras: 'Media starter packs and virtual journalism labs',
    lessons: [
      { title: 'Lesson 1', syllabus: 'Principles of digital storytelling and establishing a strong brand identity.' },
      { title: 'Lesson 2', syllabus: 'Campaign strategy, audience targeting, and content editing techniques.' }
    ]
  },
  {
    id: 5,
    title: 'Entrepreneurial Visionary Accelerator',
    description: 'Turn ideas into ventures — explore innovation, market research, finance basics, and pitching mastery.',
    phase1: 'Submit a business pitch video',
    final: 'Pitch live to industry guests and investors',
    extras: 'Business plan templates and mentorship opportunities',
    lessons: [
      { title: 'Lesson 1', syllabus: 'Ideation, market research, and identifying viable business opportunities.' },
      { title: 'Lesson 2', syllabus: 'Financial basics for startups and crafting an irresistible investor pitch.' }
    ]
  },
  {
    id: 6,
    title: 'Executive Project Management',
    description: 'Master leadership, time management, risk handling, and execution excellence.',
    phase1: 'Submit a project plan or simulation',
    final: 'Perform live project briefs under real constraints',
    extras: 'Leadership frameworks and project templates',
    lessons: [
      { title: 'Lesson 1', syllabus: 'Core principles of project management, scope definition, and time management.' },
      { title: 'Lesson 2', syllabus: 'Risk assessment, mitigation strategies, and leading teams to execution.' }
    ]
  },
  {
    id: 7,
    title: 'Global Communication Mastery',
    description: 'Develop confident communication through structured speech, presentation, and persuasive dialogue.',
    phase1: 'Submit a communication analysis video',
    final: 'Participate in live panel discussions',
    extras: 'Public speaking guides and debate resources',
    lessons: [
      { title: 'Lesson 1', syllabus: 'Foundations of public speaking and structuring persuasive presentations.' },
      { title: 'Lesson 2', syllabus: 'Engaging audiences in dialogue, answering tough questions, and panel mastery.' }
    ]
  },
  {
    id: 8,
    title: 'Digital Systems Architecture',
    description: 'Design the future — from coding logic and software design to complex system building.',
    phase1: 'Submit a system design architecture plan',
    final: 'Defend your architecture live before technical experts',
    extras: 'Coding templates and cloud architecture credits',
    lessons: [
      { title: 'Lesson 1', syllabus: 'Introduction to system design patterns and scalable software architecture.' },
      { title: 'Lesson 2', syllabus: 'Cloud infrastructure basics, microservices, and securing digital systems.' }
    ]
  },
  {
    id: 9,
    title: 'Investment Banking Elite',
    description: 'Understand global finance — investment banking, markets, M&A, ethics, and modelling.',
    phase1: 'Submit a financial model or market analysis',
    final: 'Present a live M&A pitch to finance professionals',
    extras: 'Financial modelling templates and industry reports',
    lessons: [
      { title: 'Lesson 1', syllabus: 'Overview of investment banking, financial markets, and ethical standards.' },
      { title: 'Lesson 2', syllabus: 'Financial modeling techniques, valuation, and Mergers & Acquisitions (M&A).' }
    ]
  }
];

export function getTrackSlug(title: string): string {
  return title.toLowerCase().trim().replace(/\s+/g, '-',).replace(/[^a-z0-9\-]/g, '');
}
