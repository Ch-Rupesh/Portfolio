import { FaLinkedin, FaGithub, FaHackerrank } from \"react-icons/fa\";
import { SiLeetcode, SiCodechef } from \"react-icons/si\";
import { HiOutlineMail } from \"react-icons/hi\";
import { personalInfo } from \"@/lib/constants\";

const socialLinks = [
  {
    name: \"LinkedIn\",
    href: personalInfo.linkedin,
    icon: FaLinkedin,
    hoverColor: \"hover:text-[#0A66C2]\",
  },
  {
    name: \"GitHub\",
    href: personalInfo.github,
    icon: FaGithub,
    hoverColor: \"hover:text-gray-900\",
  },
  {
    name: \"Email\",
    href: `mailto:${personalInfo.email}`,
    icon: HiOutlineMail,
    hoverColor: \"hover:text-red-500\",
  },
  {
    name: \"LeetCode\",
    href: personalInfo.leetcode,
    icon: SiLeetcode,
    hoverColor: \"hover:text-[#FFA116]\",
  },
  {
    name: \"CodeChef\",
    href: personalInfo.codechef,
    icon: SiCodechef,
    hoverColor: \"hover:text-[#5B4638]\",
  },
  {
    name: \"HackerRank\",
    href: personalInfo.hackerrank,
    icon: FaHackerrank,
    hoverColor: \"hover:text-[#00EA64]\",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=\"relative mt-auto border-t border-gray-100 bg-white\">
      <div className=\"mx-auto max-w-7xl px-6 py-12\">
        <div className=\"flex flex-col items-center gap-8\">
          {/* Social Links */}
          <div className=\"flex items-center gap-4\">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target=\"_blank\"
                  rel=\"noopener noreferrer\"
                  aria-label={social.name}
                  className={`rounded-full border border-gray-100 bg-gray-50 p-3 text-gray-500 transition-all duration-300 ${social.hoverColor} hover:-translate-y-1 hover:scale-110 hover:border-gray-200 hover:shadow-md`}
                >
                  <Icon className=\"h-5 w-5\" />
                </a>
              );
            })}
          </div>

          {/* Divider */}
          <div className=\"h-px w-24 bg-gradient-to-r from-transparent via-gray-200 to-transparent\" />

          {/* Copyright */}
          <div className=\"text-center\">
            <p className=\"text-sm text-gray-500\">
              &copy; {currentYear}{\" \"}
              <span className=\"font-medium text-gray-700\">
                {personalInfo.name}
              </span>
              . All rights reserved.
            </p>
            <p className=\"mt-1 text-xs text-gray-400\">
              Built with Next.js, Tailwind CSS &amp; Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
