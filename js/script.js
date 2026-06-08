/**
 * 보광정 브랜드 페이지 비즈니스 로직 및 애니메이션 디렉터
 */

// 1. 네비게이션 스크롤 색상 스위처
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (nav) {
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }
});

// 2. 모바일 반응형 드롭다운 메뉴 여닫이 컨트롤러
function toggleMobileMenu() {
  const links = document.getElementById('navLinks');
  const icon = document.getElementById('menu-icon');
  if (!links || !icon) return;

  links.classList.toggle('active');
  if (links.classList.contains('active')) {
    icon.className = "ph ph-x";
  } else {
    icon.className = "ph ph-list";
  }
}

function closeMobileMenu() {
  const links = document.getElementById('navLinks');
  const icon = document.getElementById('menu-icon');
  if (links && icon) {
    links.classList.remove('active');
    icon.className = "ph ph-list";
  }
}

// 3. 가맹 순수익 시뮬레이터 알고리즘 엔진
function calculateROI() {
  const sizeInput = document.getElementById('sim-size');
  const sizeDisplay = document.getElementById('range-val');

  if (!sizeInput || !sizeDisplay) return;

  const size = parseInt(sizeInput.value);
  sizeDisplay.innerText = size;

  const invest = 2000 + size * 240 + size * 90;
  const sLow = size * 220;
  const sHigh = size * 280;
  const nLow = Math.floor(sLow * 0.28);
  const nHigh = Math.floor(sHigh * 0.30);

  function formatMoney(amount) {
    if (amount >= 10000) {
      const eok = Math.floor(amount / 10000);
      const man = amount % 10000;
      return `${eok}억 ${man > 0 ? man + '만' : ''} 원`;
    }
    return `${amount.toLocaleString('ko-KR')}만 원`;
  }

  document.getElementById('res-invest').innerText = '약 ' + formatMoney(invest);
  document.getElementById('res-sales').innerText = `${formatMoney(sLow)} ~ ${formatMoney(sHigh)}`;
  document.getElementById('res-cost').innerText = `약 65~70%`;
  document.getElementById('res-net').innerText = `${formatMoney(nLow)} ~ ${formatMoney(nHigh)} (순수익률 28~30%)`;
}

// 4. 지능형 카운트 업 엔진
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

const initCountUpObserver = () => {
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
};

// 5. 모달 및 폼 제출 핸들링
function openVideoModal() {
  const targetModal = document.getElementById('videoModal');
  if (targetModal) targetModal.classList.add('active');
}

function closeVideoModal() {
  const targetModal = document.getElementById('videoModal');
  if (targetModal) targetModal.classList.remove('active');
}

function handleFormSubmit(event) {
  event.preventDefault();
  const successModal = document.getElementById('successModal');
  if (successModal) successModal.classList.add('active');
}

function closeSuccessModal() {
  const successModal = document.getElementById('successModal');
  const franchiseForm = document.getElementById('franchiseForm');
  if (successModal) successModal.classList.remove('active');
  if (franchiseForm) franchiseForm.reset();
}

document.addEventListener('DOMContentLoaded', () => {
  calculateROI();
  initCountUpObserver();
});