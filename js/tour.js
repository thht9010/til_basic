window.addEventListener("load", function () {
  // 카테고리 버튼 클릭하면 포커스 클래스 이동하기
  // 포커스 되었을 때 적용될 포커스 이름
  const focusName = "tour_focus";
  const bts = document.querySelectorAll(".tour_button_list li button");
  // 태그 등의 DOM 들을 모아둔 배열을 다룰때 추천 반복 문법
  bts.forEach(function (item) {
    item.addEventListener("click", function () {
      // 모든 버튼에서 tour_focus 클래스 제거
      removeFocus();
      // 클릭된 버튼은 tour_focus 클래스 추가
      item.classList.add(focusName);
    });
  });

  // 버튼에서 포커스 제거하는 기능
  function removeFocus() {
    bts.forEach(function (item) {
      item.classList.remove(focusName);
    });
  }
  // 슬라이드 태그 만들기
  const tourDataArr = [
    {
      id: 1,
      link: "#",
      city: "싱가포르",
      image:
        "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/061d3043-5ae3-4c4b-9914-f1acc804e7c1",
      alt: "싱가포르",
      sale: "선착순 5% 할인",
      title: "[공식 판매처] 싱가포르 F1 에어라인, 포뮬러 1 그랑프리 2025 티켓",
      price: "161,280",
    },
    {
      id: 2,
      link: "#",
      city: "호놀룰루",
      image:
        "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/18da9cff-8b9c-4fe8-bd20-405aef650a6b.jpeg",
      alt: "호놀룰루",
      sale: "5성급 인기호텔 15%쿠폰제공",
      title: "카라이 와이키키 비치 호텔",
      price: "476,500",
    },
    {
      id: 3,
      link: "#",
      city: "시드니",
      image:
        "https://media.triple.guide/triple-cms/c_fill,f_auto,h_450,w_580/7d4e0967-a6b5-47ae-92a8-9c5c1773b4a4.jpeg",
      alt: "시드니",
      sale: "노팁/노옵션",
      title: "[NO팁/옵션] 시드니 완전일주 6일",
      price: "1,749,000",
    },
    {
      id: 4,
      link: "#",
      city: "두바이/아부다비",
      image:
        "https://tourimage.interpark.com/product/tour/00161/A30/500/A3018969_21_583.jpg",
      alt: "두바이/아부다비",
      sale: "대한항공 이용, 자유일정 포함",
      title: "[두바이/아부다비 5일]대한항공,월드체인 5성,에미레이트몰 자유시간",
      price: "1,099,000",
    },
    {
      id: 5,
      link: "#",
      city: "방콕/파타야",
      image:
        "https://media.triple.guide/triple-cms/c_fill,f_auto,h_450,w_580/d3cd98d1-82a4-4b25-8631-49b49df8ab72.jpeg",
      alt: "방콕/파타야",
      sale: "노옵션, 니모섬 스노클링",
      title: "방콕파타야",
      price: "399,900",
    },
    {
      id: 6,
      link: "#",
      city: "괌",
      image:
        "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f1b28d59-1d3f-4ccf-9cd8-1b0eb0941ebb.jpeg",
      alt: "괌",
      sale: "전객실오션뷰 5성급호텔+10%쿠폰제공",
      title: "롯데 호텔 괌",
      price: "248,727",
    },
    {
      id: 7,
      link: "#",
      city: "나트랑",
      image:
        "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/01b0fa7d-b685-427c-bf3b-e30a905bcd5e.jpeg",
      alt: "나트랑",
      sale: "무료왕복셔틀+10%쿠폰제공",
      title: "더 아남 깜란",
      price: "226,440",
    },
    {
      id: 8,
      link: "#",
      city: "서울",
      image:
        "https://media.interparkcdn.net/interpark-tour/image/upload/w_640,h_410,c_limit/v1740021192/domstay/dd10d7149b6a49fd.jpg",
      alt: "서울",
      sale: "스튜디오 룸",
      title: "서머셋 팰리스",
      price: "159,900",
    },
    {
      id: 9,
      link: "#",
      city: "부산",
      image:
        "https://media.interparkcdn.net/interpark-tour/image/upload/w_640,h_410,c_limit/v1704207279/domstay/fb3e02d474c24e0b.jpg",
      alt: "부산",
      sale: "E.FLAT SUITE 하프오션뷰",
      title: "와이컬렉션 by UH 플랫 오시리아",
      price: "70,000",
    },
  ];

  // 1. 슬라이드 태그를 어디에 배치할 것인가?

  const swTourPos = document.querySelector(".sw_tour .swiper-wrapper");
  let htmlTag = "";

  for (let i = 0; i < tourDataArr.length; i++) {
    const tag = `
        <div class="swiper-slide">
            <a href="#" class="tour_item">
                <div class="tour_item_image">
                    <img
                        src="${tourDataArr[i].image}"
                        alt="${tourDataArr[i].alt}"
                    />
                </div>
                <div class="tour_item_info">
                    <p class="tour_city">${tourDataArr[i].city}</p>
                    <p class="tour_sale">${tourDataArr[i].sale}</p>
                    <p class="tour_item_title">${tourDataArr[i].title}</p>
                    <p class="tour_price"><b>${tourDataArr[i].price}</b>원~</p>
                </div>
            </a>
        </div>
        `;
    htmlTag = htmlTag + tag;
  }

  swTourPos.innerHTML = htmlTag;

  new Swiper(".sw_tour", {
    slidesPerView: 1,
    spaceBetween: 26,
    slidesPerGroup: 1,

    slidesPerView: 5,
    grid: {
      rows: 2,
      fill: "row",
    },

    spaceBetween: 10,
    slidesPerGroup: 1,

    navigation: {
      nextEl: ".tour_slide_next",
      prevEl: ".tour_slide_prev",
    },

    // 반응형
    breakpoints: {
      1024: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 26,
        grid: {
          rows: 1,
          fill: "row",
        },
      },
      1280: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 26,
        grid: {
          rows: 1,
          fill: "row",
        },
      },
    },
  });
});
