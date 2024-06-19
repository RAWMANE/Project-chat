const inputField = document.querySelector('.input input');
const sendButton = document.querySelector('.button-icon3 button');
const messageContainer = document.querySelector('.messages');

const render = (inputData, messageContainer) => {
  const sendMessage = (inputData, time) => {
    const currentTime = new Date();
    const timeDifference = (currentTime - time) / 1000;
    const hoursDifference = Math.floor(timeDifference / 3600);
    const minutesDifference = Math.floor((timeDifference % 3600) / 60);
    const timeString =
      hoursDifference > 0
       ? `${hoursDifference} часов назад`
        : `${minutesDifference} минут назад`;

    return `<div class="message1">
                <img class="avatar-icon" alt="" src="../../images/childWrapper.png" />

                <div class="content2">
                  <div class="messsage">
                    <div class="name3">
                      <div class="user1">
                        <div class="name1">Борис папа</div>
                        <div class="div7" id="time-display">${timeString}</div>
                      </div>
                      <div class="button-icon">
                        <img
                          class="chevron-down-icon"
                          alt=""
                          src="../../images/Button Icon (1).png"
                        />
                      </div>
                    </div>
                    <div class="geroi-ili-lox">
                      ${inputData}
                    </div>
                  </div>
                  <div class="actions1">
                    <div class="button2">
                      <img
                        class="alert-circle-icon1"
                        alt=""
                        src="../../images/childWrapper.png"
                      />

                      <div class="chat">Regenerate response</div>
                      <img
                        class="alert-circle-icon1"
                        alt=""
                        src=""
                      />
                    </div>
                    <div class="button3">
                      <img
                        class="alert-circle-icon1"
                        alt=""
                        src="./"
                      />

                      <div class="chat">Modify</div>
                      <img
                        class="chevron-down-icon"
                        alt=""
                        src="./"
                      />
                    </div>
                  </div>
                </div>
              </div>`;
  };

  const messageHTML = sendMessage(inputData, new Date());
  const messageElement = document.createElement('div');
  messageElement.innerHTML = messageHTML;
  messageElement.dataset.time = new Date().getTime(); // store the original time
  messageContainer.appendChild(messageElement);

  setInterval(() => {
    const currentTime = new Date();
    const timeDifference = (currentTime - messageElement.dataset.time) / 1000;
    const hoursDifference = Math.floor(timeDifference / 3600);
    const minutesDifference = Math.floor((timeDifference % 3600) / 60);
    const timeString =
      hoursDifference > 0
       ? `${hoursDifference} часов назад`
        : `${minutesDifference} минут назад`;

    messageElement.querySelector('#time-display').innerHTML = timeString;
  }, 60000);
};


sendButton.addEventListener('click', (e) => {
  e.preventDefault();
  const inputData = inputField.value.trim(); 
  if (inputData !== '') { 
    render(inputData, messageContainer)
  }
});