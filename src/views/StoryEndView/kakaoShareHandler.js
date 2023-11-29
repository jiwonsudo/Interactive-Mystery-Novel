const shareKakao = (title, text) => { // url이 id값에 따라 변경되기 때문에 route를 인자값으로 받아줌
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init(process.env.REACT_APP_KAKAO_SHARE_KEY);
    }

    kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: title,
        description: text,
        imageUrl: "/Interactive-Mystery-Novel/main_logo.png",
        link: {
          mobileWebUrl: 'https://jiwonsudo.github.io/Interactive-Mystery-Novel',
          webUrl: 'https://jiwonsudo.github.io/Interactive-Mystery-Novel/'
        }
      },
      buttons: [
        {
          title: title,
          link: {
            mobileWebUrl: 'https://jiwonsudo.github.io/Interactive-Mystery-Novel',
            webUrl: 'https://jiwonsudo.github.io/Interactive-Mystery-Novel'
          }
        }
      ]
    });
  }
};

export { shareKakao };