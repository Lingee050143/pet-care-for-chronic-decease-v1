import svgPaths from "./svg-wey61cakv2";

function Icon() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14">
            <path d="M7 13L1 7L7 1" id="Vector" stroke="var(--stroke-0, #0F172B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[16777200px] shrink-0 size-[40px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[32px] relative shrink-0 w-[185.922px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Bold','Noto_Sans:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[#0f172b] text-[24px] top-0 tracking-[0.0703px]">��디션 추이 상세</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[40px] relative shrink-0 w-[233.922px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center pl-[-8px] pr-0 py-0 relative size-full">
        <Button />
        <Heading />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[24px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-[40.523px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[16px] left-[20.5px] not-italic text-[#0f172b] text-[12px] text-center top-[5px] translate-x-[-50%]">1주</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[24px] relative rounded-[8px] shrink-0 w-[50.906px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[16px] left-[25px] not-italic text-[#62748e] text-[12px] text-center top-[5px] translate-x-[-50%]">1개월</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[16px] left-[26px] not-italic text-[#62748e] text-[12px] text-center top-[5px] translate-x-[-50%]">3개월</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#f1f5f9] h-[32px] relative rounded-[10px] shrink-0 w-[152.219px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pb-0 pt-[4px] px-[4px] relative size-full">
        <Button1 />
        <Button2 />
        <Button3 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex h-[40px] items-center justify-between left-0 top-0 w-[1280px]" data-name="Container">
      <Container />
      <Container1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute css-ew64yg font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#0f172b] text-[18px] top-0 tracking-[-0.4395px]">{`식욕 & 음수량 변화`}</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#62748e] text-[14px] top-[0.5px] tracking-[-0.1504px]">지난 7일간의 기록입니다.</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[48px] relative shrink-0 w-[140.508px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading1 />
        <Paragraph />
      </div>
    </div>
  );
}

function Container4() {
  return <div className="bg-[#0f172b] rounded-[16777200px] shrink-0 size-[12px]" data-name="Container" />;
}

function Text() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[16px] left-0 not-italic text-[#45556c] text-[12px] top-px">식욕</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[16px] relative shrink-0 w-[40.766px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container4 />
        <Text />
      </div>
    </div>
  );
}

function Container6() {
  return <div className="bg-[#cad5e2] rounded-[16777200px] shrink-0 size-[12px]" data-name="Container" />;
}

function Text1() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[16px] left-0 not-italic text-[#45556c] text-[12px] top-px">음수량</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container6 />
        <Text1 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[16px] relative shrink-0 w-[107.906px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
        <Container5 />
        <Container7 />
      </div>
    </div>
  );
}

function PageConditionTrend() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-between relative shrink-0 w-full" data-name="PageConditionTrend">
      <Container3 />
      <Container8 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[1.67%_0.42%_11.67%_5.46%]" data-name="Group">
      <div className="absolute inset-[-0.19%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1120 261">
          <g id="Group">
            <path d="M0 260.5H1120" id="Vector" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" />
            <path d="M0 195.5H1120" id="Vector_2" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" />
            <path d="M0 130.5H1120" id="Vector_3" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" />
            <path d="M0 65.5H1120" id="Vector_4" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" />
            <path d="M0 0.5H1120" id="Vector_5" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[1.67%_0.42%_11.67%_5.46%]" data-name="Group">
      <Group />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[93.17%_94.03%_1.83%_4.96%]" data-name="Group">
      <p className="absolute css-ew64yg font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[93.17%_94.03%_1.83%_4.96%] leading-[normal] not-italic text-[#64748b] text-[12px] text-center">월</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[93.17%_78.35%_1.83%_20.64%]" data-name="Group">
      <p className="absolute css-ew64yg font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[93.17%_78.35%_1.83%_20.64%] leading-[normal] not-italic text-[#64748b] text-[12px] text-center">화</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[93.17%_62.66%_1.83%_36.33%]" data-name="Group">
      <p className="absolute css-ew64yg font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[93.17%_62.66%_1.83%_36.33%] leading-[normal] not-italic text-[#64748b] text-[12px] text-center">수</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[93.17%_46.97%_1.83%_52.02%]" data-name="Group">
      <p className="absolute css-ew64yg font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[93.17%_46.97%_1.83%_52.02%] leading-[normal] not-italic text-[#64748b] text-[12px] text-center">목</p>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[93.17%_31.29%_1.83%_67.7%]" data-name="Group">
      <p className="absolute css-ew64yg font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[93.17%_31.29%_1.83%_67.7%] leading-[normal] not-italic text-[#64748b] text-[12px] text-center">금</p>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[93.17%_15.6%_1.83%_83.39%]" data-name="Group">
      <p className="absolute css-ew64yg font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[93.17%_15.6%_1.83%_83.39%] leading-[normal] not-italic text-[#64748b] text-[12px] text-center">토</p>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[93.17%_-0.07%_1.83%_99.06%]" data-name="Group">
      <p className="absolute css-ew64yg font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[93.17%_-0.07%_1.83%_99.06%] leading-[normal] not-italic text-[#64748b] text-[12px] text-center">일</p>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[93.17%_-0.07%_1.83%_4.96%]" data-name="Group">
      <Group2 />
      <Group3 />
      <Group4 />
      <Group5 />
      <Group6 />
      <Group7 />
      <Group8 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents inset-[93.17%_-0.07%_1.83%_4.96%]" data-name="Group">
      <Group9 />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[85.75%_95.21%_9.25%_4.12%]" data-name="Group">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal inset-[85.75%_95.21%_9.25%_4.12%] leading-[normal] not-italic text-[#64748b] text-[12px] text-right">0</p>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents inset-[64.09%_95.21%_30.91%_3.53%]" data-name="Group">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal inset-[64.09%_95.21%_30.91%_3.53%] leading-[normal] not-italic text-[#64748b] text-[12px] text-right">25</p>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents inset-[42.42%_95.21%_52.58%_3.53%]" data-name="Group">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal inset-[42.42%_95.21%_52.58%_3.53%] leading-[normal] not-italic text-[#64748b] text-[12px] text-right">50</p>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents inset-[20.75%_95.21%_74.25%_3.53%]" data-name="Group">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal inset-[20.75%_95.21%_74.25%_3.53%] leading-[normal] not-italic text-[#64748b] text-[12px] text-right">75</p>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents inset-[0.42%_95.21%_94.58%_3.03%]" data-name="Group">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal inset-[0.42%_95.21%_94.58%_3.03%] leading-[normal] not-italic text-[#64748b] text-[12px] text-right">100</p>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents inset-[0.42%_95.21%_9.25%_3.03%]" data-name="Group">
      <Group11 />
      <Group12 />
      <Group13 />
      <Group14 />
      <Group15 />
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents inset-[0.42%_95.21%_9.25%_3.03%]" data-name="Group">
      <Group16 />
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute inset-[0.33%_0.08%_58%_5.13%]" data-name="Group">
      <div className="absolute inset-[-1.6%_-0.18%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1132 129">
          <g id="Group">
            <path d={svgPaths.p16b90100} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeWidth="4" />
            <g id="Group_2">
              <path d={svgPaths.p335f3460} fill="var(--fill-0, #0F172A)" id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeWidth="4" />
              <path d={svgPaths.p2f1c3700} fill="var(--fill-0, #0F172A)" id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeWidth="4" />
              <path d={svgPaths.p37fa7f00} fill="var(--fill-0, #0F172A)" id="Vector_4" stroke="var(--stroke-0, #0F172A)" strokeWidth="4" />
              <path d={svgPaths.p3e164e00} fill="var(--fill-0, #0F172A)" id="Vector_5" stroke="var(--stroke-0, #0F172A)" strokeWidth="4" />
              <path d={svgPaths.pca96690} fill="var(--fill-0, #0F172A)" id="Vector_6" stroke="var(--stroke-0, #0F172A)" strokeWidth="4" />
              <path d={svgPaths.p36c78e00} fill="var(--fill-0, #0F172A)" id="Vector_7" stroke="var(--stroke-0, #0F172A)" strokeWidth="4" />
              <path d={svgPaths.p3f846e00} fill="var(--fill-0, #0F172A)" id="Vector_8" stroke="var(--stroke-0, #0F172A)" strokeWidth="4" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute inset-[14.67%_0.42%_63.67%_5.46%]" data-name="Group">
      <div className="absolute inset-[-2.31%_0_-2.31%_-0.01%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1120.21 68">
          <g id="Group">
            <path d={svgPaths.p350804a0} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeDasharray="5 5 5 5 5 5 5 5" strokeWidth="3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Surface() {
  return (
    <div className="absolute h-[300px] left-0 overflow-clip top-0 w-[1190px]" data-name="Surface">
      <Group1 />
      <Group10 />
      <Group17 />
      <Group18 />
      <Group19 />
    </div>
  );
}

