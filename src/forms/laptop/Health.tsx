import Column from "@/src/components/Column";
import Row from "@/src/components/Row";
import { LaptopFields } from "@/src/constants/laptopFields";
import { FormDocument, useForms } from "@/src/context/FormContext";
import AssessmentField from "@/src/fields/AssessmentField";
import CheckboxField from "@/src/fields/CheckboxField";
import EditableOptionField from "@/src/fields/EditableOptionField";
import MediaField from "@/src/fields/MediaField";
import MediaGroup from "@/src/fields/MediaGroup";
import OptionField from "@/src/fields/OptionField";
import QuestionField from "@/src/fields/QuestionField";
import TextField from "@/src/fields/TextField";
import { ScrollView, StyleSheet, Text, View } from "react-native";

interface HealthProps {
  form: FormDocument;
}

export default function Health({ form }: HealthProps) {
  const { updateField } = useForms();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>3.4 Laptop Health Check</Text>
      <AssessmentField
        question="Battery Health"
        value={form.content.health.battery.condition}
        percentage={form.content.health.battery.percentage}
        remark={form.content.health.battery.remark}
        onValueChange={(value) =>
          updateField(form.id, LaptopFields.HEALTH_BATTERY_CONDITION, value)
        }
        onPercentageChange={(value) =>
          updateField(form.id, LaptopFields.HEALTH_BATTERY_PERCENTAGE, value)
        }
        onRemarkChange={(value) =>
          updateField(form.id, LaptopFields.HEALTH_BATTERY_REMARK, value)
        }
      />
      <Text style={styles.label}>Storage Health Status</Text>

      <Row>
        <Column>
          <CheckboxField
            checked={form.content.withHDD}
            label="With HDD"
            onChange={(checked) =>
              updateField(form.id, LaptopFields.WITH_HDD, checked)
            }
          />
        </Column>
        <Column>
          <CheckboxField
            checked={form.content.withSSD}
            label="With SSD"
            onChange={(checked) =>
              updateField(form.id, LaptopFields.WITH_SSD, checked)
            }
          />
        </Column>
      </Row>

      {form.content.withHDD && (
        <AssessmentField
          question="HDD Health"
          value={form.content.health.storage.hdd.condition}
          percentage={form.content.health.storage.hdd.percentage}
          remark={form.content.health.storage.hdd.remark}
          onValueChange={(value) =>
            updateField(
              form.id,
              LaptopFields.HEALTH_STORAGE_HDD_CONDITION,
              value,
            )
          }
          onPercentageChange={(value) =>
            updateField(
              form.id,
              LaptopFields.HEALTH_STORAGE_HDD_PERCENTAGE,
              value,
            )
          }
          onRemarkChange={(value) =>
            updateField(form.id, LaptopFields.HEALTH_STORAGE_HDD_REMARK, value)
          }
        />
      )}

      {form.content.withSSD && (
        <AssessmentField
          question="SSD Health"
          value={form.content.health.storage.ssd.condition}
          percentage={form.content.health.storage.ssd.percentage}
          remark={form.content.health.storage.ssd.remark}
          onValueChange={(value) =>
            updateField(
              form.id,
              LaptopFields.HEALTH_STORAGE_SSD_CONDITION,
              value,
            )
          }
          onPercentageChange={(value) =>
            updateField(
              form.id,
              LaptopFields.HEALTH_STORAGE_SSD_PERCENTAGE,
              value,
            )
          }
          onRemarkChange={(value) =>
            updateField(form.id, LaptopFields.HEALTH_STORAGE_SSD_REMARK, value)
          }
        />
      )}
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
