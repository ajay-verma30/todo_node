const deleteButton = document.querySelectorAll('.editAction');
deleteButton.forEach((button,i)=>{
    button.addEventListener("click", ()=>{
        const endPoint = `/${button.classList[1]}`
        fetch(endPoint, {
            method: "DELETE"
        })
        window.location.href = '/'
    })
})