/**
 * 보광정 프리미엄 가맹 개설 웹 어플리케이션 시스템 스크립트
 */

// 상단 네비게이션 고정 제어 및 클래스 토글
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
});

// 모바일 드로어 컨트롤러 (반응형 메뉴용 규격)
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  if (navLinks) navLinks.classList.toggle('active');
}
function closeMenu() {
  const navLinks = document.getElementById('navLinks');
  if (navLinks) navLinks.classList.remove('active');
}

// 미디어 무드 필름 영상 모달 제어 처리
function playMockVideo() {
  const videoModal = document.getElementById('videoModal');
  if (videoModal) videoModal.classList.add('active');
}
function closeVideoModal() {
  const videoModal = document.getElementById('videoModal');
  if (videoModal) videoModal.classList.remove('active');
}

// 프리미엄 가맹수익 계산 시뮬레이터 실시간 수식 알고리즘
function calculateROI() {
  const sizeInput = document.getElementById('sim-size');
  if (!sizeInput) return;
  const size = parseInt(sizeInput.value);

  // 화면 인디케이터 맵핑 업데이트
  const rangeVal = document.getElementById('range-val');
  if (rangeVal) rangeVal.innerText = size;

  // 가맹 투자비 산출 공식 모델링
  const baseFees = 2000;
  const interiorCost = size * 240;
  const equipmentCost = size * 90;
  const totalInvestment = baseFees + interiorCost + equipmentCost;

  // 테이블 규모당 손익 바인딩 밸류 연산
  const sLow = size * 220;
  const sHigh = size * 280;
  const nLow = Math.floor(sLow * 0.28);
  const nHigh = Math.floor(sHigh * 0.30);

  function formatMoney(n) {
    if (n >= 10000) return Math.floor(n / 10000) + '억 ' + (n % 10000 > 0 ? (n % 10000) + '만' : '') + ' 원';
    return n + '만 원';
  }

  // DOM 텍스트 노드 업데이트 노출
  const resInvest = document.getElementById('res-investment') || document.getElementById('res-invest');
  const resSales = document.getElementById('res-sales');
  const resNet = document.getElementById('res-net-profit') || document.getElementById('res-net');

  if (resInvest) resInvest.innerText = '약 ' + formatMoney(totalInvestment);
  if (resSales) resSales.innerText = formatMoney(sLow) + ' ~ ' + formatMoney(sHigh);
  if (resNet) resNet.innerText = formatMoney(nLow) + ' ~ ' + formatMoney(nHigh) + ' (순수익률 28~30%)';
}

// 하위 호환성 링크용 래퍼 함수 정의
function calcROI() {
  calculateROI();
}

// 비동기 폼 이메일 전송 백그라운드 Ajax 트랜잭션 알고리즘
async function handleFormSubmit(event) {
  event.preventDefault(); // 기본 폼 라우팅 차단 (새로고침 방지)

  const form = event.target;
  const status = document.getElementById("successModal");
  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      if (status) status.classList.add('active'); // 성공 팝업 모달창 출력
      form.reset(); // 버퍼 클리어 및 인풋 초기화
    } else {
      alert("신청서 접수 전송에 실패했습니다. 잠시 후 다시 시도해 주세요.");
    }
  } catch (error) {
    alert("네트워크 통신 중 요류가 발생했습니다.");
  }
}

// 성공 모달 닫기 제어 프로시저
function closeSuccessModal() {
  const successModal = document.getElementById('successModal');
  if (successModal) successModal.classList.remove('active');
}

// 지표 카운트업 모션 엔진 스크립트 알고리즘
function countUp(el, target, duration, decimal, suffix) {
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    const display = decimal ? current.toFixed(decimal) : Math.floor(current).toLocaleString('ko-KR');
    el.textContent = display + suffix;
  }, 16);
}

// 가상 카카오톡 빠른상담 자동바인딩 훅 매크로
function setKakaoConsultation() {
  const nameInput = document.getElementById('form-name');
  const telInput = document.getElementById('form-tel');
  const areaInput = document.getElementById('form-area');
  const budgetInput = document.getElementById('form-budget');
  const typeInput = document.getElementById('form-type') || document.getElementById('form-msg');

  if (nameInput) nameInput.value = "카카오톡 빠른상담";
  if (telInput) telInput.value = "010-1234-5678";
  if (areaInput) areaInput.value = "카카오 챗봇 자동 연동";
  if (budgetInput) budgetInput.value = "1억 ~ 2억";
  if (typeInput) typeInput.value = "카카오 문의 연동 점포 확인 필요";

  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// 이벤트 리스너 이니셜라이저 등록
document.addEventListener('DOMContentLoaded', () => {
  calcROI(); // 시뮬레이터 수치 초기 연산 실행

  // Form 이벤트 리스너 바인딩
  const form = document.getElementById('franchiseForm');
  if (form) {
    form.addEventListener('submit', handleFormSubmit);
  }

  // 지표 영역 인터섹션 관찰 레이아웃 활성화
  const numEls = document.querySelectorAll('.num-val[data-target]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.done) {
        entry.target.dataset.done = 'true';
        const target = parseFloat(entry.target.dataset.target);
        const decimal = parseInt(entry.target.dataset.decimal || '0');
        const suffix = entry.target.dataset.suffix || '';
        countUp(entry.target, target, 1800, decimal, suffix);
      }
    });
  }, { threshold: 0.5 });

  numEls.forEach(el => observer.observe(el));
});