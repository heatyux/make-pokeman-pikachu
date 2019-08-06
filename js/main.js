!function() {
  let duration = 50;
  $('.actions').on('click', 'button', function(e){
    let $button = $(e.currentTarget);
    let speed = $button.attr('data-speed');
    $button.addClass('active')
      .siblings('.active').removeClass('active');
    switch(speed){
      case 'slow':
        duration = 100;
        break;
      case 'normal':
        duration = 50;
        break;
      case 'fast':
        duration = 10;
        break;
    }
  })

  function writeCode(prefix, code, fn) {
    let container = document.querySelector('.code-wrapper>.code');
    let styleTag = document.querySelector('#styleTag');
    let n = 0;
    let timer = setTimeout(function run(){
      n += 1;
      container.innerHTML = code.substring(0, n);
      container.scrollTop = container.scrollHeight;
      styleTag.innerHTML = code.substring(0, n);
      if(n < code.length){
        timer = setTimeout(run, duration);
      }else {
        fn && fn.call();
      }
    }, duration);
  }

  let code = `
  /*
   * 本次展示画一只皮卡丘
   * 让我们开始吧！
   */

   /* 首先画皮卡丘的皮肤 */
  .preview{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FEE433;
  }
  
  .wrapper{
    width: 100%;
    height: 165px;
    position: relative;
  }
  
  /* 接着是画皮卡丘的鼻子部分 */
  .nose{
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 12px;
    border-color: black transparent transparent;
    border-radius: 50%;
    position: absolute;
    top: 28px;
    left: 50%;
    margin-left: -12px;
  }
  
  /* 然后是画皮卡丘的两只眼睛 */
  .eye{
    width: 49px;
    height: 49px;
    background: #2E2E2E;
    border-radius: 50%;
    position: absolute;
    border: 2px solid #000;
  }
  
  /* 以及眼睛里的眼球 */
  .eye::before{
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    background: #FFF;
    position: absolute;
    left: 6px;
    top: -1px;
    border-radius: 50%;
    border: 2px solid #000;
  }
  
  /* 将眼睛放到正确的位置 */
  .eye.left{
    right: 50%;
    margin-right: 90px;
  }
  
  .eye.right{
    left: 50%;
    margin-left: 90px;
  }

  /* 下一步是画皮卡丘的脸腮部分 */  
  .face{
    width: 68px;
    height: 68px;
    background: rgb(255, 0, 0);
    border-radius: 50%;
    position: absolute;
    top: 85px;
    border: 2px solid #000;
  }
  
  /* 将脸腮放到正确位置 */
  .face.left{
    right: 50%;
    margin-right: 126px;
  }
  
  .face.right{
    left: 50%;
    margin-left: 126px;
  }
  
  /* 接下来是画皮卡丘的上嘴唇部位*/
  .upperLip{
    width: 80px;
    height: 25px;
    border: 2px solid black;
    position: absolute;
    top: 50px;
    background: #FEE433;
  }
  
  .upperLip.left{
    right: 50%;
    border-bottom-left-radius: 40px 25px;
    border-top: none;
    border-right: none;
    transform: rotate(-20deg);
  }
  
  .upperLip.right{
    left: 50%;
    border-bottom-right-radius: 40px 25px;
    border-top: none;
    border-left: none;
    transform: rotate(20deg);
  }
  
  /* 然后是画皮卡丘的下嘴唇部位 */
  .lowerLip-wrapper{
    width: 300px;
    height: 110px;
    position: absolute;
    left: 50%;
    bottom: -5px;
    margin-left: -150px;
    overflow: hidden;
  }
  
  .lowerLip{
    width: 300px;
    height: 3500px;
    background: #990513;
    border: 2px solid black;
    border-radius: 200px/2000px;
    position: absolute;
    bottom: 0px;
    overflow: hidden;
  }
  
  /* 最后完成皮卡丘的小舌头 */
  .lowerLip::after{
    content: '';
    display: block;
    width: 100px;
    height: 100px;
    background: #FC4A62;
    position: absolute; 
    bottom: -18px;
    left: 50%;
    margin-left: -50px;
    border-radius: 50%;
  }

  /*
   * 完成，我们得到了一只皮卡丘(pikachu)!
   * 谢谢观看！
  */
  `

  writeCode('', code);
  
}.call()