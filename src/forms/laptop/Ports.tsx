import Column from "@/src/components/Column";
import Row from "@/src/components/Row";
import { LaptopFields } from "@/src/constants/laptopFields";
import { FormDocument, useForms } from "@/src/context/FormContext";
import CheckboxField from "@/src/fields/CheckboxField";
import EditableOptionField from "@/src/fields/EditableOptionField";
import MediaField from "@/src/fields/MediaField";
import MediaGroup from "@/src/fields/MediaGroup";
import OptionField from "@/src/fields/OptionField";
import QuestionField from "@/src/fields/QuestionField";
import TextField from "@/src/fields/TextField";
import { ScrollView, StyleSheet, Text, View } from "react-native";

interface PortsProps {
  form: FormDocument;
}

export default function Ports({ form }: PortsProps) {
  const { updateField } = useForms();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>3.6 Ports Check</Text>
      <QuestionField
        question="1. USB Ports working? (Type A and C)?"
        value={form.content.ports.usb.value}
        remark={form.content.ports.usb.remark}
        required
        onValueChange={(value) =>
          updateField(form.id, LaptopFields.PORTS_USB_VALUE, value)
        }
        onRemarkChange={(remark) =>
          updateField(form.id, LaptopFields.PORTS_USB_REMARK, remark)
        }
      />
      <QuestionField
        question="2. Ethernet Port working?"
        value={form.content.ports.ethernet.value}
        remark={form.content.ports.ethernet.remark}
        required
        onValueChange={(value) =>
          updateField(form.id, LaptopFields.PORTS_ETHERNET_VALUE, value)
        }
        onRemarkChange={(remark) =>
          updateField(form.id, LaptopFields.PORTS_ETHERNET_REMARK, remark)
        }
      />
      <QuestionField
        question="3. SD Card Reader working?"
        value={form.content.ports.sdcard.value}
        remark={form.content.ports.sdcard.remark}
        required
        onValueChange={(value) =>
          updateField(form.id, LaptopFields.PORTS_SDCARD_VALUE, value)
        }
        onRemarkChange={(remark) =>
          updateField(form.id, LaptopFields.PORTS_SDCARD_REMARK, remark)
        }
      />
      <QuestionField
        question="4. HDMI/VGA/DisplayPort working?"
        value={form.content.ports.hdmi.value}
        remark={form.content.ports.hdmi.remark}
        required
        onValueChange={(value) =>
          updateField(form.id, LaptopFields.PORTS_HDMI_VALUE, value)
        }
        onRemarkChange={(remark) =>
          updateField(form.id, LaptopFields.PORTS_HDMI_REMARK, remark)
        }
      />
      <QuestionField
        question="5. Audio Jack working?"
        value={form.content.ports.audio.value}
        remark={form.content.ports.audio.remark}
        required
        onValueChange={(value) =>
          updateField(form.id, LaptopFields.PORTS_AUDIO_VALUE, value)
        }
        onRemarkChange={(remark) =>
          updateField(form.id, LaptopFields.PORTS_AUDIO_REMARK, remark)
        }
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    marginVertical: 8,
    textAlign: "center",
  },
});
