/** Contact form schema shared by the client form and the API route. */

export type ContactInput = {
  company: string;
  name: string;
  department: string;
  email: string;
  message: string;
};

export type ContactErrors = Partial<Record<keyof ContactInput, string>>;

type Field = {
  name: keyof ContactInput;
  label: string;
  type: "text" | "email" | "textarea";
  required: boolean;
  autoComplete?: string;
  placeholder?: string;
  wide?: boolean;
  max: number;
};

export const contactFields: Field[] = [
  { name: "company", label: "会社名", type: "text", required: true, autoComplete: "organization", placeholder: "例）株式会社〇〇製作所", max: 100 },
  { name: "name", label: "氏名", type: "text", required: true, autoComplete: "name", placeholder: "例）山田 太郎", max: 60 },
  { name: "department", label: "部署", type: "text", required: false, autoComplete: "organization-title", placeholder: "例）DX推進部", max: 100 },
  { name: "email", label: "メールアドレス", type: "email", required: true, autoComplete: "email", placeholder: "例）name@example.co.jp", max: 254 },
  {
    name: "message",
    label: "相談内容",
    type: "textarea",
    required: true,
    placeholder: "検討中のテーマや現在の課題、PoC・ユーザーテストへのご関心などをご記入ください。",
    wide: true,
    max: 4000,
  },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(input: ContactInput): ContactErrors {
  const errors: ContactErrors = {};
  for (const field of contactFields) {
    const value = input[field.name].trim();
    if (field.required && !value) {
      errors[field.name] = `${field.label}を入力してください。`;
    } else if (value.length > field.max) {
      errors[field.name] = `${field.label}は${field.max}文字以内で入力してください。`;
    } else if (field.type === "email" && value && !EMAIL_RE.test(value)) {
      errors[field.name] = "メールアドレスの形式で入力してください（例：name@example.co.jp）。";
    }
  }
  return errors;
}
