// // Custom JS logic
// fetch('section.html')
//       .then(response => response.text())
//       .then(data => {
//         document.getElementById('section-placeholder').innerHTML = data;
//       })
//       .catch(error => console.error('Error loading the section:', error));

// document.addEventListener('DOMContentLoaded', function() {
// var buttons = document.querySelectorAll('.dataset-btn');
// var video1 = document.getElementById('video1');
// var video2 = document.getElementById('video2');

// // 定义每个Demo的视频文件路径
// var videoPairs = {
//     'd1': {
//     'video1': 'static/videos/adaptiveCAV_identity_276.mp4',
//     'video2': 'static/videos/adaptiveCAV_276.mp4'
//     },
//     'd2': {
//     'video1': 'static/videos/adaptiveCAV_identity_453.mp4',
//     'video2': 'static/videos/adaptiveCAV_453.mp4'
//     },
//     'd3': {
//     'video1': 'static/videos/adaptiveCAV_identity_660.mp4',
//     'video2': 'static/videos/adaptiveCAV_660.mp4'
//     },
//     'd4': {
//     'video1': 'static/videos/adaptiveCAV_identity_805.mp4',
//     'video2': 'static/videos/adaptiveCAV_805.mp4'
//     }
// };

// buttons.forEach(function(button) {
//     button.addEventListener('click', function() {
//     var dataset = this.getAttribute('data-dataset');

//     // 更新视频源
//     video1.querySelector('source').src = videoPairs[dataset]['video1'];
//     video2.querySelector('source').src = videoPairs[dataset]['video2'];

//     // 重新加载和播放视频
//     video1.load();
//     video1.play();
//     video2.load();
//     video2.play();

//     // 更新按钮的活动状态
//     buttons.forEach(function(btn) {
//         btn.classList.remove('active');
//     });
//     this.classList.add('active');
//     });
// });
// });



// function initVideoSwitching() {
//     var buttons = document.querySelectorAll('.dataset-btn');
//     var video1 = document.getElementById('video1');
//     var video2 = document.getElementById('video2');
//     var video3 = document.getElementById('video3');
//     var video4 = document.getElementById('video4');

//     // // 检查元素是否存在
//     // if (!video1 || !video2 || buttons.length === 0) {
//     //   console.error('视频元素或按钮未找到，无法初始化视频切换功能。');
//     //   return;
//     // }
  
//     // // 定义每个Demo的视频路径
//     // var videoPairs = {
//     //   'd1': {
//     //     'video1': 'static/videos/adaptiveCAV_identity_276.mp4',
//     //     'video2': 'static/videos/adaptiveCAV_276.mp4'
//     //   },
//     //   'd2': {
//     //     'video1': 'static/videos/adaptiveCAV_identity_00536.mp4',
//     //     'video2': 'static/videos/adaptiveCAV_00536.mp4'
//     //   },
//     //   'd3': {
//     //     'video1': 'static/videos/adaptiveCAV_identity_01589.mp4',
//     //     'video2': 'static/videos/adaptiveCAV_01589.mp4'
//     //   },
//     //   'd4': {
//     //     'video1': 'static/videos/adaptiveCAV_identity_01737.mp4',
//     //     'video2': 'static/videos/adaptiveCAV_01737.mp4'
//     //   }
//     // };
//       // 定义每个Demo的视频路径
//       var videoPairs = {
//         'd1': {
//           'video1': 'static/videos/adaptiveCAV_identity_276.mp4',
//           'video2': 'static/videos/adaptiveCAV_276.mp4',
//           'video3': 'static/videos/adaptiveCAV_identity_00536.mp4',
//           'video4': 'static/videos/adaptiveCAV_00536.mp4'
//         },
//       };

//             // 更新视频源
//       video1.querySelector('source').src = videoPairs[dataset]['video1'];
//       video2.querySelector('source').src = videoPairs[dataset]['video2'];
//       video3.querySelector('source').src = videoPairs[dataset]['video3'];
//       video4.querySelector('source').src = videoPairs[dataset]['video4'];

//       // 重新加载和播放视频
//       video1.load();
//       video1.play();
//       video2.load();
//       video2.play();
//       video3.load();
//       video3.play();
//       video4.load();
//       video4.play();

    // buttons.forEach(function(button) {
    //   button.addEventListener('click', function() {
    //     var dataset = this.getAttribute('data-dataset');
  
    //     // 更新视频源
    //     video1.querySelector('source').src = videoPairs[dataset]['video1'];
    //     video2.querySelector('source').src = videoPairs[dataset]['video2'];
  
    //     // 重新加载和播放视频
    //     video1.load();
    //     video1.play();
    //     video2.load();
    //     video2.play();
  
    //     // 更新按钮的激活状态
    //     buttons.forEach(function(btn) {
    //       btn.classList.remove('active');
    //     });
    //     this.classList.add('active');
    //   });
    // });
  // }
  
  // 加载section.html并插入到占位符中
  document.addEventListener('DOMContentLoaded', function() {
    fetch('section.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('section-placeholder').innerHTML = data;
  
        // 在内容加载并插入后，初始化视频切换功能
        // initVideoSwitching();
      })
      .catch(error => console.error('Error loading the section:', error));
  });

  