import React from 'react'
import styled from 'styled-components'
import ContentWrapper from '../../Layout/ContentWrapper'
import ButtonLink from '../../ui/ButtonLink'
import Heading from '../../ui/Heading'
import Card from './Card'
import TimeIcon from '../../../assets/icon-time.svg'
import MoneyIcon from '../../../assets/icon-money.svg'
import MoneyBagIcon from '../../../assets/icon-moneybag.svg'
import LinesSVG from '../../../assets/lines.svg'

const Container = styled.div`
  padding: 112px 0 170px;
  background-color: rgba(0, 140, 115, 0.88);
  color: ${p => p.theme.palette.navy};
  position: relative;
  overflow: hidden;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  margin-bottom: 80px;
`

const LCol = styled.div`
  flex-basis: 41%;
  flex-direction: column;
`

const RCol = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
`

const LHeading = styled(Heading)`
  margin-bottom: 43px;
`

const SHeading = styled(Heading)`
  margin-top: 166px;
  margin-bottom: 100px;
`

const SLinesSVG = styled(LinesSVG)`
  position: absolute;
  left: 0;
  top: 0;
  transform: translateY(-20%);
  opacity: 0.27;
  stroke: #d8d8d8;
`

const SContentWrapper = styled(ContentWrapper)`
  position: relative;
  z-index: 100;
`

const BugBounty = () => (
  <Container>
    <SLinesSVG />
    <SContentWrapper>
      <Row>
        <LCol>
          <LHeading>
            Our biggest
            <br />
            bug bounty
            <br />
            program ever
          </LHeading>
          <ButtonLink url="/" colorScheme="white">
            Start bug hunting
          </ButtonLink>
        </LCol>
        <RCol>
          <Card img={TimeIcon} title="Running for 20 months" />
          <Card img={MoneyIcon} title="Up to $100,000 per bug" />
          <Card img={MoneyBagIcon} title="$2,500,000 honeypot" />
        </RCol>
      </Row>
      <SHeading>
        To this day, no major or critical issues have been found in the
        codebase!
      </SHeading>
    </SContentWrapper>
  </Container>
)

export default BugBounty
