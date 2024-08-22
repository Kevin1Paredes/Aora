import { View, Text } from 'react-native'
import { Tabs, Redirect} from "expo-router" ;

import { icons } from "../../constants";

const TabIcon = ({icon, color, name, focused}) => {
  return (
    <view className="items-center justify-center gap-2">
      <Image
        source={icon}
        resileMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}>
        {name}

      </Text>
    </view>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptios={{
          tabBarShowLabel: false
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title:"Home",
            headerShow: false,
            tabBarIcon: ({ color, focused }) => {
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            }
          }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            title:"Bookmark",
            headerShow: false,
            tabBarIcon: ({ color, focused }) => {
              <TabIcon
                icon={icons.bookmark}
                color={color}
                name="Bookmark"
                focused={focused}
              />
            }
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title:"Create",
            headerShow: false,
            tabBarIcon: ({ color, focused }) => {
              <TabIcon
                icon={icons.plus}
                color={color}
                name="Home"
                focused={focused}
              />
            }
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title:"Profile",
            headerShow: false,
            tabBarIcon: ({ color, focused }) => {
              <TabIcon
                icon={icons.profile}
                color={color}
                name="Profile"
                focused={focused}
              />
              
            }
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout