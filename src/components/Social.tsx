import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

type SocialProps = {
  containerStyles: string;
  iconStyles: string;
};

const socials = [
  { icon: <FaGithub />, path: '' },
  { icon: <FaLinkedin />, path: '' },
];

const Social = ({ containerStyles, iconStyles }: SocialProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
