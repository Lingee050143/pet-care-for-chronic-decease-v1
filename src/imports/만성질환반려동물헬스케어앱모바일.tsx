import svgPaths from "./svg-73szledd2g";

function Heading() {
  return (
    <div className="absolute h-[26.999px] left-[36px] top-[0.49px] w-[133.134px]" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[27px] left-0 not-italic text-[#0f172b] text-[18px] top-[0.3px] tracking-[-0.4395px]">반려동물 정보 편집</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[19.998px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66585 11.6652">
            <path d={svgPaths.p37440c80} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66646" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[-4px] pt-[4px] px-[4px] rounded-[19300900px] size-[27.997px] top-0" data-name="Button">
      <Icon />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[27.997px] relative shrink-0 w-[169.13px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Heading />
        <Button />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-white content-stretch flex h-[60.568px] items-center justify-between left-[32.57px] pb-[0.575px] pl-[19.998px] pr-[73.924px] top-[32.57px] w-[263.051px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f8fafc] border-b-[0.575px] border-solid inset-0 pointer-events-none" />
      <Container />
    </div>
  );
}

function PageProfile() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex items-center justify-center relative rounded-[19300900px] shrink-0 size-[88px]" data-name="PageProfile">
      <p className="css-ew64yg font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[36px] not-italic relative shrink-0 text-[#314158] text-[30px] text-center tracking-[0.3955px]">레</p>
    </div>
  );
}

function PageProfile1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="PageProfile">
      <p className="css-ew64yg font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[#0f172b] text-[16px] text-center tracking-[-0.4492px]">레오</p>
    </div>
  );
}

function PageProfile2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="PageProfile">
      <p className="css-ew64yg font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#62748e] text-[16px] text-center tracking-[-0.1504px]">골든 리트리버 믹스</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <PageProfile1 />
      <PageProfile2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[223px]">
      <PageProfile />
      <Frame1 />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute content-stretch flex h-[16.681px] items-start left-[86.07px] top-[1.15px] w-[34.603px]" data-name="Text">
      <p className="css-ew64yg font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#90a1b9] text-[14px] tracking-[-0.1504px]">(선택)</p>
    </div>
  );
}

