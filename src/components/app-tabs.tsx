import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';
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
          className="absolute self-center bg-[#C5DBE9] px-4 py-2.5 rounded-full shadow-xl mb-1"
        >
          {/* Tab: Início */}
          <TabTrigger name="index" href="/" asChild>
            <CustomTabButton label="Início" icon="home" />
          </TabTrigger>

          {/* Tab: Rotas */}
          <TabTrigger name="Rotas" href="/rotas" asChild>
            <CustomTabButton label="Rotas" icon="branches" />
          </TabTrigger>

          {/* Tab: Configurações */}
          <TabTrigger 
            name="ajustes" 
            href="/ajustes" 
            asChild
            onPress={() => {
               router.replace('/ajustes')
            }}
          >
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
      className={`flex-row items-center gap-1 p-2 rounded-full ${
        isFocused ? 'bg-[#738A99] px-4' : 'bg-white'
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


