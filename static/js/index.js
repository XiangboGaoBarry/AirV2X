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
  
        // 在内容加载并插入后，初始化视频功能
        initVideoHandling();
      })
      .catch(error => console.error('Error loading the section:', error));
  });

  // GIF点击播放视频功能
  function initVideoHandling() {
    const videoContainers = document.querySelectorAll('.video-demo-container');
    
    videoContainers.forEach(container => {
      container.addEventListener('click', function() {
        const videoSrc = this.getAttribute('data-video');
        if (videoSrc) {
          openVideoModal(videoSrc);
        }
      });
    });
  }

  // 创建视频模态框
  function openVideoModal(videoSrc) {
    // 创建模态框
    const modal = document.createElement('div');
    modal.className = 'modal is-active video-modal';
    modal.innerHTML = `
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="video-wrapper">
          <video controls autoplay preload="metadata" playsinline>
            <source src="${videoSrc}" type="video/mp4">
            <p>Your browser does not support the video tag. <a href="${videoSrc}" target="_blank">Download the video</a> to view it.</p>
          </video>
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close"></button>
    `;

    // 添加到页面
    document.body.appendChild(modal);

    // 添加关闭事件
    const closeButton = modal.querySelector('.modal-close');
    const modalBackground = modal.querySelector('.modal-background');
    
    function closeModal() {
      const video = modal.querySelector('video');
      if (video) {
        video.pause();
      }
      document.body.removeChild(modal);
    }

    closeButton.addEventListener('click', closeModal);
    modalBackground.addEventListener('click', closeModal);
    
    // ESC键关闭
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && document.body.contains(modal)) {
        closeModal();
      }
    });
  }

  