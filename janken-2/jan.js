
// じゃんけんの手を定義する配列
const hands = ["グー", "チョキ", "パー"];

// カウント変数の初期化
let winCount = 0;
let loseCount = 0;
let drawCount = 0;

// じゃんけんの勝敗を判定する関数
function judge(userHand, aiHand) {
  // 引き分けの場合
  if (userHand === aiHand) {
    drawCount++;
    return "あいこです。";
  }
  // ユーザーが勝つ場合
  if (
    (userHand === "グー" && aiHand === "チョキ") ||
    (userHand === "チョキ" && aiHand === "パー") ||
    (userHand === "パー" && aiHand === "グー")
  ) {
    winCount++;
    return "あなたの勝ちです！";
  }
  // ユーザーが負ける場合
  loseCount++;
  return "あなたの負けです…";
}

// 画像の読み込みが完了した後にボタン要素を表示する
window.addEventListener("DOMContentLoaded", function () {
  // ボタン要素を取得する
  const buttons = document.getElementById("buttons");
  const rock = document.getElementById("rock");
  const scissors = document.getElementById("scissors");
  const paper = document.getElementById("paper");

  // 画像のファイル名を設定する
  rock.src = "jan0.jpg";
  scissors.src = "jan1.jpg";
  paper.src = "jan2.jpg";

  // ボタン要素を表示する
  buttons.style.display = "block";
});

// 結果表示要素とカウント表示要素を取得する
const result = document.getElementById("result");
const countDisplay = document.getElementById("count-display");

// ボタンがクリックされたときの処理
buttons.addEventListener("click", function (event) {
  // ユーザーの手を取得する
  const userHand = event.target.getAttribute("data-hand");

  // AIの手をランダムに選択する
  const aiHand = hands[Math.floor(Math.random() * hands.length)];

  // じゃんけんの結果を判定する
  const message = judge(userHand, aiHand);

  // 結果を表示する
  result.textContent = `あなたは${userHand}、私は${aiHand}。${message}`;

  // カウントを更新して表示する
  countDisplay.innerHTML = `
    <span class="count-label">勝ち:</span>
    <span class="count-value">${winCount}</span>
    <span class="count-label">負け:</span>
    <span class="count-value">${loseCount}</span>
    <span class="count-label">引き分け:</span>
    <span class="count-value">${drawCount}</span>
  `;
});