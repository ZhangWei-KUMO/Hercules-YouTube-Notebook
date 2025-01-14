import { ytVideoEl } from '../component';
// eslint-disable-next-line import/no-cycle
import { scrollIntoCurrTimeDiv } from '../action';

const evtListenerOnTimestamp = () => {
  const timestamps = Array.from(document.getElementsByClassName('hercules_transcript_text_timestamp'));
  timestamps.forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.target === el) { // 检查点击的是否为时间戳元素本身
        const starttime = el.getAttribute('data-start-time');
        ytVideoEl.currentTime = starttime;
        ytVideoEl.play();
        scrollIntoCurrTimeDiv();
      }
    });
  });
};

export default evtListenerOnTimestamp;
