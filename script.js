document.addEventListener('DOMContentLoaded', function () {
    const list = document.querySelector('#movie-list ul');
    const forms = document.forms;
    const addForm = forms['add-movie'];
    const searchform = forms['search-movies'];

    // delete movies
    list.addEventListener("click", (e) => {
        if (e.target.className == "delete material-symbols-outlined") {
            const li = e.target.parentElement;
            li.parentNode.removeChild(li);
            swal({
                title: "Success",
                text: "Movie deleted successfully!",
                icon: "success",
                button: "OK",
                timer: 1000,
            });
        }
    })

    // add movies
    addForm.addEventListener('submit', (e) => {
        e.preventDefault();
        //check if input is empty
        if (addForm.querySelector('input[type="text"]').value === '') {
            swal({
                title: "Error",
                text: "Please enter a movie name!",
                icon: "error",
                button: "EXIT",
            });
            return;
        }
        const value = addForm.querySelector('input[type="text"]').value;
        const li = document.createElement('li');
        const movieName = document.createElement('span');
        const deleteBtn = document.createElement('span');

        //add text content
        movieName.textContent = value;
        deleteBtn.textContent = 'delete';

        //add classes
        movieName.classList.add('name');
        deleteBtn.classList.add('delete', 'material-symbols-outlined');

        //append to DOM
        li.appendChild(movieName);
        li.appendChild(deleteBtn);
        list.appendChild(li);

        //use swal to show success message
        swal({
            title: "Success",
            text: "Movie added successfully!",
            icon: "success",
            button: "OK",
        });

        //clear input
        addForm.querySelector('input[type="text"]').value = '';
    })
});
