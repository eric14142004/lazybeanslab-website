import { SITE_CONFIG } from '../src/config/site';

// All social contact methods in one place.
// To update QR images or add new entries, edit this file only.
const SOCIAL_ITEMS = [
  {
    key: 'email',
    href: 'mailto:lazysmarthome29@gmail.com',
    label: 'lazysmarthome29@gmail.com',
    qr: null,
    icon: (
      <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    iconColor: 'text-stone-400',
  },
  {
    key: 'phone',
    href: 'tel:+17789988857',
    label: '+1 778 998 8857',
    qr: null,
    icon: (
      <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    iconColor: 'text-stone-400',
  },
  {
    key: 'wechat',
    href: null,
    mobileHref: 'weixin://',
    label: 'LazyBeansSmartHome',
    qr: '/images/qr/wechat-qr.png',
    qrAlt: 'WeChat QR Code',
    icon: (
      <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="#07C160"
          d="M9.6 4.2C5.5 4.2 2.2 6.9 2.2 10.25c0 1.85 1.03 3.5 2.67 4.6l-.58 2.12c-.08.3.22.56.5.41l2.38-1.3c.76.15 1.58.24 2.43.24 4.1 0 7.4-2.72 7.4-6.07S13.7 4.2 9.6 4.2Z"
        />
        <path
          fill="#07C160"
          d="M15.1 8.1c3.7 0 6.7 2.42 6.7 5.42 0 1.65-.94 3.13-2.43 4.13l.52 1.9c.08.29-.2.54-.47.39l-2.15-1.17c-.68.13-1.4.21-2.17.21-3.7 0-6.7-2.43-6.7-5.47s3-5.42 6.7-5.42Z"
        />
        <circle cx="7.1" cy="9.55" r="0.8" fill="white" />
        <circle cx="11.9" cy="9.55" r="0.8" fill="white" />
        <circle cx="13.1" cy="13.1" r="0.68" fill="white" />
        <circle cx="16.9" cy="13.1" r="0.68" fill="white" />
      </svg>
    ),
    iconColor: 'text-green-400',
  },
  {
    key: 'instagram',
    href: 'https://www.instagram.com/lazysmarthome29',
    mobileHref: 'instagram://user?username=lazysmarthome29',
    label: '@lazysmarthome29',
    qr: '/images/qr/ig-qr.png',
    qrAlt: 'Instagram QR Code',
    icon: (
      <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    iconColor: 'text-pink-400',
  },
  {
    key: 'xiaohongshu',
    href: null,
    mobileHref: 'xhsdiscover://',
    label: '懶豆子｜智能家居',
    qr: '/images/qr/redbook-qr.png',
    qrAlt: '小紅書 QR Code',
    icon: (
      <img
        src={`${SITE_CONFIG.basePath}/images/qr/redbook-logo.svg`}
        alt="小紅書"
        className="h-4 w-4 shrink-0 object-contain"
      />
    ),
    iconColor: 'text-red-400',
  },
];

const VARIANT_STYLES = {
  dark: {
    itemClass:
      'group relative flex items-center gap-3 rounded-xl border border-stone-600 bg-white/5 px-5 py-3.5 text-sm font-semibold text-stone-200 transition hover:bg-white/10',
    popupClass:
      'pointer-events-none absolute bottom-full left-0 z-50 mb-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100',
    qrImageClass: 'w-40 rounded-xl border border-stone-600 shadow-xl',
  },
  light: {
    itemClass:
      'group relative flex items-center gap-2 rounded-md bg-stone-900 px-7 py-3 text-sm font-semibold text-white transition hover:bg-stone-700',
    popupClass:
      'pointer-events-none absolute bottom-full left-0 z-10 mb-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100',
    qrImageClass: 'w-40 rounded-xl border border-stone-200 shadow-xl',
  },
};

function getLinkProps(href) {
  if (!href) {
    return {};
  }

  const isExternal = href.startsWith('http');

  return {
    href,
    target: isExternal ? '_blank' : undefined,
    rel: isExternal ? 'noopener noreferrer' : undefined,
  };
}

function isMobileLikeDevice() {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return false;
  }

  return window.matchMedia('(hover: none), (pointer: coarse)').matches;
}

function openMobileApp(item) {
  if (typeof window === 'undefined' || !item.mobileHref) {
    return;
  }

  window.location.href = item.mobileHref;

  if (item.href && item.href.startsWith('http')) {
    window.setTimeout(() => {
      window.location.href = item.href;
    }, 700);
  }
}

/**
 * variant="dark"  — card style for dark panels (about page)
 * variant="light" — button style for light panels (contact page)
 */
export default function SocialLinks({ variant = 'dark' }) {
  const styles = VARIANT_STYLES[variant] ?? VARIANT_STYLES.dark;

  return (
    <>
      {SOCIAL_ITEMS.map((item) => {
        const isInteractive = Boolean(item.href || item.mobileHref);
        const Tag = item.href ? 'a' : item.mobileHref ? 'button' : 'span';
        const linkProps = getLinkProps(item.href);
        const interactionClass = isInteractive
          ? ' cursor-pointer'
          : ' cursor-default select-none';

        const handleClick = (event) => {
          if (!item.mobileHref || !isMobileLikeDevice()) {
            return;
          }

          event.preventDefault();
          openMobileApp(item);
        };

        return (
          <Tag
            key={item.key}
            {...linkProps}
            {...(Tag === 'button' ? { type: 'button' } : {})}
            className={`${styles.itemClass}${interactionClass}`}
            onClick={handleClick}
          >
            <span className={item.iconColor}>{item.icon}</span>
            {item.label}
            {item.qr && (
              <span className={styles.popupClass}>
                <img
                  src={`${SITE_CONFIG.basePath}${item.qr}`}
                  alt={item.qrAlt}
                  className={styles.qrImageClass}
                />
              </span>
            )}
          </Tag>
        );
      })}
    </>
  );
}
