const shareKakao = (title, text) => {
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
        imageUrl: `${process.env.PUBLIC_URL}/main_logo.png`,
        link: {
          mobileWebUrl: 'https://jiwonsudo.github.io/Interactive-Novel-Webapp',
          webUrl: 'https://jiwonsudo.github.io/Interactive-Novel-Webapp'
        }
      },
      buttons: [
        {
          title: title,
          link: {
            mobileWebUrl: 'https://jiwonsudo.github.io/Interactive-Novel-Webapp',
            webUrl: 'https://jiwonsudo.github.io/Interactive-Novel-Webapp'
          }
        }
      ]
    });
  }
};

export { shareKakao };