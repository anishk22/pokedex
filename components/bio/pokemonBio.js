import { View, Text } from 'react-native'
import React from 'react'

const PokemonBio = ({ pokemon }) => {
  return (
    <View>
      <Text style={{ color: '#ffffff' }}>{pokemon.name}</Text>
    </View>
  )
}

export default PokemonBio