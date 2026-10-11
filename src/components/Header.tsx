import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Image, ImageSource } from 'expo-image';
import { useEffect, useState } from 'react';
import { Platform, Text, View } from 'react-native';

export interface HeaderProps {
  userName?: string;
  avatarSource?: ImageSource | string | number;
  temperature?: string;
  weatherIcon?: string;
  className?: string;
  latitude?: number;
  longitude?: number;
}

const API_BASE_URL = Platform.select({
  android: 'http://10.0.0.65:3000',
  ios: 'http://10.0.0.65:3000',
  default: 'http://localhost:3000'
});

export function Header({
  userName = 'Isaac',
  avatarSource = require('@/assets/images/users/default/default.jpg'),
  weatherIcon = 'umbrella',
  className = '',
  temperature: initialTemperature = '21°',
  latitude = -23.5505,
  longitude = -46.6333,
}: HeaderProps) {

  const [currentTemp, setCurrentTemp] = useState(initialTemperature);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function fetchWeather() {
      try {
        setLoading(true);
        const url = `${API_BASE_URL}/api/v1/weather?lat=${latitude}&long=${longitude}`;
        
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'accept': 'application/json',
          }
        })

        if (!response.ok) {
          throw new Error(`Erro na API Rails: ${response.status}`);
        }

        const data = await response.json();

        if (isMounted && data) {
          const tempValue = data.current?.temperature ?? data.temperature ?? data.temp;
          if (tempValue !== undefined && tempValue !== null) {
            const formatted = typeof tempValue === 'number'
              ? `${Math.round(tempValue)}°`
              : `${tempValue}`.replace(/[^\d-]/g, '') + '°';
            setCurrentTemp(formatted);
          }
        } 
      } catch (error) {
        console.warn('Erro ao buscar temperatura no back-end:', error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchWeather();

    return () => {
      isMounted = false;
    };
  }, [latitude, longitude]
  )

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
        <Text className="text-white font-semibold">
          {loading ? '...' : currentTemp}
        </Text>
      </View>
    </View>
  );
}

export default Header;
