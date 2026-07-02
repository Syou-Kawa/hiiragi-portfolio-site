import Link from "next/link";

export default function CtaBand({
  title, text, label = "お問い合わせはこちら", href = "/contact",
}: { title: string; text: string; label?: string; href?: string }) {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="cta-band">
          <h2>{title}</h2>
          <p>{text}</p>
          <Link href={href} className="btn">{label}</Link>
        </div>
      </div>
    </section>
  );
}
