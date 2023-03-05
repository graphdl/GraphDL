import Link from 'next/link'

export const ListItem = ({icon, name}) => (
  <Link
    className='flex items-center space-x-4'
    href={'/Nouns/' + name}
  >
    <div className='my-0 font-medium dark:text-white text-2xl'>
      {icon} {name}
    </div>
  </Link>
)