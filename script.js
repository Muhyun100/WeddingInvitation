/* script.js */

const weddingDate = "2026-05-09";
const message = document.getElementById("countdown-message");

function getDayDiffForMessage(targetDate) {
  const today = new Date();
  const target = new Date(targetDate);
  today.setHours(0, 0, 0, 0);
  target.setHours(0, 0, 0, 0);
  const diffTime = target.getTime() - today.getTime();
  return Math.round(diffTime / (1000 * 60 * 60 * 24));
}

function getCountdown(targetDate) {
  const now = new Date().getTime();
  const target = new Date(targetDate + "T00:00:00").getTime();
  const distance = target - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  return {
    distance,
    days: Math.max(days, 0),
    hours: Math.max(hours, 0),
    minutes: Math.max(minutes, 0),
    seconds: Math.max(seconds, 0)
  };
}

setInterval(function () {
  const dayDiffMessage = getDayDiffForMessage(weddingDate);
  if (dayDiffMessage > 0) {
    message.innerHTML = `무현 💗 보람의 결혼식이\n ${dayDiffMessage}일 남았습니다.`;
  } else if (dayDiffMessage === 0) {
    message.innerHTML = `오늘은 무현 💗 보람의 결혼식 입니다!`;
  } else {
    message.innerHTML = `무현 💗 보람의 결혼식이\n ${Math.abs(dayDiffMessage)}일 지났습니다.`;
  }
  const countdown = getCountdown(weddingDate);
  document.getElementById("days").innerText = countdown.days;
  document.getElementById("hours").innerText = countdown.hours;
  document.getElementById("minutes").innerText = countdown.minutes;
  document.getElementById("seconds").innerText = countdown.seconds;
  if (countdown.distance <= 0) {
    document.getElementById("days").innerText = 0;
    document.getElementById("hours").innerText = 0;
    document.getElementById("minutes").innerText = 0;
    document.getElementById("seconds").innerText = 0;
  }
}, 1000);

document.addEventListener("DOMContentLoaded", () => {
  // 기존 DOMContentLoaded 안 전체 유지
});

const grid = document.querySelector('.calendar-grid');
const firstDayIndex = 5; // 2026년 5월 1일은 금요일
for (let i = 0; i < firstDayIndex; i++) {
  const empty = document.createElement('div');
  grid.appendChild(empty);
}
for (let d = 1; d <= 31; d++) {
  const day = document.createElement('div');
  day.classList.add('day');
  const dayOfWeek = (firstDayIndex + d - 1) % 7;
  if (dayOfWeek === 0) day.classList.add('sun');
  if (dayOfWeek === 6) day.classList.add('sat');
  if (d === 9) day.classList.add('today'); // 결혼식 날짜
  if (d === 5) day.classList.add('holiday'); // 어린이날
  day.textContent = d;
  grid.appendChild(day);
}

