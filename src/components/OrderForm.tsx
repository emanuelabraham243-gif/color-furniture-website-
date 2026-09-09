"use client";

import { useState, type FormEvent } from "react";
import Button from "@/components/Button";
import { site, whatsappLink } from "@/data/site";
import { cx } from "@/lib/utils";
import { useT } from "@/lib/i18n/LanguageProvider";

type Status = "idle" | "submitting" | "success" | "error";

export default function OrderForm({
  categorySlug,
  categoryName,
  productSlug,
  productName,
}: {
  categorySlug?: string;
  categoryName?: string;
  productSlug?: string;
  productName?: string;
}) {
  const t = useT();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const itemLabel = productName ?? categoryName ?? t("orderForm.defaultItem");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      customerName: String(data.get("customerName") || ""),
      phone: String(data.get("phone") || ""),
      quantity: Number(data.get("quantity") || 1),
      message: String(data.get("message") || ""),
      categorySlug,
      categoryName,
      productSlug,
      productName,
    };

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(t("orderForm.error"));
    }
  }

  if (status === "success") {
    return (
      <div className="border border-line bg-cream px-6 py-8 text-center">
        <p className="font-display text-xl text-charcoal">{t("orderForm.successTitle")}</p>
        <p className="mt-2 text-[14px] leading-relaxed text-charcoal-soft/80">
          {t("orderForm.successText", { item: itemLabel })}
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="link-underline mt-4 text-[13px] uppercase tracking-[0.12em] text-wood-dark"
        >
          {t("orderForm.placeAnother")}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-line bg-paper p-6 md:p-8">
      <h3 className="font-display text-xl text-charcoal">{t("orderForm.title")}</h3>
      <p className="mt-1.5 text-[13.5px] text-charcoal-soft/70">{t("orderForm.subtitle", { item: itemLabel })}</p>

      <div className="mt-6 flex flex-col gap-4">
        <div>
          <label htmlFor="customerName" className="text-[12px] font-medium uppercase tracking-[0.08em] text-charcoal">
            {t("orderForm.fullName")}
          </label>
          <input
            id="customerName"
            name="customerName"
            type="text"
            required
            className="mt-2 w-full border border-line bg-ivory px-4 py-3 text-[14px] text-charcoal focus:border-charcoal focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="phone" className="text-[12px] font-medium uppercase tracking-[0.08em] text-charcoal">
            {t("orderForm.phone")}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="09xx xxx xxx"
            className="mt-2 w-full border border-line bg-ivory px-4 py-3 text-[14px] text-charcoal focus:border-charcoal focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="quantity" className="text-[12px] font-medium uppercase tracking-[0.08em] text-charcoal">
            {t("orderForm.quantity")}
          </label>
          <input
            id="quantity"
            name="quantity"
            type="number"
            min={1}
            defaultValue={1}
            className="mt-2 w-full border border-line bg-ivory px-4 py-3 text-[14px] text-charcoal focus:border-charcoal focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="message" className="text-[12px] font-medium uppercase tracking-[0.08em] text-charcoal">
            {t("orderForm.notes")}
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            placeholder={t("orderForm.notesPlaceholder")}
            className="mt-2 w-full resize-none border border-line bg-ivory px-4 py-3 text-[14px] text-charcoal focus:border-charcoal focus:outline-none"
          />
        </div>
      </div>

      {status === "error" && <p className="mt-4 text-[13px] text-[#a04a3a]">{errorMessage}</p>}

      <Button type="submit" size="lg" className={cx("mt-6 w-full", status === "submitting" && "opacity-60")}>
        {status === "submitting" ? t("orderForm.submitting") : t("orderForm.submit")}
      </Button>

      <a
        href={whatsappLink(`Hello ${site.name}, I'd like to order ${itemLabel}.`)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 block text-center text-[13px] text-charcoal-soft/70 hover:text-charcoal"
      >
        {t("orderForm.preferWhatsapp")}
      </a>
    </form>
  );
}
