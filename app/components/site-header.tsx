import Image from "next/image";
import Link from "next/link";

const LOGO_PATH = "/brand/aloha.png";

const navigation = [
  { label: "캘린더", href: "/calendar" },
  { label: "강의자료", href: "/lecture-pdf" },
];

/* { label: "역대문제", href: "/#역대문제" }, */

export default function SiteHeader() {
  return (
    <header className="gnb">
      <div className="gnb-inner">
        <Link className="wordmark" href="/" aria-label="ALOHA 홈">
          <Image
            className="wordmark-image"
            src={LOGO_PATH}
            alt=""
            width={500}
            height={500}
            priority
          />
          <span className="wordmark-text">ALOHA</span>
        </Link>

        <nav aria-label="주요 메뉴">
          <ul className="nav-list">
            {navigation.map((item) => (
              <li key={item.label}>
                <a href={`${item.href}`}>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