function LineChart() {
  return (
    <div className="h-[300px] relative shrink-0 w-full" data-name="LineChart">
      <Surface />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[420px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[32px] items-start pb-0 pt-[20px] px-[20px] relative size-full">
        <PageConditionTrend />
        <LineChart />
      </div>
    </div>
  );
}

function WCard() {
  return (
    <div className="absolute bg-white h-[470px] left-0 rounded-[14px] top-[64px] w-[1280px]" data-name="WCard">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-px pt-[25px] px-[25px] relative rounded-[inherit] size-full">
        <Container9 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function PageConditionTrend1() {
  return (
    <div className="absolute h-[20px] left-[20px] top-[20px] w-[558px]" data-name="PageConditionTrend">
      <p className="absolute css-ew64yg font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#62748e] text-[14px] top-[0.5px] tracking-[-0.1504px]">평균 식욕</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-[34.56px] top-[11.5px] w-[12.805px]" data-name="Text">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#90a1b9] text-[14px] tracking-[-0.1504px]">%</p>
    </div>
  );
}

function PageConditionTrend2() {
  return (
    <div className="absolute h-[32px] left-[20px] top-[44px] w-[558px]" data-name="PageConditionTrend">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[#0f172b] text-[24px] top-0 tracking-[0.0703px]">82</p>
      <Text2 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[8px] size-[12px] top-[6px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p3a7e7417} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 3.5H11V6.5" id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function PageConditionTrend3() {
  return (
    <div className="absolute bg-[#f0fdf4] h-[24px] left-[20px] rounded-[16777200px] top-[84px] w-[76.25px]" data-name="PageConditionTrend">
      <Icon1 />
      <p className="absolute css-ew64yg font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[16px] left-[24px] not-italic text-[#00a63e] text-[12px] top-[5px]">5% 증가</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[128px] relative shrink-0 w-full" data-name="Container">
      <PageConditionTrend1 />
      <PageConditionTrend2 />
      <PageConditionTrend3 />
    </div>
  );
}

function WCard1() {
  return (
    <div className="bg-white col-[1] css-por8k5 relative rounded-[14px] row-[1] self-stretch shrink-0" data-name="WCard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-px pt-[17px] px-[17px] relative size-full">
          <Container10 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function PageConditionTrend4() {
  return (
    <div className="absolute h-[20px] left-[20px] top-[20px] w-[558px]" data-name="PageConditionTrend">
      <p className="absolute css-ew64yg font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#62748e] text-[14px] top-[0.5px] tracking-[-0.1504px]">평균 음수량</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-[46.68px] top-[11.5px] w-[15.422px]" data-name="Text">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#90a1b9] text-[14px] tracking-[-0.1504px]">ml</p>
    </div>
  );
}

function PageConditionTrend5() {
  return (
    <div className="absolute h-[32px] left-[20px] top-[44px] w-[558px]" data-name="PageConditionTrend">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[#0f172b] text-[24px] top-0 tracking-[0.0703px]">195</p>
      <Text3 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[8px] size-[12px] top-[6px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p10ae5c80} id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 8.5H11V5.5" id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function PageConditionTrend6() {
  return (
    <div className="absolute bg-[#fef2f2] h-[24px] left-[20px] rounded-[16777200px] top-[84px] w-[84.438px]" data-name="PageConditionTrend">
      <Icon2 />
      <p className="absolute css-ew64yg font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[16px] left-[24px] not-italic text-[#e7000b] text-[12px] top-[5px]">12ml 감소</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[128px] relative shrink-0 w-full" data-name="Container">
      <PageConditionTrend4 />
      <PageConditionTrend5 />
      <PageConditionTrend6 />
    </div>
  );
}

function WCard2() {
  return (
    <div className="bg-white col-[2] css-por8k5 relative rounded-[14px] row-[1] self-stretch shrink-0" data-name="WCard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-px pt-[17px] px-[17px] relative size-full">
          <Container11 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute gap-[16px] grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[162px] left-0 top-[558px] w-[1280px]" data-name="Container">
      <WCard1 />
      <WCard2 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[27px] left-0 top-[752px] w-[1280px]" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[27px] left-0 not-italic text-[#0f172b] text-[18px] top-[0.5px] tracking-[-0.4395px]">상세 기록</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-0.5px] tracking-[-0.3125px]">1월 13일</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-4hzbpn font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#62748e] text-[12px] top-px w-[133px]">식욕 85% • 음수량 220ml</p>
    </div>
  );
}

function PageConditionTrend7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[44px] items-start left-[20px] top-[20px] w-[132.781px]" data-name="PageConditionTrend">
      <Container13 />
      <Container14 />
    </div>
  );
}

function WBadge() {
  return (
    <div className="absolute bg-[#f0fdf4] content-stretch flex h-[24px] items-start left-[20px] px-[11px] py-[5px] rounded-[8px] top-[65.5px] w-[42.766px]" data-name="WBadge">
      <div aria-hidden="true" className="absolute border border-[#dcfce7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="css-ew64yg font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#008236] text-[12px]">안정</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[108px] relative shrink-0 w-[172.781px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <PageConditionTrend7 />
        <WBadge />
      </div>
    </div>
  );
}

function WCard3() {
  return (
    <div className="bg-white h-[142px] relative rounded-[14px] shrink-0 w-full" data-name="WCard">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between pl-[17px] pr-[1090.219px] py-px relative size-full">
          <Container15 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-0.5px] tracking-[-0.3125px]">1월 12일</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-4hzbpn font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#62748e] text-[12px] top-px w-[132px]">식욕 80% • 음수량 210ml</p>
    </div>
  );
}

function PageConditionTrend8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[44px] items-start left-[20px] top-[20px] w-[131.242px]" data-name="PageConditionTrend">
      <Container16 />
      <Container17 />
    </div>
  );
}

function WBadge1() {
  return (
    <div className="absolute bg-[#f0fdf4] content-stretch flex h-[24px] items-start left-[20px] px-[11px] py-[5px] rounded-[8px] top-[65.5px] w-[42.766px]" data-name="WBadge">
      <div aria-hidden="true" className="absolute border border-[#dcfce7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="css-ew64yg font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#008236] text-[12px]">안정</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[108px] relative shrink-0 w-[171.242px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <PageConditionTrend8 />
        <WBadge1 />
      </div>
    </div>
  );
}

function WCard4() {
  return (
    <div className="bg-white h-[142px] relative rounded-[14px] shrink-0 w-full" data-name="WCard">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between pl-[17px] pr-[1091.758px] py-px relative size-full">
          <Container18 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-0.5px] tracking-[-0.3125px]">1월 11일</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-4hzbpn font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#62748e] text-[12px] top-px w-[131px]">식욕 75% • 음수량 190ml</p>
    </div>
  );
}

function PageConditionTrend9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[44px] items-start left-[20px] top-[20px] w-[130.547px]" data-name="PageConditionTrend">
      <Container19 />
      <Container20 />
    </div>
  );
}

