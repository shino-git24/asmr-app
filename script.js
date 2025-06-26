//HTMLから操作したい要素を取得
const audioPlayer = document.getElementById('audioPlayer');
const playButton = document.getElementById('playButton');

//再生死体音声ファイルのリストを作成する
const audioFiles = [
    'audio/female_sulafat_01.mp3',
    'audio/male_enceladus_01.mp3',
];

//ランダムに音声を選んで再生を開始する関数
function playRandomAudio(){
    //1.audioFilesリストからランダムに1つ選ぶ
    const randomIndex = Math.floor(Math.random() * audioFiles.length);
    const randomSrc = audioFiles[randomIndex];

    //2.選んだ音声をaudioPlayerにセットして再生
    audioPlayer.src = randomSrc;
    audioPlayer.play();

    //3.ボタンの表示をPAUSEに変える
    playButton.textContent = 'PAUSE';
}

//再生ボタンがクリックされた時の処理
playButton.addEventListener('click', () => {
    //音声が停止中なら
    if (audioPlayer.paused){
        //再生がまだ始まっていない、または曲が終了している状態なら新しい曲をランダムに再生
        if(audioPlayer.currentTime === 0 || audioPlayer.ended){
            playRandomAudio();
        }else{
            //一時停止中なら、続きから再生
            audioPlayer.play();
            playButton.textContent = 'PAUSE';
        }
    }else{
        //再生中なら一時停止
        audioPlayer.pause();
        playButton.textContent = 'PLAY';
    }
});
//一つの音声が再生し終わった時に自動で呼ばれる処理
audioPlayer.addEventListener('ended', () => {
    playRandomAudio();
});