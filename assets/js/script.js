const likeBtn = document.getElementById('likeBtn');
  const heartIcon = document.getElementById('heartIcon');

  console.log("Hello");
  likeBtn.addEventListener('click', () => {
    likeBtn.classList.toggle('liked');
    if (likeBtn.classList.contains('liked')) {
      heartIcon.classList.remove('fa-regular');
      heartIcon.classList.add('fa-solid');
    } else {
      heartIcon.classList.remove('fa-solid');
      heartIcon.classList.add('fa-regular');
    }
  });