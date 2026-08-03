export function mapFooterRemarks(form: any) {
  return form.content.footerRemarks.map(
    (remark: { id: string; text: string }, index: number) => ({
      id: remark.id,

      laptop_form_id: form.id,

      sort_order: index,

      remark: remark.text,
    }),
  );
}
