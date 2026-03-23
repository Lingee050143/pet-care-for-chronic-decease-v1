import svgPaths from "./svg-8h7mw135k8";

function PageProfile() {
  return (
    <div className="absolute bg-[#e2e8f0] content-stretch flex items-center justify-center left-[115.52px] rounded-[19300900px] size-[95.997px] top-[20px]" data-name="PageProfile">
      <p className="css-ew64yg font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[36px] not-italic relative shrink-0 text-[#314158] text-[30px] text-center tracking-[0.3955px]">레</p>
    </div>
  );
}

function PageProfile1() {
  return (
    <div className="absolute h-[27.997px] left-[20px] top-[131.99px] w-[287.048px]" data-name="PageProfile">
      <p className="absolute css-ew64yg font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[28px] left-[143.72px] not-italic text-[#0f172b] text-[20px] text-center top-[-0.27px] tracking-[-0.4492px] translate-x-[-50%]">레오</p>
    </div>
  );
}

function PageProfile2() {
  return (
    <div className="absolute h-[19.998px] left-[20px] top-[159.99px] w-[287.048px]" data-name="PageProfile">
      <p className="absolute css-ew64yg font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-[143.31px] not-italic text-[#62748e] text-[14px] text-center top-[0.15px] tracking-[-0.1504px] translate-x-[-50%]">골든 리트리버 믹스</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[105.47px] size-[15.998px] top-[12.56px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.998 15.998">
        <g clipPath="url(#clip0_4026_681)" id="Icon">
          <path d={svgPaths.p10eea180} id="Vector" stroke="var(--stroke-0, #314158)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33317" />
          <path d={svgPaths.p1ceeedc0} id="Vector_2" stroke="var(--stroke-0, #314158)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33317" />
        </g>
        <defs>
          <clipPath id="clip0_4026_681">
            <rect fill="white" height="15.998" width="15.998" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function WButton() {
  return (
    <div className="h-[41.137px] relative rounded-[10px] shrink-0 w-full" data-name="WButton">
      <div aria-hidden="true" className="absolute border-[#cad5e2] border-[0.575px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Icon />
      <p className="absolute css-ew64yg font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[20px] left-[155.97px] not-italic text-[#314158] text-[14px] text-center top-[10.72px] tracking-[-0.1504px] translate-x-[-50%]">계정 설정</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[107.31px] size-[15.998px] top-[11.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.998 15.998">
        <g id="Icon">
          <path d={svgPaths.p240c980} id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33317" />
          <path d={svgPaths.p37ba3040} id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33317" />
          <path d="M13.9983 7.99902H5.99927" id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33317" />
        </g>
      </svg>
    </div>
  );
}

function WButton1() {
  return (
    <div className="h-[39.986px] relative rounded-[10px] shrink-0 w-full" data-name="WButton">
      <Icon1 />
      <p className="absolute css-ew64yg font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[20px] left-[155.31px] not-italic text-[#e7000b] text-[14px] text-center top-[10.14px] tracking-[-0.1504px] translate-x-[-50%]">로그아웃</p>
    </div>
  );
}

function PageProfile3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.999px] h-[89.122px] items-start left-[20px] top-[203.98px] w-[287.048px]" data-name="PageProfile">
      <WButton />
      <WButton1 />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[313.103px] relative shrink-0 w-full" data-name="Container">
      <PageProfile />
      <PageProfile1 />
      <PageProfile2 />
      <PageProfile3 />
    </div>
  );
}

function WCard() {
  return (
    <div className="absolute bg-white h-[378.246px] left-0 rounded-[14px] top-0 w-[328.194px]" data-name="WCard">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-[0.575px] pt-[32.571px] px-[0.575px] relative rounded-[inherit] size-full">
        <Container />
      </div>
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-[0.575px] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[26.999px] relative shrink-0 w-[97.705px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[27px] left-0 not-italic text-[#0f172b] text-[18px] top-[0.3px] tracking-[-0.4395px]">반려동물 관리</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-white content-stretch flex h-[59.57px] items-center justify-between left-[0.58px] pb-[0.575px] pl-[19.998px] pr-[209.341px] top-[0.58px] w-[327.043px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f8fafc] border-b-[0.575px] border-solid inset-0 pointer-events-none" />
      <Heading />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#e2e8f0] relative rounded-[19300900px] shrink-0 size-[47.994px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="css-ew64yg font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[#314158] text-[18px] tracking-[-0.4395px]">레</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[26.999px] relative shrink-0 w-[31.142px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[27px] left-0 not-italic text-[#0f172b] text-[18px] top-[0.3px] tracking-[-0.4395px]">레오</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="bg-[#0f172b] h-[18.991px] relative rounded-[4px] shrink-0 w-[37.937px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[15px] left-[5.99px] not-italic text-[10px] text-white top-[2.15px] tracking-[0.1172px]">선택됨</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex gap-[7.999px] h-[26.999px] items-center left-0 top-0 w-[104.419px]" data-name="Container">
      <Heading1 />
      <Text />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[19.998px] left-0 top-[27px] w-[104.419px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#62748e] text-[14px] top-[0.15px] tracking-[-0.1504px]">골든 리트리버 믹스</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[46.997px] relative shrink-0 w-[104.419px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container3 />
        <Paragraph />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[47.994px] relative shrink-0 w-[168.411px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[15.998px] items-center relative size-full">
        <Container2 />
        <Container4 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[19.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9976 19.9976">
        <g id="Icon">
          <path d={svgPaths.p4ce1e80} id="Vector" stroke="var(--stroke-0, #0F172B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66646" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#f8fafc] h-[81.141px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#0f172b] border-[0.575px] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_0px_0px_1px_#0f172b]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16.573px] py-[0.575px] relative size-full">
          <Container5 />
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#fee685] relative rounded-[19300900px] shrink-0 size-[47.994px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="css-ew64yg font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[#314158] text-[18px] tracking-[-0.4395px]">코</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[26.999px] left-0 top-0 w-[31.142px]" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[27px] left-0 not-italic text-[#0f172b] text-[18px] top-[0.3px] tracking-[-0.4395px]">코코</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[19.998px] left-0 top-[27px] w-[76.422px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#62748e] text-[14px] top-[0.15px] tracking-[-0.1504px]">코리안 숏헤어</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[46.997px] relative shrink-0 w-[76.422px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Heading2 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[47.994px] relative shrink-0 w-[140.414px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[15.998px] items-center relative size-full">
        <Container7 />
        <Container8 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-white h-[81.141px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.575px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[16.573px] pr-[130.06px] py-[0.575px] relative size-full">
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[85.98px] size-[19.998px] top-[18.57px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9976 19.9976">
        <g id="Icon">
          <path d="M4.16616 9.99878H15.8314" id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66646" />
          <path d="M9.99878 4.16616V15.8314" id="Vector_2" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66646" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[57.144px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#cad5e2] border-[0.575px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Icon3 />
      <p className="absolute css-ew64yg font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[24px] left-[158.47px] not-italic text-[#62748e] text-[16px] text-center top-[15.87px] tracking-[-0.3125px] translate-x-[-50%]">반려동물 추가</p>
    </div>
  );
}

function PageProfile4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.998px] h-[251.421px] items-start left-[20.57px] top-[80.14px] w-[287.048px]" data-name="PageProfile">
      <Container6 />
      <Container10 />
      <Button />
    </div>
  );
}

function WCard1() {
  return (
    <div className="bg-white h-[352.137px] relative rounded-[14px] shrink-0 w-full" data-name="WCard">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container1 />
        <PageProfile4 />
      </div>
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-[0.575px] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[26.999px] relative shrink-0 w-[97.705px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[27px] left-0 not-italic text-[#0f172b] text-[18px] top-[0.3px] tracking-[-0.4395px]">반려동물 정보</p>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-0 size-[15.998px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.998 15.998">
        <g clipPath="url(#clip0_4026_677)" id="Icon">
          <path d={svgPaths.p10eea180} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33317" />
          <path d={svgPaths.p1ceeedc0} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33317" />
        </g>
        <defs>
          <clipPath id="clip0_4026_677">
            <rect fill="white" height="15.998" width="15.998" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PageProfile5() {
  return (
    <div className="h-[19.998px] relative shrink-0 w-[127.76px]" data-name="PageProfile">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon4 />
        <p className="absolute css-ew64yg font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[20px] left-[76.5px] not-italic text-[#155dfc] text-[14px] text-center top-[0.15px] tracking-[-0.1504px] translate-x-[-50%]">반려동물 정보 편집</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-white content-stretch flex h-[59.57px] items-center justify-between pb-[0.575px] px-[19.998px] relative shrink-0 w-[327.043px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f8fafc] border-b-[0.575px] border-solid inset-0 pointer-events-none" />
      <Heading3 />
      <PageProfile5 />
    </div>
  );
}

function Label() {
  return (
    <div className="h-[15.998px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute css-ew64yg font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[16px] left-0 not-italic text-[#90a1b9] text-[12px] top-[0.58px] uppercase">나이</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[19.998px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#0f172b] text-[14px] top-[0.15px] tracking-[-0.1504px]">8살</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[39.995px] items-start left-0 top-0 w-[131.526px]" data-name="Container">
      <Label />
      <Container12 />
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[15.998px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute css-ew64yg font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[16px] left-0 not-italic text-[#90a1b9] text-[12px] top-[0.58px] uppercase">성별 / 체중</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[19.998px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-4hzbpn font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[20px] left-[-0.09px] not-italic text-[#0f172b] text-[14px] top-[0.49px] tracking-[-0.1504px] w-[112px]">수컷 / 24.2kg</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[39.995px] items-start left-[155.52px] top-0 w-[131.526px]" data-name="Container">
      <Label1 />
      <Container14 />
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[15.998px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute css-ew64yg font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[16px] left-0 not-italic text-[#90a1b9] text-[12px] top-[0.58px] uppercase">마이크로칩 ID</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[19.998px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#0f172b] text-[14px] top-[0.15px] tracking-[-0.1504px]">9810200234123</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[39.995px] items-start left-0 top-[63.99px] w-[131.526px]" data-name="Container">
      <Label2 />
      <Container16 />
    </div>
  );
}

function Label3() {
  return (
    <div className="h-[15.998px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute css-ew64yg font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[16px] left-0 not-italic text-[#90a1b9] text-[12px] top-[0.58px] uppercase">다니는 병원</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[19.998px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#0f172b] text-[14px] top-[0.15px] tracking-[-0.1504px]">시티 동물병원</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[39.995px] items-start left-[155.52px] top-[63.99px] w-[131.526px]" data-name="Container">
      <Label3 />
      <Container18 />
    </div>
  );
}

function PageProfile6() {
  return (
    <div className="h-[103.987px] relative shrink-0 w-[287.048px]" data-name="PageProfile">
      <Container13 />
      <Container15 />
      <Container17 />
      <Container19 />
    </div>
  );
}

function WCard2() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="WCard">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center px-px py-[24px] relative w-full">
          <Container11 />
          <PageProfile6 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-[0.575px] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function Heading4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative w-full">
        <div className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[27px] not-italic relative shrink-0 text-[#0f172b] text-[18px] tracking-[-0.4395px] w-[53px]">
          <p className="css-4hzbpn mb-0">{`데이터 `}</p>
          <p className="css-4hzbpn">관리</p>
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-white content-stretch flex h-[86.569px] items-center justify-between pb-[4.575px] pt-[4px] px-[4px] relative shrink-0 w-[88.439px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f8fafc] border-b-[0.575px] border-solid inset-0 pointer-events-none" />
      <Heading4 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[26.999px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[27px] left-0 not-italic text-[#0f172b] text-[18px] top-[0.3px] tracking-[-0.4395px]">건강 리포트 내보내기</p>
    </div>
  );
}

function Paragraph2() {
  return <div className="h-[39.995px] shrink-0 w-full" data-name="Paragraph" />;
}

function PageProfile7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[70.994px] items-start left-[20px] top-[20px] w-[150.615px]" data-name="PageProfile">
      <Heading5 />
      <Paragraph2 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[16px] size-[15.998px] top-[11.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.998 15.998">
        <g id="Icon">
          <path d={svgPaths.p2ebe1b50} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33317" />
          <path d={svgPaths.p99bec00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33317" />
          <path d="M7.99902 9.99878V1.99976" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33317" />
        </g>
      </svg>
    </div>
  );
}

function WButton2() {
  return (
    <div className="bg-[#0f172b] h-[39.986px] relative rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="WButton">
      <Icon5 />
      <p className="absolute css-ew64yg font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[20px] left-[80px] not-italic text-[14px] text-center text-white top-[10.14px] tracking-[-0.1504px] translate-x-[-50%]">PDF 다운로드</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[19.99px] top-[51.36px] w-[153px]">
      <p className="css-4hzbpn font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#62748e] text-[14px] tracking-[-0.1504px] w-full">병원 방문을 위한 요약 PDF를 다운로드하세요.</p>
      <WButton2 />
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[150.975px] relative shrink-0 w-[190.61px]" data-name="Container">
      <PageProfile7 />
      <Frame />
    </div>
  );
}

function WCard3() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="WCard">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between p-[24px] relative w-full">
          <Container20 />
          <Container21 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-[0.575px] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[23.997px] h-[804.953px] items-start left-0 top-[410.24px] w-[328.194px]" data-name="Container">
      <WCard1 />
      <WCard2 />
      <WCard3 />
    </div>
  );
}

function PageProfile8() {
  return (
    <div className="absolute bg-[#f8fafc] h-[1215.195px] left-[24px] top-[87.99px] w-[328.194px]" data-name="PageProfile">
      <WCard />
      <Container22 />
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[#0f172b] relative rounded-[10px] shrink-0 size-[31.996px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.3125px]">V</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[27.997px] relative shrink-0 w-[72.791px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#0f172b] text-[18px] top-[-0.12px] tracking-[-0.8895px]">VetTrack</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[31.996px] relative shrink-0 w-[112.786px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.999px] items-center relative size-full">
        <Container23 />
        <Text1 />
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

function Button1() {
  return (
    <div className="relative rounded-[19300900px] shrink-0 size-[35.996px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.999px] px-[7.999px] relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Container25() {
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

function Container26() {
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

function Container27() {
  return (
    <div className="h-[43.986px] relative rounded-[10px] shrink-0 w-[73.986px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.999px] items-center pl-[5.995px] relative size-full">
        <Container26 />
        <Icon8 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[43.986px] relative shrink-0 w-[150.975px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[19.998px] items-center relative size-full">
        <Button1 />
        <Container25 />
        <Container27 />
      </div>
    </div>
  );
}

function WebLayout() {
  return (
    <div className="absolute bg-white content-stretch flex h-[63.992px] items-center justify-between left-0 pb-[0.575px] px-[23.997px] top-0 w-[376.188px]" data-name="WebLayout">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b-[0.575px] border-solid inset-0 pointer-events-none" />
      <Container24 />
      <Container28 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[23.997px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9971 23.9971">
        <g id="Icon">
          <path d={svgPaths.p2ccee480} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49982" />
          <path d={svgPaths.p2750c900} id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49982" />
          <path d={svgPaths.p2a3cd900} id="Vector_3" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49982" />
          <path d={svgPaths.p2c16580} id="Vector_4" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49982" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[15px] relative shrink-0 w-[8.655px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[15px] left-[4px] not-italic text-[#90a1b9] text-[10px] text-center top-[0.15px] tracking-[0.1172px] translate-x-[-50%]">홈</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[58.995px] relative shrink-0 w-[55.993px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center py-[7.999px] relative size-full">
        <Icon9 />
        <Text2 />
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

function Text3() {
  return (
    <div className="h-[15px] relative shrink-0 w-[17.301px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[15px] left-[9.5px] not-italic text-[#90a1b9] text-[10px] text-center top-[0.15px] tracking-[0.1172px] translate-x-[-50%]">일정</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[58.995px] relative shrink-0 w-[55.993px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center py-[7.999px] relative size-full">
        <Icon10 />
        <Text3 />
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

function Text4() {
  return (
    <div className="h-[15px] relative shrink-0 w-[34.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[15px] left-[17px] not-italic text-[#90a1b9] text-[10px] text-center top-[0.15px] tracking-[0.1172px] translate-x-[-50%]">커뮤니티</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[58.995px] relative shrink-0 w-[55.993px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center py-[7.999px] relative size-full">
        <Icon11 />
        <Text4 />
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

function Text5() {
  return (
    <div className="h-[15px] relative shrink-0 w-[17.301px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[15px] left-[9.5px] not-italic text-[#90a1b9] text-[10px] text-center top-[0.15px] tracking-[0.1172px] translate-x-[-50%]">정보</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[58.995px] relative shrink-0 w-[55.993px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center py-[7.999px] relative size-full">
        <Icon12 />
        <Text5 />
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[23.997px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9971 23.9971">
        <g id="Icon">
          <path d={svgPaths.p1d643500} id="Vector" stroke="var(--stroke-0, #0F172B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49982" />
          <path d={svgPaths.p36fccfc0} id="Vector_2" stroke="var(--stroke-0, #0F172B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49982" />
        </g>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[15px] relative shrink-0 w-[17.301px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[15px] left-[9.5px] not-italic text-[#0f172b] text-[10px] text-center top-[0.15px] tracking-[0.1172px] translate-x-[-50%]">마이</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="h-[58.995px] relative shrink-0 w-[55.993px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center py-[7.999px] relative size-full">
        <Icon13 />
        <Text6 />
      </div>
    </div>
  );
}

function WebLayout1() {
  return (
    <div className="absolute bg-white content-stretch flex h-[75.568px] items-center justify-between left-0 pl-[23.997px] pr-[24.015px] pt-[0.575px] top-[1331.4px] w-[376.188px]" data-name="WebLayout">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-solid border-t-[0.575px] inset-0 pointer-events-none shadow-[0px_-1px_3px_0px_rgba(0,0,0,0.02)]" />
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="만성질환 반려동물 헬스케어앱 (모바일)">
      <PageProfile8 />
      <WebLayout />
      <WebLayout1 />
    </div>
  );
}