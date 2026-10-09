"use client";

import { useState } from "react";
import { trackMetaEvent } from "./MetaPixel";

const CHECKOUT_URL = "https://maxautocare.orderonline.id/paket-bundling-3-in-1";
const products = [
  {
    number: "01",
    name: "Pengkilap Body",
    subtitle: "Perawatan body mobil",
    description:
      "Produk perawatan untuk membantu menjaga tampilan body kendaraan.",
    image: "/autoShine.png",
  },
  {
    number: "02",
    name: "Tire Polish",
    subtitle: "Semir Ban",
    description: "Bantu menjaga tampilan ban agar terlihat lebih bersih dan terawat.",
    image: "/tirePolish.png",
  },
  {
    number: "03",
    name: "Interior Cleaner",
    subtitle: "Perawatan interior",
    description:
      "Bantu menjaga kebersihan interior kendaraan untuk penggunaan sehari-hari.",
    image: "/interior.png",
  },
];

const benefits = [
  {
    number: "01",
    title: "Lebih Praktis",
    description: "Tiga kebutuhan perawatan mobil dalam satu paket.",
  },
  {
    number: "02",
    title: "Lebih Hemat",
    description: "Dapatkan harga bundling spesial dibandingkan harga normal.",
  },
  {
    number: "03",
    title: "Mudah Digunakan",
    description: "Perawatan kendaraan jadi lebih praktis di rumah.",
  },
];

const faqs = [
  {
    question: "Apa saja isi paket bundling MAX Auto Care?",
    answer:
      "Paket ini terdiri dari Pengkilap Body, Semir Ban, dan Interior Cleaner, serta bonus microfiber sesuai penawaran.",
  },
  {
    question: "Bagaimana cara memesan produk?",
    answer:
      "Klik tombol Order Sekarang. Kamu akan diarahkan ke halaman checkout OrderOnline untuk mengisi data pemesanan.",
  },
  {
    question: "Bagaimana dengan pembayaran dan pengiriman?",
    answer:
      "Pilihan pembayaran, ongkos kirim, dan informasi pengiriman mengikuti ketentuan yang tersedia di halaman checkout.",
  },
];


