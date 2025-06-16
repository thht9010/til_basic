window.addEventListener("load", function () {
  const ticketApiData = [
    {
      링크: "#",
      이미지:
        "https://ticketimage.interpark.com/Play/image/large/25/25005076_p.gif",
      alt: "포스터",
      티켓랭크: "1",
      티켓타이틀: "뮤지컬 <멤피스>",
      티켓장소: "충무아트센터 대극장",
      티켓날짜: "2025.06.17 ~ 2025.09.21",
      티켓단독알림: "단독판매",
      티켓좌석알림: "좌석우위",
    },
    {
      링크: "#",
      이미지:
        "https://ticketimage.interpark.com/Play/image/large/25/25005076_p.gif",
      alt: "포스터",
      티켓랭크: "1",
      티켓타이틀: "뮤지컬 <멤피스>",
      티켓장소: "충무아트센터 대극장",
      티켓날짜: "2025.06.17 ~ 2025.09.21",
      티켓단독알림: "단독판매",
      티켓좌석알림: "좌석우위",
    },
    {
      링크: "#",
      이미지:
        "https://ticketimage.interpark.com/Play/image/large/25/25005076_p.gif",
      alt: "포스터",
      티켓랭크: "1",
      티켓타이틀: "뮤지컬 <멤피스>",
      티켓장소: "충무아트센터 대극장",
      티켓날짜: "2025.06.17 ~ 2025.09.21",
      티켓단독알림: "단독판매",
      티켓좌석알림: "좌석우위",
    },
    {
      링크: "#",
      이미지:
        "https://ticketimage.interpark.com/Play/image/large/25/25005076_p.gif",
      alt: "포스터",
      티켓랭크: "1",
      티켓타이틀: "뮤지컬 <멤피스>",
      티켓장소: "충무아트센터 대극장",
      티켓날짜: "2025.06.17 ~ 2025.09.21",
      티켓단독알림: "단독판매",
      티켓좌석알림: "좌석우위",
    },
    {
      링크: "#",
      이미지:
        "https://ticketimage.interpark.com/Play/image/large/25/25005076_p.gif",
      alt: "포스터",
      티켓랭크: "1",
      티켓타이틀: "뮤지컬 <멤피스>",
      티켓장소: "충무아트센터 대극장",
      티켓날짜: "2025.06.17 ~ 2025.09.21",
      티켓단독알림: "단독판매",
      티켓좌석알림: "좌석우위",
    },
    {
      링크: "#",
      이미지:
        "https://ticketimage.interpark.com/Play/image/large/25/25005076_p.gif",
      alt: "포스터",
      티켓랭크: "1",
      티켓타이틀: "뮤지컬 <멤피스>",
      티켓장소: "충무아트센터 대극장",
      티켓날짜: "2025.06.17 ~ 2025.09.21",
      티켓단독알림: "단독판매",
      티켓좌석알림: "좌석우위",
    },
    {
      링크: "#",
      이미지:
        "https://ticketimage.interpark.com/Play/image/large/25/25005076_p.gif",
      alt: "포스터",
      티켓랭크: "1",
      티켓타이틀: "뮤지컬 <멤피스>",
      티켓장소: "충무아트센터 대극장",
      티켓날짜: "2025.06.17 ~ 2025.09.21",
      티켓단독알림: "단독판매",
      티켓좌석알림: "좌석우위",
    },
    {
      링크: "#",
      이미지:
        "https://ticketimage.interpark.com/Play/image/large/25/25005076_p.gif",
      alt: "포스터",
      티켓랭크: "1",
      티켓타이틀: "뮤지컬 <멤피스>",
      티켓장소: "충무아트센터 대극장",
      티켓날짜: "2025.06.17 ~ 2025.09.21",
      티켓단독알림: "단독판매",
      티켓좌석알림: "좌석우위",
    },
  ];
  const ticketPos = document.querySelector(".sw.ticket .swiper-wrapper");
  let html = `
  <div class="swiper-slide">
    <a href="${ticketApiData[0].링크}" class="ticket_slide_item">
      <div class="ticket_image">
        <img
          src="${ticketApiData[0].이미지}"
          alt="${ticketApiData[0].포스터}"
        />
        <div class="ticket_rank">${ticketApiData[0].티켓랭크}</div>
      </div>
      <div class="ticket_info">
        <p class="ticket_item_title">${ticketApiData[0].티켓타이틀}</p>
        <p class="ticket_place">${ticketApiData[0].티켓장소}</p>
        <p class="ticket_day">${ticketApiData[0].티켓날짜}</p>
        <div class="ticket_option">
          <span class="ticket_red">${ticketApiData[0].티켓단독알림}</span>
          <span class="ticket_blue">${ticketApiData[0].티켓좌석알림}</span>
        </div>
      </div>
    </a>
  </div>
  `;

  html = "";
  for (let i = 0; i < ticketApiData.length; i++) {
    let tag = `
    <div class="swiper-slide">
    <a href="${ticketApiData[i].링크}" class="ticket_slide_item">
      <div class="ticket_image">
        <img
          src="${ticketApiData[i].이미지}"
          alt="${ticketApiData[i].포스터}"
        />
        <div class="ticket_rank">${ticketApiData[i].티켓랭크}</div>
      </div>
      <div class="ticket_info">
        <p class="ticket_item_title">${ticketApiData[i].티켓타이틀}</p>
        <p class="ticket_place">${ticketApiData[i].티켓장소}</p>
        <p class="ticket_day">${ticketApiData[i].티켓날짜}</p>
        <div class="ticket_option">
          <span class="ticket_red">${ticketApiData[i].티켓단독알림}</span>
          <span class="ticket_blue">${ticketApiData[i].티켓좌석알림}</span>
        </div>
      </div>
    </a>
    </div>
    `;

    html = html + tag;
  }

  // swiper 만들기 실행
  new Swiper(".sw_ticket", {
    slidesPerView: 3,
    spaceBetween: 10,
    slidesPerGroup: 1,
    navigation: {
      nextEl: ".ticket_slide_next",
      prevEl: ".ticket_slide_prev",
    },
    breakpoints: {
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
