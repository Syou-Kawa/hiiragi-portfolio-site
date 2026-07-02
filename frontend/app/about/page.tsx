import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = { title: "自己紹介" };

export default function About() {
  return (
    <>
      <div className="page-head">
        <div className="en">About</div>
        <div className="ja">自己紹介</div>
      </div>

      <section className="section">
        <div className="container">
          <div className="profile-flex">
            <div className="profile-img">
              {/* ★プロフィール画像を差し替え */}
              <img src={`${process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000"}/images/icon.svg`} alt="ひいらぎ" />
            </div>
            <div className="profile-text">
              <h3>ひいらぎ / Webデザイナー・コーダー</h3>
              <p>
                はじめまして、ひいらぎと申します。<br />
                Web制作会社で3年間、デザインとコーディングの実務を経験したのち、フリーランスとして独立しました。
                自然やお花が好きで、やわらかく心地よいデザインを得意としています。<br /><br />
                「デザインもコーディングもまとめてお願いしたい」というご要望にワンストップでお応えできるのが強みです。
              </p>

              <h3>経歴</h3>
              <ul className="timeline">
                <li><span className="year">2020</span>デザイン専門学校 卒業</li>
                <li><span className="year">2020</span>Web制作会社に入社。コーポレートサイト・ECサイトの制作を担当</li>
                <li><span className="year">2023</span>フリーランスとして独立。屋号「ひいらぎ」で活動開始</li>
                <li><span className="year">2024</span>累計制作実績50件を達成。LP・バナー制作の継続案件多数</li>
                <li><span className="year">2026</span>現在も個人・中小企業さまを中心にお手伝いしています</li>
              </ul>

              <h3>実績</h3>
              <p>
                Webサイト制作 20件以上 / LP制作 15件以上 / バナー制作 100本以上<br />
                コーディング代行(デザインカンプからの実装) 多数
              </p>

              <h3>スキル</h3>
              <div className="skill-tags">
                {["HTML / CSS", "JavaScript", "Next.js", "Laravel", "WordPress", "Figma", "Photoshop", "Illustrator"].map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand title="いっしょに素敵なサイトをつくりませんか?" text="制作のご依頼・ご相談はお気軽にどうぞ。" />
    </>
  );
}
