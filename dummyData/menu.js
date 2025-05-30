import {
  Globe,
  Code,
  Smartphone,
  Database,
  Link as ChainLink,
  Cloud,
  Repeat,
  Plug,
  ShoppingCart,
  Search,
  BarChart2,
  SocialIcon,
  Mail,
  Youtube,
  Edit3,
  DollarSign,
  Users,
  PieChart,
  Layout,
  Brush,
  Film,
  CheckSquare,
  Lock,
  ArrowLeftRight,
  Edit,
  Bot,
  Briefcase,
  Link
} from "lucide-react";

export const menuItems = [
  {
    title: "Development Services",
    icon: <Globe size={20} />,
    link: "#",
    subMenu: [
      {
        title: "PHP & Frameworks",
        icon: <Code size={20} />,
        link: "/services/PHP"
      },

      {
        title: "Cross-App Development",
        icon: <Smartphone size={20} />,
        link: "/services/cross-app"
      },
      {
        title: ".NET & Frameworks",
        icon: <ChainLink size={20} />,
        link: "/services/dotnet-frameworks"
      },
      {
        title: "CMS Development",
        icon: <Database size={20} />,
        link: "/services/cms"
      },
      {
        title: "Frontend Development",
        icon: <Layout size={20} />,
        link: "/services/frontend"
      },
      {
        title: "Database Management",
        icon: <Database size={20} />,
        link: "/services/database-management"
      },
      {
        title: "Python & Django",
        icon: <Code size={20} />,
        link: "/services/python-and-dyjango"
      },
      {
        title: "Mobile App Development",
        icon: <Smartphone size={20} />,
        link: "/services/mobile-app"
      },
      {
        title: "Blockchain Development",
        icon: <ChainLink size={20} />,
        link: "/services/blockchain"
      },
      {
        title: "Cloud Services",
        icon: <Cloud size={20} />,
        link: "/services/cloud-services"
      },
      {
        title: "DevOps Services",
        icon: <Repeat size={20} />,
        link: "/services/devops-services"
      },
      {
        title: "API Development",
        icon: <Plug size={20} />,
        link: "/services/api"
      },
      {
        title: "E-commerce Solutions",
        icon: <ShoppingCart size={20} />,
        link: "/services/ecommerce-solutions"
      }
    ]
  },
  {
    title: "Marketing & Growth Services",
    icon: <BarChart2 size={20} />,
    link: "#",
    subMenu: [
      {
        title: "SEO Expert",
        icon: <Search size={20} />,
        link: "/services/seo"
      },
      {
        title: "Social Media Management",
        icon: <Briefcase size={20} />,
        link: "/services/social-media"
      },
      {
        title: "LinkedIn Account Handling",
        icon: <Link size={20} />,
        link: "/services/linkedin"
      },
      {
        title: "Email Marketing",
        icon: <Mail size={20} />,
        link: "/services/email-marketing"
      },
      {
        title: "YouTube Channel Management",
        icon: <Youtube size={20} />,
        link: "/services/youtube-management"
      },
      {
        title: "Content Marketing",
        icon: <Edit3 size={20} />,
        link: "/services/content-marketing"
      },
      {
        title: "PPC Advertising",
        icon: <DollarSign size={20} />,
        link: "/services/ppc-advertising"
      },
      {
        title: "Influencer Marketing",
        icon: <Users size={20} />,
        link: "/services/influencer-marketing"
      },
      {
        title: "Analytics & Reporting",
        icon: <PieChart size={20} />,
        link: "/services/analytics-reporting"
      }
    ]
  },
  {
    title: "Design & Creative Services",
    icon: <Brush size={20} />,
    link: "#",
    subMenu: [
      {
        title: "UI/UX Design",
        icon: <Layout size={20} />,
        link: "/services/ui-ux-design"
      },
      {
        title: "Branding & Graphic Design",
        icon: <Brush size={20} />,
        link: "/services/branding-design"
      },
      {
        title: "Animation & Motion Graphics",
        icon: <Film size={20} />,
        link: "/services/animation-graphics"
      }
    ]
  },
  {
    title: "Other Services",
    icon: <Briefcase size={20} />,
    link: "#",
    subMenu: [
      {
        title: "QA Experts",
        icon: <CheckSquare size={20} />,
        link: "/services/qa-experts"
      },
      {
        title: "Video Editing",
        icon: <Film size={20} />,
        link: "/services/video-editing"
      },
      {
        title: "Progressive Web Apps",
        icon: <Smartphone size={20} />,
        link: "/services/pwa"
      },
      {
        title: "Chatbot Development",
        icon: <Bot size={20} />,
        link: "/services/chatbot"
      },
      {
        title: "Custom CRM/ERP Solutions",
        icon: <Briefcase size={20} />,
        link: "/services/crm-erp-solutions"
      },
      {
        title: "Cybersecurity Services",
        icon: <Lock size={20} />,
        link: "/services/cybersecurity"
      },
      {
        title: "Data Migration & Integration",
        icon: <ArrowLeftRight size={20} />,
        link: "/services/data-migration"
      }
    ]
  }
];
