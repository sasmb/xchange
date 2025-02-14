import styled from "styled-components"
import { Facebook, Twitter, Instagram, Linkedin, Heart } from "lucide-react"

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const MainContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  flex: 1;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    font-size: 1.1rem;
    font-weight: 500;
    color: white;
  }

  p, a {
    color: #666;
    font-size: 0.9rem;
    line-height: 1.6;
    text-decoration: none;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    color: #666;
    transition: color 0.2s;

    &:hover {
      color: white;
    }
  }
`

const Copyright = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  margin-top: 4rem;
  border-top: 1px solid #222;
  color: #666;
  font-size: 0.9rem;

  .heart {
    color: #ff0000;
    display: inline-flex;
    align-items: center;
    margin: 0 0.25rem;
  }
`

export default function Footer() {
  return (
    <FooterContent>
      <MainContent>
        <Column>
          <h3>About CollinsCo.</h3>
          <p>
            Your trusted currency exchange partner, providing seamless transactions worldwide with competitive rates and
            exceptional service.
          </p>
          <SocialLinks>
            <a href="https://www.facebook.com/profile.php?id=61556311485728">
              <Facebook size={20} />
            </a>
            <a href="https://x.com/dreamswerver">
              <Twitter size={20} />
            </a>
            <a href="https://www.instagram.com/realsamogb.ai/">
              <Instagram size={20} />
            </a>
            <a href="https://www.linkedin.com/in/samuel-ogbonna-sohae/">
              <Linkedin size={20} />
            </a>
          </SocialLinks>
        </Column>
        <Column>
          <h3>Services</h3>
          <ul>
            <li>
              <a href="#">Exchange</a>
            </li>
            <li>
              <a href="#">Education</a>
            </li>
            <li>
              <a href="#">Travel & Immigration</a>
            </li>
            <li>
              <a href="#">Rate Alerts</a>
            </li>
          </ul>
        </Column>
        <Column>
          <h3>Support</h3>
          <ul>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </Column>
        <Column>
          <h3>Contact</h3>
          <ul>
            <li>
              <a href="mailto:info@collinsco.com">Email: info@collinsco.com</a>
            </li>
            <li>
              <a href="tel:+1234567890">Phone: +1 (234) 567-890</a>
            </li>
            <li>
              <a href="#">123 Main St, Anytown, USA</a>
            </li>
          </ul>
        </Column>
      </MainContent>
      <Copyright>
        <span>© 2024 CollinsCo. All rights reserved.</span>
        <span>
          Designed with{" "}
          <span className="heart">
            <Heart size={14} />
          </span>{" "}
          by Collins
        </span>
      </Copyright>
    </FooterContent>
  )
}

