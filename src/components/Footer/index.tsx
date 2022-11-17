import Image from "next/image";
import Input from "../Generic/Input";
import { Text } from "../Generic/Text";
import Logo from "../Logo";
import {
  Container,
  Copyright,
  InnerContainer,
  Navigation,
  SocialMedia,
} from "./style";

export default function Footer() {
  return (
    <Container>
      <InnerContainer>
        <div>
          <Logo href="/" />
          <Text
            sx={{
              marginTop: "60px",
            }}
            className="description"
          >
            Collaboration platform for modern teams.
          </Text>
        </div>
        <Navigation>
          <div>
            <span>Useful Links</span>
            <ul>
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>Features</a>
              </li>
              <li>
                <a>Terms & Conditions</a>
              </li>
              <li>
                <a>Company Profile</a>
              </li>
            </ul>
          </div>
          <div>
            <span>Content</span>
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Beta Tester</a>
              </li>
              <li>
                <a>Join Official Group</a>
              </li>
            </ul>
          </div>
          <div>
            <span>Contact Us</span>
            <ul>
              <li>
                <a>support@team.com</a>
              </li>
              <li>
                <a>021-123-456</a>
              </li>
              <li>
                <a>Social Media</a>
              </li>
              <li>
                <a>Unsubscribe e-mail</a>
              </li>
            </ul>
          </div>
          <div>
            <span>Stay up to date</span>
            <Text className="description">
              Subscribe to our newsletter to get the latest news and updates.
            </Text>
            <Input
              isSubmit
              placeholder="Email"
              sx={{
                marginTop: "30px",
              }}
            />
          </div>
        </Navigation>
        <Copyright>
          <Text className="description">© 2022 TEAM copyright.</Text>
          <SocialMedia>
            <a href="#">
              <Image src="/assets/facebook-icon.svg" fill alt="Facebook" />
            </a>
            <a href="#">
              <Image src="/assets/telegram-icon.svg" fill alt="Telegram" />
            </a>
            <a href="#">
              <Image src="/assets/twitter-icon.svg" fill alt="Twitter" />
            </a>
            <a href="#">
              <Image src="/assets/instagram-icon.svg" fill alt="Instagram" />
            </a>
          </SocialMedia>
        </Copyright>
      </InnerContainer>
    </Container>
  );
}
