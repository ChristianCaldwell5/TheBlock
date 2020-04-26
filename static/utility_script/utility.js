//remove all classes from an element
function clearClass(x){
    var classList = x.classList;
    while (classList.length > 0) {
        classList.remove(classList.item(0));
     }
}
//open TheBlock account modal
export function openModal(){
    var modal = document.getElementById('modal-container');
    modal.style.display = 'block';
}
//close TheBlock account modal
export function closeModal(){
    var modal = document.getElementById('modal-container');
    modal.style.display = 'none';
    //ensure error goes away
    var tb_error = document.getElementById('tb-error-message');
    tb_error.style.display = 'none';
    //ensure error goes away
    var tb_error_pass = document.getElementById('tb-error-message-pass');
    tb_error_pass.style.display = 'none';
    //reset account fields
    document.getElementById('countryId').value = '';
    document.getElementById('stateId').value = '';
    document.getElementById('cityId').value = '';
    document.getElementById('age-field').value = '';
}
export function pTab(){
    var p_content = document.getElementById('tab-content-2');
    var e_content = document.getElementById('tab-content-1');
    p_content.style.display = 'block';
    e_content.style.display = 'none';
    //change tab styling
    var p_tab = document.getElementById('password-tab');
    var e_tab = document.getElementById('edit-tab');
    //change p_tab to selected
    p_tab.style.borderLeft = 'none';
    p_tab.style.borderBottom = 'none';
    p_tab.style.borderRadius = 'none';
    p_tab.style.backgroundColor = '#fefefe';
    //disable e_tab
    e_tab.style.borderRight = '1px solid black';
    e_tab.style.borderBottom = '1px solid black';
    e_tab.style.borderRadius = '0 0 15px 0';
    e_tab.style.backgroundColor = 'rgba(0,0,0,0.1)';
    //ensure error goes away
    var tb_error = document.getElementById('tb-error-message');
    tb_error.style.display = 'none';
    //reset account fields
    document.getElementById('countryId').value = '';
    document.getElementById('stateId').value = '';
    document.getElementById('cityId').value = '';
    document.getElementById('age-field').value = '';
}
export function eTab(){
    var p_content = document.getElementById('tab-content-2');
    var e_content = document.getElementById('tab-content-1');
    p_content.style.display = 'none';
    e_content.style.display = 'block';
    //change tab styling
    var p_tab = document.getElementById('password-tab');
    var e_tab = document.getElementById('edit-tab');
    //change p_tab to selected
    p_tab.style.borderLeft = '1px solid black';
    p_tab.style.borderBottom = '1px solid black';
    p_tab.style.borderRadius = '0 0 0 15px';
    p_tab.style.backgroundColor = 'rgba(0,0,0,0.1)';
    //disable e_tab
    e_tab.style.borderRight = 'none';
    e_tab.style.borderBottom = 'none';
    e_tab.style.borderRadius = 'none';
    e_tab.style.backgroundColor = '#fefefe';
    //ensure error goes away
    var tb_error_pass = document.getElementById('tb-error-message-pass');
    tb_error_pass.style.display = 'none';
    //reset password fields
    document.getElementById('old-pass').value = '';
    document.getElementById('new-pass').value = '';
    document.getElementById('password-confirm').value = '';
}
