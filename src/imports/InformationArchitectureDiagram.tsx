import clsx from "clsx";
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type ContainerTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ContainerText({ text, additionalClassNames = "" }: ContainerTextProps) {
  return (
    <div className={clsx("relative shrink-0 w-[43.57px]", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-end relative size-full">
        <p className="font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#62748e] text-[14px] text-nowrap tracking-[0.1996px]">{text}</p>
      </div>
    </div>
  );
}
type NodeBoxText1Props = {
  text: string;
};

function NodeBoxText1({ text }: NodeBoxText1Props) {
  return (
    <Wrapper additionalClassNames="h-[17.5px] w-[79.578px]">
      <p className="absolute font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[17.5px] left-[40.5px] not-italic text-[#0f172b] text-[14px] text-center text-nowrap top-[0.5px] tracking-[-0.1504px] translate-x-[-50%]">{text}</p>
    </Wrapper>
  );
}
type NodeBoxTextProps = {
  text: string;
};

function NodeBoxText({ text }: NodeBoxTextProps) {
  return (
    <Wrapper additionalClassNames="h-[17.5px] w-[51.906px]">
      <p className="absolute font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[17.5px] left-[26.5px] not-italic text-[#0f172b] text-[14px] text-center text-nowrap top-[0.5px] tracking-[-0.1504px] translate-x-[-50%]">{text}</p>
    </Wrapper>
  );
}

export default function InformationArchitectureDiagram() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[107px] items-center justify-center relative size-full" data-name="Information Architecture Diagram">
      <div className="bg-[#f8fafc] content-stretch flex flex-col items-center justify-center overflow-clip px-0 py-[48px] relative shrink-0 w-full" data-name="IADiagram">
        <div className="content-stretch flex flex-col items-center relative shrink-0">
          <div className="content-stretch flex flex-col items-center px-[12px] py-0 relative shrink-0" data-name="TreeNode">
            <div className="bg-[#0f172b] content-stretch flex flex-col h-[61px] items-center justify-center p-px relative rounded-[14px] shrink-0 w-[200px]" data-name="Container">
              <div aria-hidden="true" className="absolute border border-[#0f172b] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
              <Wrapper additionalClassNames="h-[35px] w-[166px]">
                <p className="absolute font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[17.5px] left-[83px] not-italic text-[14px] text-center text-white top-[0.5px] tracking-[-0.1504px] translate-x-[-50%] w-[158px]">VetTrack 서비스</p>
              </Wrapper>
            </div>
            <div className="bg-[#cad5e2] h-[32px] shrink-0 w-px" data-name="Container" />
            <div className="h-[205.5px] relative shrink-0 w-[2112px]" data-name="List">
              <div className="absolute h-[205.5px] left-0 top-0 w-[352px]" data-name="List Item">
                <div className="absolute bg-[#cad5e2] h-[32px] left-[175.5px] top-[75.5px] w-px" data-name="Container" />
                <div className="absolute bg-[#cad5e2] h-[32px] left-[175px] top-0 w-px" data-name="Container" />
                <div className="absolute h-[75.5px] left-[12px] top-[107.5px] w-[328px]" data-name="List">
                  <div className="absolute h-[75.5px] left-0 top-0 w-[164px]" data-name="List Item">
                    <div className="absolute bg-[#cad5e2] h-[32px] left-[81px] top-0 w-px" data-name="Container" />
                    <div className="absolute bg-white content-stretch flex flex-col h-[43.5px] items-center justify-center left-[12px] p-px rounded-[14px] top-[32px] w-[140px]" data-name="Container">
                      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
                      <Wrapper additionalClassNames="h-[17.5px] w-[91.695px]">
                        <p className="absolute font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[17.5px] left-[46px] not-italic text-[#0f172b] text-[14px] text-center text-nowrap top-[0.5px] tracking-[-0.1504px] translate-x-[-50%]">오늘의 케어 요약</p>
                      </Wrapper>
                    </div>
                  </div>
                  <div className="absolute h-[75.5px] left-[164px] top-0 w-[164px]" data-name="List Item">
                    <div className="absolute bg-[#cad5e2] h-[32px] left-[81px] top-0 w-px" data-name="Container" />
                    <div className="absolute bg-white content-stretch flex flex-col h-[43.5px] items-center justify-center left-[12px] p-px rounded-[14px] top-[32px] w-[140px]" data-name="Container">
                      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
                      <NodeBoxText text="주요 알림" />
                    </div>
                  </div>
                </div>
                <div className="absolute bg-white content-stretch flex flex-col h-[43.5px] items-center justify-center left-[106px] p-px rounded-[14px] top-[32px] w-[140px]" data-name="Container">
                  <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
                  <Wrapper additionalClassNames="h-[17.5px] w-[67.781px]">
                    <p className="absolute font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[17.5px] left-[34.5px] not-italic text-[#0f172b] text-[14px] text-center text-nowrap top-[0.5px] tracking-[-0.1504px] translate-x-[-50%]">홈 (Home)</p>
                  </Wrapper>
                </div>
              </div>
              <div className="absolute h-[205.5px] left-[352px] top-0 w-[352px]" data-name="List Item">
                <div className="absolute bg-[#cad5e2] h-[32px] left-[175.5px] top-[75.5px] w-px" data-name="Container" />
                <div className="absolute bg-[#cad5e2] h-[32px] left-[175px] top-0 w-px" data-name="Container" />
                <div className="absolute h-[75.5px] left-[12px] top-[107.5px] w-[328px]" data-name="List">
                  <div className="absolute h-[75.5px] left-0 top-0 w-[164px]" data-name="List Item">
                    <div className="absolute bg-[#cad5e2] h-[32px] left-[81px] top-0 w-px" data-name="Container" />
                    <div className="absolute bg-white content-stretch flex flex-col h-[43.5px] items-center justify-center left-[12px] p-px rounded-[14px] top-[32px] w-[140px]" data-name="Container">
                      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
                      <Wrapper additionalClassNames="h-[17.5px] w-[69.773px]">
                        <p className="absolute font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[17.5px] left-[35px] not-italic text-[#0f172b] text-[14px] text-center text-nowrap top-[0.5px] tracking-[-0.1504px] translate-x-[-50%]">AI 상담 시작</p>
                      </Wrapper>
                    </div>
                  </div>
                  <div className="absolute h-[75.5px] left-[164px] top-0 w-[164px]" data-name="List Item">
                    <div className="absolute bg-[#cad5e2] h-[32px] left-[81px] top-0 w-px" data-name="Container" />
                    <div className="absolute bg-white content-stretch flex flex-col h-[43.5px] items-center justify-center left-[12px] p-px rounded-[14px] top-[32px] w-[140px]" data-name="Container">
                      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
                      <NodeBoxText1 text="이전 상담 내역" />
                    </div>
                  </div>
                </div>
                <div className="absolute bg-white content-stretch flex flex-col h-[43.5px] items-center justify-center left-[95.23px] p-px rounded-[14px] top-[32px] w-[161.547px]" data-name="Container">
                  <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
                  <Wrapper additionalClassNames="h-[17.5px] w-[127.547px]">
                    <p className="absolute font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[17.5px] left-[64.5px] not-italic text-[#0f172b] text-[14px] text-center text-nowrap top-[0.5px] tracking-[-0.1504px] translate-x-[-50%]">상담 (Consultation)</p>
                  </Wrapper>
                </div>
              </div>
              <div className="absolute h-[205.5px] left-[704px] top-0 w-[352px]" data-name="List Item">
                <div className="absolute bg-[#cad5e2] h-[32px] left-[175.5px] top-[93px] w-px" data-name="Container" />
                <div className="absolute bg-[#cad5e2] h-[32px] left-[175px] top-0 w-px" data-name="Container" />
                <div className="absolute h-[75.5px] left-[12px] top-[125px] w-[328px]" data-name="List">
                  <div className="absolute h-[75.5px] left-0 top-0 w-[164px]" data-name="List Item">
                    <div className="absolute bg-[#cad5e2] h-[32px] left-[81px] top-0 w-px" data-name="Container" />
                    <div className="absolute bg-white content-stretch flex flex-col h-[43.5px] items-center justify-center left-[12px] p-px rounded-[14px] top-[32px] w-[140px]" data-name="Container">
                      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
                      <NodeBoxText1 text="기본 정보 입력" />
                    </div>
                  </div>
                  <div className="absolute h-[75.5px] left-[164px] top-0 w-[164px]" data-name="List Item">
                    <div className="absolute bg-[#cad5e2] h-[32px] left-[81px] top-0 w-px" data-name="Container" />
                    <div className="absolute bg-white content-stretch flex flex-col h-[43.5px] items-center justify-center left-[12px] p-px rounded-[14px] top-[32px] w-[140px]" data-name="Container">
                      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
                      <NodeBoxText1 text="건강 상태 입력" />
                    </div>
                  </div>
                </div>
                <div className="absolute bg-white content-stretch flex flex-col h-[61px] items-center justify-center left-[76px] p-px rounded-[14px] top-[32px] w-[200px]" data-name="Container">
                  <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
                  <Wrapper additionalClassNames="h-[35px] w-[166px]">
                    <p className="absolute font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[17.5px] left-[83.24px] not-italic text-[#0f172b] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] translate-x-[-50%] w-[121px]">반려동물 프로필 (Pet Profile)</p>
                  </Wrapper>
                </div>
              </div>
              <div className="absolute h-[205.5px] left-[1056px] top-0 w-[352px]" data-name="List Item">
                <div className="absolute bg-[#cad5e2] h-[32px] left-[175.5px] top-[75.5px] w-px" data-name="Container" />
                <div className="absolute bg-[#cad5e2] h-[32px] left-[175px] top-0 w-px" data-name="Container" />
                <div className="absolute h-[75.5px] left-[12px] top-[107.5px] w-[328px]" data-name="List">
                  <div className="absolute h-[75.5px] left-0 top-0 w-[164px]" data-name="List Item">
                    <div className="absolute bg-[#cad5e2] h-[32px] left-[81px] top-0 w-px" data-name="Container" />
                    <div className="absolute bg-white content-stretch flex flex-col h-[43.5px] items-center justify-center left-[12px] p-px rounded-[14px] top-[32px] w-[140px]" data-name="Container">
                      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
                      <NodeBoxText text="식단 추천" />
                    </div>
                  </div>
                  <div className="absolute h-[75.5px] left-[164px] top-0 w-[164px]" data-name="List Item">
                    <div className="absolute bg-[#cad5e2] h-[32px] left-[81px] top-0 w-px" data-name="Container" />
                    <div className="absolute bg-white content-stretch flex flex-col h-[43.5px] items-center justify-center left-[12px] p-px rounded-[14px] top-[32px] w-[140px]" data-name="Container">
                      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
                      <Wrapper additionalClassNames="h-[17.5px] w-[64.016px]">
                        <p className="absolute font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[17.5px] left-[32.5px] not-italic text-[#0f172b] text-[14px] text-center text-nowrap top-[0.5px] tracking-[-0.1504px] translate-x-[-50%]">급여 스케줄</p>
                      </Wrapper>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-white content-stretch flex flex-col h-[43.5px] items-center justify-center left-[78.71px] p-px rounded-[14px] top-[32px] w-[194.57px]" data-name="Container">
                  <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
                  <Wrapper additionalClassNames="h-[17.5px] w-[160.57px]">
                    <p className="absolute font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[17.5px] left-[80.5px] not-italic text-[#0f172b] text-[14px] text-center text-nowrap top-[0.5px] tracking-[-0.1504px] translate-x-[-50%]">맞춤 케어 플랜 (Care Plan)</p>
                  </Wrapper>
                </div>
              </div>
              <div className="absolute h-[205.5px] left-[1408px] top-0 w-[352px]" data-name="List Item">
                <div className="absolute bg-[#cad5e2] h-[32px] left-[175.5px] top-[75.5px] w-px" data-name="Container" />
                <div className="absolute bg-[#cad5e2] h-[32px] left-[175px] top-0 w-px" data-name="Container" />
                <div className="absolute h-[75.5px] left-[12px] top-[107.5px] w-[328px]" data-name="List">
                  <div className="absolute h-[75.5px] left-0 top-0 w-[164px]" data-name="List Item">
                    <div className="absolute bg-[#cad5e2] h-[32px] left-[81px] top-0 w-px" data-name="Container" />
                    <div className="absolute bg-white content-stretch flex flex-col h-[43.5px] items-center justify-center left-[12px] p-px rounded-[14px] top-[32px] w-[140px]" data-name="Container">
                      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
                      <NodeBoxText text="급여 기록" />
                    </div>
                  </div>
                  <div className="absolute h-[75.5px] left-[164px] top-0 w-[164px]" data-name="List Item">
                    <div className="absolute bg-[#cad5e2] h-[32px] left-[81px] top-0 w-px" data-name="Container" />
                    <div className="absolute bg-white content-stretch flex flex-col h-[43.5px] items-center justify-center left-[12px] p-px rounded-[14px] top-[32px] w-[140px]" data-name="Container">
                      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
                      <NodeBoxText text="증상 기록" />
                    </div>
                  </div>
                </div>
                <div className="absolute bg-white content-stretch flex flex-col h-[43.5px] items-center justify-center left-[95.55px] p-px rounded-[14px] top-[32px] w-[160.898px]" data-name="Container">
                  <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
                  <Wrapper additionalClassNames="h-[17.5px] w-[126.898px]">
                    <p className="absolute font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[17.5px] left-[63px] not-italic text-[#0f172b] text-[14px] text-center text-nowrap top-[0.5px] tracking-[-0.1504px] translate-x-[-50%]">기록 (Log / History)</p>
                  </Wrapper>
                </div>
              </div>
              <div className="absolute h-[205.5px] left-[1760px] top-0 w-[352px]" data-name="List Item">
                <div className="absolute bg-[#cad5e2] h-[32px] left-[175.5px] top-[75.5px] w-px" data-name="Container" />
                <div className="absolute bg-[#cad5e2] h-[32px] left-[175px] top-0 w-px" data-name="Container" />
                <div className="absolute h-[98px] left-[12px] top-[107.5px] w-[328px]" data-name="List">
                  <div className="absolute h-[98px] left-0 top-0 w-[164px]" data-name="List Item">
                    <div className="absolute bg-[#cad5e2] h-[32px] left-[81px] top-0 w-px" data-name="Container" />
                    <div className="absolute bg-white content-stretch flex flex-col h-[43.5px] items-center justify-center left-[12px] p-px rounded-[14px] top-[32px] w-[140px]" data-name="Container">
                      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
                      <NodeBoxText text="계정 설정" />
                    </div>
                  </div>
                  <div className="absolute h-[98px] left-[164px] top-0 w-[164px]" data-name="List Item">
                    <div className="absolute bg-[#cad5e2] h-[32px] left-[81px] top-0 w-px" data-name="Container" />
                    <div className="absolute bg-white content-stretch flex flex-col gap-[6px] h-[66px] items-center justify-center left-[12px] p-px rounded-[14px] top-[32px] w-[140px]" data-name="Container">
                      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
                      <NodeBoxText text="언어 설정" />
                      <Wrapper additionalClassNames="h-[16.5px] w-[55.945px]">
                        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16.5px] left-[28px] not-italic text-[#62748e] text-[11px] text-center text-nowrap top-[0.5px] tracking-[0.0645px] translate-x-[-50%]">(다국어 UX)</p>
                      </Wrapper>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-white content-stretch flex flex-col h-[43.5px] items-center justify-center left-[106px] p-px rounded-[14px] top-[32px] w-[140px]" data-name="Container">
                  <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
                  <Wrapper additionalClassNames="h-[17.5px] w-[97.445px]">
                    <p className="absolute font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[17.5px] left-[49.5px] not-italic text-[#0f172b] text-[14px] text-center text-nowrap top-[0.5px] tracking-[-0.1504px] translate-x-[-50%]">설정 (Settings)</p>
                  </Wrapper>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#f8fafc] content-stretch flex flex-col gap-[16px] items-start pb-0 pl-0 pr-px pt-[36px] relative shrink-0 w-[92.57px]" data-name="Container">
            <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
            <ContainerText text="1 Depth (최상위)" additionalClassNames="h-[70px]" />
            <ContainerText text="2 Depth (주요 섹션)" additionalClassNames="h-[160px]" />
            <ContainerText text="3 Depth (하위 기능)" additionalClassNames="h-[140px]" />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0.9)] content-stretch flex flex-col items-center justify-center px-[9px] py-[6px] relative rounded-[1.67772e+07px] shrink-0" data-name="IADiagram">
        <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#90a1b9] text-[12px] text-nowrap">VetTrack IA • Created by Figma Make</p>
      </div>
    </div>
  );
}