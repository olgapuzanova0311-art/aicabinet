// Простое состояние
let userProfile = null;

// Открытие/закрытие онбординга
function openOnboardingIfNeeded() {
  const modal = document.getElementById('onboardingModal');
  if (!modal) return;

  const saved = localStorage.getItem('ai_cabinet_onboarding_v1');
  if (!saved) {
    modal.classList.add('modal-backdrop-visible');
  } else {
    try {
      userProfile = JSON.parse(saved);
    } catch {
      userProfile = null;
      modal.classList.add('modal-backdrop-visible');
    }
  }
}

function initOnboarding() {
  const form = document.getElementById('onboardingForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    userProfile = {
      businessType: fd.get('businessType') || null,
      niche: fd.get('niche') || '',
      revenue: Number(fd.get('revenue') || 0) || 0,
      goal: fd.get('goal') || null,
    };
    localStorage.setItem(
      'ai_cabinet_onboarding_v1',
      JSON.stringify(userProfile)
    );
    const modal = document.getElementById('onboardingModal');
    if (modal) modal.classList.remove('modal-backdrop-visible');
  });
}

// Навигация по экранам
function switchScreen(screen) {
  document
    .querySelectorAll('.screen')
    .forEach((s) => s.classList.remove('screen-active'));
  const target = document.getElementById(`screen-${screen}`);
  if (target) target.classList.add('screen-active');

  document
    .querySelectorAll('.nav-item')
    .forEach((n) => n.classList.remove('nav-item-active'));
  document
    .querySelectorAll(`.nav-item[data-screen="${screen}"]`)
    .forEach((n) => n.classList.add('nav-item-active'));
}

function initNav() {
  document.querySelectorAll('.nav-item').forEach((btn) => {
    btn.addEventListener('click', () => {
      const screen = btn.getAttribute('data-screen');
      if (screen) switchScreen(screen);
    });
  });

  document.querySelectorAll('[data-screen-target]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const screen = btn.getAttribute('data-screen-target');
      if (screen) switchScreen(screen);
    });
  });
}

// PRO‑модалка
function initProModal() {
  const proBtn = document.getElementById('proBtn');
  const proModal = document.getElementById('proModal');
  const proCloseBtn = document.getElementById('proCloseBtn');
  const proEnrollBtn = document.getElementById('proEnrollBtn');

  if (proBtn && proModal) {
    proBtn.addEventListener('click', () => {
      proModal.classList.add('modal-backdrop-visible');
    });
  }
  if (proCloseBtn && proModal) {
    proCloseBtn.addEventListener('click', () => {
      proModal.classList.remove('modal-backdrop-visible');
    });
  }
  if (proEnrollBtn && proModal) {
    proEnrollBtn.addEventListener('click', () => {
      alert('Заявка на PRO‑режим отправлена (заглушка).');
      proModal.classList.remove('modal-backdrop-visible');
    });
  }
}

// Тост‑мотивация
function initToast() {
  const toast = document.getElementById('motivationToast');
  const closeBtn = document.getElementById('toastCloseBtn');
  if (!toast || !closeBtn) return;

  // Покажем тост через пару секунд после загрузки
  setTimeout(() => {
    toast.classList.add('toast-visible');
  }, 3000);

  closeBtn.addEventListener('click', () => {
    toast.classList.remove('toast-visible');
  });
}

// Статистика (пока просто алерт)
function initStats() {
  const btn = document.getElementById('statsBtn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    alert('Статистика будет здесь (заглушка).');
  });
}

// Telegram WebApp (если открыто из бота)
function initTelegram() {
  if (!window.Telegram || !window.Telegram.WebApp) return;
  try {
    const tg = window.Telegram.WebApp;
    tg.ready();
    tg.expand();
  } catch {
    // ignore
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initTelegram();
  initNav();
  initOnboarding();
  openOnboardingIfNeeded();
  initProModal();
  initToast();
  initStats();
});
