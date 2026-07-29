// For Linking Carousel to the Form
import "react-native-get-random-values";
import { v4 as uuid } from "uuid";

import { FormDocument } from "@/src/context/FormContext";
import { FooterRemark } from "../types/types";

export function createLaptopTemplate(): FormDocument {
  return {
    id: uuid(),

    type: "laptop",

    title: "PS-",

    createdAt: Date.now(),

    modifiedAt: Date.now(),

    content: {
      // =========================
      // Header
      // =========================

      hostname: "PS-",

      status: "",

      os_builds: {
        before: "",
        after: "",
      },

      withYubiKey: false,

      ybk: {
        hostname: "YK",
        warranty: {
          value: "",
          remark: "",
        },
      },

      // =========================
      // Photos
      // =========================

      photos: {
        before: {
          front: "",
          back: "",
          sn: "",
        },

        after: {
          front: "",
          back: "",
          sn: "",
        },

        unboxing: {
          video: "",
          tn: "",
        },
      },

      // =========================
      // Basic Information
      // =========================

      brand: "",

      model: "",

      memory: "",

      sn: "",

      // =========================
      // Screen
      // =========================

      screen: {
        brightness: {
          value: "",
          remark: "",
        },

        flicker: {
          value: "",
          remark: "",
        },

        deadPixels: {
          value: "",
          remark: "",
        },

        cracked: {
          value: "",
          remark: "",
        },

        scratched: {
          value: "",
          remark: "",
        },
      },

      // =========================
      // Keyboard
      // =========================

      keyboard: {
        keys: {
          value: "",
          remark: "",
        },

        backlit: {
          value: "",
          remark: "",
        },

        touchpad: {
          value: "",
          remark: "",
        },
      },

      // =========================
      // Battery
      // =========================

      battery: {
        charging: {
          value: "",
          remark: "",
        },

        physical: {
          value: "",
          remark: "",
        },
      },

      // =========================
      // Health
      // =========================

      health: {
        battery: {
          condition: "",
          percentage: "",
          remark: "",
        },

        withHDD: false,
        withSSD: false,

        storage: {
          hdd: {
            condition: "",
            percentage: "",
            remark: "",
          },
          ssd: {
            condition: "",
            percentage: "",
            remark: "",
          },
        },
      },

      // =========================
      // Chassis
      // =========================

      chassis: {
        scratched: {
          value: "",
          remark: "",
        },

        misaligned: {
          value: "",
          remark: "",
        },

        bulging: {
          value: "",
          remark: "",
        },
      },

      // =========================
      // Ports
      // =========================

      ports: {
        usb: {
          value: "",
          remark: "",
        },

        ethernet: {
          value: "",
          remark: "",
        },

        sdcard: {
          value: "",
          remark: "",
        },

        hdmi: {
          value: "",
          remark: "",
        },

        audio: {
          value: "",
          remark: "",
        },
      },

      // =========================
      // CMS
      // =========================

      cms: {
        camera: {
          value: "",
          remark: "",
        },

        speakers: {
          value: "",
          remark: "",
        },

        mic: {
          value: "",
          remark: "",
        },
      },

      // =========================
      // Warranty
      // =========================

      warranty: {
        intact: {
          value: "",
          remark: "",
        },

        charger: {
          value: "",
          remark: "",
        },
      },

      // =========================
      // Wipeout
      // =========================

      drive: {
        wipeout: {
          value: "",
          remark: "",
        },

        reset: {
          value: "",
          remark: "",
        },
      },

      // =========================
      // Included Items
      // =========================

      items: {
        laptop: false,
        laptopBag: false,
        mouse: false,
        originalBox: false,
        charger: false,
        gettingStartedGuide: false,
        uatChecklist: false,
        yubiKey: false,
        rsaToken: false,
      },

      // =========================
      // Footer
      // =========================

      footerRemarks: [] as FooterRemark[],

      engr: {
        name: "",
        signature: "",
        date: new Date().toISOString().split("T")[0],
      },
    },
  };
}