function OrderButton({
  children = "ORDER SEKARANG",
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const checkoutReady = CHECKOUT_URL.trim().length > 0;

  return (
    <a
      href={checkoutReady ? CHECKOUT_URL : "#promo"}
      target={checkoutReady ? "_blank" : undefined}
      rel={checkoutReady ? "noopener noreferrer" : undefined}
      onClick={(event) => {
        if (!checkoutReady) {
          event.preventDefault();

          document
            .getElementById("promo")
            ?.scrollIntoView({ behavior: "smooth" });

          return;
        }

        trackMetaEvent("InitiateCheckout", {
          content_name: "MAX Auto Care Bundle",
          currency: "IDR",
          value: 99000,
        });
      }}
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-4 text-sm font-bold text-white transition duration-300 hover:bg-red-500 ${className}`}
    >
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen overflow-hidden bg-[#0b0b0d] pb-20 text-white md:pb-0">
      {/* NAVBAR */}
      <header className="border-b border-white/10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
          <a
            href="#home"
            className="text-lg font-black tracking-tight sm:text-xl"
          >
            MAX <span className="text-red-500">AUTO CARE</span>
          </a>

          <a
            href="#promo"
            className="rounded-full border border-red-500/60 px-4 py-2 text-xs font-bold text-red-400 transition hover:bg-red-600 hover:text-white sm:text-sm"
          >
            LIHAT PROMO
          </a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section id="home" className="relative isolate">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_35%,rgba(220,38,38,0.19),transparent_50%)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-red-500" />
              <span className="text-xs font-semibold tracking-widest text-red-400">
                BUNDLE PROMO MAX AUTO CARE
              </span>
            </div>

            <h1 className="max-w-xl text-4xl font-black leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              Mobil Bersih.
              <br />
              <span className="text-red-500">Kilap Maksimal.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-zinc-400 sm:text-lg">
              Rawat body, kaca, dan interior mobil dengan paket perawatan
              praktis dari MAX Auto Care.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <OrderButton className="w-full sm:w-auto">
                DAPATKAN PROMO
              </OrderButton>

              <a
                href="#produk"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-4 text-sm font-bold transition hover:border-white/40"
              >
                LIHAT PRODUK
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs text-zinc-400 sm:text-sm">
              <span>✓ Paket 3 produk</span>
              <span>✓ Bonus microfiber</span>
              <span>✓ Checkout online</span>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="relative">
            <div className="absolute inset-5 rounded-full bg-red-600/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl shadow-red-950/30">
              <img
                src="/bundling.png"
                alt="Bundling Promo"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROMO BANNER */}
      <section className="bg-red-600">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 px-5 py-6 sm:flex-row sm:items-center lg:px-8">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] text-red-100">
              SPECIAL BUNDLE OFFER
            </p>
            <h2 className="mt-2 text-2xl font-black sm:text-3xl">
              Tiga Produk, Satu Paket!
            </h2>
          </div>

          <OrderButton className="bg-black hover:bg-zinc-800">
            PESAN SEKARANG
          </OrderButton>
        </div>
      </section>

      {/* PRODUCT SECTION */}
      <section
        id="produk"
        className="bg-[#f4f4f5] px-5 py-16 text-zinc-900 sm:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-xs font-bold tracking-[0.25em] text-red-600">
              YOUR CAR CARE ESSENTIALS
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Kenalan dengan Paket MAX
            </h2>

            <p className="mt-4 leading-7 text-zinc-600">
              Solusi praktis untuk membantu memenuhi kebutuhan perawatan mobil
              sehari-hari.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.number}
                className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative bg-zinc-100 p-5">
                  <span className="absolute left-7 top-7 z-10 rounded-full bg-black px-3 py-1 text-xs font-bold text-white">
                    {product.number}
                  </span>

                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="aspect-[4/3] w-full rounded-xl object-contain transition duration-300 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-red-600">
                    {product.subtitle}
                  </p>

                  <h3 className="mt-2 text-xl font-black">{product.name}</h3>

                  <p className="mt-3 text-sm leading-6 text-zinc-600">
                    {product.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.25em] text-red-500">
              WHY CHOOSE MAX
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Perawatan Mobil Lebih Praktis
            </h2>

            <p className="mt-4 leading-7 text-zinc-400">
              Satu paket untuk beberapa kebutuhan perawatan kendaraan kamu.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <article
                key={benefit.number}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-red-500/40"
              >
                <span className="text-sm font-black text-red-500">
                  {benefit.number}
                </span>

                <h3 className="mt-5 text-xl font-bold">{benefit.title}</h3>

                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROMO CHECKOUT */}
      <section id="promo" className="scroll-mt-6 px-5 pb-16 sm:pb-24">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-red-500/30 bg-[#171113] p-6 sm:p-10 lg:p-14">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-red-600/20 blur-3xl" />

          <div className="relative grid items-center gap-8 md:grid-cols-2">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] text-red-400">
                SPECIAL BUNDLE
              </p>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                Saatnya Rawat Mobilmu!
              </h2>

              <p className="mt-4 leading-7 text-zinc-400">
                Dapatkan paket bundling MAX Auto Care yang terdiri dari tiga
                produk perawatan dan bonus microfiber.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-zinc-300">
                <li>✓ Body Polish</li>
                <li>✓ Tire Polish</li>
                <li>✓ Interior Cleaner</li>
                <li>✓ Bonus microfiber</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6 text-center sm:p-8">
              <p className="text-sm text-zinc-400 line-through">Rp200.000</p>

              <p className="mt-2 text-4xl font-black text-red-500 sm:text-5xl">
                Rp99.000
              </p>

              <p className="mt-4 text-sm leading-6 text-zinc-400">
                Harga promo paket bundling.
              </p>

              <OrderButton className="mt-6 w-full">ORDER SEKARANG</OrderButton>

              <p className="mt-4 text-xs leading-5 text-zinc-500">
                Detail pembayaran dan pengiriman tersedia di halaman checkout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f4f4f5] px-5 py-16 text-zinc-900 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-xs font-bold tracking-[0.25em] text-red-600">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-black">Ada Pertanyaan?</h2>
          </div>

          <div className="mt-8 space-y-3">
            {faqs.map((faq, index) => (
              <article
                key={faq.question}
                className="overflow-hidden rounded-xl border border-zinc-200 bg-white"
              >
                <button
                  type="button"
                  aria-expanded={openFaq === index}
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left font-bold"
                >
                  <span>{faq.question}</span>
                  <span className="text-xl text-red-600">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>

                {openFaq === index && (
                  <p className="px-5 pb-5 text-sm leading-7 text-zinc-600">
                    {faq.answer}
                  </p>
                )}
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <OrderButton>DAPATKAN PAKET MAX</OrderButton>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-black">
            MAX <span className="text-red-500">AUTO CARE</span>
          </p>

          <p className="text-xs text-zinc-500">
            © 2026 MAX Auto Care. All rights reserved.
          </p>
        </div>
      </footer>

      {/* STICKY CTA MOBILE */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#101012]/95 p-3 backdrop-blur-lg md:hidden">
        <div className="mx-auto flex max-w-lg items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="text-xs text-zinc-400">Harga promo</p>
            <p className="text-lg font-black text-red-500">Rp99.000</p>
          </div>

          <OrderButton className="shrink-0 px-4 py-3 text-xs">
            ORDER SEKARANG
          </OrderButton>
        </div>
      </div>
    </main>
  );
}
