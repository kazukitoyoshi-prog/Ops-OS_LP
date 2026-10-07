import type { ReactNode } from "react";
import { ArrowRight, FileSpreadsheet, Presentation, User } from "lucide-react";
import { Br, Container, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export function Problem() {
  return (
    <section id="problem" aria-labelledby="problem-title" className="bg-mist py-24 md:py-36">
      <Container>
        <SectionHeader
          id="problem-title"
          index="01"
          eyebrow="The Bottleneck"
          title={
            <>
              AI導入のボトルネックは、
              <Br />
              開発から「上流設計」へ。
            </>
          }
          lead="AI Agentやコード生成によって、AIの開発・実装は急速に速くなっています。一方で、その前段となる「何をAI化するか」「どう業務に組み込むか」を決める上流設計が、追いついていません。"
        />

        <Reveal className="mt-14 md:mt-20">
          <ShiftDiagram />
        </Reveal>

        <div className="mt-20 md:mt-28">
          <ProblemRow
            no="01"
            title="何をAI化するか決められない"
            body="業務部門はAIで何ができるか分からず、IT・DX部門は現場業務を十分に把握しきれない。両者の間で、活用テーマが決まらない。"
          >
            <GapDiagram />
          </ProblemRow>
          <ProblemRow
            no="02"
            title="業務をAI要件に落とし込めない"
            body="業務フロー、判断基準、利用データ、例外処理。現場の知を、AIが扱える要件へ変換できる人材が不足している。"
          >
            <ConvertDiagram />
          </ProblemRow>
          <ProblemRow
            no="03"
            title="案件ごとに一からやり直している"
            body="ヒアリング、業務整理、要件、評価結果がExcel・PowerPoint・担当者個人に分散し、過去の知見を再利用できない。"
          >
            <SiloDiagram />
          </ProblemRow>
        </div>
      </Container>
    </section>
  );
}

function ShiftDiagram() {
  const rows = [
    {
      label: "これまで",
      segments: [
        { name: "上流設計", w: 24 },
        { name: "PoC・開発", w: 52, bottleneck: true },
        { name: "導入・運用", w: 24 },
      ],
      note: "開発・実装に時間とコストが集中",
    },
    {
      label: "これから",
      segments: [
        { name: "上流設計", w: 52, bottleneck: true },
        { name: "PoC・開発", w: 20, fast: true },
        { name: "導入・運用", w: 28 },
      ],
      note: "開発は高速化し、上流設計が律速に",
    },
  ];

  return (
    <figure className="rounded-xl border border-line bg-white p-5 md:p-10">
      <figcaption className="text-sm font-medium text-ink">AI導入プロセスにおけるボトルネックの移動</figcaption>
      <div className="mt-8 space-y-8">
        {rows.map((row) => (
          <div key={row.label} className="grid gap-3 md:grid-cols-[6rem_1fr_15rem] md:items-center md:gap-6">
            <p className="text-sm text-slate-500">{row.label}</p>
            <div className="flex h-12 gap-1">
              {row.segments.map((s) => (
                <div
                  key={s.name}
                  className={cn(
                    "flex min-w-0 items-center justify-center rounded-sm px-1 text-center text-[11px] leading-tight sm:px-2 sm:text-xs md:text-sm",
                    s.bottleneck ? "bg-navy font-medium text-white" : "bg-slate-100 text-slate-600",
                  )}
                  style={{ width: `${s.w}%` }}
                >
                  {s.name}
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-600">{row.note}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line pt-5 text-xs text-slate-500">
        <span className="flex items-center gap-2">
          <span className="size-2.5 rounded-sm bg-navy" aria-hidden /> ボトルネック
        </span>
        <span>※ 工程の比重はイメージです</span>
      </div>
    </figure>
  );
}

function ProblemRow({ no, title, body, children }: { no: string; title: string; body: string; children: ReactNode }) {
  return (
    <Reveal className="grid gap-8 border-t border-line py-12 md:py-16 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-5">
        <p className="font-mono text-sm text-teal tabular-nums">課題 {no}</p>
        <h3 className="jp-heading mt-3 text-xl font-bold text-ink md:text-2xl">{title}</h3>
        <p className="mt-4 text-[0.9375rem] text-pretty text-slate-600">{body}</p>
      </div>
      <div className="lg:col-span-7">{children}</div>
    </Reveal>
  );
}

function DiagramBox({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("rounded-xl border border-line bg-white p-5 md:p-8", className)}>{children}</div>;
}

function ResultPill({ children }: { children: ReactNode }) {
  return (
    <p className="mx-auto w-fit rounded-md border border-navy/20 bg-navy/[0.04] px-4 py-2 text-center text-sm font-medium text-navy">
      {children}
    </p>
  );
}

function DownLine() {
  return <span aria-hidden className="mx-auto my-3 block h-8 w-px bg-slate-300" />;
}

function GapDiagram() {
  return (
    <DiagramBox>
      <div className="grid grid-cols-[1fr_auto_1fr] items-stretch gap-2 md:gap-4">
        <div className="rounded-lg border border-line p-3 md:p-4">
          <p className="text-sm font-medium text-ink">業務部門</p>
          <p className="mt-1 text-xs text-slate-500 md:text-[0.8125rem]">AIで何ができるのか分からない</p>
        </div>
        <div className="flex w-10 items-center md:w-20" aria-hidden>
          <span className="h-px flex-1 border-t border-dashed border-slate-400" />
          <span className="mx-1 flex size-5 items-center justify-center rounded-full border border-slate-300 text-[10px] text-slate-500">
            ?
          </span>
          <span className="h-px flex-1 border-t border-dashed border-slate-400" />
        </div>
        <div className="rounded-lg border border-line p-3 md:p-4">
          <p className="text-sm font-medium text-ink">IT / DX部門</p>
          <p className="mt-1 text-xs text-slate-500 md:text-[0.8125rem]">現場業務を十分に理解できない</p>
        </div>
      </div>
      <DownLine />
      <ResultPill>活用テーマを決められない</ResultPill>
    </DiagramBox>
  );
}

function ConvertDiagram() {
  const inputs = ["業務フロー", "判断基準", "利用データ", "例外処理"];
  return (
    <DiagramBox>
      <div className="grid grid-cols-[1fr_auto_1.2fr_auto_0.9fr] items-center gap-2 md:gap-4">
        <ul className="space-y-1.5">
          {inputs.map((i) => (
            <li key={i} className="rounded-md bg-mist px-1 py-1.5 text-center text-[11px] whitespace-nowrap text-slate-700 sm:px-2 sm:text-xs md:text-sm">
              {i}
            </li>
          ))}
        </ul>
        <ArrowRight aria-hidden className="size-4 text-slate-400" />
        <div className="rounded-lg border border-dashed border-slate-400 px-2 py-5 text-center md:px-4">
          <p className="text-xs font-medium text-ink md:text-sm">AIが扱える要件へ変換</p>
          <p className="mt-2 text-[11px] text-slate-500 md:text-xs">担える人材が不足</p>
        </div>
        <ArrowRight aria-hidden className="size-4 text-slate-300" />
        <div className="flex h-full min-h-24 items-center justify-center rounded-lg border border-dashed border-slate-300 px-2 text-center text-xs text-slate-400 md:text-sm">
          AI要件
        </div>
      </div>
    </DiagramBox>
  );
}

function SiloDiagram() {
  const silos = [
    { icon: FileSpreadsheet, name: "Excel", items: ["要件一覧", "評価結果"] },
    { icon: Presentation, name: "PowerPoint", items: ["業務整理", "提案資料"] },
    { icon: User, name: "担当者個人", items: ["ヒアリング内容", "判断の経緯"] },
  ];
  return (
    <DiagramBox>
      <div className="grid grid-cols-3 divide-x divide-dashed divide-slate-300 rounded-lg border border-line">
        {silos.map(({ icon: Icon, name, items }) => (
          <div key={name} className="p-3 md:p-4">
            <p className="flex items-center gap-1.5 text-xs font-medium text-ink md:text-sm">
              <Icon aria-hidden className="size-4 shrink-0 text-slate-400" strokeWidth={1.75} />
              <span className="truncate">{name}</span>
            </p>
            <ul className="mt-3 space-y-1 text-xs text-slate-500 md:text-[0.8125rem]">
              {items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <DownLine />
      <ResultPill>過去の知見を再利用できない</ResultPill>
    </DiagramBox>
  );
}
