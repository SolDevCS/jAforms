import React from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";

import { Drawer } from "expo-router/drawer";
import { Redirect, router } from "expo-router";

import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";

import { FormProvider, useForms } from "@/src/context/FormContext";
import { createLaptopTemplate } from "@/src/templates/laptop";
import { createUnboxingTemplate } from "@/src/templates/unboxing";
import { useAuth } from "@/src/context/AuthContext";

function CustomDrawer(props: DrawerContentComponentProps) {

  const { forms, createForm } = useForms();

  const createLaptopForm = () => {
    const form = createLaptopTemplate();

    createForm(form);

    props.navigation.closeDrawer();

    router.push({
      pathname: "/(drawer)/laptop/[id]",
      params: {
        id: form.id,
      },
    });
  };

  const createUnboxingForm = () => {
    const form = createUnboxingTemplate();

    createForm(form);

    props.navigation.closeDrawer();

    router.push({
      pathname: "/(drawer)/unboxing/[id]",
      params: {
        id: form.id,
      },
    });
  };

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.drawerContainer}
    >
      {/* ---------- Logo ---------- */}

      <View style={styles.logoContainer}>
        <Text style={styles.logo}>COMPANY NAME</Text>

        <Text style={styles.subtitle}>UAT Form System</Text>

        <Text style={styles.description}>
          Programmer 1{"\n"}
          Programmer 2{"\n"}
          Programmer 3
        </Text>
      </View>

      {/* ---------- Divider ---------- */}

      <View
        style={[
          styles.divider,
          {
            backgroundColor: "#BDBDBD",
          },
        ]}
      />

      {/* ---------- Fixed Tabs ---------- */}

      <View style={styles.fixedTabs}>
        <Pressable style={styles.tab} onPress={createUnboxingForm}>
          <Text>Create Unboxing Form</Text>
        </Pressable>

        <Pressable style={styles.tab} onPress={createLaptopForm}>
          <Text>Create Laptop UAT Form</Text>
        </Pressable>

        <Pressable style={styles.tab}>
          <Text>Create CE UAT Form</Text>
        </Pressable>

        <Pressable style={styles.tab}>
          <Text>Create YubiKey Form</Text>
        </Pressable>

        <Pressable
          style={styles.tab}
          onPress={() => {
            props.navigation.closeDrawer();
            router.push("/(drawer)");
          }}
        >
          <Text>Home</Text>
        </Pressable>

        {/* <Pressable
          style={styles.tab}
          onPress={() => {
            props.navigation.closeDrawer();
            router.push("/(drawer)/settings");
          }}
        >
          <Text>Settings</Text>
        </Pressable> */}
      </View>

      {/* ---------- Divider ---------- */}

      <View
        style={[
          styles.divider,
          {
            backgroundColor: "black",
          },
        ]}
      />

      {/* ---------- Dynamic Forms ---------- */}

      <ScrollView style={styles.list} showsVerticalScrollIndicator={false}>
        {forms.map((form) => (
          <Pressable
            key={form.id}
            style={styles.tab}
            onPress={() => {
              props.navigation.closeDrawer();

              switch (form.type) {
                case "laptop":
                  router.push({
                    pathname: "/(drawer)/laptop/[id]",
                    params: {
                      id: form.id,
                    },
                  });
                  break;

                case "ce":
                  router.push({
                    pathname: "/(drawer)/ce/[id]",
                    params: {
                      id: form.id,
                    },
                  });
                  break;

                case "unboxing":
                  router.push({
                    pathname: "/(drawer)/unboxing/[id]",
                    params: {
                      id: form.id,
                    },
                  });
                  break;

                case "yubikey":
                  router.push({
                    pathname: "/(drawer)/yubikey/[id]",
                    params: {
                      id: form.id,
                    },
                  });
                  break;
              }
            }}
          >
            <Text>{form.title}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </DrawerContentScrollView>
  );
}

export default function DrawerLayout() {
  const { user } = useAuth();
  if (!user) {
    return <Redirect href="/(auth)/login" />;
  }
  return (
    <FormProvider>
      <Drawer
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          headerTitleAlign: "center",
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            title: "Home",
          }}
        />

        <Drawer.Screen
          name="settings"
          options={{
            title: "Settings",
          }}
        />

        <Drawer.Screen
          name="laptop/[id]"
          options={{
            drawerItemStyle: {
              display: "none",
            },
          }}
        />

        <Drawer.Screen
          name="ce/[id]"
          options={{
            drawerItemStyle: {
              display: "none",
            },
          }}
        />

        <Drawer.Screen
          name="unboxing/[id]"
          options={{
            drawerItemStyle: {
              display: "none",
            },
          }}
        />

        <Drawer.Screen
          name="yubikey/[id]"
          options={{
            drawerItemStyle: {
              display: "none",
            },
          }}
        />
      </Drawer>
    </FormProvider>
  );
}

const styles = StyleSheet.create({
  drawerContainer: {
    flexGrow: 1,
  },

  logoContainer: {
    padding: 20,
  },

  logo: {
    fontSize: 40,
    fontWeight: "bold",
  },

  subtitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 5,
  },

  description: {
    fontSize: 12,
    marginTop: 10,
    lineHeight: 18,
  },

  divider: {
    height: 2,
    marginVertical: 15,
  },

  fixedTabs: {
    paddingHorizontal: 10,
  },

  tab: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 8,
  },

  list: {
    flex: 1,
    paddingHorizontal: 10,
  },
});
