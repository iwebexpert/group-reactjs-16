if('serviceWorker' in navigator){
  window.addEventListener('load', function(){
    navigator.serviceWorker.register('sw.js').then(function(){
      console.log('serviceWorker was register!');

      Notification.requestPermission(function(result){
        if(result === 'granted'){
          navigator.serviceWorker.ready.then(function(registration){
            registration.showNotification('showNotification works!');
          });
        }
      });

    }, function(err){
      console.log('serviceWorker failed!', err);
    });
  })
}

//Отслеживание установок приложения
window.addEventListener('appinstalled', (event) => {
  fetch('http://localhost:5000/install/').then( () =>  console.log('Приложение было установлено!') );
});

window.addEventListener('beforeinstallprompt', (event) => {
  console.log('Приложение еще не установлено!');
});