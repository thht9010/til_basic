window.addEventListener("load", function () {
  // 데이터
  const liveApiData = [
    {
      uid: 1,
      링크: "#",
      이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/159/20250612081529.png",
      alt: "라이브",
      설정: "방송예정",
      타이틀: "[라마다 호텔] 해운대/여수/자온도/거제 4지점 라이브특가",
      날짜: "06월 16일 (월)",
      시간: "18:00",
      디테일이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/151/20250612014205.jpg",
      디테일alt: "상세정보",
      디테일타이틀: "[기획전] 푸꾸옥 자유여행 혜택 보기",
    },
    {
      uid: 1,
      링크: "#",
      이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/159/20250612081529.png",
      alt: "라이브",
      설정: "방송예정",
      타이틀: "[라마다 호텔] 해운대/여수/자온도/거제 4지점 라이브특가",
      날짜: "06월 16일 (월)",
      시간: "18:00",
      디테일이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/151/20250612014205.jpg",
      디테일alt: "상세정보",
      디테일타이틀: "[기획전] 푸꾸옥 자유여행 혜택 보기",
    },
    {
      uid: 1,
      링크: "#",
      이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/159/20250612081529.png",
      alt: "라이브",
      설정: "방송예정",
      타이틀: "[라마다 호텔] 해운대/여수/자온도/거제 4지점 라이브특가",
      날짜: "06월 16일 (월)",
      시간: "18:00",
      디테일이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/151/20250612014205.jpg",
      디테일alt: "상세정보",
      디테일타이틀: "[기획전] 푸꾸옥 자유여행 혜택 보기",
    },
    {
      uid: 1,
      링크: "#",
      이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/159/20250612081529.png",
      alt: "라이브",
      설정: "방송예정",
      타이틀: "[라마다 호텔] 해운대/여수/자온도/거제 4지점 라이브특가",
      날짜: "06월 16일 (월)",
      시간: "18:00",
      디테일이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/151/20250612014205.jpg",
      디테일alt: "상세정보",
      디테일타이틀: "[기획전] 푸꾸옥 자유여행 혜택 보기",
    },
    {
      uid: 1,
      링크: "#",
      이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/159/20250612081529.png",
      alt: "라이브",
      설정: "방송예정",
      타이틀: "[라마다 호텔] 해운대/여수/자온도/거제 4지점 라이브특가",
      날짜: "06월 16일 (월)",
      시간: "18:00",
      디테일이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/151/20250612014205.jpg",
      디테일alt: "상세정보",
      디테일타이틀: "[기획전] 푸꾸옥 자유여행 혜택 보기",
    },
    {
      uid: 1,
      링크: "#",
      이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/159/20250612081529.png",
      alt: "라이브",
      설정: "방송예정",
      타이틀: "[라마다 호텔] 해운대/여수/자온도/거제 4지점 라이브특가",
      날짜: "06월 16일 (월)",
      시간: "18:00",
      디테일이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/151/20250612014205.jpg",
      디테일alt: "상세정보",
      디테일타이틀: "[기획전] 푸꾸옥 자유여행 혜택 보기",
    },
    {
      uid: 1,
      링크: "#",
      이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/159/20250612081529.png",
      alt: "라이브",
      설정: "방송예정",
      타이틀: "[라마다 호텔] 해운대/여수/자온도/거제 4지점 라이브특가",
      날짜: "06월 16일 (월)",
      시간: "18:00",
      디테일이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/151/20250612014205.jpg",
      디테일alt: "상세정보",
      디테일타이틀: "[기획전] 푸꾸옥 자유여행 혜택 보기",
    },
    {
      uid: 1,
      링크: "#",
      이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/159/20250612081529.png",
      alt: "라이브",
      설정: "방송예정",
      타이틀: "[라마다 호텔] 해운대/여수/자온도/거제 4지점 라이브특가",
      날짜: "06월 16일 (월)",
      시간: "18:00",
      디테일이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/151/20250612014205.jpg",
      디테일alt: "상세정보",
      디테일타이틀: "[기획전] 푸꾸옥 자유여행 혜택 보기",
    },
    {
      uid: 1,
      링크: "#",
      이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/159/20250612081529.png",
      alt: "라이브",
      설정: "방송예정",
      타이틀: "[라마다 호텔] 해운대/여수/자온도/거제 4지점 라이브특가",
      날짜: "06월 16일 (월)",
      시간: "18:00",
      디테일이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/151/20250612014205.jpg",
      디테일alt: "상세정보",
      디테일타이틀: "[기획전] 푸꾸옥 자유여행 혜택 보기",
    },
    {
      uid: 1,
      링크: "#",
      이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/159/20250612081529.png",
      alt: "라이브",
      설정: "방송예정",
      타이틀: "[라마다 호텔] 해운대/여수/자온도/거제 4지점 라이브특가",
      날짜: "06월 16일 (월)",
      시간: "18:00",
      디테일이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/151/20250612014205.jpg",
      디테일alt: "상세정보",
      디테일타이틀: "[기획전] 푸꾸옥 자유여행 혜택 보기",
    },
    {
      uid: 1,
      링크: "#",
      이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/159/20250612081529.png",
      alt: "라이브",
      설정: "방송예정",
      타이틀: "[라마다 호텔] 해운대/여수/자온도/거제 4지점 라이브특가",
      날짜: "06월 16일 (월)",
      시간: "18:00",
      디테일이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/151/20250612014205.jpg",
      디테일alt: "상세정보",
      디테일타이틀: "[기획전] 푸꾸옥 자유여행 혜택 보기",
    },
    {
      uid: 1,
      링크: "#",
      이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/159/20250612081529.png",
      alt: "라이브",
      설정: "방송예정",
      타이틀: "[라마다 호텔] 해운대/여수/자온도/거제 4지점 라이브특가",
      날짜: "06월 16일 (월)",
      시간: "18:00",
      디테일이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/151/20250612014205.jpg",
      디테일alt: "상세정보",
      디테일타이틀: "[기획전] 푸꾸옥 자유여행 혜택 보기",
    },
  ];

  // html 태그
  const livePos = document.querySelector(".sw_live .swiper-wrapper");
  let html = `
<div class="swiper-slide">
  <a href="${liveApiData[0].링크}" class="live_slide_item">
    <div class="live_image">
      <img
        src="${liveApiData[0].이미지}"
        alt="${liveApiData[0].alt}"
      />
    </div>
    <div class="live_info">
      <div class="live_state">
        <span class="live_wait">${liveApiData[0].설정}</span>
      </div>
      <p class="live_item_title">
        ${liveApiData[0].타이틀}
      </p>
      <div class="live_day">
        <div class="live_day_date">${liveApiData[0].날짜}</div>
        <div class="live_day_time">${liveApiData[0].시간}</div>
      </div>
    </div>
    <div class="live_detail">
      <div class="live_detail_image">
        <img
          src="${liveApiData[0].디테일이미지}"
          alt="${liveApiData[0].디테일alt}"
        />
      </div>
      <p class="live_detail_title">
        ${liveApiData[0].디테일타이틀}
      </p>
    </div>
  </a>
</div>
`;

  // 실제 데이터 개수 만큼 slide html 만들기
  html = ``;
  for (let i = 0; i < liveApiData.length; i++) {
    let tag = `
    <div class="swiper-slide">
      <a href="${liveApiData[i].링크}" class="live_slide_item">
        <div class="live_image">
          <img
            src="${liveApiData[i].이미지}"
            alt="${liveApiData[i].alt}"
          />
        </div>
        <div class="live_info">
          <div class="live_state">
            <span class="live_wait">${liveApiData[i].설정}</span>
          </div>
          <p class="live_item_title">
            ${liveApiData[i].타이틀}
          </p>
          <div class="live_day">
            <div class="live_day_date">${liveApiData[i].날짜}</div>
            <div class="live_day_time">${liveApiData[i].시간}</div>
          </div>
        </div>
        <div class="live_detail">
          <div class="live_detail_image">
            <img
              src="${liveApiData[i].디테일이미지}"
              alt="${liveApiData[i].디테일alt}"
            />
          </div>
          <p class="live_detail_title">
            ${liveApiData[i].디테일타이틀}
          </p>
        </div>
        
    `;

    // for (let j = 0; j < liveApiData[i].디테일타이틀.length; j++) {
    //   tag = tag + `${liveApiData[i].디테일타이틀}`;
    // }

    tag =
      tag +
      `</p>
    </div>
    
      </a>
    </div>
    `;

    html = html + tag;
  }

  livePos.innerHTML = html;
  // swiper 만들기 실행
  new Swiper(".sw_live", {
    slidesPerView: 8,
    spaceBetween: 10,
    slidesPerGroup: 1,
    navigation: {
      nextEl: ".live_slide_next",
      prevEl: ".live_slide_prev",
    },
    breakpoints: {
      960: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
});
