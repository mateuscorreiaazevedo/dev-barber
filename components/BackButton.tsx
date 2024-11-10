import styled from '@emotion/native'
import { Feather } from '@expo/vector-icons'

export const BackButton = ({ onPress }: { onPress: () => void }) => {
  return (
    <BackButtonView>
      <Feather name="chevron-left" size={16} color="#007AFF" />
      <BackButtonText onPress={onPress}>Back</BackButtonText>
    </BackButtonView>
  )
}

const BackButtonView = styled.View`
  flex-direction: row;
  padding-left: 20px;
`

const BackButtonText = styled.Text`
  margin-left: 4px;
  color: #007aff;
`