function Label() {
  return (
    <div className="h-[19.998px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute css-ew64yg font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[20px] left-0 not-italic text-[#314158] text-[14px] top-[0.15px] tracking-[-0.1504px]">마이크로칩 ID</p>
      <Text />
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-white h-[49.145px] relative rounded-[10px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="css-ew64yg font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#cad5e2] text-[16px] tracking-[-0.3125px]">미등록</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.575px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[7.999px] h-[77.141px] items-start relative shrink-0 w-full" data-name="Container">
      <Label />
      <TextInput />
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute content-stretch flex h-[16.681px] items-start left-[71.44px] top-[1.15px] w-[34.603px]" data-name="Text">
      <p className="css-ew64yg font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#90a1b9] text-[14px] tracking-[-0.1504px]">(선택)</p>
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[19.998px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute css-ew64yg font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[20px] left-0 not-italic text-[#314158] text-[14px] top-[0.15px] tracking-[-0.1504px]">다니는 병원</p>
      <Text1 />
    </div>
  );
}

function TextInput1() {
  return (
    <div className="bg-white h-[49.145px] relative rounded-[10px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="css-ew64yg font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#cad5e2] text-[16px] tracking-[-0.3125px]">미등록</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.575px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[7.999px] h-[77.141px] items-start relative shrink-0 w-full" data-name="Container">
      <Label1 />
      <TextInput1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute content-stretch flex h-[16.681px] items-start left-[71.44px] top-[1.15px] w-[34.603px]" data-name="Text">
      <p className="css-ew64yg font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#90a1b9] text-[14px] tracking-[-0.1504px]">(선택)</p>
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[19.998px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute css-ew64yg font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[20px] left-0 not-italic text-[#314158] text-[14px] top-[0.15px] tracking-[-0.1504px]">담당 수의사</p>
      <Text2 />
    </div>
  );
}

function TextInput2() {
  return (
    <div className="bg-white h-[49.145px] relative rounded-[10px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="css-ew64yg font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#cad5e2] text-[16px] tracking-[-0.3125px]">미등록</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.575px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[7.999px] h-[77.141px] items-start relative shrink-0 w-full" data-name="Container">
      <Label2 />
      <TextInput2 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[15.998px] h-[263.419px] items-start relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container3 />
      <Container4 />
    </div>
  );
}

function PagePetEdit() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="PagePetEdit">
      <Frame />
      <Container5 />
    </div>
  );
}

function WButton() {
  return (
    <div className="h-[41.137px] relative rounded-[10px] shrink-0 w-[57.359px]" data-name="WButton">
      <div aria-hidden="true" className="absolute border-[#cad5e2] border-[0.575px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[16.575px] py-[10.575px] relative size-full">
        <p className="css-ew64yg font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#314158] text-[14px] text-center tracking-[-0.1504px]">취소</p>
      </div>
    </div>
  );
}

function WButton1() {
  return (
    <div className="bg-[#0f172b] h-[41.137px] relative rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-[112.418px]" data-name="WButton">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[32px] py-[10px] relative size-full">
        <p className="css-ew64yg font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.1504px]">저장하기</p>
      </div>
    </div>
  );
}

function PagePetEdit1() {
  return (
    <div className="content-stretch flex gap-[11.999px] items-start justify-end pt-[40.57px] relative shrink-0 w-full" data-name="PagePetEdit">
      <div aria-hidden="true" className="absolute border-[#f8fafc] border-solid border-t-[0.575px] inset-0 pointer-events-none" />
      <WButton />
      <WButton1 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.998px] items-start left-[32.57px] pb-[20px] pt-[19.998px] px-[19.998px] top-[93.14px] w-[263.051px]" data-name="Container">
      <PagePetEdit />
      <PagePetEdit1 />
    </div>
  );
}

function WCard() {
  return (
    <div className="bg-white h-[728px] relative rounded-[14px] shrink-0 w-[328px]" data-name="WCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container1 />
        <Container6 />
      </div>
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-[0.575px] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function WebLayout() {
  return (
    <div className="absolute bg-[#f8fafc] content-stretch flex flex-col h-[964px] items-start left-0 pb-[48px] pl-[23.997px] pt-[119.985px] top-0 w-[376px]" data-name="WebLayout">
      <WCard />
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#0f172b] relative rounded-[10px] shrink-0 size-[31.996px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.3125px]">V</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[27.997px] relative shrink-0 w-[72.791px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#0f172b] text-[18px] top-[-0.12px] tracking-[-0.8895px]">VetTrack</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[31.996px] relative shrink-0 w-[112.786px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.999px] items-center relative size-full">
        <Container7 />
        <Text3 />
      </div>
    </div>
  );
}

function Icon1() {
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
        <Icon1 />
      </div>
    </div>
  );
}

function Container9() {
  return <div className="bg-[#e2e8f0] h-[23.997px] shrink-0 w-[0.998px]" data-name="Container" />;
}

function Icon2() {
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

function Container10() {
  return (
    <div className="bg-[#e2e8f0] relative rounded-[19300900px] shrink-0 size-[31.996px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Icon3() {
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

function Container11() {
  return (
    <div className="h-[43.986px] relative rounded-[10px] shrink-0 w-[73.986px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.999px] items-center pl-[5.995px] relative size-full">
        <Container10 />
        <Icon3 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[43.986px] relative shrink-0 w-[150.975px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[19.998px] items-center relative size-full">
        <Button1 />
        <Container9 />
        <Container11 />
      </div>
    </div>
  );
}

function WebLayout1() {
  return (
    <div className="absolute bg-white content-stretch flex h-[63.992px] items-center justify-between left-0 pb-[0.575px] px-[23.997px] top-0 w-[376.188px]" data-name="WebLayout">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b-[0.575px] border-solid inset-0 pointer-events-none" />
      <Container8 />
      <Container12 />
    </div>
  );
}

function Icon4() {
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

function Text4() {
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
        <Icon4 />
        <Text4 />
      </div>
    </div>
  );
}

function Icon5() {
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

function Text5() {
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
        <Icon5 />
        <Text5 />
      </div>
    </div>
  );
}

function Icon6() {
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

function Text6() {
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
        <Icon6 />
        <Text6 />
      </div>
    </div>
  );
}

function Icon7() {
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

function Text7() {
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
        <Icon7 />
        <Text7 />
      </div>
    </div>
  );
}

function Icon8() {
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

function Text8() {
  return (
    <div className="h-[15px] relative shrink-0 w-[17.301px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[15px] left-[9.5px] not-italic text-[#90a1b9] text-[10px] text-center top-[0.15px] tracking-[0.1172px] translate-x-[-50%]">마이</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="h-[58.995px] relative shrink-0 w-[55.993px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center py-[7.999px] relative size-full">
        <Icon8 />
        <Text8 />
      </div>
    </div>
  );
}

function WebLayout2() {
  return (
    <div className="absolute bg-white content-stretch flex h-[75.568px] items-center justify-between left-0 pl-[23.997px] pr-[24.015px] pt-[0.575px] top-[883.88px] w-[376.188px]" data-name="WebLayout">
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
      <WebLayout />
      <WebLayout1 />
      <WebLayout2 />
    </div>
  );
}