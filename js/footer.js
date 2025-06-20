window.addEventListener("DOMContentLoaded", function () {
  // 버튼 클릭 시 내용보이고, 숨기기 토글(반복)
  let isOpen = false; // true
  // 아이디 요소를 보관
  const mbBt = document.querySelector("#mb_bt");
  // 보이고 숨겨지는 대상
  const hideTarget = document.querySelectorAll(".mb_footer_hide");
  // 아이콘 이미지
  const arrowImg = document.querySelector("#mb_bt i img");

  // 버튼 클릭 확인 코드
  mbBt.addEventListener("click", function () {
    // = 뒤에서부터 앞으로, 누르면 반대로
    isOpen = !isOpen;
    showHideMenu();
  });

  window.addEventListener("resize", function () {
    // 웹 브라우저 너비가 1024보다 큰지 작은지
    const winW = window.outerWidth;
    if (winW >= 1024) {
      isOpen = false;
      showHideMenu();
    }
  });

  // 모바일 메뉴 관련 함수
  function showHideMenu() {
    if (isOpen === true) {
      // 펼치기
      arrowImg.classList.add("img-up");
      for (let item of hideTarget) {
        item.classList.add("mb_footer_show");
      }
    } else {
      // 닫기
      arrowImg.classList.remove("img-up");
      for (let item of hideTarget) {
        item.classList.remove("mb_footer_show");
      }
    }
  }
});
