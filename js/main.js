'use strict';

// スライドショー 参考：https://dubdesign.net/javascript/settimeout-imgchange/
const img = ["img/top-image01.jpeg", "img/top-image03.jpeg","img/top-image04.jpeg"];
let count = -1;
picChange();
function picChange() {
  count++;
  if (count == img.length) count = 0;
  //画像選択
  changePic.src = img[count];
  //秒数の指定
  setTimeout("picChange()", 4000);
}

// ハンバーガーメニュー
{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
}

// モーダルウィンドウ
{
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const modal = document.getElementById('modal');
  const mask = document.getElementById('mask');

  open.addEventListener('click', () => {
    modal.classList.remove('hidden');
    mask.classList.remove('hidden');
  });

  close.addEventListener('click', () => {
    modal.classList.add('hidden');
    mask.classList.add('hidden');
  });

  mask.addEventListener('click', () => {
    // modal.classList.add('hidden');
    // mask.classList.add('hidden');
    close.click();
  });
}