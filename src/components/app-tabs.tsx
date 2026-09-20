import AntDesign from '@expo/vector-icons/AntDesign';
import { TabList, Tabs, TabSlot, TabTrigger, TabTriggerSlotProps } from 'expo-router/ui';
import { Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function AppTabs() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs>
      {/* Área onde as telas (index, explore) são exibidas */}
      <TabSlot />

      {/* Barra de abas customizada: TabTriggers DEVEM ser filhos diretos de TabList (ou do elemento asChild) */}
      <TabList asChild>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12,
            bottom: Math.max(insets.bottom, 16),
          }}
          className="absolute self-center bg-[#C5DBE9] px-4 py-2.5 rounded-full border border-white/20 shadow-md"
        >
          {/* Tab: Início */}
          <TabTrigger name="index" href="/" asChild>
            <CustomTabButton label="Início" icon="home" />
          </TabTrigger>

          {/* Tab: Explorar */}
          <TabTrigger name="explore" href="/explore" asChild>
            <CustomTabButton label="Explorar" icon="search" />
          </TabTrigger>

          {/* Tab: Configurações */}
          <TabTrigger name="settings" href="/settings" asChild>
            <CustomTabButton label="Ajustes" icon="setting" />
          </TabTrigger>

        </View>
      </TabList>
    </Tabs>
  );
}

// Botão com ícone e texto lado a lado (flex-row)
function CustomTabButton({
  label,
  icon,
  isFocused,
  ...props
}: TabTriggerSlotProps & { label: string; icon: keyof typeof AntDesign.glyphMap }) {
  return (
    <Pressable
      {...props}
      className={`flex-row items-center gap-2 px-4 py-2 rounded-full ${
        isFocused ? 'bg-[#738A99]' : 'bg-white'
      }`}
    >
      <AntDesign
        name={icon}
        size={20}
        color={isFocused ? 'white' : '#738A99'}
      />
      <Text
        className={`text-sm ${
          isFocused ? 'text-white font-semibold' : 'hidden'
        }`}
      >
        {label}
      </Text>
    </Pressable>
  );
}


