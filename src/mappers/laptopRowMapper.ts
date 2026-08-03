export function mapLaptopToRow(form: any) {
    const c = form.content;
  return {
    id: form.id,

    serial_number: c.serial_number,

    hostname: c.hostname,

    status: c.status,

    before_os_build: c.os_builds.before,

    after_os_build: c.os_builds.after,

    with_yubikey: c.withYubiKey,

    ybk_hostname: c.ybk.hostname,

    ybk_warranty_value: c.ybk.warranty.value,

    ybk_warranty_remark: c.ybk.warranty.remark,

    before_front_photo: c.photos.before.front,

    before_back_photo: c.photos.before.back,

    before_sn_photo: c.photos.before.sn,

    after_front_photo: c.photos.after.front,

    after_back_photo: c.photos.after.back,

    after_sn_photo: c.photos.after.sn,

    unboxing_video: c.photos.unboxing.video,

    unboxing_thumbnail: c.photos.unboxing.tn,

    brand: c.brand,

    model: c.model,

    memory: c.memory,

    screen_brightness_value: c.screen.brightness.value,

    screen_brightness_remark: c.screen.brightness.remark,

    screen_flicker_value: c.screen.flicker.value,

    screen_flicker_remark: c.screen.flicker.remark,

    screen_dead_pixels_value: c.screen.deadPixels.value,

    screen_dead_pixels_remark: c.screen.deadPixels.remark,

    screen_cracked_value: c.screen.cracked.value,

    screen_cracked_remark: c.screen.cracked.remark,

    screen_scratched_value: c.screen.scratched.value,

    screen_scratched_remark: c.screen.scratched.remark,

    keyboard_keys_value: c.keyboard.keys.value,

    keyboard_keys_remark: c.keyboard.keys.remark,

    keyboard_backlit_value: c.keyboard.backlit.value,

    keyboard_backlit_remark: c.keyboard.backlit.remark,

    keyboard_touchpad_value: c.keyboard.touchpad.value,

    keyboard_touchpad_remark: c.keyboard.touchpad.remark,

    battery_charging_value: c.battery.charging.value,

    battery_charging_remark: c.battery.charging.remark,

    battery_physical_value: c.battery.physical.value,

    battery_physical_remark: c.battery.physical.remark,

    health_battery_condition: c.health.battery.condition,

    health_battery_remark: c.health.battery.remark,

    health_battery_percentage:
      c.health.battery.percentage === ""
        ? null
        : Number(c.health.battery.percentage),

    health_with_hdd: c.health.withHDD,

    health_with_ssd: c.health.withSSD,

    health_storage_hdd_condition: c.health.storage.hdd.condition,

    health_storage_hdd_percentage:
      c.health.storage.hdd.percentage === ""
        ? null
        : Number(c.health.storage.hdd.percentage),

    health_storage_hdd_remark: c.health.storage.hdd.remark,

    health_storage_ssd_condition: c.health.storage.ssd.condition,

    health_storage_ssd_percentage:
      c.health.storage.ssd.percentage === ""
        ? null
        : Number(c.health.storage.ssd.percentage),

    health_storage_ssd_remark: c.health.storage.ssd.remark,

    chassis_scratched_value: c.chassis.scratched.value,

    chassis_scratched_remark: c.chassis.scratched.remark,

    chassis_misaligned_value: c.chassis.misaligned.value,

    chassis_misaligned_remark: c.chassis.misaligned.remark,

    chassis_bulging_value: c.chassis.bulging.value,

    chassis_bulging_remark: c.chassis.bulging.remark,

    ports_usb_value: c.ports.usb.value,

    ports_usb_remark: c.ports.usb.remark,

    ports_ethernet_value: c.ports.ethernet.value,

    ports_ethernet_remark: c.ports.ethernet.remark,

    ports_sdcard_value: c.ports.sdcard.value,

    ports_sdcard_remark: c.ports.sdcard.remark,

    ports_hdmi_value: c.ports.hdmi.value,

    ports_hdmi_remark: c.ports.hdmi.remark,

    ports_audio_value: c.ports.audio.value,

    ports_audio_remark: c.ports.audio.remark,

    cms_camera_value: c.cms.camera.value,

    cms_camera_remark: c.cms.camera.remark,

    cms_speakers_value: c.cms.speakers.value,

    cms_speakers_remark: c.cms.speakers.remark,

    cms_mic_value: c.cms.mic.value,

    cms_mic_remark: c.cms.mic.remark,

    warranty_intact_value: c.warranty.intact.value,

    warranty_intact_remark: c.warranty.intact.remark,

    warranty_charger_value: c.warranty.charger.value,

    warranty_charger_remark: c.warranty.charger.remark,

    drive_wipeout_value: c.drive.wipeout.value,

    drive_wipeout_remark: c.drive.wipeout.remark,

    drive_reset_value: c.drive.reset.value,

    drive_reset_remark: c.drive.reset.remark,

    items_laptop: c.items.laptop,
    items_laptop_bag: c.items.laptopBag,
    items_mouse: c.items.mouse,
    items_original_box: c.items.originalBox,
    items_charger: c.items.charger,
    items_getting_started_guide: c.items.gettingStartedGuide,
    items_uat_checklist: c.items.uatChecklist,
    items_yubikey: c.items.yubiKey,
    items_rsa_token: c.items.rsaToken,

    engineer_name: c.engr.name,

    engineer_signature: c.engr.signature,

    engineer_date: c.engr.date,
  };
}
