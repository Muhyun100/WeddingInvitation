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
    message.innerHTML = `무현 💗 보람의 결혼식이\n <strong>${dayDiffMessage}일</strong> 남았습니다.`;
  } else if (dayDiffMessage === 0) {
    message.innerHTML = `오늘은 무현 💗 보람의 <strong>결혼식</strong> 입니다!`;
  } else {
    message.innerHTML = `무현 💗 보람의 결혼식이\n <strong>${Math.abs(dayDiffMessage)}일</strong> 지났습니다.`;
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

// 달력: 5월 3일~9일 (한 주만 표시)
const grid = document.querySelector('.calendar-grid');
const weekDays = [3, 4, 5, 6, 7, 8, 9]; // 5월 3일(일)~9일(토)
weekDays.forEach((d, i) => {
  const day = document.createElement('div');
  day.classList.add('day');
  if (i === 0) day.classList.add('sun'); // 일요일
  if (i === 6) day.classList.add('sat'); // 토요일
  if (d === 9) day.classList.add('today'); // 결혼식 날짜
  if (d === 5) day.classList.add('holiday'); // 어린이날
  day.textContent = d;
  grid.appendChild(day);
});

// 갤러리 이미지 목록 (파일명 업데이트)
const imageList = [
  'gallery/E_S00025-1(재3)-2-2.jpg', 'gallery/E_S00060-1(재)-2-2.jpg', 'gallery/E_S00152-1(재2)-2-2.jpg', 'gallery/E_S00310-1(재2)-2-2.jpg',
  'gallery/E_S00347-1(재)-2-2.jpg', 'gallery/E_S00480-1(재)-2-2.jpg', 'gallery/E_S00518-1(재4)-2-2.jpg', 'gallery/E_S00566-1-2-2.jpg',
  'gallery/E_S00609-1-2-2.jpg', 'gallery/E_S00673-1(재)-2-2.jpg', 'gallery/E_S00794-1-2-2.jpg', 'gallery/E_S00944-1-2-2.jpg',
  'gallery/E_S01005-1-2-2.jpg', 'gallery/E_S01108-1(재1)-2-2.jpg', 'gallery/E_S01142-1-2-2.jpg', 'gallery/E_S01171-1-2-2.jpg',
  'gallery/E_S01187-1-2-2.jpg', 'gallery/E_S01271-1(재)-2-2.jpg', 'gallery/E_S01288-1(재3)-2-2.jpg', 'gallery/E_S01405-1(재4)-2-2.jpg',
  'gallery/E_S01488-1-2-2.jpg', 'gallery/E_S01528-1(재1)-2-2.jpg', 'gallery/E_S01560-1(재)-2-2.jpg', 'gallery/E_S01605-1-2-2.jpg',
  'gallery/E_S01635-1-2-2.jpg', 'gallery/E_S01644-1-2-2.jpg', 'gallery/E_S01742-1-2-2.jpg', 'gallery/E_S01754-1(재)-2-2.jpg',
  'gallery/E_S01803-1-2-2.jpg', 'gallery/E_S01822-1-2-2.jpg', 'gallery/E_S01844-1-2-2.jpg', 'gallery/E_S01858-1(재)-2-2.jpg',
  'gallery/E_S01917-1-2-2.jpg', 'gallery/E_S01950-1-2-2.jpg',
  'gallery/KakaoTalk_Photo_2026-01-31-16-56-05 002.jpg', 'gallery/KakaoTalk_Photo_2026-01-31-16-56-06 003.jpg',
  'gallery/KakaoTalk_Photo_2026-01-31-16-56-07 004.jpg', 'gallery/KakaoTalk_Photo_2026-01-31-16-56-09 006.jpg',
  'gallery/KakaoTalk_Photo_2026-01-31-16-56-11 007.jpg', 'gallery/KakaoTalk_Photo_2026-01-31-16-56-12 008.jpg',
  'gallery/KakaoTalk_Photo_2026-01-31-16-56-15 011.jpg', 'gallery/KakaoTalk_Photo_2026-01-31-16-56-16 012.jpg'
];
const galleryContainer = document.getElementById('gallery-thumbnails');
const loadMoreBtn = document.getElementById('load-more');
let currentIndex = 0;
const showLessBtn = document.getElementById('show-less');

function loadThumbnails() {
  const nextImages = imageList.slice(currentIndex, currentIndex + 12); // 12개씩 로드
  nextImages.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = `사진 ${currentIndex + index + 1}`;
    img.dataset.index = currentIndex + index;
    img.loading = 'lazy';
    galleryContainer.appendChild(img);
  });
  currentIndex += 12;
  if (currentIndex >= imageList.length) {
    loadMoreBtn.style.display = 'none';
    showLessBtn.style.display = 'block';
  }
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

