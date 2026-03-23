import svgPaths from "./svg-bjbvs9aekx";

function Container() {
  return (
    <div className="bg-[#e2e8f0] relative rounded-[19300900px] shrink-0 size-[39.995px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="css-ew64yg font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#314158] text-[14px] text-center tracking-[-0.1504px]">레</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[27.997px] relative shrink-0 w-[31.142px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#0f172b] text-[18px] top-[-0.12px] tracking-[-0.4395px]">레오</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.998 15.998">
        <g id="Icon">
          <path d={svgPaths.p2d48580} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33317" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[27.997px] relative shrink-0 w-[51.14px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text />
        <Icon />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[11.999px] h-[55.993px] items-center pl-[7.999px] relative rounded-[14px] shrink-0 w-[119.132px]" data-name="Button">
      <Container />
      <Container1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[23.997px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9973 21.9973">
            <path d={svgPaths.pdca7d00} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99976" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-1/2 right-1/2 top-[33.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.99976 5.99976">
            <path d="M0.999878 0.999878V4.99988" id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99976" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[33.33%] left-1/2 right-[49.96%] top-[66.67%]" data-name="Vector">
        <div className="absolute inset-[-1px_-9998.55%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.00976 1.99976">
            <path d="M0.999878 0.999878H1.00988" id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99976" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[7.999px] px-[7.999px] relative rounded-[19300900px] shrink-0 size-[39.995px]" data-name="Button">
      <Icon1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex h-[56px] items-center justify-between left-0 px-[16px] top-0 w-[376px]" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function PageDashboard() {
  return <div className="bg-[#e2e8f0] rounded-[19300900px] shrink-0 size-[95.997px]" data-name="PageDashboard" />;
}

function PageDashboard1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="PageDashboard">
      <p className="css-ew64yg font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[#0f172b] text-[20px] tracking-[-0.4492px]">레오</p>
    </div>
  );
}

function WBadge() {
  return (
    <div className="bg-[#fffbeb] h-[25.147px] relative rounded-[8px] shrink-0 w-[68.252px]" data-name="WBadge">
      <div aria-hidden="true" className="absolute border-[#fef3c6] border-[0.575px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[16px] left-[34.57px] not-italic text-[#bb4d00] text-[12px] text-center top-[5.15px] translate-x-[-50%]">CKD 2기</p>
    </div>
  );
}

function WBadge1() {
  return (
    <div className="bg-[#f0fdf4] h-[25.147px] relative rounded-[8px] shrink-0 w-[41.901px]" data-name="WBadge">
      <div aria-hidden="true" className="absolute border-[#dcfce7] border-[0.575px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[16px] left-[21.07px] not-italic text-[#008236] text-[12px] text-center top-[5.15px] translate-x-[-50%]">안정</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <WBadge />
      <WBadge1 />
    </div>
  );
}

