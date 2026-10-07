"use client";

import { useState, type FormEvent } from "react";
import { CircleCheck } from "lucide-react";
import { cn } from "@/lib/cn";
import { contactFields, validateContact, type ContactErrors, type ContactInput } from "@/lib/contact";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const input: ContactInput = {
      company: data.company ?? "",
      name: data.name ?? "",
      department: data.department ?? "",
      email: data.email ?? "",
      message: data.message ?? "",
    };

    const nextErrors = validateContact(input);
    setErrors(nextErrors);
    const firstInvalid = contactFields.find((f) => nextErrors[f.name]);
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid.name}"]`)?.focus();
      return;
    }

    setStatus("submitting");
    setServerMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...input, website: data.website ?? "" }),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { message?: string };
        throw new Error(body.message ?? "送信に失敗しました。");
      }
      form.reset();
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setServerMessage(err instanceof Error ? err.message : "送信に失敗しました。");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-xl border border-line bg-white p-8 md:p-12">
        <CircleCheck aria-hidden className="size-8 text-teal" strokeWidth={1.5} />
        <h3 className="mt-6 text-xl font-bold text-ink">お問い合わせを受け付けました</h3>
        <p className="mt-3 text-[0.9375rem] text-slate-600">
          内容を確認のうえ、担当者より3営業日以内にご連絡いたします。
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm text-teal underline underline-offset-4 hover:text-teal-strong"
        >
          別のお問い合わせを送る
        </button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="rounded-xl border border-line bg-white p-6 md:p-10" aria-describedby="form-note">
      <div className="grid gap-6 sm:grid-cols-2">
        {contactFields.map((field) => {
          const errorId = `${field.name}-error`;
          const error = errors[field.name];
          const common = {
            id: field.name,
            name: field.name,
            required: field.required,
            autoComplete: field.autoComplete,
            "aria-invalid": error ? true : undefined,
            "aria-describedby": error ? errorId : undefined,
            className: cn(
              "mt-2 block w-full rounded-md border bg-white px-3.5 text-[0.9375rem] text-ink placeholder:text-slate-400",
              "transition-colors duration-150 focus:border-teal focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-teal/30",
              error ? "border-red-600" : "border-slate-300 hover:border-slate-400",
            ),
          };
          return (
            <div key={field.name} className={field.wide ? "sm:col-span-2" : undefined}>
              <label htmlFor={field.name} className="flex items-center gap-2 text-sm font-medium text-ink">
                {field.label}
                {field.required ? (
                  <span className="text-xs font-normal text-teal-strong">必須</span>
                ) : (
                  <span className="text-xs font-normal text-slate-400">任意</span>
                )}
              </label>
              {field.type === "textarea" ? (
                <textarea {...common} rows={5} placeholder={field.placeholder} className={cn(common.className, "py-3")} />
              ) : (
                <input {...common} type={field.type} placeholder={field.placeholder} className={cn(common.className, "h-12")} />
              )}
              {error && (
                <p id={errorId} className="mt-2 text-[0.8125rem] text-red-700">
                  {error}
                </p>
              )}
            </div>
          );
        })}

        {/* Honeypot for bots: hidden from people and assistive tech */}
        <div aria-hidden className="hidden">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p id="form-note" className="text-xs text-slate-500">
          ご入力いただいた情報は、お問い合わせへの対応のみに利用します。
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex h-12 shrink-0 items-center justify-center rounded-md bg-navy px-7 text-[0.9375rem] font-medium text-white transition-colors duration-150 hover:bg-navy-deep disabled:cursor-wait disabled:opacity-70"
        >
          {status === "submitting" ? "送信中…" : "PoC・ユーザーテストに相談"}
        </button>
      </div>

      <p role="alert" aria-live="assertive" className={cn("text-sm text-red-700", status === "error" ? "mt-4" : "sr-only")}>
        {status === "error" ? serverMessage : ""}
      </p>
    </form>
  );
}
