export type ServiceItem = {
  title: string
  description: string
  badge: string
  icon: string
}

export type ExpertiseItem = {
  title: string
  description: string
  badge: string
  icon: string
}

export type ProcessStep = {
  number: string
  title: string
  description: string
  badge: string
  icon: string
}

export type StatItem = {
  value: string
  label: string
  icon: string
}

export type ClientItem = {
  name: string
  logo: string
}

export type Testimonial = {
  quote: string
  author: string
  role: string
}

export const services: ServiceItem[] = [
  {
    badge: 'EI',
    title: 'Enterprise Infrastructure Solutions',
    description:
      'Robust IT infrastructure solutions designed for performance, scalability, and reliability.',
    icon: 'EnterpriseIcon',
  },
  {
    badge: 'CS',
    title: 'Cybersecurity Solutions',
    description:
      'Advanced security frameworks to protect your business, data, and digital assets.',
    icon: 'CyberSecurityIcon',
  },
  {
    badge: 'IB',
    title: 'Intelligent Building Systems',
    description:
      'Smart building technologies that enhance safety, comfort, and efficiency.',
    icon: 'BuildingIcon',
  },
  {
    badge: 'TC',
    title: 'Telephony & Communications',
    description:
      'Integrated voice and communication systems that keep your business connected.',
    icon: 'PhoneIcon',
  },
  {
    badge: 'IT',
    title: 'IT Support & Managed Services',
    description:
      'Proactive support and monitoring to ensure smooth operations 24/7.',
    icon: 'SupportIcon',
  },
  {
    badge: 'SD',
    title: 'Custom Software Development',
    description:
      'Tailored software and web applications that solve real business challenges.',
    icon: 'CodeIcon',
  },
]

export const expertiseItems: ExpertiseItem[] = [
  {
    badge: 'ID',
    title: 'Innovation Driven',
    description: 'We stay ahead with cutting-edge technologies.',
    icon: 'settings',
  },
  {
    badge: 'SB',
    title: 'Secure by Design',
    description: 'Security is embedded in every solution.',
    icon: 'shield',
  },
  {
    badge: 'SS',
    title: 'Scalable Solutions',
    description: 'Built to grow with your business seamlessly.',
    icon: 'wifi_password',
  },
  {
    badge: 'ET',
    title: 'Expert Team',
    description: 'Certified professionals dedicated to your success.',
    icon: 'group',
  },
]

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    badge: 'CO',
    title: 'Consultation',
    description: 'We understand your business needs and challenges.',
    icon: 'group',
  },
  {
    number: '02',
    badge: 'DP',
    title: 'Design & Planning',
    description: 'We design the right solution tailored to your objectives.',
    icon: 'design_services',
  },
  {
    number: '03',
    badge: 'IM',
    title: 'Implementation',
    description: 'Our experts implement with precision and best practices.',
    icon: 'rocket_launch',
  },
  {
    number: '04',
    badge: 'SG',
    title: 'Support & Growth',
    description: 'We provide ongoing support and continuous improvement.',
    icon: 'support_agent',
  },
]

export const processStats: StatItem[] = [
  { value: '250+', label: 'Projects Delivered', icon: 'dns' },
  { value: '98%', label: 'Client Satisfaction', icon: 'verified_user' },
  { value: '24/7', label: 'Support & Monitoring', icon: 'support' },
  { value: '10+', label: 'Industries Served', icon: 'business_center' },
]

export const clients: ClientItem[] = [
  { name: 'Central Bank', logo: '/cbn.png' },
  { name: 'Eni', logo: '/eni.png' },
  { name: 'First Bank', logo: '/firstbank.png' },
  { name: 'FRCN', logo: '/frcn.jpg' },
  { name: 'MTN', logo: '/mtn.png' },
  { name: 'Opay', logo: '/opay.png' },
  { name: 'UBA', logo: '/uba.png' },
  { name: 'Opera News', logo: '/opera-news-logo-0C6D4B83C7-seeklogo.com_.png' },
]
export const testimonials: Testimonial[] = [
  {
    quote: "TekSphere delivered an exceptional cybersecurity solution that strengthened our infrastructure and gave us complete peace of mind. Their team is professional, responsive, and truly invested in our success.",
    author: "Michael Adams",
    role: "CTO, FinSecure Group"
  },
  {
    quote: "The cloud infrastructure transition was seamless. We've seen a 40% increase in operational efficiency since partnering with TekSphere for our digital transformation journey.",
    author: "Sarah Jenkins",
    role: "Director of IT, Global Logistics"
  },
  {
    quote: "Working with TekSphere on our custom software was a game-changer. They didn't just build an app; they built a solution that solved our core business bottlenecks.",
    author: "David Chen",
    role: "Founder, InnovateRetail"
  }
]
