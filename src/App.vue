<template>
  <div class="page">
    <!-- 달 -->
    <div class="moon">
      <div class="bunny">
        <div class="ear"></div>
        <div class="ear right"></div>
        <div class="body"></div>
        <div class="mallet"></div>
      </div>
    </div>

    <!-- 인사말 -->
    <h1>🌕 풍성한 한가위, 마음 가득 복을 빚어요 🍡</h1>
    <p>밝은 보름달 아래 토끼가 복을 빚는 중이에요.<br />복주머니를 눌러 덕담을 점쳐보세요 🎁</p>

    <!-- 복주머니 버튼 -->
    <div class="pouch" @click="revealFortune">복</div>

    <!-- 덕담 -->
    <transition name="fade">
      <div v-if="showFortune" class="fortune">
        {{ fortuneMessage }}
      </div>
    </transition>

    <!-- 별 배경 -->
    <div class="stars">
      <div v-for="n in 30" :key="n" class="star" :style="randomStar()"></div>
    </div>

    <footer>© 2025 Soo Bin’s Chuseok Fortune Page 🌕</footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const fortunes = [
  '🌾 보름달처럼 풍성한 복이 당신에게 가득하길!',
  '🍡 가족과 웃음이 가득한 한가위 되세요.',
  '🐇 행복이 쫀득쫀득하게 붙을 거예요!',
  '🌕 이번 추석엔 당신의 소원이 환하게 이뤄질 거예요.',
  '💫 평안과 사랑이 함께하는 명절 되세요!',
]

const showFortune = ref(false)
const fortuneMessage = ref('')

const revealFortune = () => {
  showFortune.value = true
  fortuneMessage.value = fortunes[Math.floor(Math.random() * fortunes.length)]
}

const randomStar = () => {
  const top = Math.random() * 100
  const left = Math.random() * 100
  const size = Math.random() * 2 + 1
  const delay = Math.random() * 3
  return `top:${top}%; left:${left}%; width:${size}px; height:${size}px; animation-delay:${delay}s;`
}
</script>

<style scoped>
.page {
  position: relative;
  min-height: 100vh;
  background: linear-gradient(to bottom, #0b0b1a, #1f1839, #352a55);
  color: white;
  text-align: center;
  overflow: hidden;
  font-family: 'Pretendard', 'Noto Sans KR', sans-serif;
}

/* 🌕 달 */
.moon {
  width: 250px;
  height: 250px;
  background: radial-gradient(circle at 30% 30%, #fff6b1, #f4d93e, #e9b90f);
  border-radius: 50%;
  margin: 80px auto 40px;
  box-shadow: 0 0 80px 30px rgba(255, 230, 120, 0.4);
  animation: glow 3s ease-in-out infinite;
  position: relative;
}

/* 🐇 토끼 */
.bunny {
  position: absolute;
  bottom: 40px;
  left: 100px;
  animation: bounce 1s ease-in-out infinite;
}
.ear,
.ear.right,
.body {
  position: absolute;
  background: white;
  border-radius: 50%;
}
.ear {
  width: 20px;
  height: 50px;
  left: 25px;
  top: -10px;
  transform: rotate(-15deg);
}
.ear.right {
  width: 20px;
  height: 50px;
  left: 40px;
  top: -8px;
  transform: rotate(15deg);
}
.body {
  width: 50px;
  height: 40px;
  top: 25px;
  left: 20px;
}
.mallet {
  position: absolute;
  width: 8px;
  height: 50px;
  background: #9a6a2b;
  left: 65px;
  top: -10px;
  border-radius: 4px;
  transform-origin: bottom center;
  animation: hit 0.8s ease-in-out infinite;
}

/* 🧧 복주머니 */
.pouch {
  width: 100px;
  height: 100px;
  background: linear-gradient(to bottom, #ffb347, #ff5050);
  margin: 20px auto;
  border-radius: 50% 50% 40% 40%;
  color: #fff;
  font-weight: bold;
  line-height: 100px;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 5px 20px rgba(255, 180, 100, 0.6);
  animation: float 2s ease-in-out infinite;
}
.pouch:hover {
  transform: scale(1.05);
}

/* ✨ 덕담 */
.fortune {
  margin-top: 30px;
  font-size: 1.2rem;
  padding: 15px 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 15px;
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
}

/* 🌟 별 */
.stars .star {
  position: absolute;
  background: white;
  border-radius: 50%;
  animation: twinkle 2s infinite ease-in-out;
}

/* 🌕 애니메이션 */
@keyframes glow {
  0%, 100% {
    box-shadow: 0 0 50px 15px rgba(255, 240, 150, 0.3);
  }
  50% {
    box-shadow: 0 0 90px 30px rgba(255, 255, 180, 0.6);
  }
}
@keyframes hit {
  0%, 100% {
    transform: rotate(25deg);
  }
  50% {
    transform: rotate(-15deg);
  }
}
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
@keyframes twinkle {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

footer {
  margin-top: 60px;
  color: #ccc;
  font-size: 0.9rem;
}
</style>
