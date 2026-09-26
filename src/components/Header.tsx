import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Image, ImageSource } from 'expo-image';
import React from 'react';
import { Text, View } from 'react-native';

export interface HeaderProps {
  userName?: string;
  avatarSource?: ImageSource | string | number;
  temperature?: string;
  weatherIcon?: string;
  className?: string;
}

export function Header({
  userName = 'Isaac',
  avatarSource = require('@/assets/images/users/default/default.png'),
  temperature = '21°',
  weatherIcon = 'umbrella',
  className = '',
}: HeaderProps) {
  return (
    <View className={`flex flex-row items-center justify-between w-full px-4 py-2 mt-15 ${className}`}>
      {/* Usuário (Avatar + Nome) */}
      <View className="flex flex-row items-center justify-between gap-4">
        <View className="w-12 h-12 rounded-full overflow-hidden">
          <Image
            source={avatarSource}
            style={{ width: 50, height: 50 }}
            contentFit="fill"
            className="rounded-full"
          />
        </View>
        <Text className="text-[#191812] font-semibold text-base">{userName}</Text>
      </View>

      {/* Clima / Badge superior */}
      <View className="bg-[#CCC6A3] px-4 py-2 rounded-full flex flex-row items-center gap-2">
        <FontAwesome6 name={weatherIcon as any} size={24} color="white" />
        <Text className="text-white font-semibold">{temperature}</Text>
      </View>
    </View>
  );
}

export default Header;
