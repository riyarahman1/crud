console.log('hello world detail')


const postbox = document.getElementById('post-box')
const alertBox = document.getElementById('alert-box')

const backbtn = document.getElementById('back-btn')
const updatebtn = document.getElementById('update-btn')
const deletebtn = document.getElementById('delete-btn')

const url = window.location.href + "data/"

const updateUrl = window.location.href + "update/"
const deleteUrl = window.location.href + "delete/"

const csrf = document.getElementsByName('csrfmiddlewaretoken')

const updateForm =document.getElementById('update-form')
const deleteForm =document.getElementById('delete-form')

const spinnerBox = document.getElementById('spinner-box')

const titleinput = document.getElementById('id_title')
const bodyinput = document.getElementById('id_body')



backbtn.addEventListener('click', ()=>{
    history.back()
})



$.ajax({
    type: 'GET',
    url: url,
    success: function(response){
        console.log(response)
        const data = response.data


        if (data.logged_in !== data.author){
            console.log('different')
        } else{
            console.log('the same')
            updatebtn.classList.remove('not-visible')
            deletebtn.classList.remove('not-visible')

        }

        const titleEl = document.createElement('h3')
        titleEl.setAttribute('class', 'mt-3')
        titleEl.setAttribute('id', 'title')



        const bodyEl = document.createElement('p')
        bodyEl.setAttribute('class', 'mt-1')
        bodyEl.setAttribute('id', 'body')


        titleEl.textContent = data.title
        bodyEl.textContent = data.body
        

        postbox.appendChild(titleEl)
        postbox.appendChild(bodyEl)


        titleinput.value =  data.title
        bodyinput.value = data.body

        spinnerBox.classList.add('not-visible')
    },
    error: function(error){
        console.log(error)
    }
})



updateForm.addEventListener('submit',e=>{
    e.preventDefault() 


    const title = document.getElementById('title')
    const body = document.getElementById('body')


    $.ajax({
        type: 'POST',
        url : updateUrl,
        data: {
            'csrfmiddlewaretoken': csrf[0].value,
            'title': titleinput.value,
            'body': bodyinput.value,

        },
        success: function(response){
            console.log(response)
            // $('#updateModal').modal('hide')
            handleAlerts('success', 'posts has been updated')
            title.textContent = response.title
            body.textContent = response.body
        },
        error: function(error){
            console.log(error)
        }

    })

})


deleteForm.addEventListener('submit', e => {
    e.preventDefault();

    $.ajax({
        type: 'POST',
        url: deleteUrl,
        data: {
            'csrfmiddlewaretoken': csrf[0].value,
        },
        success: function(response) {
            window.location.href = window.location.origin
            localStorage.setItem('title', titleinput.value)
        },
        error: function(error) {
            console.log(error);
        }
    });
});
