import Header from "./Header";
import Screen from "./Screen";
import Keyboard from "./Keyboard";
import { LaptopFields } from "@/src/constants/laptopFields";
import DeviceDetails from "./DeviceDetails";
import Battery from "./Battery";
import Health from "./Health";
import { FormDocument } from "@/src/context/FormContext";
import Ports from "./Ports";
import Chassis from "./Chassis";
import CMS from "./CMS";
import Warranty from "./Warranty";
import Drive from "./Drive";
import YBK from "./YBK";
import Footer from "./Footer";
import Items from "./Items";

export interface LaptopPage {
  key: string;
  title: string;
  component: React.ComponentType<any>;

  requiredFields?: string[];
  validator?: (form: FormDocument) => boolean;
}

export const laptopPages = [
  {
    key: "header",
    title: "Header",
    component: Header,

    requiredFields: [
      LaptopFields.STATUS,
      LaptopFields.BEFORE_OS_BUILD,
      LaptopFields.AFTER_OS_BUILD,
    ],
  },
  {
    key: "device-details",
    title: "Device Details",
    component: DeviceDetails,

    requiredFields: [
      LaptopFields.BRAND,
      LaptopFields.MODEL,
      LaptopFields.MEMORY,
      LaptopFields.SLOTS,
      LaptopFields.SERIAL_NUMBER,
    ],
  },
  {
    key: "screen",
    title: "Screen",
    component: Screen,

    requiredFields: [
      LaptopFields.SCREEN_BRIGHTNESS_VALUE,
      LaptopFields.SCREEN_FLICKER_VALUE,
      LaptopFields.SCREEN_DEAD_PIXELS_VALUE,
      LaptopFields.SCREEN_CRACKED_VALUE,
      LaptopFields.SCREEN_SCRATCHED_VALUE,
    ],
  },
  {
    key: "keyboard",
    title: "Keyboard",
    component: Keyboard,
    requiredFields: [
      LaptopFields.KEYBOARD_KEYS_VALUE,
      LaptopFields.KEYBOARD_BACKLIT_VALUE,
      LaptopFields.KEYBOARD_TOUCHPAD_VALUE,
    ],
  },
  {
    key: "battery",
    title: "Battery",
    component: Battery,
    requiredFields: [
      LaptopFields.BATTERY_CHARGING_VALUE,
      LaptopFields.BATTERY_PHYSICAL_VALUE,
    ],
  },
  {
    key: "health",
    title: "Health",
    component: Health,

    requiredFields: [
      LaptopFields.HEALTH_BATTERY_CONDITION,
      LaptopFields.HEALTH_BATTERY_PERCENTAGE,
    ],

    validator: (form: FormDocument) => {
      const storage = form.content;

      if (!storage.withSSD && !storage.withHDD) return false;

      if (storage.withHDD) {
        if (
          storage.health.storage.hdd.condition === "" ||
          storage.health.storage.hdd.percentage === ""
        )
          return false;
      }

      if (storage.withSSD) {
        if (
          storage.health.storage.ssd.condition === "" ||
          storage.health.storage.ssd.percentage === ""
        )
          return false;
      }

      return true;
    },
  },

  {
    key: "chassis",
    title: "Chassis",
    component: Chassis,
    requiredFields: [
      LaptopFields.CHASSIS_SCRATCHED_VALUE,
      LaptopFields.CHASSIS_MISALIGNED_VALUE,
      LaptopFields.CHASSIS_BULGING_VALUE,
    ],
  },
  {
    key: "ports",
    title: "Ports",
    component: Ports,
    requiredFields: [
      LaptopFields.PORTS_USB_VALUE,
      LaptopFields.PORTS_ETHERNET_VALUE,
      LaptopFields.PORTS_SDCARD_VALUE,
      LaptopFields.PORTS_HDMI_VALUE,
      LaptopFields.PORTS_AUDIO_VALUE,
    ],
  },
  {
    key: "cms",
    title: "CMS",
    component: CMS,
    requiredFields: [
      LaptopFields.CMS_CAMERA_VALUE,
      LaptopFields.CMS_SPEAKERS_VALUE,
      LaptopFields.CMS_MIC_VALUE,
    ],
  },
  {
    key: "warranty",
    title: "Warranty",
    component: Warranty,
    requiredFields: [
      LaptopFields.WARRANTY_INTACT_VALUE,
      LaptopFields.WARRANTY_CHARGER_VALUE,
    ],
  },
  {
    key: "drive",
    title: "Drive",
    component: Drive,
    requiredFields: [
      LaptopFields.DRIVE_WIPEOUT_VALUE,
      LaptopFields.DRIVE_RESET_VALUE,
    ],
  },
  {
    key: "ybk",
    title: "YubiKey",
    component: YBK,

    validator: (form: FormDocument) => {
      // No YubiKey? Page is automatically complete.
      if (!form.content.withYubiKey) {
        return true;
      }

      return (
        form.content.ybk.hostname.trim() !== "" &&
        form.content.ybk.warranty.value !== ""
      );
    },
  },
  {
    key: "items",
    title: "Items",
    component: Items,

    validator: (form: FormDocument) => {
      return Object.values(form.content.items).some(Boolean);
    },
  },
  {
    key: "footer",
    title: "Footer",
    component: Footer,

    requiredFields: [
      LaptopFields.ENGINEER_NAME,
      LaptopFields.ENGINEER_SIGNATURE,
      LaptopFields.ENGINEER_DATE,
    ],
  },
];
