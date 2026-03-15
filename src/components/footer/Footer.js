import './footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear(); // dynamically get current year

  return (
    <footer>
      <span>
        Created By <a href="https://github.com/solcabz" target="_blank" rel="noreferrer">Solcabz</a> | &copy; {currentYear} All rights reserved.
      </span>
    </footer>
  )
}

export default Footer