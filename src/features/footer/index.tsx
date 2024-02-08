'use client'
import { useTranslation } from '@/i18n/client'
import { NAMESPACE_OPTIONS } from '@/i18n/settings'
import mouvsLogoWhite from '@/images/logo-movus-white.svg'
import Image from 'next/image'
import { AiFillInstagram } from 'react-icons/ai'
import { FaApple, FaGooglePlay, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { footerStyle } from './footer.css'
export const Footer = () => {
  const { t: footerT, i18n } = useTranslation(NAMESPACE_OPTIONS.footer)

  return (
    <footer className={footerStyle.footer}>
      <div className={footerStyle.footerContainer}>
        <div className={footerStyle.footerLogo}>
          <Image src={mouvsLogoWhite} width={180} height={32} alt="movus" />
        </div>
        <div className={footerStyle.footerMiddle}>
          <div className={footerStyle.footerSocial}>
            <p className={footerStyle.footerParagraph}>
              {footerT('footer.social_title')}
            </p>
            <ul className={footerStyle.iconListSocial}>
              <li>
                <a
                  className={footerStyle.iconItemSocial}
                  href="https://www.instagram.com/movustech/"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li>
                <a
                  className={footerStyle.iconItemSocial}
                  href="https://www.tiktok.com/@movustech"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className={footerStyle.iconItemSocial}
                  href="https://twitter.com/movustech"
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  className={footerStyle.iconItemSocial}
                  href="https://www.linkedin.com/company/movus-technologies/"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
          <div className={footerStyle.footerDownload}>
            <p>{footerT('footer.app_title')}</p>
            <ul className={footerStyle.iconListApp}>
              <li className={footerStyle.iconItemPlaystore}>
                <FaGooglePlay />
              </li>
              <li className={footerStyle.iconItemAppstore}>
                <FaApple />
              </li>
            </ul>
          </div>
        </div>
        <hr className={footerStyle.hrLarge}></hr>
        <div className={footerStyle.footerBottom}>
          <div className={footerStyle.footerInfo}>
            <div className={footerStyle.footerPrivpol}>
              <a
                className={footerStyle.footerInfoItem}
                href="https://movus-corp.studio.site/privacy-en"
              >
                {footerT('footer.privpol')}
              </a>
            </div>
            <div className={footerStyle.footerTnc}>
              <a
                className={footerStyle.footerInfoItem}
                href="https://movus-corp.studio.site/terms-en"
              >
                {footerT('footer.tnc')}
              </a>
            </div>
            <div className={footerStyle.footerHelp}>
              <a
                className={footerStyle.footerInfoItem}
                href="https://mo-vus.com/"
              >
                {footerT('footer.help')}
              </a>
            </div>
          </div>
          <div className={footerStyle.footerDescription}>
            <p>
              &copy; {new Date().getFullYear()} movus technologies Inc |{' '}
              {footerT('footer.bottom_desc')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
