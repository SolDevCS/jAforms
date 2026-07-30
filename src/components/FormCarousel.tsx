import React, { useRef, useState } from "react";
import { View, StyleSheet } from "react-native";
import PagerView from "react-native-pager-view";

import FormNavigator from "@/src/components/FormNavigator";

interface FormCarouselProps {
  pages: {
    key: string;
    title: string;
    component: React.ComponentType<any>;
    requiredFields?: readonly string[];
  }[];

  form: any;
}

export default function FormCarousel({ pages, form }: FormCarouselProps) {
  const pagerRef = useRef<PagerView>(null);

  const [currentPage, setCurrentPage] = useState(0);

  const goToPage = (index: number) => {
    pagerRef.current?.setPage(index);
    setCurrentPage(index);
  };

  return (
    <View style={styles.container}>
      <PagerView
        ref={pagerRef}
        style={styles.pager}
        initialPage={0}
        onPageSelected={(event) => {
          setCurrentPage(event.nativeEvent.position);
        }}
      >
        {pages.map((page) => {
          const Component = page.component;

          return (
            <View key={page.key} style={styles.page}>
              <Component form={form} />
            </View>
          );
        })}
      </PagerView>

      <FormNavigator
        form={form}
        pages={pages}
        currentPage={currentPage}
        onPress={goToPage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  pager: {
    flex: 1,
  },

  page: {
    flex: 1,
  },
});
