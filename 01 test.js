//trigger
$('.trigger').click(function(){
    $(this).toggleClass('active')
    $('.anniversarr').toggleClass('active')
    $('.modal-gnb').fadeToggle('fast')
})

// Audio Controls
let btn = document.getElementById('myAudio')
bgm.volume = 0.1 // Audio Volume : 0 ~ 1