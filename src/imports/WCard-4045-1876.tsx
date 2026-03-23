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

function Text() {
  return (
    <div className="absolute content-stretch flex h-[16.681px] items-start left-[68.9px] top-[10.93px] w-[12.807px]" data-name="Text">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#90a1b9] text-[14px] text-center tracking-[-0.1504px]">g</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[31.996px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-[53.82px] not-italic text-[#0f172b] text-[24px] text-center top-[-0.27px] tracking-[0.0703px] translate-x-[-50%]">85</p>
      <Text />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[15.998px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16px] left-[60.08px] not-italic text-[#62748e] text-[12px] text-center top-[0.58px] tracking-[0.3px] translate-x-[-50%] uppercase">식사량</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[51.994px] items-start left-[16px] top-[24.57px] w-[119.527px]" data-name="Container">
      <Container />
      <Container1 />
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute content-stretch flex h-[16.681px] items-start left-[74.43px] top-[10.93px] w-[15.423px]" data-name="Text">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#90a1b9] text-[14px] text-center tracking-[-0.1504px]">ml</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[31.996px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-[52.6px] not-italic text-[#0f172b] text-[24px] text-center top-[-0.27px] tracking-[0.0703px] translate-x-[-50%]">220</p>
      <Text1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[15.998px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16px] left-[59.46px] not-italic text-[#62748e] text-[12px] text-center top-[0.58px] tracking-[0.3px] translate-x-[-50%] uppercase">음수량</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[51.994px] items-start left-[151.52px] pl-[0.575px] top-[24.57px] w-[119.527px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-l-[0.575px] border-solid inset-0 pointer-events-none" />
      <Container3 />
      <Container4 />
    </div>
  );
}

function PageDashboard3() {
  return (
    <div className="h-[76.566px] relative shrink-0 w-[287.048px]" data-name="PageDashboard">
      <Container2 />
      <Container5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center pb-[24px] pt-[36px] relative shrink-0 w-full" data-name="Container">
      <Frame1 />
      <PageDashboard3 />
    </div>
  );
}

export default function WCard() {
  return (
    <div className="bg-white relative rounded-[14px] size-full" data-name="WCard">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-[12px] relative rounded-[inherit] size-full">
        <Container6 />
      </div>
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-[0.56px] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}