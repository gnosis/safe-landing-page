import * as React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import {
  ContentWrapper,
  Title,
  Date,
  Section,
  TitleSection,
  TitleSubSection,
  Paragraph,
  Link,
  Ol,
  Li,
  B,
} from '../styles/legalPagesStyles'

const Tr = styled.span`
  display: flex;
  padding: 10px 0;
`

const Td1 = styled.span`
  width: 200px;
  overflow-wrap: break-word;
`

const Td2 = styled.span`
  overflow-wrap: break-word;
  padding: 0 20px;
  flex: 1;
`

const Td3 = styled.span`
  width: 120px;
`

const Td4 = styled.span`
  width: 30%;
  padding-left: 20px;
`

export default () => (
  <Layout title="Cookie Policy">
    <ContentWrapper>
      <Title>Cookie Policy</Title>
      <Date>Last updated on March, 2022</Date>
      <Paragraph>
        As described in our Privacy Policy, For general web-browsing of this
        website, your personal data is not revealed to us, although certain
        statistical information is available to us via our internet service
        provider as well as through the use of special tracking technologies.
        Such information tells us about the pages you are clicking on or the
        hardware you are using, but not your name, age, address or anything we
        can use to identify you personally.
      </Paragraph>
      <Paragraph>
        This Cookie Policy sets out some further detail on how and why we use
        these technologies on our website. The terms "Gnosis", "we", "us", and
        "our" includes Gnosis Ltd. and our affiliates. The terms “you” and
        “your” includes our clients, business partners and users of this
        website. By using our website, you consent to storage and access to
        cookies and other technologies on your device, in accordance with this
        Cookie Policy.
      </Paragraph>
      <Section>
        <TitleSection>What are cookies?</TitleSection>
        <Paragraph>
          Cookies are a feature of web browser software that allows web servers
          to recognize the computer or device used to access a website. A cookie
          is a small text file that a website saves on your computer or mobile
          device when you visit the site. It enables the website to remember
          your actions and preferences (such as login, language, font size and
          other display preferences) over a period of time, so you don't have to
          keep re-entering them whenever you come back to the site or browse
          from one page to another.
        </Paragraph>
      </Section>
      <Section>
        <TitleSection>What are the different types of cookies?</TitleSection>
        <Paragraph>
          A cookie can be classified by its lifespan and the domain to which it
          belongs.
        </Paragraph>
        <Paragraph>By lifespan, a cookie is either a:</Paragraph>
        <Ol style={{ listStyleType: 'circle' }}>
          <Li>
            <B>session cookie</B> which is erased when the user closes the
            browser; or
          </Li>
          <Li>
            <B>persistent cookie</B> which is saved to the hard drive and
            remains on the user's computer/device for a pre-defined period of
            time. As for the domain to which it belongs, cookies are either:
          </Li>
          <Li>
            <B>first-party cookies</B> which are set by the web server of the
            visited page and share the same domain (i.e. set by us); or
          </Li>
          <Li>
            <B>third-party cookies</B> stored by a different domain to the
            visited page's domain.
          </Li>
        </Ol>
      </Section>
      <Section>
        <TitleSection>What cookies do we use and why?</TitleSection>
        <Paragraph>
          We list all the cookies we use on this website in the APPENDIX below.
        </Paragraph>
        <Paragraph>
          We do not use cookies set by ourselves via our web developers
          (first-party cookies). We only have those set by others (third-party
          cookies).
        </Paragraph>
        <Paragraph>
          Cookies are also sometimes classified by reference to their purpose.
          We use the following cookies for the following purposes:
        </Paragraph>
        <Ol style={{ listStyleType: 'circle' }}>
          <Li>
            Analytical/performance cookies: They allow us to recognize and count
            the number of visitors and to see how visitors move around our
            website when they are using it, as well as dates and times they
            visit. This helps us to improve the way our website works, for
            example, by ensuring that users are finding what they are looking
            for easily.
          </Li>
          <Li>
            Targeting cookies: These cookies record your visit to our website,
            the pages you have visited and the links you have followed, as well
            as time spent on our website, and the websites visited just before
            and just after our website. We will use this information to make our
            website and the advertising displayed on it more relevant to your
            interests. We may also share this information with third parties for
            this purpose.
          </Li>
        </Ol>
        <Paragraph>
          In general, we use cookies and other technologies (such as web server
          logs) on our website to enhance your experience and to collect
          information about how our website is used. This information is put
          together (‘aggregated’) and provides general and not individually
          specific information. None of this information is therefore associated
          with you as an individual and the cookie-related information is not
          used to identify you personally. It is therefore anonymized and
          ‘de-identified’. The pattern data is fully under our control and these
          cookies are not used for any purpose other than those described here.
        </Paragraph>
        <Paragraph>
          We will retain and evaluate information on your recent visits to our
          website and how you move around different sections of our website for
          analytics purposes to understand how people use our website so that we
          can make it more intuitive. The information also helps us to
          understand which parts of this website are most popular and generally
          to assess user behaviour and characteristics to measure interest in
          and use of the various areas of our website. This then allows us to
          improve our website and the way we market our business.
        </Paragraph>
        <Paragraph>
          This information may also be used to help us to improve, administer
          and diagnose problems with our server and website. The information
          also helps us monitor traffic on our website so that we can manage our
          website's capacity and efficiency.
        </Paragraph>
      </Section>
      <Section>
        <TitleSection>Other Technologies</TitleSection>
        <Paragraph>
          We may allow others to provide analytics services and serve
          advertisements on our behalf. In addition to the uses of cookies
          described above, these entities may use other methods, such as the
          technologies described below, to collect information about your use of
          our website and other websites and online services.
        </Paragraph>
        <Paragraph>
          Pixels tags. Pixel tags (which are also called clear GIFs, web
          beacons, or pixels), are small pieces of code that can be embedded on
          websites and emails. Pixels tags may be used to learn how you interact
          with our website pages and emails, and this information helps us, and
          our partners provide you with a more tailored experience.
        </Paragraph>
        <Paragraph>
          Device Identifiers. A device identifier is a unique label can be used
          to identify a mobile device. Device identifiers may be used to track,
          analyze and improve the performance of the website and ads delivered.
        </Paragraph>
      </Section>
      <Section>
        <TitleSection>
          What data is collected by cookies and other technologies on our
          website?
        </TitleSection>
        <Paragraph>This information may include:</Paragraph>
        <Ol style={{ listStyleType: 'circle' }}>
          <Li>
            the IP and logical address of the server you are using (but the last
            digits are anonymized so we cannot identify you).
          </Li>
          <Li>
            the top level domain name from which you access the internet (for
            example .ie, .com, etc)
          </Li>
          <Li>the type of browser you are using,</Li>
          <Li>the date and time you access our website</Li>
          <Li>the internet address linking to our website.</Li>
        </Ol>
        <Paragraph>This website also uses cookies to:</Paragraph>
        <Ol style={{ listStyleType: 'circle' }}>
          <Li>remember you and your actions while navigating between pages;</Li>
          <Li>
            remember if you have agreed (or not) to our use of cookies on our
            website;
          </Li>
          <Li>ensure the security of the website;</Li>
          <Li>
            monitor and improve the performance of servers hosting the site;
          </Li>
          <Li>distinguish users and sessions;</Li>
          <Li>
            Improving the speed of the site when you access content repeatedly;
          </Li>
          <Li>determine new sessions and visits;</Li>
          <Li>
            show the traffic source or campaign that explains how you may have
            reached our website; and
          </Li>
          <Li>
            allow us to store any customization preferences where our website
            allows this
          </Li>
        </Ol>
      </Section>

      <Section>
        <TitleSection>
          What if you don’t agree to us monitoring your use of our website (even
          we don’t collect your personal data)?
        </TitleSection>
        <Paragraph>
          Enabling these cookies is not strictly necessary for our website to
          work but it will provide you with a better browsing experience. You
          can delete or block the cookies we set, but if you do that, some
          features of this website may not work as intended.
        </Paragraph>
        <Paragraph>
          Most browsers are initially set to accept cookies. If you prefer, you
          can set your browser to refuse cookies and control and/or delete
          cookies as you wish – for details, see{' '}
          <Link href="http://www.aboutcookies.org/">aboutcookies.org</Link>. You
          can delete all cookies that are already on your device and you can set
          most browsers to prevent them from being placed. You should be aware
          that if you do this, you may have to manually adjust some preferences
          every time you visit an Internet site and some services and
          functionalities may not work if you do not accept the cookies they
          send.
        </Paragraph>
        <Paragraph>
          Advertisers and business partners that you access on or through our
          website may also send you cookies. We do not control any cookies
          outside of our website.
        </Paragraph>
        <Paragraph>
          If you have any further questions regarding disabling cookies you
          should consult with your preferred browser’s provider or manufacturer.
        </Paragraph>
        <Paragraph>
          In order to implement your objection it may be necessary to install an
          opt-out cookie on your browser. This cookie will only indicate that
          you have opted out. It is important to note, that for technical
          reasons, the opt-out cookie will only affect the browser from which
          you actively object from. If you delete the cookies in your browser or
          use a different end device or browser, you will need to opt out again.
        </Paragraph>
      </Section>
      <Section>
        <TitleSection>Revisions to this Cookie Policy</TitleSection>
        <Paragraph>
          On this website, you can always view the latest version of our Privacy
          Policy and our Cookie Policy. We may modify this Cookie Policy from
          time to time. If we make changes to this Cookie Policy, we will
          provide notice of such changes, such as by sending an email
          notification, providing notice through our website or updating the
          ‘Last Updated’ date at the beginning of this Cookie Policy. The
          amended Cookie Policy will be effective immediately after the date it
          is posted. By continuing to access or use our website after the
          effective date, you confirm your acceptance of the revised Cookie
          Policy and all of the terms incorporated therein by reference. We
          encourage you to review our Privacy Policy and our Cookie Policy
          whenever you access or use our website to stay informed about our
          information practices and the choices available to you.
        </Paragraph>
        <Paragraph>
          If you do not accept changes which are made to this Cookie Policy, or
          take any measures described above to opt-out by removing or rejecting
          cookies, you may continue to use this website but accept that it may
          not display and/or function as intended by us. Any social media
          channels connected to Gnosis Ltd. and third party applications will be
          subject to the privacy and cookie policies and practices of the
          relevant platform providers which, unless otherwise indicated, are not
          affiliated or associated with Gnosis Ltd. Your exercise of any rights
          to opt-out may also impact how our information and content is
          displayed and/or accessible to you on this website and on other
          websites.
        </Paragraph>
      </Section>
      <Section>
        <TitleSection>APPENDIX</TitleSection>
        <Paragraph>
          Overview of cookies placed and the consequences if the cookies are not
          placed.
        </Paragraph>
        <TitleSubSection>First-party cookies</TitleSubSection>
        <Paragraph>
          <Tr>
            <Td1>
              <B>Name of cookie</B>
            </Td1>
            <Td2>
              <B>Purpose(s) of cookie</B>
            </Td2>
            <Td3>
              <B>Storage period of cookie</B>
            </Td3>
            <Td4>
              <B>Consequences is cookie is not accepted</B>
            </Td4>
          </Tr>
          <Tr>
            <Td1>APM_TOKEN</Td1>
            <Td2>
              Contains a token that can be used to retrieve a Client ID from AMP
              Client ID service. Other possible values indicate opt-out,
              inflight request or an error retrieving a Client ID from AMP
              Client ID service.
            </Td2>
            <Td3>30 seconds to 1 year</Td3>
            <Td4>User activity won't be tracked</Td4>
          </Tr>
          <Tr>
            <Td1>intercom-id-[app_id]</Td1>
            <Td2>Anonymous visitor identifier cookie</Td2>
            <Td3>9 months</Td3>
            <Td4>
              User activity won't be tracked, live support via Intercom won't be
              available
            </Td4>
          </Tr>
          <Tr>
            <Td1>intercom-session-[app_id]</Td1>
            <Td2>
              Identifier for each unique browser session. This session cookie is
              refreshed on each successful logged-in ping, extending it to 1
              week from that moment. The user can access their conversations and
              have data communicated on logged out pages for 1 week, as long as
              the session isn’t intentionally terminated with
              `Intercom(‘shutdown’)`, which usually happens on logout
            </Td2>
            <Td3>1 week</Td3>
            <Td4>
              User activity won't be tracked, live support via Intercom won't be
              available
            </Td4>
          </Tr>
          <Tr>
            <Td1>[version]_[network]__COOKIES</Td1>
            <Td2>Saves user consent on using cookies</Td2>
            <Td3>1 year for positive consent, 7 days for negative</Td3>
            <Td4>If possible, cookie will be in the next session</Td4>
          </Tr>
        </Paragraph>
        <TitleSubSection>Third-party cookies</TitleSubSection>
        <Paragraph>
          The cookies from this table can be set by third-party wallets.
        </Paragraph>
        <Paragraph>
          <Tr>
            <Td1>
              <B>Name of cookie</B>
            </Td1>
            <Td2>
              <B>Purpose(s) of cookie</B>
            </Td2>
            <Td3>
              <B>Storage period of cookie</B>
            </Td3>
            <Td4>
              <B>Consequences is cookie is not accepted</B>
            </Td4>
          </Tr>
          <Tr>
            <Td1>amplitude_id, amplitude_idunidentified</Td1>
            <Td2>
              To the best of our knowledge, these cookies are used by Amplitude
              for session tracking for analytics purposes
            </Td2>
            <Td3>10 years</Td3>
            <Td4>User activity won't be tracked</Td4>
          </Tr>
          <Tr>
            <Td1>PORTIS_JWT</Td1>
            <Td2>JWT Authentication token set by Portis web wallet</Td2>
            <Td3>3 days</Td3>
            <Td4>User won't be auto-logged in to Portis web wallet.</Td4>
          </Tr>
          <Tr>
            <Td1>mp_{'<YOURTOKEN>'}_mixpanel</Td1>
            <Td2>
              To the best of our knowledge, these cookies are used to send data
              to Mixpanel projects
            </Td2>
            <Td3>9 months</Td3>
            <Td4>User activity won't be tracked</Td4>
          </Tr>
          <Tr>
            <Td1>ajs_user_id</Td1>
            <Td2>
              To the best of our knowledge, this cookie helps track visitor
              usage, events, target marketing, and can also measure application
              performance and stability
            </Td2>
            <Td3>1 year</Td3>
            <Td4>User activitywon't be tracked</Td4>
          </Tr>
          <Tr>
            <Td1>ajs_group_id</Td1>
            <Td2>
              To the best of our knowledge, this cookie track visitor usage and
              events within the website
            </Td2>
            <Td3>1 year</Td3>
            <Td4>User activity won't be tracked</Td4>
          </Tr>
          <Tr>
            <Td1>ajs_anonymous_id</Td1>
            <Td2>
              To the best of our knowledge, these cookies are generally used for
              Analytics and help count how many people visit a certain site by
              tracking if you have visited before
            </Td2>
            <Td3>1 year</Td3>
            <Td4>User activity won't be tracked</Td4>
          </Tr>
          <Tr>
            <Td1>_BEAMER_FIRST_VISIT_{'{productID}'}</Td1>
            <Td2>Stores the date of this user’s first visit to the site.</Td2>
            <Td3>300 days</Td3>
            <Td4>User activity won't be tracked</Td4>
          </Tr>
          <Tr>
            <Td1>_BEAMER_USER_ID_{'{productID}'}</Td1>
            <Td2>Stores an internal ID for this user.</Td2>
            <Td3>300 days</Td3>
            <Td4>User activity won't be tracked</Td4>
          </Tr>
          <Tr>
            <Td1>_BEAMER_LAST_UPDATE_{'{productID}'}</Td1>
            <Td2>
              Stores the timestamp for the last time the number of unread posts
              was updated for this user.
            </Td2>
            <Td3>300 days</Td3>
            <Td4>User activity won't be tracked</Td4>
          </Tr>
          <Tr>
            <Td1>_BEAMER_FILTER_BY_URL_{'{productID}'}</Td1>
            <Td2>Stores whether to apply URL filtering on the feed.</Td2>
            <Td3>20 minutes</Td3>
            <Td4>User activity won't be tracked</Td4>
          </Tr>
          <Tr>
            <Td1>_BEAMER_DATE_{'{productID}'}</Td1>
            <Td2>Stores the latest date in which the feed was opened.</Td2>
            <Td3>300 days</Td3>
            <Td4>User activity won't be tracked</Td4>
          </Tr>
          <Tr>
            <Td1>_BEAMER_BOOSTED_ANNOUNCEMENT_DATE_{'{productID}'}</Td1>
            <Td2>
              Stores the latest date in which a boosted announcement was
              displayed.
            </Td2>
            <Td3>300 days</Td3>
            <Td4>User activity won't be tracked</Td4>
          </Tr>
          <Tr>
            <Td1>_BEAMER_LAST_POST_SHOWN_{'{productID}'}</Td1>
            <Td2>Stores the ID of the last post shown as a teaser.</Td2>
            <Td3>300 days</Td3>
            <Td4>User activity won't be tracked</Td4>
          </Tr>
          <Tr>
            <Td1>_BEAMER_SOUND_PLAYED_{'{productID}'}</Td1>
            <Td2>
              Stores whether the notification sound was played since the last
              time the feed was opened.
            </Td2>
            <Td3>7 days</Td3>
            <Td4>User activity won't be tracked</Td4>
          </Tr>
          <Tr>
            <Td1>_BEAMER_LAST_PUSH_PROMPT_INTERACTION_{'{productID}'}</Td1>
            <Td2>
              Stores the date of this user’s latest interaction with the prompt
              requesting permission to send push notifications.
            </Td2>
            <Td3>300 days</Td3>
            <Td4>User activity won't be tracked</Td4>
          </Tr>
          <Tr>
            <Td1>_BEAMER_NPS_LAST_SHOWN_{'{productID}'}</Td1>
            <Td2>
              Stores the latest date in which the NPS prompt was shown to this
              user.
            </Td2>
            <Td3>300 days</Td3>
            <Td4>User activity won't be tracked</Td4>
          </Tr>
        </Paragraph>
      </Section>
    </ContentWrapper>
  </Layout>
)
