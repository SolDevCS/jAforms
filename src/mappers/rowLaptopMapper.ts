import { FormDocument } from "@/src/context/FormContext";

export function mapRowToLaptop(row: any): FormDocument {
  return {
    id: row.id,
    type: "laptop",

    title: row.hostname,

    createdAt: new Date(row.created_at).getTime(),
    modifiedAt: new Date(row.updated_at).getTime(),

    content: {
      hostname: row.hostname,

      status: row.status,

      os_builds: {
        before: row.before_os_build,
        after: row.after_os_build,
      },

      withYubiKey: row.with_yubikey,

      ybk: {
        hostname: row.ybk_hostname,

        warranty: {
          value: row.ybk_warranty_value,
          remark: row.ybk_warranty_remark,
        },
      },

      photos: {
        before: {
          front: row.before_front_photo,
          back: row.before_back_photo,
          sn: row.before_sn_photo,
        },

        after: {
          front: row.after_front_photo,
          back: row.after_back_photo,
          sn: row.after_sn_photo,
        },

        unboxing: {
          video: row.unboxing_video,
          tn: row.unboxing_thumbnail,
        },
      },

      brand: row.brand,

      model: row.model,

      memory: row.memory,

      serial_number: row.serial_number,

      screen: {
        brightness: {
          value: row.screen_brightness_value,
          remark: row.screen_brightness_remark,
        },

        flicker: {
          value: row.screen_flicker_value,
          remark: row.screen_flicker_remark,
        },

        deadPixels: {
          value: row.screen_dead_pixels_value,
          remark: row.screen_dead_pixels_remark,
        },

        cracked: {
          value: row.screen_cracked_value,
          remark: row.screen_cracked_remark,
        },

        scratched: {
          value: row.screen_scratched_value,
          remark: row.screen_scratched_remark,
        },
      },

      keyboard: {
        keys: {
          value: row.keyboard_keys_value,
          remark: row.keyboard_keys_remark,
        },

        backlit: {
          value: row.keyboard_backlit_value,
          remark: row.keyboard_backlit_remark,
        },

        touchpad: {
          value: row.keyboard_touchpad_value,
          remark: row.keyboard_touchpad_remark,
        },
      },

      battery: {
        charging: {
          value: row.battery_charging_value,
          remark: row.battery_charging_remark,
        },

        physical: {
          value: row.battery_physical_value,
          remark: row.battery_physical_remark,
        },
      },

      health: {
        battery: {
          condition: row.health_battery_condition,

          percentage:
            row.health_battery_percentage == null
              ? ""
              : String(row.health_battery_percentage),

          remark: row.health_battery_remark,
        },

        withHDD: row.health_with_hdd,

        withSSD: row.health_with_ssd,

        storage: {
          hdd: {
            condition: row.health_storage_hdd_condition,

            percentage:
              row.health_storage_hdd_percentage == null
                ? ""
                : String(row.health_storage_hdd_percentage),

            remark: row.health_storage_hdd_remark,
          },

          ssd: {
            condition: row.health_storage_ssd_condition,

            percentage:
              row.health_storage_ssd_percentage == null
                ? ""
                : String(row.health_storage_ssd_percentage),

            remark: row.health_storage_ssd_remark,
          },
        },
      },

      chassis: {
        scratched: {
          value: row.chassis_scratched_value,
          remark: row.chassis_scratched_remark,
        },

        misaligned: {
          value: row.chassis_misaligned_value,
          remark: row.chassis_misaligned_remark,
        },

        bulging: {
          value: row.chassis_bulging_value,
          remark: row.chassis_bulging_remark,
        },
      },

      ports: {
        usb: {
          value: row.ports_usb_value,
          remark: row.ports_usb_remark,
        },

        ethernet: {
          value: row.ports_ethernet_value,
          remark: row.ports_ethernet_remark,
        },

        sdcard: {
          value: row.ports_sdcard_value,
          remark: row.ports_sdcard_remark,
        },

        hdmi: {
          value: row.ports_hdmi_value,
          remark: row.ports_hdmi_remark,
        },

        audio: {
          value: row.ports_audio_value,
          remark: row.ports_audio_remark,
        },
      },

      cms: {
        camera: {
          value: row.cms_camera_value,
          remark: row.cms_camera_remark,
        },

        speakers: {
          value: row.cms_speakers_value,
          remark: row.cms_speakers_remark,
        },

        mic: {
          value: row.cms_mic_value,
          remark: row.cms_mic_remark,
        },
      },

      warranty: {
        intact: {
          value: row.warranty_intact_value,
          remark: row.warranty_intact_remark,
        },

        charger: {
          value: row.warranty_charger_value,
          remark: row.warranty_charger_remark,
        },
      },

      drive: {
        wipeout: {
          value: row.drive_wipeout_value,
          remark: row.drive_wipeout_remark,
        },

        reset: {
          value: row.drive_reset_value,
          remark: row.drive_reset_remark,
        },
      },

      items: {
        laptop: row.items_laptop,
        laptopBag: row.items_laptop_bag,
        mouse: row.items_mouse,
        originalBox: row.items_original_box,
        charger: row.items_charger,
        gettingStartedGuide: row.items_getting_started_guide,
        uatChecklist: row.items_uat_checklist,
        yubiKey: row.items_yubikey,
        rsaToken: row.items_rsa_token,
      },

      footerRemarks: [],

      engr: {
        name: row.engineer_name,
        signature: row.engineer_signature,
        date: row.engineer_date,
      },
    },
  };
}
