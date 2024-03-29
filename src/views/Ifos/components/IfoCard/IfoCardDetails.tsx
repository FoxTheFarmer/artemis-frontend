import React from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { Text, LinkExternal, Link } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { FaBook, FaClock, FaLink } from 'react-icons/fa'

export interface IfoCardDetailsProps {
  saleAmount: string
  raiseAmount: string
  cakeToBurn: string
  raisingAmount: BigNumber
  totalAmount: BigNumber
}



const Divider = styled.div`
background-color: #4c68ef;
height: 3px;
margin-left: 100;
margin-right: 0px;
margin-top: 5px;
margin-bottom: 5px;
width: 100%;
`

const StyledIfoCardDetails = styled.div`
  margin-bottom: 24px;
`

const Item = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.secondary};
  display: flex;
`

const Display = styled(Text)`
  flex: 1;
`

const IfoCardDetails: React.FC<IfoCardDetailsProps> = ({
  saleAmount,
  raiseAmount,
  cakeToBurn,
  raisingAmount,
  totalAmount,
}) => {
  const TranslateString = useI18n()

  return (
    <>
      <StyledIfoCardDetails>
        <Divider />
        <Item>
          
          <Display bold>{TranslateString(5824, 'Tokens For Sale')}</Display>
          <Text>{saleAmount}</Text>
        </Item>
        <Item>
          <Display bold>{TranslateString(999, 'USD To Raise')}</Display>
          <Text>{raiseAmount}</Text>
        </Item>

        
        {/*
        <Item>
          <Display>{TranslateString(999, 'ONE to burn (USD)')}</Display>
          <Text>{cakeToBurn}</Text>
        </Item>
        */}
        <Item>
          <Display bold>{TranslateString(999, 'USD Raised')}</Display>
          <Text>{`${totalAmount.div(raisingAmount).times(100).toFixed(1)}%`}</Text>
        </Item>


      </StyledIfoCardDetails>


    </>



  )
}

export default IfoCardDetails