function WBadge2() {
  return (
    <div className="absolute bg-[#fffbeb] content-stretch flex h-[24px] items-start left-[20px] px-[11px] py-[5px] rounded-[8px] top-[65.5px] w-[42.766px]" data-name="WBadge">
      <div aria-hidden="true" className="absolute border border-[#fef3c6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="css-ew64yg font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#bb4d00] text-[12px]">주의</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[108px] relative shrink-0 w-[170.547px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <PageConditionTrend9 />
        <WBadge2 />
      </div>
    </div>
  );
}

function WCard5() {
  return (
    <div className="bg-white h-[142px] relative rounded-[14px] shrink-0 w-full" data-name="WCard">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between pl-[17px] pr-[1092.453px] py-px relative size-full">
          <Container21 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-0.5px] tracking-[-0.3125px]">1월 10일</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-4hzbpn font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#62748e] text-[12px] top-px w-[134px]">식욕 90% • 음수량 230ml</p>
    </div>
  );
}

function PageConditionTrend10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[44px] items-start left-[20px] top-[20px] w-[133.18px]" data-name="PageConditionTrend">
      <Container22 />
      <Container23 />
    </div>
  );
}

function WBadge3() {
  return (
    <div className="absolute bg-[#f0fdf4] content-stretch flex h-[24px] items-start left-[20px] px-[11px] py-[5px] rounded-[8px] top-[65.5px] w-[42.766px]" data-name="WBadge">
      <div aria-hidden="true" className="absolute border border-[#dcfce7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="css-ew64yg font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#008236] text-[12px]">안정</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[108px] relative shrink-0 w-[173.18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <PageConditionTrend10 />
        <WBadge3 />
      </div>
    </div>
  );
}