// 수정된 썸네일 로딩 코드 (빠른 썸네일 + lazyload)
const imageList = [
  'gallery/E_S00025-1.jpg', 'gallery/E_S00060-1.jpg', 'gallery/E_S00152-1.jpg', 'gallery/E_S00310-1.jpg',
  'gallery/E_S00347-1.jpg', 'gallery/E_S00480-1.jpg', 'gallery/E_S00518-1.jpg', 'gallery/E_S00566-1.jpg',
  'gallery/E_S00609-1.jpg', 'gallery/E_S00673-1.jpg', 'gallery/E_S00794-1.jpg', 'gallery/E_S00944-1.jpg',
  'gallery/E_S01005-1.jpg', 'gallery/E_S01108-1.jpg', 'gallery/E_S01142-1.jpg', 'gallery/E_S01171-1.jpg',
  'gallery/E_S01187-1.jpg', 'gallery/E_S01271-1.jpg', 'gallery/E_S01288-1.jpg', 'gallery/E_S01405-1.jpg',
  'gallery/E_S01488-1.jpg', 'gallery/E_S01528-1.jpg', 'gallery/E_S01560-1.jpg', 'gallery/E_S01605-1.jpg',
  'gallery/E_S01635-1.jpg', 'gallery/E_S01644-1.jpg', 'gallery/E_S01711-1.jpg', 'gallery/E_S01742-1.jpg',
  'gallery/E_S01754-1.jpg', 'gallery/E_S01803-1.jpg', 'gallery/E_S01822-1.jpg', 'gallery/E_S01844-1.jpg',
  'gallery/E_S01858-1.jpg', 'gallery/E_S01917-1.jpg', 'gallery/E_S01950-1.jpg',
  'gallery/KakaoTalk_Photo_2026-01-31-16-56-04 001.jpeg', 'gallery/KakaoTalk_Photo_2026-01-31-16-56-05 002.jpeg',
  'gallery/KakaoTalk_Photo_2026-01-31-16-56-06 003.jpeg', 'gallery/KakaoTalk_Photo_2026-01-31-16-56-07 004.jpeg',
  'gallery/KakaoTalk_Photo_2026-01-31-16-56-08 005.jpeg', 'gallery/KakaoTalk_Photo_2026-01-31-16-56-09 006.jpeg',
  'gallery/KakaoTalk_Photo_2026-01-31-16-56-11 007.jpeg', 'gallery/KakaoTalk_Photo_2026-01-31-16-56-12 008.jpeg',
  'gallery/KakaoTalk_Photo_2026-01-31-16-56-13 009.jpeg', 'gallery/KakaoTalk_Photo_2026-01-31-16-56-14 010.jpeg',
  'gallery/KakaoTalk_Photo_2026-01-31-16-56-15 011.jpeg', 'gallery/KakaoTalk_Photo_2026-01-31-16-56-16 012.jpeg',
  'gallery/KakaoTalk_Photo_2026-01-31-16-56-18 013.jpeg', 'gallery/KakaoTalk_Photo_2026-01-31-16-56-18 014.jpeg',
  'gallery/KakaoTalk_Photo_2026-01-31-16-56-19 015.jpeg', 'gallery/KakaoTalk_Photo_2026-01-31-16-56-21 016.jpeg',
  'gallery/KakaoTalk_Photo_2026-01-31-16-56-21 017.jpeg', 'gallery/KakaoTalk_Photo_2026-01-31-16-56-22 018.jpeg',
  'gallery/KakaoTalk_Photo_2026-01-31-16-56-24 019.jpeg', 'gallery/KakaoTalk_Photo_2026-01-31-16-56-24 020.jpeg'
];
const galleryContainer = document.getElementById('gallery-thumbnails');
const loadMoreBtn = document.getElementById('load-more');
let currentIndex = 0;
const showLessBtn = document.getElementById('show-less');

function loadThumbnails() {
  const nextImages = imageList.slice(currentIndex, currentIndex + 9);
  nextImages.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src; // 원본 이미지 로드
    img.alt = `사진 ${currentIndex + index + 1}`;
    img.dataset.index = currentIndex + index;
    img.loading = 'lazy';
    galleryContainer.appendChild(img);
  });
  currentIndex += 9;
  if (currentIndex >= imageList.length) {
    loadMoreBtn.style.display = 'none';
    showLessBtn.style.display = 'block';
  }

  document.querySelectorAll('.gallery-thumbnails img.lazyload').forEach(img => observer.observe(img));
}

// 고화질 lazyload observer
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      const highSrc = img.dataset.src;
      const highImg = new Image();
      highImg.src = highSrc;
      highImg.onload = () => {
        img.src = highSrc;
        img.classList.add('loaded');
      };
      obs.unobserve(img);
    }
  });
});

loadThumbnails();
loadMoreBtn.addEventListener('click', loadThumbnails);
showLessBtn.addEventListener('click', () => {
  galleryContainer.innerHTML = '';
  currentIndex = 0;
  loadThumbnails();
  loadMoreBtn.style.display = 'block';
  showLessBtn.style.display = 'none';
});