// 라이트박스 기능 (원본 크기로 보기 + 스와이프 + 뒤로가기)
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
let currentLightboxIndex = 0;

// 터치 스와이프 변수
let touchStartX = 0;
let touchEndX = 0;

galleryContainer.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    currentLightboxIndex = Number(e.target.dataset.index);
    lightboxImage.src = imageList[currentLightboxIndex];
    lightbox.style.display = 'flex';
    // 히스토리에 상태 추가 (뒤로가기 시 라이트박스만 닫히게)
    history.pushState({ lightbox: true }, '');
  }
});

// 뒤로가기 버튼 처리
window.addEventListener('popstate', (e) => {
  if (lightbox.style.display === 'flex') {
    lightbox.style.display = 'none';
  }
});

function closeLightbox() {
  if (lightbox.style.display === 'flex') {
    lightbox.style.display = 'none';
    // 히스토리 뒤로 가지 않고 현재 상태 유지
    if (history.state && history.state.lightbox) {
      history.back();
    }
  }
}

document.getElementById('close-lightbox').addEventListener('click', closeLightbox);

document.getElementById('prev').addEventListener('click', () => {
  currentLightboxIndex = (currentLightboxIndex - 1 + imageList.length) % imageList.length;
  lightboxImage.src = imageList[currentLightboxIndex];
});

document.getElementById('next').addEventListener('click', () => {
  currentLightboxIndex = (currentLightboxIndex + 1) % imageList.length;
  lightboxImage.src = imageList[currentLightboxIndex];
});

// 스와이프 기능
lightbox.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

lightbox.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
}, { passive: true });

function handleSwipe() {
  const swipeThreshold = 50;
  const diff = touchStartX - touchEndX;

  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      // 왼쪽으로 스와이프 -> 다음 사진
      currentLightboxIndex = (currentLightboxIndex + 1) % imageList.length;
    } else {
      // 오른쪽으로 스와이프 -> 이전 사진
      currentLightboxIndex = (currentLightboxIndex - 1 + imageList.length) % imageList.length;
    }
    lightboxImage.src = imageList[currentLightboxIndex];
  }
}

// 배경 클릭 시 닫기
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});


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

  // 배경음악 자동재생 (Safari/Chrome 정책 대응)
  const audio = document.getElementById('bg-music');
  const icon = document.getElementById('music-icon');
  let musicStarted = false;

  function tryPlayMusic() {
    if (musicStarted) return;
    audio.play().then(() => {
      musicStarted = true;
      icon.src = 'gallery/music_01_on.png';
      // 성공하면 모든 이벤트 리스너 제거
      document.removeEventListener('click', tryPlayMusic);
      document.removeEventListener('touchend', tryPlayMusic);
      document.removeEventListener('scroll', tryPlayMusic);
    }).catch(() => {
      icon.src = 'gallery/music_01_off.png';
    });
  }

  // 페이지 로드 시 자동재생 시도
  tryPlayMusic();
  // 브라우저가 차단할 경우, 사용자 첫 인터랙션 시 재생
  // Safari는 touchend에서만 오디오 재생 허용 (touchstart 불가)
  document.addEventListener('click', tryPlayMusic);
  document.addEventListener('touchend', tryPlayMusic);
  document.addEventListener('scroll', tryPlayMusic, { once: true });

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

  // 계좌 정보 (토글 제거 - 항상 표시)

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
