import Link from 'next/link'

export const Chip = ({text, href}) => (
  <span className='nx-whitespace-nowrap nx-transition-colors nx-min-w-[24px] nx-overflow-hidden nx-text-ellipsis hover:nx-text-gray-900 dark:hover:nx-text-gray-200'>
    <Link href={href ?? text}>{text}</Link>
  </span>
)