function WCard6() {
  return (
    <div className="bg-white h-[142px] relative rounded-[14px] shrink-0 w-full" data-name="WCard">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between pl-[17px] pr-[1089.82px] py-px relative size-full">
          <Container24 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[604px] items-start left-0 top-[795px] w-[1280px]" data-name="Container">
      <WCard3 />
      <WCard4 />
      <WCard5 />
      <WCard6 />
    </div>
  );
}

function PageConditionTrend11() {
  return (
    <div className="absolute bg-[#f8fafc] h-[1399px] left-[32px] top-[96px] w-[1280px]" data-name="PageConditionTrend">
      <Container2 />
      <WCard />
      <Container12 />
      <Heading2 />
      <Container25 />
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute h-[18px] left-0 top-[-20000px] w-[7.563px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#0a0a0a] text-[12px] top-px">0</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-[#0f172b] relative rounded-[10px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.3125px]">V</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="flex-[1_0_0] h-[28px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#0f172b] text-[18px] top-0 tracking-[-0.8895px]">VetTrack</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[32px] relative shrink-0 w-[112.805px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container26 />
        <Text5 />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[36px] relative rounded-[10px] shrink-0 w-[44.117px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[20px] left-[22.5px] not-italic text-[#62748e] text-[14px] text-center top-[8.5px] tracking-[-0.1504px] translate-x-[-50%]">홈</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[36px] relative rounded-[10px] shrink-0 w-[56.227px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[20px] left-[28px] not-italic text-[#62748e] text-[14px] text-center top-[8.5px] tracking-[-0.1504px] translate-x-[-50%]">일정</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="h-[36px] relative rounded-[10px] shrink-0 w-[68.336px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[20px] left-[34.5px] not-italic text-[#62748e] text-[14px] text-center top-[8.5px] tracking-[-0.1504px] translate-x-[-50%]">컨디션</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[10px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[20px] left-[40px] not-italic text-[#62748e] text-[14px] text-center top-[8.5px] tracking-[-0.1504px] translate-x-[-50%]">커뮤니티</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="h-[36px] relative rounded-[10px] shrink-0 w-[56.227px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[20px] left-[28px] not-italic text-[#62748e] text-[14px] text-center top-[8.5px] tracking-[-0.1504px] translate-x-[-50%]">정보</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="h-[36px] relative rounded-[10px] shrink-0 w-[56.227px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[20px] left-[28px] not-italic text-[#62748e] text-[14px] text-center top-[8.5px] tracking-[-0.1504px] translate-x-[-50%]">마이</p>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px relative" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Button4 />
        <Button5 />
        <Button6 />
        <Button7 />
        <Button8 />
        <Button9 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[36px] relative shrink-0 w-[526.383px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative size-full">
        <Container27 />
        <Navigation />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[87.5%_42.78%_8.33%_42.78%]" data-name="Vector">
        <div className="absolute inset-[-100.03%_-28.87%_-100.01%_-28.87%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.55361 2.50007">
            <path d={svgPaths.p1f8ebe00} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_12.5%_29.17%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-6.67%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6664 14.1667">
            <path d={svgPaths.p259fd370} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="relative rounded-[16777200px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Container29() {
  return <div className="bg-[#e2e8f0] h-[24px] shrink-0 w-px" data-name="Container" />;
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p399eca00} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pc93b400} id="Vector_2" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-[#e2e8f0] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[82.141px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#0f172b] text-[14px] top-[0.5px] tracking-[-0.1504px]">{`Leo's Parent`}</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container31() {
  return (
    <div className="flex-[1_0_0] h-[44px] min-h-px min-w-px relative rounded-[10px]" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pl-[6px] pr-0 py-0 relative size-full">
          <Container30 />
          <Text6 />
          <Icon5 />
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[44px] relative shrink-0 w-[241.141px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[20px] items-center relative size-full">
        <Button10 />
        <Container29 />
        <Container31 />
      </div>
    </div>
  );
}

function WebLayout() {
  return (
    <div className="absolute bg-white content-stretch flex h-[64px] items-center justify-between left-0 pb-px pt-0 px-[32px] top-0 w-[1344px]" data-name="WebLayout">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <Container28 />
      <Container32 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="만성질환 반려동물 헬스케어앱">
      <PageConditionTrend11 />
      <Text4 />
      <WebLayout />
    </div>
  );
}