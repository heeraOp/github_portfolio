import { useState } from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social, picture, sponsor } = about
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlipToggle = () => {
    setIsFlipped((prev) => !prev)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleFlipToggle()
    }
  }

  return (
    <div className='about center'>
      <div className='about__header'>
        {picture && (
          <div
            className={`about__flip-container ${isFlipped ? 'is-flipped' : ''}`}
            tabIndex={0}
            role='button'
            aria-label={`${name} profile photo — hover or tap to reveal GitHub. Press Enter to flip.`}
            onClick={handleFlipToggle}
            onKeyDown={handleKeyDown}
          >
            <div className='about__flip-inner'>
              <div className='about__flip-front'>
                <img
                  src={
                    picture.startsWith('http')
                      ? picture
                      : `${process.env.PUBLIC_URL}/images/${picture}`
                  }
                  alt={name}
                  className='about__picture'
                />
              </div>
              <div className='about__flip-back'>
                <div className='about__github-back'>
                  <a
                    href='https://github.com/heeraOp/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='about__github-back-link'
                    aria-label='Visit GitHub profile'
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg className='about__github-back-icon' viewBox='0 0 24 24' fill='#181717' aria-hidden='true'>
                      <path d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.11.825-.26.825-.575 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.095.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.225.69.825.57C20.565 21.795 24 17.31 24 12c0-6.63-5.37-12-12-12z'/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className='about__github-badge' aria-hidden='true'>
              <svg viewBox='0 0 24 24' fill='#fff' className='about__badge-icon'>
                <path d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.11.825-.26.825-.575 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.095.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.225.69.825.57C20.565 21.795 24 17.31 24 12c0-6.63-5.37-12-12-12z'/>
              </svg>
            </div>
          </div>
        )}
        <div className='about__intro'>
          {name && (
            <h1>
              Hi, I am <span className='about__name'>{name}.</span>
            </h1>
          )}

          {role && <h2 className='about__role'>A {role}.</h2>}
          <p className='about__desc'>{description && description}</p>
        </div>
      </div>

      <div className='about__contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}

        {sponsor && (
          <a
            href='https://github.com/sponsors/heeraOp'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='sponsor'
            className='hero__sponsor-btn'
          >
            <svg className='hero__sponsor-heart' viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
              <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' />
            </svg>
            <span className='hero__sponsor-text'>Sponsor</span>
            <svg className='hero__sponsor-external' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' aria-hidden='true'>
              <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' />
              <polyline points='15 3 21 3 21 9' />
              <line x1='10' y1='14' x2='21' y2='3' />
            </svg>
          </a>
        )}
      </div>
    </div>
  )
}

export default About