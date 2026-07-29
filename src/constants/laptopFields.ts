export const LaptopFields = {
  // =====================================================
  // Header
  // =====================================================

  HOSTNAME: "hostname",

  STATUS: "status",

  BEFORE_OS_BUILD: "os_builds.before",

  AFTER_OS_BUILD: "os_builds.after",

  // =====================================================
  // YubiKey
  // =====================================================

  WITH_YUBIKEY: "withYubiKey",

  YBK_HOSTNAME: "ybk.hostname",

  YBK_WARRANTY_VALUE: "ybk.warranty.condition",
  YBK_WARRANTY_REMARK: "ybk.warranty.remark",

  // =====================================================
  // Before Photos
  // =====================================================

  BEFORE_FRONT_PHOTO: "photos.before.front",

  BEFORE_BACK_PHOTO: "photos.before.back",

  BEFORE_SN_PHOTO: "photos.before.sn",

  // =====================================================
  // After Photos
  // =====================================================

  AFTER_FRONT_PHOTO: "photos.after.front",

  AFTER_BACK_PHOTO: "photos.after.back",

  AFTER_SN_PHOTO: "photos.after.sn",

  // =====================================================
  // Unboxing
  // =====================================================

  UNBOXING_VIDEO: "photos.unboxing.video",

  UNBOXING_THUMBNAIL: "photos.unboxing.tn",

  // =====================================================
  // Basic Information
  // =====================================================

  BRAND: "brand",
  MODEL: "model",

  MEMORY: "memory",
  SLOTS: "slots",

  SERIAL_NUMBER: "sn",

  // =====================================================
  // Screen
  // =====================================================

  SCREEN_BRIGHTNESS_VALUE: "screen.brightness.value",
  SCREEN_BRIGHTNESS_REMARK: "screen.brightness.remark",

  SCREEN_FLICKER_VALUE: "screen.flicker.value",
  SCREEN_FLICKER_REMARK: "screen.flicker.remark",

  SCREEN_DEAD_PIXELS_VALUE: "screen.deadPixels.value",
  SCREEN_DEAD_PIXELS_REMARK: "screen.deadPixels.remark",

  SCREEN_CRACKED_VALUE: "screen.cracked.value",
  SCREEN_CRACKED_REMARK: "screen.cracked.remark",

  SCREEN_SCRATCHED_VALUE: "screen.scratched.value",
  SCREEN_SCRATCHED_REMARK: "screen.scratched.remark",

  // =====================================================
  // Keyboard
  // =====================================================

  KEYBOARD_KEYS_VALUE: "keyboard.keys.value",
  KEYBOARD_KEYS_REMARK: "keyboard.keys.remark",

  KEYBOARD_BACKLIT_VALUE: "keyboard.backlit.value",
  KEYBOARD_BACKLIT_REMARK: "keyboard.backlit.remark",

  KEYBOARD_TOUCHPAD_VALUE: "keyboard.touchpad.value",
  KEYBOARD_TOUCHPAD_REMARK: "keyboard.touchpad.remark",

  // =====================================================
  // Battery
  // =====================================================

  BATTERY_CHARGING_VALUE: "battery.charging.value",
  BATTERY_CHARGING_REMARK: "battery.charging.remark",

  BATTERY_PHYSICAL_VALUE: "battery.physical.value",
  BATTERY_PHYSICAL_REMARK: "battery.physical.remark",

  // =====================================================
  // Health
  // =====================================================

  HEALTH_BATTERY_CONDITION: "health.battery.condition",
  HEALTH_BATTERY_PERCENTAGE: "health.battery.percentage",
  HEALTH_BATTERY_REMARK: "health.battery.remark",

  WITH_HDD: "withHDD",
  WITH_SSD: "withSSD",

  HEALTH_STORAGE_HDD_CONDITION: "health.storage.hdd.condition",
  HEALTH_STORAGE_HDD_PERCENTAGE: "health.storage.hdd.percentage",
  HEALTH_STORAGE_HDD_REMARK: "health.storage.hdd.remark",

  HEALTH_STORAGE_SSD_CONDITION: "health.storage.ssd.condition",
  HEALTH_STORAGE_SSD_PERCENTAGE: "health.storage.ssd.percentage",
  HEALTH_STORAGE_SSD_REMARK: "health.storage.ssd.remark",

  // =====================================================
  // Chassis
  // =====================================================

  CHASSIS_SCRATCHED_VALUE: "chassis.scratched.value",
  CHASSIS_SCRATCHED_REMARK: "chassis.scratched.remark",

  CHASSIS_MISALIGNED_VALUE: "chassis.misaligned.value",
  CHASSIS_MISALIGNED_REMARK: "chassis.misaligned.remark",

  CHASSIS_BULGING_VALUE: "chassis.bulging.value",
  CHASSIS_BULGING_REMARK: "chassis.bulging.remark",

  // =====================================================
  // Ports
  // =====================================================

  PORTS_USB_VALUE: "ports.usb.value",
  PORTS_USB_REMARK: "ports.usb.remark",

  PORTS_ETHERNET_VALUE: "ports.ethernet.value",
  PORTS_ETHERNET_REMARK: "ports.ethernet.remark",

  PORTS_SDCARD_VALUE: "ports.sdcard.value",
  PORTS_SDCARD_REMARK: "ports.sdcard.remark",

  PORTS_HDMI_VALUE: "ports.hdmi.value",
  PORTS_HDMI_REMARK: "ports.hdmi.remark",

  PORTS_AUDIO_VALUE: "ports.audio.value",
  PORTS_AUDIO_REMARK: "ports.audio.remark",

  // =====================================================
  // CMS
  // =====================================================

  CMS_CAMERA_VALUE: "cms.camera.value",
  CMS_CAMERA_REMARK: "cms.camera.remark",

  CMS_SPEAKERS_VALUE: "cms.speakers.value",
  CMS_SPEAKERS_REMARK: "cms.speakers.remark",

  CMS_MIC_VALUE: "cms.mic.value",
  CMS_MIC_REMARK: "cms.mic.remark",

  // =====================================================
  // Warranty
  // =====================================================

  WARRANTY_INTACT_VALUE: "warranty.intact.value",
  WARRANTY_INTACT_REMARK: "warranty.intact.remark",

  WARRANTY_CHARGER_VALUE: "warranty.charger.value",
  WARRANTY_CHARGER_REMARK: "warranty.charger.remark",

  // =====================================================
  // Drive
  // =====================================================

  DRIVE_WIPEOUT_VALUE: "drive.wipeout.value",
  DRIVE_WIPEOUT_REMARK: "drive.wipeout.remark",
  DRIVE_RESET_VALUE: "drive.reset.value",
  DRIVE_RESET_REMARK: "drive.reset.remark",

  // =====================================================
  // Included Items
  // =====================================================

  ITEM_LAPTOP: "items.laptop",
  ITEM_LAPTOP_BAG: "items.laptopBag",
  ITEM_MOUSE: "items.mouse",
  ITEM_ORIGINAL_BOX: "items.originalBox",
  ITEM_CHARGER: "items.charger",
  ITEM_GETTING_STARTED_GUIDE: "items.gettingStartedGuide",
  ITEM_UAT_CHECKLIST: "items.uatChecklist",
  ITEM_YUBIKEY: "items.yubiKey",
  ITEM_RSA_TOKEN: "items.rsaToken",

  // =====================================================
  // Footer
  // =====================================================

  FOOTER_REMARKS: "footerRemarks",

  ENGINEER_NAME: "engr.name",

  ENGINEER_SIGNATURE: "engr.signature",

  ENGINEER_DATE: "engr.date",


} as const;
