import React from 'react'
import styled from 'styled-components'
import { Link, Text } from '@pancakeswap-libs/uikit'
import { IfoStatus } from 'config/constants/types'
import getTimePeriods from 'utils/getTimePeriods'
import useI18n from 'hooks/useI18n'

export interface IfoCardTimeProps {
  isLoading: boolean
  status: IfoStatus
  secondsUntilStart: number
  secondsUntilEnd: number
  block: number
}

const Details = styled.div`
  align-items: center;
  display: flex;
  height: 24px;
  justify-content: center;
  margin-bottom: 24px;
`

const Countdown = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  margin-top: 30px;
`


const IfoCardTime: React.FC<IfoCardTimeProps> = ({ isLoading, status, secondsUntilStart, secondsUntilEnd, block }) => {
  const TranslateString = useI18n()
  const countdownToUse = status === 'coming_soon' ? secondsUntilStart : secondsUntilEnd
  const timeUntil = getTimePeriods(countdownToUse)
  const suffix = status === 'coming_soon' ? 'Start' : 'Finish'

  if (isLoading) {
    return <Details>{TranslateString(656, 'Loading...')}</Details>
  }

  if (countdownToUse <= 0) {
    return (
      <Details>
        <Text bold>{TranslateString(999, 'Finished')}</Text>
      </Details>
    )
  }

  return (
    <Details>
      <div>
       <Countdown>{`${timeUntil.days}d, ${timeUntil.hours}h, ${timeUntil.minutes}m`}</Countdown>
       <div>
        <Link href={`https://explorer.harmony.one/block/${block}`} target="blank" rel="noopener noreferrer" ml="20px" mt="5px">
          Explorer
        </Link>
       </div>
      </div>
    </Details>
  )
}

export default IfoCardTime
