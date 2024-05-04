const base = document.getElementById('base'); //背景
const short = document.getElementById('short'); // 短針
const long = document.getElementById('long'); // 長針

//針の位置をリセット
function Reset(){
  const options = {
    duration: 10,
    iterations: Infinity,
  }
  const keyframes = [
    {transform: 'rotate(0deg)'},
    {transform: 'rotate(0deg)'}
  ]
  short.animate(keyframes, options);
  long.animate(keyframes, options);
}

//位置を保持してストップ
function Stop(){
  const rotate_short = getImageRotationAngle(short);
  const rotate_long = getImageRotationAngle(long);
  const options = {
    duration: 10,
    iterations: Infinity,
  }
  const keyframes1 = [
    {transform: `rotate(${rotate_short}deg)`},
    {transform: `rotate(${rotate_short}deg)`}
  ]
  const keyframes2 = [
    {transform: `rotate(${rotate_long}deg)`},
    {transform: `rotate(${rotate_long}deg)`}
  ]
  short.animate(keyframes1, options);
  long.animate(keyframes2, options);
}

//低速回転
function LowSpeed(){
  const rotate_short = getImageRotationAngle(short);
  const rotate_long = getImageRotationAngle(long);
  // 画像を時計回りに1回転させる
  short.animate(
    // アニメーションの初めと終わりを表す配列
    [
      { transform: `rotate(${rotate_short}deg)` }, // 開始時の状態
      { transform: `rotate(${rotate_short+360}deg)` } // 終了時の状態（1回転）
    ], 
    // タイミングに関する設定
    {
      duration: 60000, // 再生時間（60秒）
      iterations: Infinity,  // アニメーションの繰り返し回数（ずっと繰り返す）
    },
  );

  // 画像を時計回りに1回転させる
  long.animate(
    // アニメーションの初めと終わりを表す配列
    [
      { transform: `rotate(${rotate_long}deg)` }, // 開始時の状態
      { transform: `rotate(${rotate_long+360}deg)` } // 終了時の状態（1回転）
    ], 
    // タイミングに関する設定
    {
      duration: 5000, // 再生時間（5秒）
      iterations: Infinity,  // アニメーションの繰り返し回数（ずっと繰り返す）
    },
  );
}

//高速回転
function HighSpeed(){
  const rotate_short = getImageRotationAngle(short);
  const rotate_long = getImageRotationAngle(long);
  // 画像を時計回りに1回転させる
  short.animate(
    // アニメーションの初めと終わりを表す配列
    [
      { transform: `rotate(${rotate_short}deg)` }, // 開始時の状態
      { transform: `rotate(${rotate_short+360}deg)` } // 終了時の状態（1回転）
    ], 
    // タイミングに関する設定
    {
      duration: 6000, // 再生時間（6秒）
      iterations: Infinity,  // アニメーションの繰り返し回数（ずっと繰り返す）
    },
  );

  // 画像を時計回りに1回転させる
  long.animate(
    // アニメーションの初めと終わりを表す配列
    [
      { transform: `rotate(${rotate_long}deg)` }, // 開始時の状態
      { transform: `rotate(${rotate_long+360}deg)` } // 終了時の状態（1回転）
    ], 
    // タイミングに関する設定
    {
      duration: 500, // 再生時間（0.5秒）
      iterations: Infinity,  // アニメーションの繰り返し回数（ずっと繰り返す）
    },
  );
}

// 画像の回転角度を取得する関数
function getImageRotationAngle(img) {
  // 画像のスタイルを取得
  const style = window.getComputedStyle(img);
  // transformプロパティを取得
  const transform = style.getPropertyValue('transform');
  // transformプロパティから回転角度を解析
  const values = transform.split('(')[1].split(')')[0].split(',');
  const a = values[0];
  const b = values[1];
  const angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
  // 角度を返す
  return angle;
}

//色を黒に変更
function Black(){
  base.src = 'clock_base2.jpg';
  short.src = 'clock_short2.jpg';
  long.src = 'clock_long2.jpg';
}

//色を白に変更
function White(){
  base.src = 'clock_base.jpg';
  short.src = 'clock_short.jpg';
  long.src = 'clock_long.jpg';
}