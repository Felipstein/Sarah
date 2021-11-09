document.addEventListener('click', ( { target } ) => {

    let parentDiv;
    
    try {
        parentDiv = target.parentNode.parentNode.parentNode;
    } catch(err) {
        return;
    }

    if(parentDiv && parentDiv.classList.contains('nav')) {   
    
        const parentLi = target.parentNode;

        if(!parentLi.id){
            document.getElementById('selected').id = '';
            parentLi.id = 'selected';
        }

    }

});