function PageDashboard2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="PageDashboard">
      <PageDashboard1 />
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <PageDashboard />
      <PageDashboard2 />
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute content-stretch flex h-[16.681px] items-start left-[68.9px] top-[10.93px] w-[12.807px]" data-name="Text">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#90a1b9] text-[14px] text-center tracking-[-0.1504px]">g</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[31.996px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-[53.82px] not-italic text-[#0f172b] text-[24px] text-center top-[-0.27px] tracking-[0.0703px] translate-x-[-50%]">85</p>
      <Text1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[15.998px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16px] left-[60.08px] not-italic text-[#62748e] text-[12px] text-center top-[0.58px] tracking-[0.3px] translate-x-[-50%] uppercase">식사량</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[51.994px] items-start left-[16px] top-[24.57px] w-[119.527px]" data-name="Container">
      <Container3 />
      <Container4 />
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute content-stretch flex h-[16.681px] items-start left-[74.43px] top-[10.93px] w-[15.423px]" data-name="Text">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#90a1b9] text-[14px] text-center tracking-[-0.1504px]">ml</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[31.996px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-[52.6px] not-italic text-[#0f172b] text-[24px] text-center top-[-0.27px] tracking-[0.0703px] translate-x-[-50%]">220</p>
      <Text2 />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[15.998px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16px] left-[59.46px] not-italic text-[#62748e] text-[12px] text-center top-[0.58px] tracking-[0.3px] translate-x-[-50%] uppercase">음수량</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[51.994px] items-start left-[151.52px] pl-[0.575px] top-[24.57px] w-[119.527px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-l-[0.575px] border-solid inset-0 pointer-events-none" />
      <Container6 />
      <Container7 />
    </div>
  );
}

function PageDashboard3() {
  return (
    <div className="h-[76.566px] relative shrink-0 w-[287.048px]" data-name="PageDashboard">
      <Container5 />
      <Container8 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center pb-[24px] pt-[36px] relative shrink-0 w-full" data-name="Container">
      <Frame1 />
      <PageDashboard3 />
    </div>
  );
}

function WCard() {
  return (
    <div className="bg-white h-[248px] relative rounded-[14px] shrink-0 w-full" data-name="WCard">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-[12px] relative rounded-[inherit] size-full">
        <Container9 />
      </div>
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-[0.56px] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function Heading() {
  return (
    <div className="flex-[1_0_0] h-[28px] min-h-px min-w-px relative" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[27px] left-0 not-italic text-[#0f172b] text-[18px] top-[0.3px] tracking-[-0.4395px]">빠른 실행</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-white content-stretch flex items-start pb-[0.575px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f8fafc] border-b-[0.575px] border-solid inset-0 pointer-events-none" />
      <Heading />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[16.57px] size-[15.998px] top-[12.56px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.998 15.998">
        <g clipPath="url(#clip0_4042_836)" id="Icon">
          <path d={svgPaths.p1ce3ea80} id="Vector" stroke="var(--stroke-0, #0F172B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33317" />
        </g>
        <defs>
          <clipPath id="clip0_4042_836">
            <rect fill="white" height="15.998" width="15.998" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function WButton() {
  return (
    <div className="bg-white h-[41.137px] relative rounded-[10px] shrink-0 w-full" data-name="WButton">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.575px] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Icon2 />
      <p className="absolute css-ew64yg font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[20px] left-[87.07px] not-italic text-[#0f172b] text-[14px] text-center top-[10.72px] tracking-[-0.1504px] translate-x-[-50%]">일일 리포트 작성</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[16.57px] size-[15.998px] top-[12.56px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.998 15.998">
        <g id="Icon">
          <path d="M3.33293 7.99902H12.6651" id="Vector" stroke="var(--stroke-0, #0F172B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33317" />
          <path d="M7.99902 3.33293V12.6651" id="Vector_2" stroke="var(--stroke-0, #0F172B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33317" />
        </g>
      </svg>
    </div>
  );
}

function WButton1() {
  return (
    <div className="bg-white h-[41.137px] relative rounded-[10px] shrink-0 w-full" data-name="WButton">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.575px] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Icon3 />
      <p className="absolute css-ew64yg font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[20px] left-[67.07px] not-italic text-[#0f172b] text-[14px] text-center top-[10.72px] tracking-[-0.1504px] translate-x-[-50%]">일정 추가</p>
    </div>
  );
}

function PageDashboard4() {
  return (
    <div className="content-stretch flex flex-col gap-[7.999px] h-[90.272px] items-start relative shrink-0 w-[271.05px]" data-name="PageDashboard">
      <WButton />
      <WButton1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-[376px]">
      <Container10 />
      <PageDashboard4 />
    </div>
  );
}

function WCard1() {
  return (
    <div className="bg-white h-[200px] relative rounded-[14px] shrink-0 w-full" data-name="WCard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
          <Frame2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-[0.575px] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[26.999px] relative shrink-0 w-[82.138px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[27px] left-0 not-italic text-[#0f172b] text-[18px] top-[0.3px] tracking-[-0.4395px]">오늘의 일정</p>
      </div>
    </div>
  );
}

function WButton2() {
  return (
    <div className="h-[31.996px] relative rounded-[10px] shrink-0 w-[57.521px]" data-name="WButton">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[16px] left-[29.5px] not-italic text-[#62748e] text-[12px] text-center top-[8.57px] translate-x-[-50%]">전체보기</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-white content-stretch flex h-[64.567px] items-center justify-between pb-[0.575px] relative shrink-0 w-[327.043px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f8fafc] border-b-[0.575px] border-solid inset-0 pointer-events-none" />
      <Heading1 />
      <WButton2 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[39.995px] left-0 top-[4.49px] w-[63.992px]" data-name="Container">
      <p className="absolute css-4hzbpn font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#62748e] text-[14px] top-[0.15px] tracking-[-0.3004px] w-[40px]">오전 08:00</p>
    </div>
  );
}

function Container13() {
  return <div className="bg-[#51a2ff] rounded-[19300900px] shrink-0 size-[7.999px]" data-name="Container" />;
}

function Text3() {
  return (
    <div className="flex-[1_0_0] h-[23.997px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[text-decoration-skip-ink:none] absolute css-ew64yg decoration-solid font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[24px] left-0 line-through not-italic text-[#0f172b] text-[16px] top-[-0.7px] tracking-[-0.6225px]">인흡착제</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex gap-[11.999px] h-[23.997px] items-center left-[12.59px] top-[11.92px] w-[74.112px]" data-name="Container">
      <Container13 />
      <Text3 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[19.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9976 19.9976">
        <g id="Icon">
          <path d={svgPaths.p229dea00} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66626" />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[173.32px] size-[19.998px] top-[13.92px]" data-name="Container">
      <Icon4 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bg-[#f8fafc] border-[#e2e8f0] border-[0.575px] border-solid h-[48.992px] left-[79.99px] opacity-60 rounded-[10px] top-0 w-[207.058px]" data-name="Container">
      <Container14 />
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[48.992px] relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[39.995px] left-0 top-[4.49px] w-[63.992px]" data-name="Container">
      <p className="absolute css-4hzbpn font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#62748e] text-[14px] top-[0.15px] tracking-[-0.3004px] w-[39px]">오후 02:00</p>
    </div>
  );
}

function Container19() {
  return <div className="bg-[#ff8904] rounded-[19300900px] shrink-0 size-[7.999px]" data-name="Container" />;
}

function Text4() {
  return (
    <div className="flex-[1_0_0] h-[23.997px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-0.7px] tracking-[-0.6225px]">피하 수액 (100ml)</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[23.997px] relative shrink-0 w-[136.9px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.999px] items-center relative size-full">
        <Container19 />
        <Text4 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative rounded-[19300900px] shrink-0 size-[19.998px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#cad5e2] border-[1.726px] border-solid inset-0 pointer-events-none rounded-[19300900px]" />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute bg-white content-stretch flex h-[48.992px] items-center justify-between left-[79.99px] px-[13.167px] py-[0.575px] rounded-[10px] top-0 w-[207.058px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.575px] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container20 />
      <Container21 />
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[48.992px] relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <Container22 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute h-[39.995px] left-0 top-[4.49px] w-[63.992px]" data-name="Container">
      <p className="absolute css-4hzbpn font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#62748e] text-[14px] top-[0.15px] tracking-[-0.3004px] w-[40px]">오후 08:00</p>
    </div>
  );
}

function Container25() {
  return <div className="bg-[#ff8904] rounded-[19300900px] shrink-0 size-[7.999px]" data-name="Container" />;
}

function Text5() {
  return (
    <div className="flex-[1_0_0] h-[23.997px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-0.7px] tracking-[-0.6225px]">처방식 급여</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[23.997px] relative shrink-0 w-[91.387px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.999px] items-center relative size-full">
        <Container25 />
        <Text5 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative rounded-[19300900px] shrink-0 size-[19.998px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#cad5e2] border-[1.726px] border-solid inset-0 pointer-events-none rounded-[19300900px]" />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute bg-white content-stretch flex h-[48.992px] items-center justify-between left-[79.99px] px-[13.167px] py-[0.575px] rounded-[10px] top-0 w-[207.058px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.575px] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container26 />
      <Container27 />
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[48.992px] relative shrink-0 w-full" data-name="Container">
      <Container24 />
      <Container28 />
    </div>
  );
}

function PageDashboard5() {
  return (
    <div className="content-stretch flex flex-col gap-[15.998px] h-[178.971px] items-start relative shrink-0 w-[287.048px]" data-name="PageDashboard">
      <Container17 />
      <Container23 />
      <Container29 />
    </div>
  );
}

function WCard2() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0" data-name="WCard">
      <div className="content-stretch flex flex-col gap-[12px] items-center overflow-clip p-[24px] relative rounded-[inherit]">
        <Container11 />
        <PageDashboard5 />
      </div>
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-[0.575px] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[23.997px] h-[792px] items-start left-0 pb-[24px] top-[56px] w-[376px]" data-name="Container">
      <WCard />
      <WCard1 />
      <WCard2 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[2.5%_1.74%_17.5%_22.65%]" data-name="Group">
      <div className="absolute inset-[-0.31%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 235.902 161">
          <g id="Group">
            <path d="M2.25966e-06 160.5H235.902" id="Vector" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.99998" />
            <path d="M2.25966e-06 120.5H235.902" id="Vector_2" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.99998" />
            <path d="M2.25966e-06 80.5H235.902" id="Vector_3" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.99998" />
            <path d="M2.25966e-06 40.5H235.902" id="Vector_4" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.99998" />
            <path d="M0 0.49999H235.902" id="Vector_5" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.99998" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[2.5%_1.74%_17.5%_22.65%]" data-name="Group">
      <Group />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[89.76%_75.26%_2.74%_20.56%]" data-name="Group">
      <p className="absolute css-4hzbpn font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[89.76%_75.26%_2.74%_20.56%] leading-[normal] not-italic text-[#64748b] text-[12px] text-center">월</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[89.76%_62.66%_2.74%_33.16%]" data-name="Group">
      <p className="absolute css-4hzbpn font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[89.76%_62.66%_2.74%_33.16%] leading-[normal] not-italic text-[#64748b] text-[12px] text-center">화</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[89.76%_50.06%_2.74%_45.76%]" data-name="Group">
      <p className="absolute css-4hzbpn font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[89.76%_50.06%_2.74%_45.76%] leading-[normal] not-italic text-[#64748b] text-[12px] text-center">수</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[89.76%_37.46%_2.74%_58.36%]" data-name="Group">
      <p className="absolute css-4hzbpn font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[89.76%_37.46%_2.74%_58.36%] leading-[normal] not-italic text-[#64748b] text-[12px] text-center">목</p>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[89.76%_24.85%_2.74%_70.96%]" data-name="Group">
      <p className="absolute css-4hzbpn font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[89.76%_24.85%_2.74%_70.96%] leading-[normal] not-italic text-[#64748b] text-[12px] text-center">금</p>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[89.76%_12.25%_2.74%_83.57%]" data-name="Group">
      <p className="absolute css-4hzbpn font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[89.76%_12.25%_2.74%_83.57%] leading-[normal] not-italic text-[#64748b] text-[12px] text-center">토</p>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[89.76%_-0.28%_2.74%_96.1%]" data-name="Group">
      <p className="absolute css-4hzbpn font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[89.76%_-0.28%_2.74%_96.1%] leading-[normal] not-italic text-[#64748b] text-[12px] text-center">일</p>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[89.76%_-0.28%_2.74%_20.56%]" data-name="Group">
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
    <div className="absolute contents inset-[89.76%_-0.28%_2.74%_20.56%]" data-name="Group">
      <Group9 />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[78.63%_80.14%_13.87%_17.07%]" data-name="Group">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal inset-[78.63%_80.14%_13.87%_17.07%] leading-[normal] not-italic text-[#64748b] text-[12px] text-right">0</p>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents inset-[58.63%_80.14%_33.87%_14.63%]" data-name="Group">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal inset-[58.63%_80.14%_33.87%_14.63%] leading-[normal] not-italic text-[#64748b] text-[12px] text-right">25</p>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents inset-[38.63%_80.14%_53.87%_14.63%]" data-name="Group">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal inset-[38.63%_80.14%_53.87%_14.63%] leading-[normal] not-italic text-[#64748b] text-[12px] text-right">50</p>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents inset-[18.63%_80.14%_73.87%_14.63%]" data-name="Group">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal inset-[18.63%_80.14%_73.87%_14.63%] leading-[normal] not-italic text-[#64748b] text-[12px] text-right">75</p>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents inset-[0.63%_80.14%_91.87%_12.54%]" data-name="Group">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal inset-[0.63%_80.14%_91.87%_12.54%] leading-[normal] not-italic text-[#64748b] text-[12px] text-right">100</p>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents inset-[0.63%_80.14%_13.87%_12.54%]" data-name="Group">
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
    <div className="absolute contents inset-[0.63%_80.14%_13.87%_12.54%]" data-name="Group">
      <Group16 />
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute inset-[0.5%_0.35%_59.5%_21.25%]" data-name="Group">
      <div className="absolute inset-[-1.25%_-0.41%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 246.599 82.0001">
          <g id="Group">
            <path d={svgPaths.p47dd900} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeWidth="1.99996" />
            <g id="Group_2">
              <path d={svgPaths.p3c940600} fill="var(--fill-0, #3B82F6)" id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="1.99996" />
              <path d={svgPaths.p124f3f00} fill="var(--fill-0, #3B82F6)" id="Vector_3" stroke="var(--stroke-0, white)" strokeWidth="1.99996" />
              <path d={svgPaths.p2c9da600} fill="var(--fill-0, #3B82F6)" id="Vector_4" stroke="var(--stroke-0, white)" strokeWidth="1.99996" />
              <path d={svgPaths.p1d560480} fill="var(--fill-0, #EAB308)" id="Vector_5" stroke="var(--stroke-0, white)" strokeWidth="1.99996" />
              <path d={svgPaths.p31ef7380} fill="var(--fill-0, #EF4444)" id="Vector_6" stroke="var(--stroke-0, white)" strokeWidth="1.99996" />
              <path d={svgPaths.p2343a400} fill="var(--fill-0, #EAB308)" id="Vector_7" stroke="var(--stroke-0, white)" strokeWidth="1.99996" />
              <path d={svgPaths.p60e4180} fill="var(--fill-0, #EAB308)" id="Vector_8" stroke="var(--stroke-0, white)" strokeWidth="1.99996" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute inset-[14.5%_1.74%_65.5%_22.65%]" data-name="Group">
      <div className="absolute inset-[-2.5%_-0.04%_-2.5%_-0.12%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 236.296 42">
          <g id="Group">
            <path d={svgPaths.p114a6980} id="Vector" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="5 5" strokeWidth="1.99996" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Surface() {
  return (
    <div className="h-[200px] overflow-clip relative shrink-0 w-[312px]" data-name="Surface">
      <Group1 />
      <Group10 />
      <Group17 />
      <Group18 />
      <Group19 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[28px] relative shrink-0 w-[86px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-4hzbpn font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold h-[28px] leading-[27px] not-italic relative shrink-0 text-[#0f172b] text-[18px] tracking-[-0.4395px] w-[86px]">컨디션 추이</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-white h-[18.991px] left-[2px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[2px] w-[29.884px]" data-name="Button">
      <p className="absolute css-ew64yg font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[15px] left-[15.5px] not-italic text-[#0f172b] text-[10px] text-center top-[2.15px] tracking-[0.1172px] translate-x-[-50%]">1주</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute h-[18.991px] left-[31.88px] rounded-[8px] top-[2px] w-[38.53px]" data-name="Button">
      <p className="absolute css-ew64yg font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[15px] left-[19px] not-italic text-[#90a1b9] text-[10px] text-center top-[2.15px] tracking-[0.1172px] translate-x-[-50%]">1개월</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute h-[18.991px] left-[70.41px] rounded-[8px] top-[2px] w-[40.103px]" data-name="Button">
      <p className="absolute css-ew64yg font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[15px] left-[20px] not-italic text-[#90a1b9] text-[10px] text-center top-[2.15px] tracking-[0.1172px] translate-x-[-50%]">3개월</p>
    </div>
  );
}

function PageDashboard6() {
  return (
    <div className="bg-[#f1f5f9] h-[22.981px] relative rounded-[10px] shrink-0 w-[112.508px]" data-name="PageDashboard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button2 />
        <Button3 />
        <Button4 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[92.402px] h-[59px] items-center left-px pb-[0.575px] px-[24px] top-[-79px] w-[375px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f8fafc] border-b-[0.575px] border-solid inset-0 pointer-events-none" />
      <Heading2 />
      <PageDashboard6 />
    </div>
  );
}

function LineChart() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-0 px-[32px] top-[80px] w-[376px]" data-name="LineChart">
      <Surface />
      <Container31 />
    </div>
  );
}

function WCard3() {
  return (
    <div className="bg-white h-[300px] relative rounded-[14px] shrink-0 w-[376px]" data-name="WCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <LineChart />
      </div>
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-[0.575px] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[23.997px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9973 21.9973">
            <path d={svgPaths.pdca7d00} id="Vector" stroke="var(--stroke-0, #4F39F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99976" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-1/2 right-1/2 top-[33.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.99976 5.99976">
            <path d="M0.999878 0.999878V4.99988" id="Vector" stroke="var(--stroke-0, #4F39F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99976" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[33.33%] left-1/2 right-[49.96%] top-[66.67%]" data-name="Vector">
        <div className="absolute inset-[-1px_-9998.55%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.00976 1.99976">
            <path d="M0.999878 0.999878H1.00988" id="Vector" stroke="var(--stroke-0, #4F39F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99976" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-[#e0e7ff] relative rounded-[10px] shrink-0 size-[39.995px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.999px] px-[7.999px] relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="h-[19.998px] relative shrink-0 w-full" data-name="주간 분석">
      <p className="absolute css-ew64yg font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[20px] left-0 not-italic text-[#312c85] text-[14px] top-[0.15px] tracking-[0.1996px] uppercase">주간 분석</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute content-stretch flex h-[21.283px] items-start left-[147.43px] top-[0.4px] w-[46.709px]" data-name="Text">
      <p className="css-4hzbpn decoration-solid font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold h-[26px] leading-[24.75px] not-italic relative shrink-0 text-[#372aac] text-[18px] tracking-[-0.4395px] underline w-[52px]">안정적</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-[236px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[24.75px] left-0 not-italic text-[#372aac] text-[18px] top-[0.73px] tracking-[-0.4395px]">지난주 대비 식욕이</p>
      <Text6 />
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[236px]" data-name="주간분석 리포트">
      <Paragraph />
      <p className="css-4hzbpn font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium h-[36px] leading-[24.75px] not-italic relative shrink-0 text-[#372aac] text-[18px] tracking-[-0.4395px] w-[236px]">입니다. 현재 루틴을 유지하세요.</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[73.501px] relative shrink-0 w-[231.055px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Component />
        <Component1 />
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="bg-[#eef2ff] h-[115px] relative rounded-[14px] shrink-0 w-full" data-name="주간 분석 프레임">
      <div aria-hidden="true" className="absolute border-[#e0e7ff] border-[0.575px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[15.998px] items-start pb-[0.575px] pl-[20.573px] pr-[0.575px] pt-[20.573px] relative size-full">
        <Container32 />
        <Container33 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[23.997px] h-[440px] items-start left-0 top-[848px] w-[376px]" data-name="Container">
      <WCard3 />
      <Component2 />
    </div>
  );
}

function PageDashboard7() {
  return (
    <div className="absolute bg-[#f8fafc] h-[1288px] left-px top-[82px] w-[376px]" data-name="PageDashboard">
      <Container2 />
      <Container30 />
      <Container34 />
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-[#0f172b] relative rounded-[10px] shrink-0 size-[31.996px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.3125px]">V</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[27.997px] relative shrink-0 w-[72.791px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#0f172b] text-[18px] top-[-0.12px] tracking-[-0.8895px]">VetTrack</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[31.996px] relative shrink-0 w-[112.786px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.999px] items-center relative size-full">
        <Container35 />
        <Text7 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[19.998px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[87.5%_42.78%_8.33%_42.78%]" data-name="Vector">
        <div className="absolute inset-[-100.03%_-28.87%_-100.01%_-28.87%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.55306 2.49976">
            <path d={svgPaths.p3c3a2140} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66646" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_12.5%_29.17%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-6.67%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6643 14.1649">
            <path d={svgPaths.p80d1a00} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66646" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative rounded-[19300900px] shrink-0 size-[35.996px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.999px] px-[7.999px] relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Container37() {
  return <div className="bg-[#e2e8f0] h-[23.997px] shrink-0 w-[0.998px]" data-name="Container" />;
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.998 15.998">
        <g id="Icon">
          <path d={svgPaths.p23bf5100} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33317" />
          <path d={svgPaths.p1eeb0b00} id="Vector_2" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33317" />
        </g>
      </svg>
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-[#e2e8f0] relative rounded-[19300900px] shrink-0 size-[31.996px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.998 15.998">
        <g id="Icon">
          <path d={svgPaths.p2d48580} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33317" />
        </g>
      </svg>
    </div>
  );
}

function Container39() {
  return (
    <div className="relative rounded-[10px] shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-end relative">
        <Container38 />
        <Icon8 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0 w-[144px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-end relative w-full">
        <Button5 />
        <Container37 />
        <Container39 />
      </div>
    </div>
  );
}

function WebLayout() {
  return (
    <div className="absolute bg-white content-stretch flex h-[63.992px] items-center justify-between left-0 pb-[0.575px] px-[23.997px] top-0 w-[376.188px]" data-name="WebLayout">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b-[0.575px] border-solid inset-0 pointer-events-none" />
      <Container36 />
      <Container40 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[23.997px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9971 23.9971">
        <g id="Icon">
          <path d={svgPaths.p2ccee480} id="Vector" stroke="var(--stroke-0, #0F172B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49982" />
          <path d={svgPaths.p2750c900} id="Vector_2" stroke="var(--stroke-0, #0F172B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49982" />
          <path d={svgPaths.p2a3cd900} id="Vector_3" stroke="var(--stroke-0, #0F172B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49982" />
          <path d={svgPaths.p2c16580} id="Vector_4" stroke="var(--stroke-0, #0F172B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49982" />
        </g>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[15px] relative shrink-0 w-[8.655px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[15px] left-[4px] not-italic text-[#0f172b] text-[10px] text-center top-[0.15px] tracking-[0.1172px] translate-x-[-50%]">홈</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="h-[58.995px] relative shrink-0 w-[55.993px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center py-[7.999px] relative size-full">
        <Icon9 />
        <Text8 />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[23.997px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9971 23.9971">
        <g id="Icon">
          <path d="M7.99902 1.99976V5.99976" id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49982" />
          <path d="M15.998 1.99976V5.99976" id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49982" />
          <path d={svgPaths.p22cb0400} id="Vector_3" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49982" />
          <path d="M2.99963 9.99878H20.9974" id="Vector_4" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49982" />
        </g>
      </svg>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[15px] relative shrink-0 w-[17.301px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[15px] left-[9.5px] not-italic text-[#90a1b9] text-[10px] text-center top-[0.15px] tracking-[0.1172px] translate-x-[-50%]">일정</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="h-[58.995px] relative shrink-0 w-[55.993px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center py-[7.999px] relative size-full">
        <Icon10 />
        <Text9 />
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[23.997px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9971 23.9971">
        <g id="Icon">
          <path d={svgPaths.pf9f5400} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49982" />
          <path d={svgPaths.p27bec680} id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49982" />
          <path d={svgPaths.p359fb00} id="Vector_3" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49982" />
          <path d={svgPaths.p282d0ea0} id="Vector_4" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49982" />
        </g>
      </svg>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[15px] relative shrink-0 w-[34.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[15px] left-[17px] not-italic text-[#90a1b9] text-[10px] text-center top-[0.15px] tracking-[0.1172px] translate-x-[-50%]">커뮤니티</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="h-[58.995px] relative shrink-0 w-[55.993px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center py-[7.999px] relative size-full">
        <Icon11 />
        <Text10 />
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[23.997px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9971 23.9971">
        <g id="Icon">
          <path d={svgPaths.p10864e40} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49982" />
          <path d={svgPaths.p221eb680} id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49982" />
          <path d="M9.99902 8.9989H7.99902" id="Vector_3" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49982" />
          <path d="M15.999 12.9984H7.99902" id="Vector_4" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49982" />
          <path d="M15.999 16.9979H7.99902" id="Vector_5" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49982" />
        </g>
      </svg>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[15px] relative shrink-0 w-[17.301px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[15px] left-[9.5px] not-italic text-[#90a1b9] text-[10px] text-center top-[0.15px] tracking-[0.1172px] translate-x-[-50%]">정보</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="h-[58.995px] relative shrink-0 w-[55.993px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center py-[7.999px] relative size-full">
        <Icon12 />
        <Text11 />
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[23.997px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9971 23.9971">
        <g id="Icon">
          <path d={svgPaths.p1d643500} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49982" />
          <path d={svgPaths.p36fccfc0} id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49982" />
        </g>
      </svg>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[15px] relative shrink-0 w-[17.301px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[15px] left-[9.5px] not-italic text-[#90a1b9] text-[10px] text-center top-[0.15px] tracking-[0.1172px] translate-x-[-50%]">마이</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="h-[58.995px] relative shrink-0 w-[55.993px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center py-[7.999px] relative size-full">
        <Icon13 />
        <Text12 />
      </div>
    </div>
  );
}

function WebLayout1() {
  return (
    <div className="absolute bg-white bottom-[0.43px] content-stretch flex h-[75.568px] items-center justify-between left-0 pl-[23.997px] pr-[24.015px] pt-[0.575px] w-[376.188px]" data-name="WebLayout">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-solid border-t-[0.575px] inset-0 pointer-events-none shadow-[0px_-1px_3px_0px_rgba(0,0,0,0.02)]" />
      <Button6 />
      <Button7 />
      <Button8 />
      <Button9 />
      <Button10 />
    </div>
  );
}

export default function Component3() {
  return (
    <div className="bg-white relative size-full" data-name="만성질환 반려동물 헬스케어앱 (모바일)">
      <PageDashboard7 />
      <WebLayout />
      <WebLayout1 />
    </div>
  );
}