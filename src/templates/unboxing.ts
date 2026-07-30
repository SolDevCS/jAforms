// For Linking Carousel to the Form
import "react-native-get-random-values";
import { v4 as uuid } from "uuid";

import { FormDocument } from "@/src/context/FormContext";

export function createUnboxingTemplate(): FormDocument {
    return {
        id: uuid(),

        type: "unboxing",

        title: "TN-",

        createdAt: Date.now(),

        modifiedAt: Date.now(),

        content: {
            hostnames: [
                {
                    id: uuid(),
                    hostname: "",
                },
            ],

            trackingNumber: "8",

            video: "",
            picture: "",

        }
    }
}