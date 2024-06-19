const profile = document.querySelector('.user2')

console.log(profile)
profile.addEventListener('click', (e) => {
  e.preventDefault()
  const form = document.createElement('form')
  form.innerHTML = `
    <div class="modal-body">
      <div class="form-group">
        <label for="groupName">Group Name:</label>
        <input type="text" id="groupName" class="form-control" value="Борис папа">
      </div>
      <div class="form-group">
        <label for="avatarUrl">Avatar URL:</label>
        <input type="text" id="avatarUrl" class="form-control" value="../../images/childWrapper.png">
      </div>
    </div>
    <div class="modal-footer">
      <button type="submit" class="btn btn-primary">Save Changes</button>
      <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
    </div>
  `
  const modalBody = document.querySelector('.modal-body')
  modalBody.appendChild(form)

  bootstrap.Modal.getInstance(modal).show();

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const groupName = document.getElementById('groupName').value
    const avatarUrl = document.getElementById('avatarUrl').value

    document.querySelector('.name1').textContent = groupName
    document.querySelector('.avatar-icon').src = avatarUrl

    bootstrap.Modal.getInstance(modal).hide()
  })
})