import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <footer className="flex justify-center items-center gap-2 mt-8 mb-2 md:text-[.9rem]">
      <FontAwesomeIcon icon={faCopyright} className="text-[.8rem] md:text-[1rem]" />
      <p>2024 Yuriko Otorii</p>
    </footer>
  )
}

export default Footer