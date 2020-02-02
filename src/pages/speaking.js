import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "@emotion/styled"

const ConfWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-right: auto;
  margin-bottom: 12px;
  margin-left: auto;
  &:last-child {
    margin-bottom: 0
  }
`
const Description = styled.div`
  flex: 1;
  margin-left: 18px;
  padding: 12px
`

const EventName = styled.h3`
  margin: 0 0 12px 0;
  padding: 0
`

const EventDate = styled.p`
  margin: 0
`

const Conference = props => (
  <ConfWrapper>
    <Description>
      <EventName>{props.eventName}</EventName>
      <EventDate>{props.eventDate}</EventDate>
    </Description>
  </ConfWrapper>
)

const SpeakingPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h2>Speaking Engagements</h2>
    <Conference
      eventName="<title of conf>"
      eventDate="May 7, 2020" />
    <Conference
      eventName="self.conference"
      eventDate="May 8-9, 2020" />
  </Layout>
)

export default SpeakingPage