// 라이트박스 기능 비활성화 (사진 확대 기능 제거)
// const lightbox = document.getElementById('lightbox');
// const lightboxImage = document.getElementById('lightbox-image');
// let currentLightboxIndex = 0;
//
// galleryContainer.addEventListener('click', (e) => {
//   if (e.target.tagName === 'IMG') {
//     currentLightboxIndex = Number(e.target.dataset.index);
//     lightboxImage.src = imageList[currentLightboxIndex];
//     lightbox.style.display = 'flex';
//   }
// });
//
// document.getElementById('close-lightbox').addEventListener('click', () => {
//   lightbox.style.display = 'none';
// });
//
// document.getElementById('prev').addEventListener('click', () => {
//   currentLightboxIndex = (currentLightboxIndex - 1 + imageList.length) % imageList.length;
//   lightboxImage.src = imageList[currentLightboxIndex];
// });
//
// document.getElementById('next').addEventListener('click', () => {
//   currentLightboxIndex = (currentLightboxIndex + 1) % imageList.length;
//   lightboxImage.src = imageList[currentLightboxIndex];
// });


document.addEventListener('DOMContentLoaded', () => {
  // 타이핑 텍스트 효과
  const textElement = document.getElementById('typing-text');
  const text = "백무현 💗 이보람 \n서로의 마음에 닿아,\n저희 결혼합니다.";
  let i = 0;
  const typing = () => {
    if (i < text.length) {
      const char = text[i] === '\n' ? '<br>' : text[i];
      textElement.innerHTML += char;
      i++;
      setTimeout(typing, 120);
    }
  };
  typing();


  // Lazyload 이미지 로딩
  const lazyImg = document.querySelector('.lazyload');
  const highResSrc = lazyImg.dataset.src;
  const loadImage = () => {
    const img = new Image();
    img.src = highResSrc;
    img.onload = () => {
      lazyImg.src = highResSrc;
      lazyImg.classList.add('loaded');
    };
  };
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          loadImage();
          observer.unobserve(lazyImg);
        }
      });
    });
    observer.observe(lazyImg);
  } else {
    loadImage();
  }

  // 배경음악 토글
  const audio = document.getElementById('bg-music');
  const icon = document.getElementById('music-icon');

  window.addEventListener('load', () => {
    audio.play().then(() => {
      icon.src = 'gallery/music_01_on.png';
    }).catch(() => {
      icon.src = 'gallery/music_01_off.png';
    });
  });

  document.getElementById('music-toggle').addEventListener('click', () => {
    icon.style.opacity = '0.3';
    setTimeout(() => {
      if (audio.paused) {
        audio.play().then(() => {
          icon.src = 'gallery/music_01_on.png';
          icon.style.opacity = '1';
        }).catch(() => {
          icon.src = 'gallery/music_01_off.png';
          icon.style.opacity = '1';
        });
      } else {
        audio.pause();
        icon.src = 'gallery/music_01_off.png';
        icon.style.opacity = '1';
      }
    }, 150);
  });

  // 계좌 토글
  document.querySelectorAll('.account-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      const content = document.getElementById(targetId);
      const arrow = button.querySelector('.arrow');

      const isOpen = content.classList.contains('open');
      content.classList.toggle('open');
      button.classList.toggle('open');
      arrow.textContent = isOpen ? '▼' : '▲';
    });
  });

  // 종이청첩장 모달
  const openInvitationBtn = document.getElementById('open-invitation');
  const closeInvitationBtn = document.getElementById('close-invitation');
  const invitationModal = document.getElementById('invitation-modal');

  openInvitationBtn.addEventListener('click', () => {
    invitationModal.style.display = 'flex';
  });

  closeInvitationBtn.addEventListener('click', () => {
    invitationModal.style.display = 'none';
  });

  invitationModal.addEventListener('click', (e) => {
    if (e.target === invitationModal) {
      invitationModal.style.display = 'none';
    }
  });

  // Kakao 공유
  Kakao.init('add6eefb5d19f3b8ab4c20cd75e5691e');
  document.getElementById('kakaotalk-sharing-btn').addEventListener('click', function () {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '백무현 💗 이보람 결혼합니다',
        description: '2026년 5월 9일 토요일 오전 11시, 포스코센터 서관 4층 아트홀',
        imageUrl: 'https://muhyun100.github.io/WeddingInvitation/kakao_thumbnail.jpeg',
        link: {
          mobileWebUrl: 'https://muhyun100.github.io/WeddingInvitation/',
          webUrl: 'https://muhyun100.github.io/WeddingInvitation/',
        },
      },
      buttons: [
        {
          title: '모바일 청첩장 보기',
          link: {
            mobileWebUrl: 'https://muhyun100.github.io/WeddingInvitation/',
            webUrl: 'https://muhyun100.github.io/WeddingInvitation/',
          },
        },
      ],
    });
  });

  // Kakao Map 바로 로딩
  loadKakaoMap();

  // 복사 토스트 생성
  let copyToast = document.querySelector('.copy-toast');
  if (!copyToast) {
    copyToast = document.createElement('div');
    copyToast.className = 'copy-toast';
    copyToast.textContent = '복사되었습니다!';
    document.body.appendChild(copyToast);
  }

  // 주소 복사
  const copyAddress = document.getElementById('copy-address');
  copyAddress.addEventListener('click', () => {
    navigator.clipboard.writeText(copyAddress.innerText).then(() => {
      copyToast.style.display = 'block';
      copyToast.style.opacity = '1';
      copyToast.style.transition = 'opacity 0.5s ease';
      setTimeout(() => {
        copyToast.style.opacity = '0';
      }, 1500);
    });
  });

  // 서울대학교 연구공원 웨딩홀 텍스트 복사 기능
  const weddingHallElement = document.getElementById('copy-hall-name');
  if (weddingHallElement) {
    weddingHallElement.style.cursor = 'pointer';
    weddingHallElement.addEventListener('click', () => {
      navigator.clipboard.writeText(weddingHallElement.innerText).then(() => {
        copyToast.style.display = 'block';
        copyToast.style.opacity = '1';
        copyToast.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
          copyToast.style.opacity = '0';
        }, 1500);
      });
    });
  }


  // 계좌 복사
  const accountCopies = document.querySelectorAll('.copy-account');
  accountCopies.forEach(element => {
    element.addEventListener('click', () => {
      const accountNum = element.dataset.account.replace(/-/g, '');
      navigator.clipboard.writeText(accountNum).then(() => {
        copyToast.style.display = 'block';
        copyToast.style.opacity = '1';
        copyToast.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
          copyToast.style.opacity = '0';
        }, 1500);
      });
    });
  });

  // 약도 이미지 토글
  const toggleBtn = document.getElementById('toggle-map-image');
  const mapImageContainer = document.getElementById('map-image-container');
  if (toggleBtn && mapImageContainer) {
    toggleBtn.addEventListener('click', () => {
      mapImageContainer.classList.toggle('open');
      toggleBtn.textContent = mapImageContainer.classList.contains('open') ? '닫기' : '약도 확인하기';
    });
  }
});

function loadKakaoMap() {
  const script = document.createElement("script");
  script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=add6eefb5d19f3b8ab4c20cd75e5691e&autoload=false";
  script.onload = () => {
    kakao.maps.load(() => {
      const container = document.getElementById("kakao-map");
      const options = {
        center: new kakao.maps.LatLng(37.50579, 127.0561),
        level: 4,
        draggable: true,
        scrollwheel: true
      };
      const map = new kakao.maps.Map(container, options);
      new kakao.maps.Marker({
        position: new kakao.maps.LatLng(37.50579, 127.0561),
        map: map
      });
    });
  };
  document.head.appendChild(script);
}
