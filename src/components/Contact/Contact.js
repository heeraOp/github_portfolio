import { contact, about } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  const sponsorUrl = 'https://github.com/sponsors/heeraOp'

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
          Email me
        </span>
      </a>

      <div className='contact__sponsor-card'>
        <img
          src={`${process.env.PUBLIC_URL}/images/${about.picture}`}
          alt={about.name}
          className='sponsor__avatar'
        />
        <div className='sponsor__content'>
          <h3 className='sponsor__heading'>
            Sponsor Wahengbam Heramani Singh on GitHub Sponsors
          </h3>
          <p className='sponsor__subtitle'>
            Support heeraOp&apos;s open source work
          </p>
        </div>
        <a
          href={sponsorUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='sponsor__btn'
        >
          <svg className='sponsor__heart' viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
            <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' />
          </svg>
          <span>Sponsor</span>
          <svg className='sponsor__external' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' aria-hidden='true'>
            <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' />
            <polyline points='15 3 21 3 21 9' />
            <line x1='10' y1='14' x2='21' y2='3' />
          </svg>
        </a>
      </div>
    </section>
  )
}

export default Contact