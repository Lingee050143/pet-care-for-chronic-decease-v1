import svgPaths from "./svg-fr5r7ehl7i";

function Container() {
  return (
    <div className="h-[19.998px] relative shrink-0 w-[68.315px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[34.5px] not-italic text-[#0f172b] text-[13px] text-center top-[0.15px] tracking-[-0.1504px] translate-x-[-50%]">09:00 AM</p>
      </div>
    </div>
  );
}

function PageSchedule() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col h-[32px] items-center justify-center pr-[0.575px] relative rounded-[12px] shrink-0 w-[84px]" data-name="PageSchedule">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-r-[0.575px] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container />
    </div>
  );
}

function WBadge() {
  return (
    <div className="bg-[#eef2ff] relative rounded-[8px] shrink-0" data-name="WBadge">
      <div aria-hidden="true" className="absolute border-[#e0e7ff] border-[0.575px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[7px] py-[4px] relative">
        <p className="css-ew64yg font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#432dd7] text-[12px]">병원 방문</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative">
        <p className="css-ew64yg font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[19.25px] not-italic relative shrink-0 text-[#0f172b] text-[16px] tracking-[-0.1504px]">Dr. Kim 정기 검진</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[27.143px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[4px] relative size-full">
          <div className="shrink-0 size-[12px]" />
          <WBadge />
          <Heading />
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[11.999px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9985 11.9985">
        <g id="Icon">
          <path d={svgPaths.p3513f70} id="Vector" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999878" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[11.999px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9985 11.9985">
        <g clipPath="url(#clip0_4023_1319)" id="Icon">
          <path d={svgPaths.p937b100} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999878" />
          <path d={svgPaths.pfa39cc0} id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999878" />
        </g>
        <defs>
          <clipPath id="clip0_4023_1319">
            <rect fill="white" height="11.9985" width="11.9985" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative">
        <p className="css-4hzbpn font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#90a1b9] text-[12px] text-center w-[70px]">시티 동물병원</p>
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 1">
              <line id="Line 1" stroke="var(--stroke-0, #90A1B9)" x2="70" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center p-[4px] relative shrink-0" data-name="Button">
      <Icon />
      <Icon1 />
      <Text />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[64px] items-start relative shrink-0">
      <Container1 />
      <Button />
    </div>
  );
}

function PageSchedule1() {
  return (
    <div className="content-stretch flex flex-col h-[92px] items-start py-[16px] relative shrink-0" data-name="PageSchedule">
      <Frame />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[144px] relative shrink-0 w-[324px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start justify-center p-[10px] relative size-full">
        <PageSchedule />
        <PageSchedule1 />
      </div>
    </div>
  );
}

export default function WCard() {
  return (
    <div className="bg-white relative rounded-[14px] size-full" data-name="WCard">
      <div className="content-stretch flex items-center overflow-clip p-[0.575px] relative rounded-[inherit] size-full">
        <Container2 />
      </div>
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-[0.575px] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}