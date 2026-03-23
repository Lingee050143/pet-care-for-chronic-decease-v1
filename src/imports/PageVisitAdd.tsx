function WButton() {
  return (
    <div className="bg-white flex-[1_0_0] h-[47.994px] min-h-px min-w-px relative rounded-[14px]" data-name="WButton">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.575px] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[16.575px] py-[10.575px] relative size-full">
          <p className="css-ew64yg font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#0f172b] text-[16px] text-center tracking-[-0.3125px]">취소</p>
        </div>
      </div>
    </div>
  );
}

function WButton1() {
  return (
    <div className="bg-[#0f172b] flex-[1_0_0] h-[47.994px] min-h-px min-w-px relative rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" data-name="WButton">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[16px] py-[10px] relative size-full">
          <p className="css-ew64yg font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.3125px]">저장하기</p>
        </div>
      </div>
    </div>
  );
}

export default function PageVisitAdd() {
  return (
    <div className="content-stretch flex gap-[11.999px] items-start pt-[31.996px] relative size-full" data-name="PageVisitAdd">
      <WButton />
      <WButton1 />
    </div>
  );
}