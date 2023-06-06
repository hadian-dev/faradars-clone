import { FaradarsLogoIcon, MenuIcon } from '@/shared'

function Header() {
  return (
    <header className='p-4'>
      <div className='flex gap-4'>
        <MenuIcon /> <FaradarsLogoIcon />
      </div>
    </header>
  )
}

export default Header
