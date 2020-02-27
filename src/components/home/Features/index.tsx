import React from 'react'
import styled from 'styled-components'
import Feature from './Feature'
import GetNotified from './GetNotified'
import ContentWrapper from '../../Layout/ContentWrapper'
import ButtonLink from '../../ui/ButtonLink'
import DocIcon from '../../../assets/icon-doc.svg'
import GroupIcon from '../../../assets/icon-group.svg'
import SafeIcon from '../../../assets/icon-safe.svg'
import WalletIcon from '../../../assets/icon-wallet.svg'
import PersonIcon from '../../../assets/icon-person.svg'
import WarningIcon from '../../../assets/icon-warning.svg'

const SFeature = styled(Feature)`
  margin-bottom: 47px;
`

const Container = styled.section`
  padding: 112px 0;
  background-color: rgba(0, 140, 115, 0.88);
  overflow: hidden;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  margin-bottom: 80px;
`

const LCol = styled.div`
  flex-basis: 25%;
  flex-direction: column;
`

const Col = styled.div`
  flex-basis: 35%;
`

const SHeading = styled.h3`
  font-size: 25px;
  font-weight: 800;
  letter-spacing: 0.56px;
  margin-bottom: 29px;
`

const Text = styled.p`
  letter-spacing: 0.36px;
  margin-bottom: 37px;
  line-height: normal;
`

const Features = () => (
  <Container>
    <ContentWrapper>
      <Row>
        <LCol>
          <SHeading>Features</SHeading>
          <Text>
            Missing a feature?
            <br />
            Let us know!
          </Text>
          <ButtonLink url="http://safe.cnflx.io/" colorScheme="white">
            Feature idea board
          </ButtonLink>
        </LCol>
        <Col>
          <SFeature img={DocIcon} title="Multi-signature">
            Fully customize how you manage your digital assets, with the option
            to require multiple signatures to confirm transactions.
          </SFeature>
          <SFeature img={SafeIcon} title="Security-first">
            The Safe Multisig is the only formally verified and audited smart
            contract wallet. Learn more about how we put best practices in
            security first.
          </SFeature>
          <SFeature img={GroupIcon} title="Address Book">
            Save counterparty addresses to make sending transactions even
            easier.
          </SFeature>
        </Col>
        <Col>
          <SFeature img={WalletIcon} title="Wallet-agnostic">
            Use your favorite wallet to sign transactions. No matter if it’s a
            mobile wallet, browser extension, or hardware wallet.
          </SFeature>
          <SFeature img={PersonIcon} title="Non-custodial">
            You are fully in charge of your digital assets. As a self-sovereign
            wallet solution, no one is able to access or freeze any of your
            funds.
          </SFeature>
          <SFeature img={WarningIcon} title="Privacy">
            Information, such as owner names, is only stored locally. This means
            that Gnosis or any third-party can never access your private data.
          </SFeature>
        </Col>
      </Row>
      <GetNotified />
    </ContentWrapper>
  </Container>
)

export default Features
