import Link from "next/link";

export default function CtaBand({
  title, text, label = "お問い合わせはこちら", href = "/contact", spaced = false,
}: { title: string; text: string; label?: string; href?: string; spaced?: boolean }) {
  return (
    <section className="section" style={spaced ? undefined : { paddingTop: 0 }}>
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
