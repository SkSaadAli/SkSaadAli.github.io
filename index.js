const shareButton = document.querySelector('.share-button');

shareButton.addEventListener('click', event => {
  if (navigator.share) { 
   navigator.share({
      title: 'Shaikh Saad Ali',
      url: 'https://sksaadali.github.io'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
    .catch(console.error);
    } else {
        return;
    }
});
