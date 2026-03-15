// عند تحميل الصفحة
window.addEventListener('DOMContentLoaded', () => {
  const storedEmail = localStorage.getItem('clientEmail');
  const emailFormSection = document.getElementById('emailFormSection');
  const downloadSection = document.getElementById('downloadSection');

  if (storedEmail) {
    // إذا البريد موجود سابقًا → إظهار رابط التحميل مباشرة
    emailFormSection.style.display = 'none';
    downloadSection.style.display = 'flex';
  }
});

// عند الضغط على زر التنزيل
document.getElementById('downloadBtn').addEventListener('click', () => {
  const storedEmail = localStorage.getItem('clientEmail');
  const emailFormSection = document.getElementById('emailFormSection');
  const downloadSection = document.getElementById('downloadSection');

  if (!storedEmail) {
    // إذا البريد غير موجود → إظهار نموذج البريد
    emailFormSection.style.display = 'flex';
  } else {
    // إذا البريد موجود → إظهار التحميل مباشرة
    downloadSection.style.display = 'flex';
  }
});

// عند إرسال نموذج البريد
document.getElementById('emailForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const emailInput = document.getElementById('emailInput').value;

  // حفظ البريد في localStorage
  localStorage.setItem('clientEmail', emailInput);

  // إظهار التحميل وإخفاء النموذج
  document.getElementById('emailFormSection').style.display = 'none';
  document.getElementById('downloadSection').style.display = 'flex';
});